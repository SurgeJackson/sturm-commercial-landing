import type { ComponentType } from 'react'
import {
  Bath,
  Building2,
  Dumbbell,
  Hospital,
  Hotel,
  House,
  Landmark,
  Ruler,
  Sparkles,
  Truck,
  Utensils,
  Warehouse,
} from 'lucide-react'
import type { IconName } from '@/data/landing'
import { landingData } from '@/data/landing'
import { SectionTitle } from '@/components/SectionTitle'

const icons: Record<
  IconName,
  ComponentType<{ size?: number; 'aria-hidden'?: boolean; className?: string }>
> = {
  hotel: Hotel,
  utensils: Utensils,
  building: Building2,
  hospital: Hospital,
  dumbbell: Dumbbell,
  home: House,
  landmark: Landmark,
  bath: Bath,
  warehouse: Warehouse,
  ruler: Ruler,
  truck: Truck,
  sparkles: Sparkles,
}

export function ObjectTypes() {
  const section = landingData.sections.objects

  return (
    <section id='objects' className='bg-white py-16 md:py-24'>
      <div className='container-shell'>
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className='mt-10 grid items-stretch gap-px overflow-hidden border border-[#e0d4d4cc] bg-[#e0d4d4cc] md:grid-cols-2 xl:grid-cols-4'>
          {landingData.objectTypes.map((item) => {
            const Icon = icons[item.icon]
            const itemNumber = landingData.objectTypes.indexOf(item) + 1

            return (
              <article
                key={item.title}
                className='group flex min-h-85 flex-col bg-white p-6 transition hover:bg-[#fbfaf8]'
              >
                <div className='flex items-start justify-between gap-5'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center border border-[#e0d4d4cc] bg-[#f7f5f1] text-[#ae906a] transition group-hover:border-[#c8a16e] group-hover:bg-[#fbfaf8]'>
                    <Icon aria-hidden size={22} />
                  </div>
                  <span className='sturm-subtle-heading pt-1 text-[10px] text-[#b8ad9f]'>
                    {String(itemNumber).padStart(2, '0')}
                  </span>
                </div>
                <div className='mt-7 flex-1'>
                  <h3 className='min-h-14 text-xl font-medium leading-7 text-[#1f1f21]'>
                    {item.title}
                  </h3>
                  <p className='mt-4 line-clamp-4 text-sm leading-6 text-[#6f6f6f]'>
                    {item.description}
                  </p>
                </div>
                <p className='mt-6 min-h-15 border-t border-[#e0d4d4cc] pt-4 text-xs leading-5 text-[#444448]'>
                  {item.positions}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
