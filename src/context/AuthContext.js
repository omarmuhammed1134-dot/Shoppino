import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 


  useEffect(() => {
 
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token }); 
    }

  }, []);

  const loginAuth = (token) => {
    localStorage.setItem("token", token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
