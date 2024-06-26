import { SectionTitle } from '@/components/shared/SectionTitle'
// import { extraService } from '@/constant/extraService'
import Text from '@/components/shared/Text'
import Image from 'next/image'
import Link from 'next/link'
import { MoveLeft } from 'more/lib/icons'

export const ExtraServices = ({ service, providerId, providerSlug }) => {
  return (
    <section className='flex w-full flex-col items-center justify-center  border-b border-l border-primary bg-secondary/40 p-4'>
      <SectionTitle title={'خدمات اضافية'} />
      <div className='mx-auto flex w-full  flex-wrap  items-center justify-center  gap-4'>
        {service.map(service => {
          return (
            <div
              className='flex min-h-[147px] max-w-xs flex-grow flex-col flex-wrap items-start justify-between gap-2  rounded-lg  border border-primary p-4 hover:shadow-xl  md:max-w-lg'
              key={service.id}
            >
              <div className='flex items-center gap-3'>
                <Image
                  src={`/extraservicelogo/${service.logo || 'logo.svg'}`} // Handle missing logo
                  alt={service.service}
                  width={25}
                  height={25}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='rounded-lg fill-white object-contain '
                />
                <Text fontSize={'small'} fontFamily={'tajwal'} opacity={'O70'}>
                  {service.service}
                </Text>
              </div>

              <div className='flex w-full  flex-wrap  items-center justify-center  '>
                <Text className='w-full  max-w-xs text-wrap  p-2 text-muted-foreground'>{`${service.description.substring(0, 60)}...`}</Text>
                <Link
                  href={{
                    pathname: `/comment/service/${providerSlug}/${service.slug}`
                  }}
                  className='flex  w-full items-end justify-end gap-4 text-primary'
                >
                  <span className='font-tajwal'>عرض المزيد</span>
                  <MoveLeft />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
