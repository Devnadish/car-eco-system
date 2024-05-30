'use client'
import {
  Eye,
  HeartHandshake,
  Share2,
  SlidersVertical,
  SortIcon
} from 'more/lib/icons'
import { Button } from '@/components/ui/button'
import { ArrowDown10, Car, Store } from 'more/lib/icons'
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
import { usePathname, useRouter } from 'next/navigation'
import Text from '@/components/shared/Text'
import { StarFilled } from '@/components/svg/StarFilled'

export const Bar = ({ providersLength, pageCount, query }) => {
  const pathName = usePathname()
  if (pathName.startsWith('/provider/')) {
    return
  }
  return (
    <div className='fixed left-0 top-14 z-40 flex h-16   w-full items-center justify-between bg-primary/10    px-7  md:flex-row'>
      <WrokShopType />
      <SortMenu />
    </div>
  )
}

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
    <div className='flex w-full  items-center justify-between gap-4 md:justify-end'>
      {/* <SelectedCar data={vechileVar} providersLength={providersLength} /> */}
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

const WrokShopType = () => {
  const router = useRouter()
  const pathName = usePathname()
  const handleChange = (xtype, value) => {
    const queryString = urlQuery(xtype, value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.push(updatedUrl)
  }

  return (
    <div className='flex   items-center  gap-4 md:justify-end'>
      <Button
        className='flex size-9 w-fit items-center  gap-2 rounded  bg-white/10 px-3 py-1 text-sm hover:bg-secondary/80 lg:w-fit   '
        onClick={() => handleChange('type', 'h')}
      >
        <MechancalMan className='text-primary' />
      </Button>
      <Button
        className='flex size-9 w-fit items-center  gap-2 rounded  bg-white/10 px-3 py-1 text-sm hover:bg-secondary/80 lg:w-fit   '
        onClick={() => handleChange('type', 'w')}
      >
        <WorkshopSVG className='text-primary' />
      </Button>
      <Button
        className='flex size-9 w-fit items-center  gap-2 rounded  bg-white/10 px-3 py-1 text-sm hover:bg-secondary/80 lg:w-fit   '
        onClick={() => handleChange('type', 'c')}
      >
        <WorkShopCenterSvg className='text-primary' />
      </Button>
    </div>
  )
}

export function SortMenu() {
  const router = useRouter()
  const pathName = usePathname()
  const handleChange = (xtype, value) => {
    const queryString = urlQuery(xtype, value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.push(updatedUrl)
  }
  return (
    <DropdownMenu dir='rtl' modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className='flex size-9 w-fit items-center  gap-2 rounded  bg-white/10 px-3 py-1 text-sm hover:bg-secondary/80 lg:w-fit   '>
          <SortIcon className='text-primary' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='flex min-w-9 flex-col items-center justify-center'>
        <DropdownMenuItem
          className='flex items-center gap-4 hover:bg-secondary'
          onClick={() => handleChange('sort', 'star')}
        >
          <StarFilled className='size-6 text-yellow-400' />
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 hover:bg-secondary'
          onClick={() => handleChange('sort', 'comment')}
        >
          <MessageCircleMore className='size-6 text-green-400' />
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 hover:bg-secondary'
          onClick={() => handleChange('sort', 'share')}
        >
          <Share2 className='size-6 text-primary' />
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 hover:bg-secondary'
          onClick={() => handleChange('sort', 'viewer')}
        >
          <Eye className='size-6 text-primary text-purple-700' />
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex items-center gap-4 hover:bg-secondary'
          onClick={() => handleChange('sort', 'fav')}
        >
          <HeartHandshake className='size-6 text-red-500' />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
