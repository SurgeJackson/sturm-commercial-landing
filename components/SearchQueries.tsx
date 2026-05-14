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
        <div className="mt-10 grid gap-px overflow-hidden border border-[#e0d4d4cc] bg-[#e0d4d4cc] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.items.map((item) => (
            <span
              key={item}
              className="flex min-h-20 items-center bg-white px-5 py-4 text-sm leading-6 text-[#4c4944] transition-colors hover:bg-[#fbfaf8]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
