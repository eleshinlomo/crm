'use client'
import { createContext, useContext, ReactNode } from 'react';

interface CompanyContextProps {
  companyValue: string;
}

interface CompanyProviderProps {
  companyValue: string;
  children: ReactNode;
}

const CompanyContext = createContext<CompanyContextProps | undefined>(undefined);

export const useCompanyValue = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanyValue must be used within a CompanyProvider');
  }
  return context;
};

export const CompanyProvider = ({ companyValue, children }: CompanyProviderProps) => {
  return (
    <CompanyContext.Provider value={{ companyValue }}>
      {children}
    </CompanyContext.Provider>
  );
};
