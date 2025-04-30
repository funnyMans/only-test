'use client';
import { createContext, useState, PropsWithChildren, useCallback } from 'react';

// 1. Create the context

export interface HistoricalDatesContextType {
  currentCategory: string;
  handleCategorySelection?: (category: string) => void;
}
export const HistoricalDatesContext = createContext<HistoricalDatesContextType>(
  {
    currentCategory: 'cinema',
  }
);

// 2. Provider component
const HistoricalDatesContextProvider = ({ children }: PropsWithChildren) => {
  const [currentCategory, setCurrentCategory] = useState<string>('cinema');

  const handleCategorySelection = useCallback((category: string) => {
    setCurrentCategory(category);
  }, []);

  return (
    <HistoricalDatesContext.Provider
      value={{ currentCategory, handleCategorySelection }}
    >
      {children}
    </HistoricalDatesContext.Provider>
  );
};

export default HistoricalDatesContextProvider;
