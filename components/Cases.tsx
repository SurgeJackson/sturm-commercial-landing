import Image from "next/image";
import type { CaseItem } from "@/data/landing";
import { landingData } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

const initialVisibleCases = 12;

function CaseCard({ item }: { item: CaseItem }) {
  const section = landingData.sections.cases;

  return (
    <article
      key={`${item.title}-${item.sourcePage ?? item.image}`}
      className="group border border-[#e0d4d4cc] bg-[#fbfaf8] p-3 transition hover:border-[#c8a16e]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#ded7cc]">
        <Image
          src={item.image}
          alt={`${item.title} — проект из портфолио STURM`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:brightness-[0.96]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f21]/92 via-[#1f1f21]/34 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 border-t border-white/18 bg-[#1f1f21]/78 p-5 shadow-[0_-16px_48px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <div className="max-w-[92%]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#d8b782]">{item.type}</p>
            <h3 className="mt-2 text-2xl font-medium leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="px-3 py-4">
        <dl className="grid gap-3 text-[13px] leading-5">
          <div className="border-t border-[#e0d4d4cc] pt-3">
            <dt className="text-xs font-medium uppercase tracking-[0.08em] text-[#1f1f1f]">{section.taskLabel}</dt>
            <dd className="mt-1 text-[#6f6f6f]">{item.task}</dd>
          </div>
          <div className="border-t border-[#e0d4d4cc] pt-3">
            <dt className="text-xs font-medium uppercase tracking-[0.08em] text-[#1f1f1f]">{section.scopeLabel}</dt>
            <dd className="mt-1 text-[#6f6f6f]">{item.scope}</dd>
          </div>
          <div className="border-t border-[#e0d4d4cc] pt-3">
            <dt className="text-xs font-medium uppercase tracking-[0.08em] text-[#1f1f1f]">{section.resultLabel}</dt>
            <dd className="mt-1 text-[#6f6f6f]">{item.result}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function Cases() {
  const section = landingData.sections.cases;
  const visibleCases = landingData.cases.slice(0, initialVisibleCases);
  const hiddenCases = landingData.cases.slice(initialVisibleCases);
  const hiddenCasesCount = landingData.cases.length - initialVisibleCases;

  return (
    <section id="cases" className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleCases.map((item) => (
            <CaseCard key={`${item.title}-${item.sourcePage ?? item.image}`} item={item} />
          ))}
        </div>

        {hiddenCasesCount > 0 ? (
          <details className="mt-10 group/details">
            <summary className="focus-ring mx-auto flex w-fit cursor-pointer list-none border border-[#1f1f21] bg-[#1f1f21] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#3d3933] group-open/details:hidden">
              Показать еще проекты
            </summary>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {hiddenCases.map((item) => (
                <CaseCard key={`${item.title}-${item.sourcePage ?? item.image}`} item={item} />
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </section>
  );
}
