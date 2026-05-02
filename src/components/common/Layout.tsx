import TopNav from './TopNav';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <TopNav />

      {/* 
        메인 콘텐츠: 
        상단바가 투명하므로 pt(패딩 탑)는 디자인에 따라 조절하세요.
        하단바 높이만큼 pb(패딩 바텀)를 주어 콘텐츠가 가려지지 않게 합니다. 
      */}
      <main className="pb-[80px]">{children}</main>

      <BottomNav />
    </div>
  );
}
