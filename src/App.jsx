import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
const App = () => {
  const Home = lazy(() => import('./pages/home/Home'));
  const AllProjects = lazy(() => import('./pages/projects/AllProjects'));
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/projects'
          element={
            <Suspense fallback={<Loader />}>
              <AllProjects />
            </Suspense>
          }
        />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;
