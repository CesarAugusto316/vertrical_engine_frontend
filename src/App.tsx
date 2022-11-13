import { FC } from 'react';
import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import '@animxyz/core';
import { XyzTransition } from '@animxyz/react';
import { Navbar, Layout } from './components';
import { Home, MedicineDetails } from './pages';


export const App: FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <Navbar />
      <XyzTransition
        appear
        xyz="fade small-5 in-left-25% out-right-25% duration-4 ease-out"
        mode="out-in"
      >
        <div key={location.key} className="section">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/medicine-details/:id" element={<MedicineDetails />} />
          </Routes>
        </div>
      </XyzTransition>
    </Layout>
  );
};
