import type { SeoFaqBlock } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

type FaqProps = {
  data: SeoFaqBlock;
};

export function Faq({ data }: FaqProps) {
  return (
    <section className="bg-[#f7f5f1] py-16 md:py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />
        <div className="mt-10 divide-y divide-[#e0d4d4cc] overflow-hidden border border-[#e0d4d4cc] bg-white">
          {data.items.map((item, index) => (
            <details
              key={item.question}
              className="group bg-white transition-colors open:bg-[#fbfaf8]"
              open={index === 0}
            >
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-[#fbfaf8] md:px-7">
                <h3 className="text-base font-medium leading-6 text-[#1f1f21] md:text-lg">
                  {item.question}
                </h3>
                <span
                  aria-hidden
                  className="relative h-5 w-5 shrink-0 text-[#8f8f92] before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-1/2 after:h-4 after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:bg-current after:transition-transform group-open:after:rotate-90"
                />
              </summary>
              <p className="px-5 pb-6 text-sm leading-6 text-[#6f6f6f] md:px-7 md:text-base md:leading-7">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
