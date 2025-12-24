import { Route, Routes } from 'react-router';
import { PAGE_ROUTES } from './Router.types';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path={PAGE_ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}
