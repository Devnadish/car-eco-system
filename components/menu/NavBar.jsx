'use client'
import GoHome from '@/components/shared/GoHome'
// import { Logo } from '../Logo'
import MainMenu from './MainMenu'
import { usePathname } from 'next/navigation'
import UserMenu from '@/app/_pagecomp/user/usermenu/UserMenu'
import LoginBtn from '@/app/_pagecomp/user/login/LoginBtn'
import NewMail from '@/app/_pagecomp/admin/mailsystem/NewMail'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from '@/lib/icons'

const NavBar = ({ session, newMails }) => {
  const pathName = usePathname()
  let urlPrefix

  if (pathName === '/') {
    urlPrefix = 'admin'
  }

  if (!session) return null
  return (
    <nav className='fixed left-0 top-0 z-50 flex h-[60px] w-full items-center justify-between gap-2 bg-accent  px-3 shadow '>
      <UserMenu session={session} newMails={newMails} />
      <InputSearch />
      {/* <MainMenu /> */}
      {/* <NewMail
        urlPrefix={urlPrefix}
        session={session}
        to={process.env.NEXT_PUBLIC_ADMIN_EMAIL}
      /> */}
      {pathName !== '/' && <GoHome />}
    </nav>
  )
}
export default NavBar

const InputSearch = () => {
  return (
    <div className='flex  w-full items-center justify-center gap-2 bg-accent '>
      <Input type='text' />
      <Button className='h-9 border border-primary bg-primary/50'>
        <Search className='h-4 w-4 text-muted-foreground' />
      </Button>
    </div>
  )
}

// <GoHome />

// <div className='flex w-fit bg-red-400'>
//   {/* {session ? (
//     <UserMenu session={session} newMails={newMails} />
//   ) : (
//     <LoginBtn />
//   )} */}
// </div>
// {pathName === '/' && (
//   <div className='flex w-full items-center justify-between'>
//     <MainMenu />
//     <NewMail
//       urlPrefix={urlPrefix}
//       session={session}
//       to={process.env.NEXT_PUBLIC_ADMIN_EMAIL}
//     />
//   </div>
// )}

// {/* <Logo /> */}
// {/* </div> */}
