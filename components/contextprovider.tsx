'use client'
import { createContext, useContext, ReactNode } from 'react';

interface CompanyContextType {
  companyValue: string;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const useCompanyValue = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanyValue must be used within a CompanyProvider');
  }
  return context.companyValue;
};

interface CompanyProviderProps {
  companyValue: string;
  children: ReactNode;
}

export const CompanyProvider = ({ companyValue, children } : CompanyProviderProps) => {
  return <CompanyContext.Provider value={{ companyValue }}>{children}</CompanyContext.Provider>;
};
