// "use client"
import Text from '@/components/shared/Text'
import { Separator } from '@/components/ui/separator'
import { ArrowDown10, Car, Store } from 'more/lib/icons'
// import React, { useEffect, useState } from 'react'

function FilterMenu({ query, providersLength }) {
  const { vechile, sort, type } = query
  let sortVar
  let typeVar
  let vechileVar
  !vechile ? (vechileVar = 'اختار سيارتك') : (vechileVar = vechile)

  switch (sort) {
    case 'star':
      sortVar = 'حسب النجوم'
      break
    case 'comment':
      sortVar = 'حسب التعليقات'
      break

    default:
      sortVar = 'حسب النجوم'
      break
  }

  switch (type) {
    case 'center':
      typeVar = 'مراكز صيانة'
      break
    case 'workshop':
      typeVar = 'ورش صيانة'
      break
    case 'man':
      typeVar = 'افراد'
      break
    default:
      typeVar = 'الكل'
      break
  }
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-2'>
      <SelectedCar data={vechileVar} providersLength={providersLength} />
      <Description
        icon={<ArrowDown10 className='size-5 opacity-45 ' strokeWidth={1} />}
        data={sortVar}
      />
      <Description
        icon={<Store className='size-5 opacity-45' strokeWidth={1} />}
        data={typeVar}
      />
    </div>
  )
}

export default FilterMenu

const Description = ({ icon, data, opacity = 'O40' }) => {
  return (
    <div className='flex items-center gap-1  border-b px-1 text-sm '>
      {icon}
      <Text
        opacity={opacity}
        className='hidden text-[.6rem] capitalize  md:block md:text-sm'
        fontFamily={'tajwal'}
      >
        {data}
      </Text>
    </div>
  )
}

const SelectedCar = ({ data, providersLength }) => {
  return (
    <div className='flex h-6 items-center justify-between  gap-1 rounded-xl border border-primary px-1 text-sm '>
      <Text
        className='text-xs font-semibold  capitalize '
        fontFamily={'tajwal'}
      >
        <Car className='size-5 text-primary  md:size-6' strokeWidth={1} />
        {data}
      </Text>

      <div className='flex items-center'>
        <Separator orientation='vertical' className='h-6 bg-primary' />
        <span className=' flex size-6 items-center justify-center  px-1 text-xs  text-foreground'>
          {providersLength}
        </span>
      </div>
    </div>
  )
}
