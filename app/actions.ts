"use server";

import { Resend, type Attachment } from "resend";
import { landingData } from "@/data/landing";

export type LeadActionState = {
  ok: boolean;
  message: string;
};

const MAX_ATTACHMENT_SIZE = 15 * 1024 * 1024;
const allowedAttachmentExtensions = new Set(["pdf", "xlsx", "xls", "doc", "docx"]);

function getField(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getLeadText(payload: Record<string, string>) {
  return [
    "Новая заявка на расчет комплектации STURM",
    "",
    `Имя: ${payload.name}`,
    `Компания: ${payload.company || "не указана"}`,
    `Телефон: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Тип объекта: ${payload.objectType}`,
    `Город: ${payload.city || "не указан"}`,
    `Комментарий: ${payload.comment || "не указан"}`,
    `Файл: ${payload.fileName || "не приложен"}`,
  ].join("\n");
}

function getLeadHtml(payload: Record<string, string>) {
  const rows = [
    ["Имя", payload.name],
    ["Компания", payload.company || "не указана"],
    ["Телефон", payload.phone],
    ["Email", payload.email],
    ["Тип объекта", payload.objectType],
    ["Город", payload.city || "не указан"],
    ["Комментарий", payload.comment || "не указан"],
    ["Файл", payload.fileName || "не приложен"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #1f1f1f; line-height: 1.5;">
      <h1 style="font-size: 22px; margin: 0 0 18px;">Новая заявка на расчет комплектации STURM</h1>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #e5e0d8; padding: 10px 12px; width: 180px; color: #6f6f6f;">${escapeHtml(label)}</td>
                <td style="border: 1px solid #e5e0d8; padding: 10px 12px;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

async function getAttachment(formData: FormData): Promise<Attachment | null> {
  const file = formData.get("projectFile");

  if (!(file instanceof File) || file.size === 0) {
    return null;
  }

  if (file.size > MAX_ATTACHMENT_SIZE) {
    throw new Error("Файл слишком большой. Максимальный размер файла — 15 МБ.");
  }

  const filename = file.name.replaceAll("/", "_").replaceAll("\\", "_");
  const extension = filename.split(".").pop()?.toLowerCase() ?? "";

  if (!allowedAttachmentExtensions.has(extension)) {
    throw new Error(landingData.form.validation.fileType);
  }

  const content = Buffer.from(await file.arrayBuffer()).toString("base64");

  return {
    content,
    filename,
    contentType: file.type || undefined,
  };
}

export async function submitLeadAction(formData: FormData): Promise<LeadActionState> {
  const payload = {
    name: getField(formData, "name"),
    company: getField(formData, "company"),
    phone: getField(formData, "phone"),
    email: getField(formData, "email"),
    objectType: getField(formData, "objectType"),
    city: getField(formData, "city"),
    comment: getField(formData, "comment"),
    fileName: formData.get("projectFile") instanceof File ? (formData.get("projectFile") as File).name : "",
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL ?? landingData.contacts.email;

  if (!resendApiKey || !from) {
    console.error("Resend is not configured. Required env: RESEND_API_KEY, RESEND_FROM_EMAIL.");

    return {
      ok: false,
      message: "Отправка заявки не настроена. Укажите RESEND_API_KEY и RESEND_FROM_EMAIL.",
    };
  }

  try {
    const attachment = await getAttachment(formData);
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email || undefined,
      subject: `Заявка на расчет комплектации STURM${payload.company ? ` — ${payload.company}` : ""}`,
      text: getLeadText(payload),
      html: getLeadHtml(payload),
      attachments: attachment ? [attachment] : undefined,
    });

    if (error) {
      console.error("Resend lead email error:", error);

      return {
        ok: false,
        message: "Не удалось отправить заявку. Попробуйте еще раз или свяжитесь с офисом комплектации.",
      };
    }
  } catch (error) {
    console.error("Lead submit error:", error);

    return {
      ok: false,
      message: error instanceof Error ? error.message : "Не удалось отправить заявку.",
    };
  }

  // TODO: интеграция с CRM.
  // TODO: защита от спама.

  return {
    ok: true,
    message: landingData.form.successMessage,
  };
}
