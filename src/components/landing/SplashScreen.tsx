'use client';

import { useState } from 'react';
import Lottie from 'lottie-react';
import netflixIntro from '@/assets/lottie/netflix-intro.json';

interface SplashScreenProps {
  children: React.ReactNode;
}

function getInitialStatus(): 'splash' | 'done' {
  if (typeof window === 'undefined') return 'splash';
  return sessionStorage.getItem('splashShown') ? 'done' : 'splash';
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [status, setStatus] = useState<'splash' | 'done'>(getInitialStatus);

  if (status === 'done') return <>{children}</>;

  return (
    <div className="z-splash fixed inset-0 flex items-center justify-center bg-black">
      <Lottie
        animationData={netflixIntro}
        loop={false}
        onComplete={() => {
          sessionStorage.setItem('splashShown', 'true');
          setStatus('done');
        }}
        className="w-62.5"
      />
    </div>
  );
}
