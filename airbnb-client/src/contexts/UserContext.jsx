import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Asycn/await
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (!user) {
  //       const { userData } = await axios.get("/profile");
  //       return userData;
  //     }
  //   };
  //   const userData = fetchData();
  //   setUser(userData);
  // }, [user]);

  // Then
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
