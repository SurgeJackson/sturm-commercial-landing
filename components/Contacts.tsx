import { Mail, MapPin, Phone } from "lucide-react";
import { landingData } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

export function Contacts() {
  const { contacts } = landingData;
  const section = landingData.sections.contacts;
  const points = [contacts.office, contacts.showroom];

  return (
    <section id="contacts" className="bg-[#f7f5f1] py-16 md:py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr_0.9fr]">
          {points.map((point) => (
            <article key={point.title} className="rounded-3xl border border-[#e5e0d8] bg-white p-6">
              <h3 className="text-xl font-medium text-[#1f1f1f]">{point.title}</h3>
              <div className="mt-6 grid gap-4 text-sm leading-6 text-[#4c4944]">
                <p className="flex gap-3">
                  <MapPin aria-hidden className="mt-1 shrink-0 text-[#8a8176]" size={18} />
                  {point.address}
                </p>
                <a href={`tel:${point.phone.replace(/\D/g, "")}`} className="focus-ring flex gap-3 transition hover:text-[#1f1f1f]">
                  <Phone aria-hidden className="mt-1 shrink-0 text-[#8a8176]" size={18} />
                  {point.phone}
                </a>
                <p className="text-[#6f6f6f]">{point.hours}</p>
              </div>
            </article>
          ))}

          <article className="rounded-3xl border border-[#e5e0d8] bg-[#25231f] p-6 text-white">
            <h3 className="text-xl font-medium">{section.commonTitle}</h3>
            <div className="mt-6 grid gap-4 text-sm leading-6 text-white/78">
              <a href={`tel:${contacts.commonPhone.replace(/\D/g, "")}`} className="focus-ring flex gap-3 transition hover:text-white">
                <Phone aria-hidden className="mt-1 shrink-0" size={18} />
                {contacts.commonPhone}
              </a>
              <a href={`mailto:${contacts.email}`} className="focus-ring flex gap-3 transition hover:text-white">
                <Mail aria-hidden className="mt-1 shrink-0" size={18} />
                {contacts.email}
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/14 bg-white/8">
              <iframe
                src={contacts.map.url}
                title={contacts.map.title}
                className="h-72 w-full border-0 grayscale-[20%]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
