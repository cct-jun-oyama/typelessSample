import React from 'react';
import { Dashboard } from 'src/components/Dashboard';
import CatView from './cat/module';

export const SampleApiView = () => {
  return (
    <Dashboard>
      <h2>Sample API</h2>
      <CatView />
    </Dashboard>
  );
};
