import type { SeoIndustrySolutionsBlock } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

type IndustrySolutionsProps = {
  data: SeoIndustrySolutionsBlock;
};

export function IndustrySolutions({ data }: IndustrySolutionsProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />
        <div className="mt-10 grid gap-px overflow-hidden border border-[#e0d4d4cc] bg-[#e0d4d4cc] md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => (
            <article
              key={item.title}
              className="flex min-h-[220px] flex-col bg-white p-6 transition-colors hover:bg-[#fbfaf8]"
            >
              <span className="sturm-subtle-heading text-[10px] text-[#b8ad9f]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-7 text-xl font-medium leading-7 text-[#1f1f21]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#6f6f6f]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
