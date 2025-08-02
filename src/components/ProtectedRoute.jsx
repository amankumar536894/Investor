import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, shouldRedirect } = useAuth();

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'white'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  // Redirect to login if no token or should redirect
  if (!isAuthenticated() || shouldRedirect) {
    console.log('ProtectedRoute: Redirecting to login - isAuthenticated:', isAuthenticated(), 'shouldRedirect:', shouldRedirect);
    return <Navigate to="/loggin" replace />;
  }

  return children;
};

export default ProtectedRoute; 