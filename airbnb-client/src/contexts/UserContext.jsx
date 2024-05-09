import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  // Then
  useEffect(() => {
    if (!user) {
      axios
        .get('/profile')
        .then(({ data }) => {
          setUser(data);
          setReady(true);
        })
        .catch((err) => {
          setUser(JSON.parse(localStorage.getItem('userfe')));
          console.log(err);
        });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
