import React from 'react';
import { DefaultSuspense } from 'src/components/DefaultSuspense';
import { RouteConfig } from 'src/types';
import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'sampleApi';

// --- Actions ---
export const SampleApiActions = createActions(MODULE, {});

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'));

const SampleApiRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
);

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/sampleApi',
  component: <SampleApiRoute />,
};

// --- Types ---
export interface SampleApiState {
  foo: string;
}

declare module 'typeless/types' {
  export interface DefaultState {
    sampleApi: SampleApiState;
  }
}
