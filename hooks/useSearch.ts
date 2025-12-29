import { useState, useMemo } from 'react';

interface SearchOptions<T> {
  data: T[];
  searchFields: (keyof T)[];
  filterFn?: (item: T, searchTerm: string) => boolean;
}

export function useSearch<T>({ data, searchFields, filterFn }: SearchOptions<T>) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    const lowerSearchTerm = searchTerm.toLowerCase();

    if (filterFn) {
      return data.filter((item) => filterFn(item, lowerSearchTerm));
    }

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        return String(value).toLowerCase().includes(lowerSearchTerm);
      })
    );
  }, [data, searchTerm, searchFields, filterFn]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
}

