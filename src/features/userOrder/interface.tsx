import React from 'react';
import { DefaultSuspense } from 'src/components/DefaultSuspense';
import { RouteConfig } from 'src/types';
import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'userOrder';

// --- Actions ---
export const UserOrderActions = createActions(MODULE, {});
// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'));

const UserOrderRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
);

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/userOrder',
  component: <UserOrderRoute />,
};

// --- Types ---
export interface UserOrderState {}

declare module 'typeless/types' {
  export interface DefaultState {
    userOrder: UserOrderState;
  }
}
