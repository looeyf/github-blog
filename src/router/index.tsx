import { Route, Routes } from 'react-router';
import { PAGE_ROUTES } from './Router.types';
import { Home } from '../pages/Home';
import { DefaultLayout } from '../layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path={PAGE_ROUTES.HOME} element={<Home />} />
      </Route>
    </Routes>
  );
}
