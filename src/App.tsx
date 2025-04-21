import React from 'react';
import { LandingPage } from '@/pages';
import { useScrollObserver } from './hooks';

const App: React.FC = () => {
  useScrollObserver();
  return <LandingPage />;
};

export default App;
