import { ArrowRight } from "lucide-react";
import { landingData } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

export function Workflow() {
  const section = landingData.sections.workflow;

  return (
    <section id="workflow" className="bg-[#f7f5f1] py-14 md:py-20">
      <div className="container-shell">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="mt-10 grid gap-px overflow-hidden border border-[#e0d4d4cc] bg-[#e0d4d4cc] md:grid-cols-2 xl:grid-cols-3">
          {landingData.workflow.map((step, index) => (
            <article
              key={step.title}
              className="grid min-h-[220px] grid-rows-[auto_1fr] bg-white p-6 transition hover:bg-[#fbfaf8] md:p-7"
            >
              <div className="border-b border-[#e0d4d4cc] pb-4">
                <span className="sturm-subtle-heading text-xs text-[#c8a16e]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="pt-5">
                <h3 className="max-w-sm text-lg font-medium leading-6 text-[#1f1f21]">{step.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#6f6f6f]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 border border-[#7d7474cc] bg-[#3a3a3e] p-6 text-white md:flex md:items-center md:justify-between md:p-7">
          <p className="max-w-2xl text-lg leading-7 text-[#efefef]">{section.cta}</p>
          <a
            href="#lead"
            className="focus-ring mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#ae906a] px-5 text-sm font-medium text-white transition hover:bg-[#c8a16e] hover:text-[#1f1f21] md:mt-0"
          >
            {section.ctaLabel}
            <ArrowRight aria-hidden size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
