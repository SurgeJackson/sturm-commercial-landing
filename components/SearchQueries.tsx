import type { SeoSearchQueriesBlock } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

type SearchQueriesProps = {
  data: SeoSearchQueriesBlock;
};

export function SearchQueries({ data }: SearchQueriesProps) {
  return (
    <section className="bg-[#f7f5f1] pb-16 md:pb-24">
      <div className="container-shell">
        <SectionTitle eyebrow={data.eyebrow} title={data.title} />
        <div className="mt-10 grid gap-px overflow-hidden border border-[#e0d4d4cc] bg-[#e0d4d4cc] md:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[150px] flex-col bg-white p-5 transition-colors hover:bg-[#fbfaf8]"
            >
              <h3 className="text-base font-medium leading-6 text-[#1f1f21]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#6f6f6f]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
