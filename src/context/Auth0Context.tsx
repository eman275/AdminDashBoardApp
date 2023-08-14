import  { useContext, ReactNode, createContext  } from 'react';
import { Auth0Provider, useAuth0, User } from '@auth0/auth0-react';

interface Auth0ContextType {
  isLoading: boolean;
  isAuthenticated: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
  user?: User;
}

const Auth0Context = createContext<Auth0ContextType | undefined>(undefined);

interface Auth0ProviderProps {
  children: ReactNode;
}

export const Auth0ProviderWithHistory: React.FC<Auth0ProviderProps> = ({ children }) => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <Auth0Context.Provider value={{ isLoading, isAuthenticated, loginWithRedirect, logout, user }}>
      {children}
    </Auth0Context.Provider>
  );
};

export const useAuth0Context = () => {
  const context = useContext(Auth0Context);
  if (!context) {
    throw new Error('useAuth0Context must be used within an Auth0ProviderWithHistory');
  }
  return context;
};
