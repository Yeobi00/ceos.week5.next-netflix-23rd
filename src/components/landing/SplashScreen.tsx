'use client';

import { useState } from 'react';
import Lottie from 'lottie-react';
import netflixIntro from '@/assets/lottie/netflix-intro.json';

interface SplashScreenProps {
  children: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);

  if (!showSplash) {
    return <>{children}</>;
  }

  return (
    <div className="z-splash fixed inset-0 flex items-center justify-center bg-black">
      <Lottie
        animationData={netflixIntro}
        loop={false}
        onComplete={() => setShowSplash(false)}
        className="w-62.5"
      />
    </div>
  );
}
