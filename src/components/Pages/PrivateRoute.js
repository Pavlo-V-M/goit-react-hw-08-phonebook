import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const userloggedIn = useSelector(state => state.auth.isLoggedIn);

  return userloggedIn ? <Navigate to="/contacts" /> : children;
};
