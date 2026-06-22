import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectRoutes({ isLoggedIn, children }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" 
    state={{ from: location }} 
    replace
     />;
  }

  return children;
}