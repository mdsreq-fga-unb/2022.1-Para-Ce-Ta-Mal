import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localUser);

  function persistUser(UserData) {
    setUser(UserData);
    localStorage.setItem("user", JSON.stringify(UserData));
  }

  useEffect(() => {
    setUser(localUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, persistUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
