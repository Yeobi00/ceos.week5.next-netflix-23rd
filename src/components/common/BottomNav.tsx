'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import HomeIcon from '@/assets/icons/ic-home.svg';
import SearchIcon from '@/assets/icons/ic-search.svg';
import ComingSoonIcon from '@/assets/icons/ic-comingsoon.svg';
import DownloadsIcon from '@/assets/icons/ic-downloads.svg';
import MoreIcon from '@/assets/icons/ic-more.svg';

const NAV_ITEMS = [
  { name: 'Home', icon: HomeIcon, href: '/' },
  { name: 'Search', icon: SearchIcon, href: '/search' },
  { name: 'Coming Soon', icon: ComingSoonIcon, href: '/coming-soon' },
  { name: 'Downloads', icon: DownloadsIcon, href: '/downloads' },
  { name: 'More', icon: MoreIcon, href: '/more' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="z-nav fixed right-0 bottom-8 left-0 mx-auto w-full max-w-[375px]">
      <div className="bg-grey-900 flex h-14 items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              href={item.href}
              key={item.name}
              className="flex cursor-pointer flex-col items-center gap-2"
            >
              <div className={`relative h-[18px] w-[18px] ${isActive ? '' : 'opacity-40'}`}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className={isActive ? '' : 'brightness-[0.55]'}
                />
              </div>
              <span className={`text-caption2 ${isActive ? 'text-white' : 'text-grey-700'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
