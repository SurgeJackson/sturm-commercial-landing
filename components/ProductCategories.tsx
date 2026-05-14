import { landingData } from "@/data/landing";
import { SectionTitle } from "@/components/SectionTitle";

export function ProductCategories() {
  const section = landingData.sections.assortment;

  return (
    <section id="assortment" className="bg-[#f7f5f1] py-16 md:py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {landingData.categories.map((category) => (
            <article
              key={category.title}
              className="flex min-h-[170px] flex-col justify-between border border-[#e5e0d8] bg-white px-5 py-5 transition-colors hover:border-[#d3c8ba] hover:bg-[#fbfaf8]"
            >
              <h3 className="text-lg font-medium leading-7 text-[#1f1f21]">{category.title}</h3>
              <p className="mt-5 text-sm leading-6 text-[#6f6f6f]">{category.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
