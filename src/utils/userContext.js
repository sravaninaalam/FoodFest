
import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

//   useEffect(() => {
//     try {
//       const saved = localStorage.getItem("foodfest_user");
//       setUser(saved ? JSON.parse(saved) : null);
//     } catch {
//       setUser(null);
//     } finally {
//       setAuthReady(true);
//     }
//   }, []);
useEffect(() => {
  try {
    const saved = localStorage.getItem("foodfest_user");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(
          typeof parsed === "string"
            ? { name: parsed, mail: "" }
            : parsed
        );
      } catch {
        setUser({ name: saved, mail: "" });
      }
    }
  } finally {
    setAuthReady(true);
  }
}, []);

  const login = (matchedUser) => {
    const sessionUser = {
      name: matchedUser.name,
      mail: matchedUser.mail,
    };

    localStorage.setItem("foodfest_user", JSON.stringify(sessionUser));
    setUser(sessionUser);
  };

  const logout = () => {
    localStorage.removeItem("foodfest_user");
    setUser(null);
  };

  return (
    <userContext.Provider
      value={{
        user,
        logUserName: user?.name || "",
        isAuthenticated: Boolean(user),
        authReady,
        login,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};

export default userContext;
