import { createContext } from 'react';

export const AccountContext = createContext({});

export default function AccountContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AccountContext.Provider value={{}}>{children}</AccountContext.Provider>
  );
}
