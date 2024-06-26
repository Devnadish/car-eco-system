import { HistoryIcon } from '@/components/svg/History'
import { Dislike, Like } from '@/components/svg/LikeAndDislike'
import { EMail } from '@/components/svg/Mail'
import { SendService } from '@/components/svg/SendService'
import {
  Facebook,
  Instagram,
  Tiktok,
  XTwitter,
  Youtube
} from '@/components/svg/Socail'
import { StarFilled } from '@/components/svg/StarFilled'
import {
  BotMessageSquare,
  Gift,
  Heart,
  HeartHandshake,
  MessageCircleMore,
  MessagesSquare,
  Percent,
  Star
} from 'more/lib/icons'
import { urlQuery } from 'more/lib/nadish'

export const menu = [
  {
    id: 1,
    title: 'مجاني',
    icon: <Gift size={15} strokeWidth={1} className='text-foreground' />,
    href: '/'
  },

  {
    id: 3,
    title: 'خصومات',
    icon: <Percent size={15} strokeWidth={1} className='text-foreground' />,
    href: '/'
  },
  {
    id: 4,
    title: 'غرف',
    icon: (
      <MessagesSquare size={15} strokeWidth={1} className='text-foreground' />
    ),
    href: '/'
  }
  // {
  //   id: 5,
  //   title: 'راسلنا',
  //   icon: <EMail className='size-8 text-primary' />,
  //   href: '/mailsystem/sendmsg'
  // }
]

export const providerMenu = [
  {
    id: 1,
    title: 'من نحن',
    icon: <Gift size={20} strokeWidth={1} className='text-foreground' />,
    href: '/'
  },
  {
    id: 2,
    title: 'لحظات',
    icon: (
      <BotMessageSquare size={20} strokeWidth={1} className='text-foreground' />
    ),
    href: '/'
  },
  {
    id: 3,
    title: 'مجاني',
    icon: <Percent size={20} strokeWidth={1} className='text-foreground' />,
    href: '/'
  },
  {
    id: 4,
    title: 'خصومات',
    icon: <Percent size={20} strokeWidth={1} className='text-foreground' />,
    href: '/'
  }
  // {
  //   id: 5,
  //   title: "التعليقات",
  //   icon: <Percent size={20} strokeWidth={1} className="text-foreground" />,
  //   href: "/",
  // },

  // {
  //     id: 6,
  //     title: "النجوم",
  //     icon: <MessagesSquare size={20} strokeWidth={1} className="text-foreground" />,
  //     href: "/",
  //   },
]
export const socialMenu = [
  {
    id: 1,
    title: 'تيك توك',
    icon: <Tiktok className='size-4 text-foreground' />,
    href: '/'
  },
  {
    id: 2,
    title: 'انستجرام',
    icon: <Instagram className='size-4 text-foreground' />,
    href: '/'
  },
  {
    id: 3,
    title: 'يوتيوب',
    icon: <Youtube className='size-4 text-foreground' />,
    href: '/'
  },
  {
    id: 4,
    title: 'فيس بوك',
    icon: <Facebook className='size-4 text-foreground' />,
    href: '/'
  },
  {
    id: 5,
    title: 'تويتر',
    icon: <XTwitter className='size-4 text-foreground' />,
    href: '/'
  }
]

export const filterMenu = [
  {
    id: 1,
    title: 'حسب النجوم',
    icon: <Star className='size-4 text-foreground' />
  },
  {
    id: 2,
    title: 'حسب التعليقات',
    icon: <MessageCircleMore className='size-4 text-foreground' />
  }
]

export const userMenuItems = [
  {
    id: 1,
    title: 'التقييم',
    icon: <StarFilled size={20} strokeWidth={1} className='text-foreground' />
  },
  {
    id: 2,
    title: 'المفضلة',
    icon: (
      <HeartHandshake size={20} strokeWidth={1} className='text-foreground' />
    )
  },
  {
    id: 3,
    title: 'إعجاب',
    icon: <Like />
  },
  {
    id: 4,
    title: 'الاعجاب السلبي',
    icon: <Dislike className='size-8 text-primary' />
  },
  {
    id: 5,
    title: 'سجل المشاهدات',
    icon: <HistoryIcon className='size-8 text-primary' />
  },
  {
    id: 6,
    title: 'استشارة',
    icon: (
      <BotMessageSquare size={20} strokeWidth={1} className='text-foreground' />
    )
  },
  {
    id: 7,
    title: 'التعليقات',
    icon: <EMail className='size-8 text-primary' />
  },
  {
    id: 8,
    title: 'ارسال كرت صيانة',
    icon: <SendService className='size-5' />
  },
  {
    id: 9,
    title: 'راسلنا',
    icon: <EMail className='size-8 text-primary' />
  }
]

export function createUserMenuLinks(menuItems, userId) {
  return userMenuItems.map(({ id, title }) => ({
    id,
    title,
    href: `/user/${id}/${userId}`
  }))
}
