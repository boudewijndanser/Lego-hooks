import React, { useState, createContext } from 'react';
import { User } from '../types'

interface UserProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext({ user: {kind: 'loggedOut'}, setUser: (user: User) => { } })

export const UserProvider = ({ children }: UserProviderProps) => {

  const [user, setUser] = useState<User>({kind: 'loggedOut'})
console.log('-> user: ', user)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};