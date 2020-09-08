import React from 'react';
import { useSelector } from 'react-redux';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { signedIn } = useSelector((state) => state.auth);

  return signedIn ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
