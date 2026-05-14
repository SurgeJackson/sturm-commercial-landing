import { ArrowRight, Check, FileText, PackageCheck, Ruler, Truck } from "lucide-react";
import { landingData } from "@/data/landing";

export function TurnkeySection() {
  const { turnkey } = landingData;
  const section = landingData.sections.turnkey;
  const featureIcons = [Ruler, FileText, PackageCheck, Check, FileText, PackageCheck, Truck, Check];

  return (
    <section className="bg-[#f7f5f1] py-14 md:py-22">
      <div className="container-shell">
        <div className="grid overflow-hidden border border-[#e0d4d4cc] bg-white xl:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-[#e0d4d4cc] bg-[#fbfaf8] p-7 md:p-10 xl:border-b-0 xl:border-r xl:p-12">
            <p className="sturm-subtle-heading mb-5 text-xs text-[#8f8f92]">{section.eyebrow}</p>
            <h2 className="sturm-heading max-w-2xl text-3xl md:text-5xl">{turnkey.title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#6f6f6f] md:text-lg">{turnkey.description}</p>
            <a
              href="#lead"
              className="focus-ring mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#ae906a] px-6 text-sm font-medium text-[#1f1f21] transition hover:bg-[#c8a16e]"
            >
              Отправить спецификацию
              <ArrowRight aria-hidden size={18} />
            </a>
          </div>

          <div className="grid gap-px bg-[#e0d4d4cc] sm:grid-cols-2">
            {turnkey.items.map((item, index) => {
              const Icon = featureIcons[index] ?? Check;

              return (
                <article key={item} className="min-h-[142px] bg-white p-6 transition hover:bg-[#fbfaf8] md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#e0d4d4cc] bg-[#f7f5f1] text-[#ae906a]">
                      <Icon aria-hidden size={20} />
                    </span>
                    <span className="sturm-subtle-heading text-[10px] text-[#b8ad9f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-medium leading-6 text-[#1f1f21]">{item}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
