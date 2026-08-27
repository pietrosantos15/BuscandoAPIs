import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// layout
import { RootLayout } from './layouts/RootLayout';

// pages
import { Home } from './pages/Home';
import { Repos } from './pages/Repos';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="repos/:username" element={<Repos />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
