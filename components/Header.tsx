"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { landingData } from "@/data/landing";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const { brand, header } = landingData;

  return (
    <header className="sticky top-0 z-50 border-b border-[#575258] bg-[#1f1f21]/96 text-white backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-5">
        <Link href="/#about" className="focus-ring flex items-center gap-3">
          <Image src={brand.logo} alt={brand.logoAlt} width={182} height={47} priority className="h-auto w-28 md:w-34" />
          <span className="hidden h-5 w-px bg-[#7d7474cc] lg:block" />
          <span className="hidden text-xs text-[#c8a16e] lg:block">{brand.label}</span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Основная навигация">
          {landingData.nav.map((item) => (
            <Link key={item.href} href={`/${item.href}`} className="focus-ring text-[13px] text-[#d1d1d1] transition hover:text-[#c8a16e]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#lead"
            className="focus-ring inline-flex h-10 items-center justify-center rounded-full bg-[#ae906a] px-5 text-[13px] font-medium text-[#1f1f21] transition hover:bg-[#c8a16e]"
          >
            {header.cta}
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7d7474cc] bg-[#444448] text-[#d1d1d1] xl:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </div>

      <div
        className={cn("border-t border-[#575258] bg-[#1f1f21] xl:hidden", open ? "block" : "hidden")}
      >
        <nav className="container-shell grid gap-1 py-3" aria-label="Мобильная навигация">
          {landingData.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="focus-ring rounded-xl px-2 py-2.5 text-sm text-[#d1d1d1] transition hover:text-[#c8a16e]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#lead"
            className="focus-ring mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[#ae906a] px-5 text-sm font-medium text-[#1f1f21]"
            onClick={() => setOpen(false)}
          >
            {header.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
