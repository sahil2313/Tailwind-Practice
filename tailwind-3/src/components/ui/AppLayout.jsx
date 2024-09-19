import React from 'react';
import { Header } from '../Header';
import { Home } from '../Home';
import { CardOverview } from '../CardOverview';

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Home />
      <CardOverview />
    </div>
  );
};

export default AppLayout;
