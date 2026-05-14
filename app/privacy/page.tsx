import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { landingData } from "@/data/landing";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | STURM",
  description:
    "Политика конфиденциальности STURM для заявок на проектную комплектацию коммерческих объектов.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const { contacts, footer } = landingData;

  return (
    <>
      <Header />
      <main className="bg-[#f7f5f1] py-16 text-[#1f1f21] md:py-24">
        <section className="container-shell max-w-4xl">
          <p className="sturm-subtle-heading mb-4 text-xs text-[#8f8f92]">
            Документы
          </p>
          <h1 className="sturm-heading text-3xl md:text-5xl">
            Политика конфиденциальности
          </h1>
          <div className="mt-8 space-y-5 border border-[#e0d4d4cc] bg-white p-6 text-sm leading-7 text-[#4c4944] md:p-8">
            <p>
              Настоящая политика описывает порядок обработки данных, которые
              пользователь передает через форму заявки на сайте STURM.
            </p>
            <p>
              Данные используются для обработки обращения, подготовки ответа по
              проектной комплектации и связи с заявителем по указанным контактам.
            </p>
            <p>
              В форме могут обрабатываться имя, компания, телефон, email, город,
              тип объекта, комментарий и приложенные материалы проекта или
              спецификации.
            </p>
            <p>
              Организация: {footer.requisites}. Для вопросов по обработке данных
              используйте email:{" "}
              <a className="underline" href={`mailto:${contacts.email}`}>
                {contacts.email}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
