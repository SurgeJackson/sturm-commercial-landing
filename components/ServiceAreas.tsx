import type { SeoServiceAreasBlock } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

type ServiceAreasProps = {
  data: SeoServiceAreasBlock;
};

export function ServiceAreas({ data }: ServiceAreasProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <div className="grid gap-10 border border-[#e0d4d4cc] bg-[#fbfaf8] p-6 md:p-10 xl:grid-cols-[0.85fr_1.15fr] xl:p-12">
          <SectionTitle
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
          <ul className="grid gap-px overflow-hidden border border-[#e0d4d4cc] bg-[#e0d4d4cc] sm:grid-cols-2">
            {data.items.map((item) => (
              <li
                key={item}
                className="flex min-h-20 items-center bg-white px-5 py-4 text-sm leading-6 text-[#4c4944]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
