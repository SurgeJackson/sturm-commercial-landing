import type { SeoBottomTextBlock } from "@/data/landing";

type SeoBottomTextProps = {
  data: SeoBottomTextBlock;
};

export function SeoBottomText({ data }: SeoBottomTextProps) {
  return (
    <section className="bg-[#f7f5f1] py-14 md:py-20">
      <div className="container-shell">
        <div className="border border-[#e0d4d4cc] bg-white p-6 md:p-10">
          <h2 className="max-w-4xl text-2xl font-medium leading-tight text-[#1f1f21] md:text-4xl">
            {data.title}
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm leading-7 text-[#6f6f6f] md:text-base">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
