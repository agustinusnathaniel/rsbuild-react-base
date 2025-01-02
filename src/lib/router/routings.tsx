import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router';

import { routes } from './routes';

export const Routings = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<p>Loading...</p>} key={location.pathname}>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
      </Routes>
    </Suspense>
  );
};
