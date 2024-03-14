import { useEffect } from 'react';

const TokenStorage = ({ token }) => {
  useEffect(() => {
    if (token) {
      console.log("Token:", token);
      localStorage.setItem('token', token);
      console.log("Token stored in localStorage.");
    }
  }, [token]);

  return null; // This component doesn't render anything
};

export default TokenStorage;
