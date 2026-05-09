'use client';

import SearchIcon from '@/assets/icons/ic-search-input.svg';
import DeleteIcon from '@/assets/icons/ic-delete.svg';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="bg-grey-800 flex h-13 items-center gap-2 px-5">
      <SearchIcon className="h-5 w-5 opacity-60" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a show, movie, genre, e.t.c."
        className="text-label2 placeholder:text-grey-600 flex-1 bg-transparent text-white outline-none"
      />
      <button onClick={() => onChange('')}>
        <DeleteIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
