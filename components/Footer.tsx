import Image from "next/image";
import Link from "next/link";
import { landingData } from "@/data/landing";

export function Footer() {
  const { brand, footer, contacts } = landingData;

  return (
    <footer className="border-t border-[#575258] bg-[#1f1f21] py-10 text-white">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <Link href="/#about" className="focus-ring inline-flex" aria-label="STURM, к началу страницы">
            <Image src={brand.logo} alt={brand.logoAlt} width={182} height={47} className="h-auto w-40" />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#c8c8c8]">{footer.description}</p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm text-[#d1d1d1]" aria-label="Навигация в футере">
          {landingData.nav.map((item) => (
            <Link key={item.href} href={`/${item.href}`} className="focus-ring transition hover:text-[#c8a16e]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm leading-6 text-[#d1d1d1]">
          <p>{contacts.office.address}</p>
          <p>{contacts.office.phone}</p>
          <a href={`mailto:${contacts.email}`} className="focus-ring mt-2 inline-block transition hover:text-[#c8a16e]">
            {contacts.email}
          </a>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#8f8f92]">
            <Link href="/privacy" className="focus-ring transition hover:text-[#c8a16e]">
              {footer.privacyLabel}
            </Link>
            <Link href="/consent" className="focus-ring transition hover:text-[#c8a16e]">
              {footer.consentLabel}
            </Link>
          </div>
        </div>
      </div>
      <div className="container-shell mt-7 border-t border-[#575258] pt-4">
        <div className="grid gap-2 text-[11px] leading-4 text-[#8f8f92] lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <p>{footer.copyright}</p>
          <div className="lg:text-right">
            <p className="text-[#c8a16e]">{footer.requisitesTitle}</p>
            <p className="mt-0.5">{footer.requisites}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
