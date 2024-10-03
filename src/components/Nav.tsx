/**
 * Author: Le Anh Duc
 * Email: ducvui2003@gmail.com
 * Phone number: +84 965809127
 * Created at: 12/9/24 - 6:03 pm
 * User: ducvui2003
 **/

import React from 'react'
import { Book1, Category2, Message, Setting2, UserOctagon } from 'iconsax-react'
import Logo from './Logo'
import HelpCenter from './HelpCenter'
import AppLink from '@/components/AppLink'

function Nav() {
  return (
    <div className="flex h-screen flex-col">
      <Logo />
      <ul className="mt-14 flex flex-col gap-6">
        <li>
          <AppLink
            to={'/'}
            className={'flex items-center gap-3 px-5 py-3 text-secondary-300'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
          >
            <Category2 size="24" className="text-inherit" />
            Overview
          </AppLink>
        </li>
        <li>
          <AppLink
            to={'/task'}
            className={'flex items-center gap-3 px-5 py-3 text-secondary-300'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
          >
            <Book1 size="24" className="text-inherit" /> Task
          </AppLink>
        </li>
        <li>
          <AppLink
            className={'flex items-center gap-3 px-5 py-3 text-secondary-300'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
            to={'/mentor'}
          >
            <UserOctagon size="24" className="text-inherit" />
            Mentor
          </AppLink>
        </li>
        <li>
          <AppLink
            to={'/message'}
            className={'flex items-center gap-3 px-5 py-3 text-secondary-300'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
          >
            <Message size="24" className="text-inherit" />
            Message
          </AppLink>
        </li>
        <li>
          <AppLink
            to={'setting'}
            className={'flex items-center gap-3 px-5 py-3 text-secondary-300'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
          >
            <Setting2 size="24" className="text-inherit" /> Setting
          </AppLink>
        </li>
      </ul>
      <div className="mt-auto">
        <HelpCenter />
      </div>
    </div>
  )
}

export default Nav
