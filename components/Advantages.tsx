import { CheckCircle2 } from "lucide-react";
import { landingData } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

export function Advantages() {
  const section = landingData.sections.advantages;

  return (
    <section id="advantages" className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {landingData.advantages.map((advantage) => (
            <article key={advantage.title} className="premium-card rounded-2xl p-6">
              <CheckCircle2 className="mb-5 text-[#3d3933]" aria-hidden size={24} />
              <h3 className="text-lg font-medium leading-7 text-[#1f1f1f]">{advantage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6f6f6f]">{advantage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
