'use client'

import { useEffect, useRef, useState } from 'react'
import { landingData } from '@/data/landing'
import { SectionTitle } from '@/components/SectionTitle'

export function VideoSection() {
  const section = landingData.sections.video
  const { video } = landingData
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (!wrapper || shouldLoadVideo) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px 0px' },
    )

    observer.observe(wrapper)

    return () => observer.disconnect()
  }, [shouldLoadVideo])

  return (
    <section className='bg-white py-16 md:py-24'>
      <div className='container-shell'>
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div
          ref={wrapperRef}
          className='mt-10 border border-[#e0d4d4cc] bg-[#f7f5f1] p-3 md:p-4'
        >
          <div className='relative overflow-hidden border border-[#e0d4d4cc] bg-[#1f1f21]'>
            <video
              className='aspect-video w-full object-cover'
              src={shouldLoadVideo ? video.src : undefined}
              poster={video.poster}
              title={video.title}
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              controls={false}
              preload='none'
            />
            <div className='pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-[#1f1f21]/72 to-transparent p-5 md:p-7'>
              <p className='max-w-xl text-sm leading-6 text-white/82'>
                {video.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
