'use client';

export default function SearchItemSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-grey-800 flex h-19 w-full animate-pulse items-center">
          <div className="bg-grey-700/40 h-19 w-[146px] shrink-0 rounded-sm" />
          <div className="flex-1 px-4">
            <div className="bg-grey-700/40 h-4 w-24 rounded" />
          </div>
          <div className="bg-grey-700/40 mr-3 h-7 w-7 shrink-0 rounded-full" />
        </div>
      ))}
    </div>
  );
}
