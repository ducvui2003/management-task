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
import Link from './Link'

function Nav() {
  return (
    <div className="flex flex-col h-screen">
      <Logo />
      <ul className="mt-14 flex flex-col gap-6">
        <li>
          <Link
            to={'/'}
            className={'flex gap-3 items-center px-5 py-3 text-secondary-300'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
          >
            <Category2 size="24" className="text-inherit" />
            Overview
          </Link>
        </li>
        <li>
          <Link
            to={'/task'}
            className={'flex gap-3 items-center text-secondary-300 px-5 py-3'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
          >
            <Book1 size="24" className="text-inherit" /> Task
          </Link>
        </li>
        <li>
          <Link
            className={'flex gap-3 items-center text-secondary-300 px-5 py-3'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
            to={'/mentor'}
          >
            <UserOctagon size="24" className="text-inherit" />
            Mentor
          </Link>
        </li>
        <li>
          <Link
            to={'/message'}
            className={'flex gap-3 items-center text-secondary-300 px-5 py-3'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
          >
            <Message size="24" className="text-inherit" />
            Message
          </Link>
        </li>
        <li>
          <Link
            to={'setting'}
            className={'flex gap-3 items-center text-secondary-300 px-5 py-3'}
            activeClassName="text-secondary-500 bg-[#F5F5F7]"
          >
            <Setting2 size="24" className="text-inherit" /> Setting
          </Link>
        </li>
      </ul>
      <div className="mt-auto">
        <HelpCenter />
      </div>
    </div>
  )
}

export default Nav
