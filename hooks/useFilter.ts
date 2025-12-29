import { useState, useMemo } from 'react';

interface FilterOptions<T> {
  data: T[];
  filterField: keyof T;
  filterValue?: string;
}

export function useFilter<T>({ data, filterField, filterValue: initialValue = 'All' }: FilterOptions<T>) {
  const [filterValue, setFilterValue] = useState(initialValue);

  const filteredData = useMemo(() => {
    if (filterValue === 'All') return data;
    return data.filter((item) => item[filterField] === filterValue);
  }, [data, filterField, filterValue]);

  return {
    filterValue,
    setFilterValue,
    filteredData,
  };
}

