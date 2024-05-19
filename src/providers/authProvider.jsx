import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [user, setUser_] = useState(localStorage.getItem("user"));

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };
  const setUser = (newUser) =>{
    setUser_(newUser);
  }

  useEffect(() => {
    const getUserInfo = async()=>{
        try{
            const response = await axios.get("http://localhost:5000/api/user");
            localStorage.setItem('user',JSON.stringify(response.data.user));
            setUser(JSON.stringify(response.data.user));
        }catch(error){
            console.log(error.response.data.message);
        }
    };

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      localStorage.setItem('token',token);
      getUserInfo();
    } else {
      delete axios.defaults.headers.common["Authorization"];
      axios.defaults.headers.common["Content-Type"] = "application/json";
      localStorage.removeItem('token')
    }

  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      tokenValue:[token, setToken,],
      userValue:[user, setUser]
    }),
    [token, user]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;