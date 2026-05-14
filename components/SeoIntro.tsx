import type { SeoIntroBlock } from "@/data/landing";

type SeoIntroProps = {
  data: SeoIntroBlock;
};

export function SeoIntro({ data }: SeoIntroProps) {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <div className="grid gap-8 border border-[#e0d4d4cc] bg-[#fbfaf8] p-6 md:grid-cols-[0.95fr_1.05fr] md:p-10 xl:p-12">
          <div>
            <p className="sturm-subtle-heading mb-4 text-xs text-[#8f8f92]">
              {data.eyebrow}
            </p>
            <h2 className="sturm-heading text-3xl md:text-4xl xl:text-[44px]">
              {data.title}
            </h2>
            <p className="mt-6 text-base leading-7 text-[#6f6f6f] md:text-lg">
              {data.description}
            </p>
          </div>
          <div className="border-t border-[#e0d4d4cc] pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-base leading-8 text-[#4c4944]">{data.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
