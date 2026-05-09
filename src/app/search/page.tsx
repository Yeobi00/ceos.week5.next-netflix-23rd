'use client';

import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import SearchBar from '@/components/search/SearchBar';
import TopSearches from '@/components/search/TopSearches';
import SearchResults from '@/components/search/SearchResults';

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedQuery = useDebounce(searchInput, 300);

  return (
    <div>
      <div className="h-11 bg-black" />
      <SearchBar value={searchInput} onChange={setSearchInput} />
      <section>
        <h2 className="text-heading1 px-4 py-3.5 text-white">Top Searches</h2>
        {debouncedQuery ? <SearchResults query={debouncedQuery} /> : <TopSearches />}
      </section>
    </div>
  );
}
