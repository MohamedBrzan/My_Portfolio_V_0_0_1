import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const IsLogged = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState({ success: false, user: {} });
  const [loading, setLoading] = useState(false);

  const checkUserLoggedIn = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        method: 'GET',
        url: '/api/v1/user/admin',
      });
      setLoggedIn({
        success: data.success,
        user: data.user,
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setLoggedIn({ success: false, user: {} });
      console.log(error.message);
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
