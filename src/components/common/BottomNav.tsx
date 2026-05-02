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
    <nav className="bg-grey-900 z-nav fixed right-0 bottom-0 left-0 w-full">
      <div className="flex items-center justify-around py-5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              href={item.href}
              key={item.name}
              className="flex cursor-pointer flex-col items-center gap-4"
            >
              <div className={`relative h-6 w-6 ${isActive ? '' : 'opacity-40'}`}>
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
