'use client'

import Link from 'next/link'
import { Upload } from 'lucide-react'
import { useMemo, useState, useTransition } from 'react'
import { submitLeadAction } from '@/app/actions'
import { landingData } from '@/data/landing'
import { cn } from '@/lib/utils'

type Errors = Partial<Record<string, string>>
const maxFileSize = 15 * 1024 * 1024
const allowedFileExtensions = new Set(['pdf', 'xlsx', 'xls', 'doc', 'docx'])

export function LeadForm() {
  const { form } = landingData
  const section = landingData.sections.lead
  const [errors, setErrors] = useState<Errors>({})
  const [successMessage, setSuccessMessage] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')
  const [selectedFileName, setSelectedFileName] = useState('')
  const [isPending, startTransition] = useTransition()

  const requiredFields = useMemo(
    () =>
      form.fields.filter((field) => field.required).map((field) => field.name),
    [form.fields],
  )

  function validate(formData: FormData) {
    const nextErrors: Errors = {}

    for (const fieldName of requiredFields) {
      if (!String(formData.get(fieldName) ?? '').trim()) {
        nextErrors[fieldName] = form.validation.required
      }
    }

    const email = String(formData.get('email') ?? '')
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = form.validation.email
    }

    const phone = String(formData.get('phone') ?? '')
    if (phone && phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = form.validation.phone
    }

    if (formData.get('agreement') !== 'on') {
      nextErrors.agreement = form.validation.agreement
    }

    const file = formData.get('projectFile')
    if (file instanceof File && file.size > maxFileSize) {
      nextErrors.projectFile = form.validation.fileSize
    }

    if (file instanceof File && file.size > 0) {
      const extension = file.name.split('.').pop()?.toLowerCase() ?? ''

      if (!allowedFileExtensions.has(extension)) {
        nextErrors.projectFile = form.validation.fileType
      }
    }

    return nextErrors
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSuccessMessage('')
    setSubmitMessage('')

    const currentForm = event.currentTarget
    const formData = new FormData(currentForm)
    const nextErrors = validate(formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    startTransition(async () => {
      const result = await submitLeadAction(formData)
      if (result.ok) {
        currentForm.reset()
        setSelectedFileName('')
        setSuccessMessage(result.message)
      } else {
        setSubmitMessage(result.message)
      }
    })
  }

  return (
    <section id='lead' className='bg-white py-16 md:py-24'>
      <div className='container-shell grid gap-10 xl:grid-cols-[0.8fr_1.2fr]'>
        <div>
          <p className='mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#6f6f6f]'>
            {section.eyebrow}
          </p>
          <h2 className='sturm-heading text-3xl md:text-5xl'>{form.title}</h2>
          <p className='mt-5 max-w-xl text-base leading-7 text-[#6f6f6f] md:text-lg'>
            {form.description}
          </p>
          <div className='mt-8 rounded-3xl border border-[#e5e0d8] bg-[#f7f5f1] p-6'>
            <p className='text-sm leading-6 text-[#4c4944]'>
              {section.integrationNote}
            </p>
          </div>
        </div>

        <form
          className='rounded-4xl border border-[#e5e0d8] bg-[#fbfaf8] p-5 md:p-8'
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='grid gap-5 md:grid-cols-2'>
            {form.fields.map((field) => {
              const error = errors[field.name]
              const commonClass =
                'focus-ring mt-2 min-h-12 w-full rounded-2xl border bg-white px-4 text-sm text-[#1f1f1f] transition placeholder:text-[#9b9184]'

              return (
                <div
                  key={field.name}
                  className={
                    field.type === 'textarea' || field.type === 'file'
                      ? 'md:col-span-2'
                      : undefined
                  }
                >
                  <label
                    htmlFor={field.name}
                    className='text-sm font-medium text-[#1f1f1f]'
                  >
                    {field.label}
                    {field.required ? (
                      <span className='text-[#8f2d2d]'> *</span>
                    ) : null}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={5}
                      className={cn(
                        commonClass,
                        'resize-y py-3',
                        error ? 'border-[#8f2d2d]' : 'border-[#d9d2c8]',
                      )}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      defaultValue=''
                      className={cn(
                        commonClass,
                        error ? 'border-[#8f2d2d]' : 'border-[#d9d2c8]',
                      )}
                    >
                      <option value='' disabled>
                        {field.placeholder}
                      </option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'file' ? (
                    <div className='mt-2'>
                      <label
                        htmlFor={field.name}
                        className={cn(
                          'focus-ring flex min-h-20 cursor-pointer items-center justify-between gap-4 rounded-2xl border bg-white p-4 transition hover:border-[#c8a16e]',
                          error ? 'border-[#8f2d2d]' : 'border-[#d9d2c8]',
                        )}
                      >
                        <span className='flex min-w-0 items-center gap-4'>
                          <span className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1f1f1f] text-white'>
                            <Upload aria-hidden size={18} />
                          </span>
                          <span className='min-w-0'>
                            <span className='block text-sm font-medium text-[#1f1f1f]'>
                              {selectedFileName || form.fileUpload.emptyLabel}
                            </span>
                            <span className='mt-1 block text-xs leading-5 text-[#6f6f6f]'>
                              {form.fileUpload.helper}
                            </span>
                          </span>
                        </span>
                        <span className='hidden shrink-0 rounded-full border border-[#d9d2c8] px-4 py-2 text-xs font-medium text-[#1f1f1f] sm:inline-flex'>
                          {form.fileUpload.chooseLabel}
                        </span>
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type='file'
                        accept='.pdf,.xlsx,.xls,.doc,.docx'
                        className='sr-only'
                        onChange={(event) => {
                          const file = event.currentTarget.files?.[0]
                          setSelectedFileName(file?.name ?? '')
                        }}
                      />
                    </div>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={cn(
                        commonClass,
                        error ? 'border-[#8f2d2d]' : 'border-[#d9d2c8]',
                      )}
                    />
                  )}

                  {error ? (
                    <p className='mt-2 text-sm text-[#8f2d2d]'>{error}</p>
                  ) : null}
                </div>
              )
            })}
          </div>

          <label className='mt-6 flex gap-3 text-sm leading-6 text-[#4c4944]'>
            <input
              name='agreement'
              type='checkbox'
              className='mt-1 h-4 w-4 rounded border-[#cfc7bb] accent-[#1f1f1f]'
            />
            <span>
              {form.agreement}{' '}
              <Link
                href='/consent'
                className='underline underline-offset-4 hover:text-[#1f1f1f]'
              >
                Согласие на обработку персональных данных
              </Link>{' '}
              и{' '}
              <Link
                href='/privacy'
                className='underline underline-offset-4 hover:text-[#1f1f1f]'
              >
                Политику конфиденциальности
              </Link>
              .
            </span>
          </label>
          {errors.agreement ? (
            <p className='mt-2 text-sm text-[#8f2d2d]'>{errors.agreement}</p>
          ) : null}

          <button
            type='submit'
            disabled={isPending}
            className='focus-ring mt-7 inline-flex h-13 w-full items-center justify-center rounded-full bg-[#1f1f1f] px-7 text-sm font-medium text-white transition hover:bg-[#3d3933] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto'
          >
            {isPending ? section.pendingLabel : form.submitLabel}
          </button>

          {successMessage ? (
            <div
              className='mt-6 rounded-2xl border border-[#cad9c5] bg-[#f2f8f0] p-4 text-sm leading-6 text-[#2f5b2d]'
              role={section.successRole}
            >
              {successMessage}
            </div>
          ) : null}

          {submitMessage ? (
            <div
              className='mt-6 rounded-2xl border border-[#e1b8b8] bg-[#fff5f5] p-4 text-sm leading-6 text-[#8f2d2d]'
              role='alert'
            >
              {submitMessage}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  )
}
