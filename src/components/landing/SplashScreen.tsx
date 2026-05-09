'use client';

import { useState, useSyncExternalStore } from 'react';
import Lottie from 'lottie-react';
import netflixIntro from '@/assets/lottie/netflix-intro.json';

const noop = () => () => {};

interface SplashScreenProps {
  children: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const alreadyShown = useSyncExternalStore(
    noop,
    () => !!sessionStorage.getItem('splashShown'),
    () => false,
  );
  const [animationDone, setAnimationDone] = useState(false);

  if (alreadyShown || animationDone) return <>{children}</>;

  return (
    <div className="z-splash fixed inset-0 flex items-center justify-center bg-black">
      <Lottie
        animationData={netflixIntro}
        loop={false}
        onComplete={() => {
          sessionStorage.setItem('splashShown', 'true');
          setAnimationDone(true);
        }}
        className="w-62.5"
      />
    </div>
  );
}
