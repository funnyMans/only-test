import { useContext } from 'react';
import {
  HistoricalDatesContext,
  HistoricalDatesContextType,
} from '../context/HistoricalDatesContext';

export const useHistoricalDatesContext = (): HistoricalDatesContextType =>
  useContext(HistoricalDatesContext);
