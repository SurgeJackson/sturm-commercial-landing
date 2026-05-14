type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="sturm-subtle-heading mb-4 text-xs text-[#8f8f92]">{eyebrow}</p> : null}
      <h2 className="sturm-heading max-w-4xl text-3xl md:text-4xl xl:text-[44px]">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-7 text-[#6f6f6f] md:text-lg">{description}</p> : null}
    </div>
  );
}
