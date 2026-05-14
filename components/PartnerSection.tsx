import { ArrowRight, UsersRound } from "lucide-react";
import { landingData } from "@/data/landing";

export function PartnerSection() {
  const { partners } = landingData;
  const section = landingData.sections.partners;

  return (
    <section className="bg-[#f7f5f1] py-16 md:py-24">
      <div className="container-shell grid gap-8 rounded-[32px] bg-[#25231f] p-6 text-white md:p-10 xl:grid-cols-[0.9fr_1.1fr] xl:p-14">
        <div>
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <UsersRound aria-hidden size={24} />
          </div>
          <h2 className="sturm-heading text-3xl md:text-5xl">{partners.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">{partners.description}</p>
          <a
            href="#lead"
            className="focus-ring mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-[#1f1f1f]"
          >
            {section.ctaLabel}
            <ArrowRight aria-hidden size={18} />
          </a>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-3xl bg-white/14 sm:grid-cols-2">
          {partners.items.map((item) => (
            <li key={item} className="bg-[#25231f] p-5 text-sm leading-6 text-white/82">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
