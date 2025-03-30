import { createContext, useEffect, useState } from "react";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";
import jwt from "jwt-decode";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email, password) {
    try {
      const response = await loginRequest(email, password);
      if ("success" in response) {
        const retLogin = {
          token: response.result,
        };

        const payload = jwt(retLogin.token);
        payload.token = retLogin.token;

        setUser(payload);
        setUserLocalStorage(payload);

        return true;
      }

      let errorMessage = response.response.data.result;

      setError(errorMessage);
    } catch (error) {
      setError(error.message);
    }
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
    setError(null);
  }

  function clearLoginError() {
    setError(null);
  }

  return (
    <AuthContext.Provider
      value={{ ...user, error, authenticate, clearLoginError, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
