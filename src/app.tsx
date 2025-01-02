import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router';

import { Layout } from '@/lib/layout';
import { Routings } from '@/lib/router/routings';

export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </HelmetProvider>
  );
};
