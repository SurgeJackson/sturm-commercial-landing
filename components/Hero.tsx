import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { landingData } from '@/data/landing'

export function Hero() {
  const { hero } = landingData

  return (
    <section
      id='hero'
      className='overflow-hidden bg-[#3a3a3e] py-12 text-white md:py-18 xl:py-24'
    >
      <div className='container-shell grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center'>
        <div className='max-w-3xl'>
          <p className='sturm-subtle-heading mb-5 text-xs text-[#c8a16e]'>
            {hero.eyebrow}
          </p>
          <h1 className='sturm-heading max-w-3xl text-[36px] leading-[1.08] md:text-[58px] md:leading-[1.06] xl:text-[66px]'>
            {hero.title}
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-[#efefef] md:text-xl'>
            {hero.description}
          </p>
          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <a
              href='#lead'
              className='focus-ring inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#ae906a] px-7 text-sm font-medium text-white transition hover:bg-[#c8a16e] hover:text-[#1f1f21]'
            >
              {hero.primaryCta}
              <ArrowRight aria-hidden size={18} />
            </a>
            <a
              href='tel:+78122332645'
              className='focus-ring inline-flex h-13 items-center justify-center gap-2 rounded-full border border-[#7d7474cc] bg-[#444448] px-7 text-sm font-medium text-[#efefef] transition hover:border-[#c8a16e] hover:text-[#c8a16e]'
            >
              <Phone aria-hidden size={17} />
              {hero.secondaryCta}
            </a>
          </div>
          <dl className='mt-10 grid gap-4 sm:grid-cols-3'>
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className='border-l border-[#c8a16e]/55 pl-4'
              >
                <dt className='text-2xl font-medium text-[#ffffff]'>
                  {stat.value}
                </dt>
                <dd className='mt-2 text-sm leading-5 text-[#c8c8c8]'>
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className='relative min-h-105 overflow-hidden rounded-none border border-[#7d7474cc] bg-[#444448] md:min-h-140'>
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            fetchPriority='high'
            sizes='(min-width: 1280px) 52vw, 100vw'
            className='object-cover'
          />
          <div className='absolute inset-x-0 bottom-0 bg-linear-to-t from-[#1f1f21]/86 to-transparent p-6 text-white md:p-8'>
            <p className='max-w-md text-sm leading-6 text-white/86'>
              {hero.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
