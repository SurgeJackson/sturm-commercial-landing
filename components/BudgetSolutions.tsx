import { PackageCheck } from "lucide-react";
import { landingData } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

export function BudgetSolutions() {
  const section = landingData.sections.budget;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {landingData.budgetSolutions.map((solution) => (
            <article key={solution.title} className="rounded-3xl border border-[#e5e0d8] bg-[#fbfaf8] p-6 md:p-8">
              <h3 className="text-2xl font-medium text-[#1f1f1f]">{solution.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#6f6f6f]">{solution.description}</p>
              <div className="mt-6 rounded-2xl bg-white p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8a8176]">{section.fitLabel}</p>
                <p className="mt-3 text-sm leading-6 text-[#4c4944]">{solution.fit}</p>
              </div>
              <ul className="mt-6 grid gap-3">
                {solution.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#4c4944]">
                    <PackageCheck aria-hidden className="mt-0.5 shrink-0 text-[#3d3933]" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[#e5e0d8] pt-5 text-sm leading-6 text-[#6f6f6f]">{solution.examples}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
