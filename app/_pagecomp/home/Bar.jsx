'use client'
import SearchProvider from './SearchProvider'
import DropMenu from '@/components/shared/DropMenu'
import { carLogos } from 'more/constant/carLogo'
import { Car, SlidersVertical } from 'more/lib/icons'
import ClearFilter from '@/components/shared/ClearFilter'
import FilterMenu from './FilterMenu'
import { filterMenu } from 'more/constant/menu'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MessageCircleMore, Star } from 'more/lib/icons'
import WorkshopSVG from '@/components/svg/WorkshopSVG'
import WorkShopCenterSvg from '@/components/svg/WorkShopCenterSvg'
import MechancalMan from '@/components/svg/MechancalMan'
import { urlQuery } from 'more/lib/nadish'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import Text from '@/components/shared/Text'

export const Bar = ({ providersLength, pageCount, query }) => {
  const pathName = usePathname()
  if (pathName.startsWith('/provider/')) {
    return
  }
  return (
    <>
      <div className='fixed left-0 top-12 z-40 flex w-full    items-center justify-between    bg-border px-2'>
        <div className='flex h-12  items-end justify-end gap-2 '>
          <DropDownFilter
            icon={<SlidersVertical strokeWidth={1} />}
            title='تصفية البيانات '
            menu={filterMenu}
          />
          <SearchProvider />
          <ClearFilter />
        </div>
        <div>
          <FilterMenu query={query} providersLength={providersLength} />
        </div>
      </div>
      <DropMenu
        frameworks={carLogos}
        label='اختار  سيارتك'
        icon={
          <Car className='size-8 text-primary-foreground' strokeWidth={1} />
        }
        placeholder='ابحث عن سيارتك'
        noDataMessage='لا توجد سيارتك'
      />
    </>
  )
}

export function DropDownFilter({ icon, menu, title }) {
  const pathName = usePathname()
  const router = useRouter()

  const handleChange = (xtype, value) => {
    const queryString = urlQuery(xtype, value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.push(updatedUrl)
  }
  return (
    <DropdownMenu dir='rtl'>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='    hover:bg-primary'>
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>
          <Text> {title}</Text>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleChange('sort', 'star')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <Star className='size-4 text-foreground' />
          <Text> حسب النجوم</Text>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange('sort', 'comment')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <MessageCircleMore className='size-4 text-foreground' />
          <Text> حسب التعليقات</Text>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleChange('type', 'center')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <WorkShopCenterSvg className='size-4 text-foreground' />
          <Text> مراكز الصيانه</Text>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange('type', 'workshop')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <WorkshopSVG className='size-4 text-foreground' />
          <Text> ورش الصيانة</Text>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange('type', 'man')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <MechancalMan className='size-4 text-foreground' />
          <Text> الافراد</Text>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange('type', 'all')}
          className='flex items-center gap-4 hover:bg-secondary'
        >
          <Star className='size-4 text-foreground' />
          <Text> الكل</Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
