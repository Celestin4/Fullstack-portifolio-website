import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    authenticated: false,
    user: null
  });
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/users/', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          setAuthState({ authenticated: true, user: res.data });
          console.log(res.data)

        })
        .catch(err => console.log(err));
    }
  }, []);

  function handleLogin(email, password) {
    axios.post('/api/users/login', { email, password })
      .then(res => {
        setAuthState({ authenticated: true, user: res.data });
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
      })
      .catch(err => console.log(err));
  }

  function handleLogout() {
    setAuthState({ authenticated: false, user: null });
    localStorage.removeItem('token');
  }
  console.log(authState)

  const value = {
    authenticated: authState.authenticated,
    user: authState.user,
    login: handleLogin,
    logout: handleLogout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
