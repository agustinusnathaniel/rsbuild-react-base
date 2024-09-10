import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from '@/lib/layout';
import { Routings } from '@/lib/router/routings';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  );
};
