import React from 'react';
import { DefaultSuspense } from 'src/components/DefaultSuspense';
import { RouteConfig } from 'src/types';
import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'userOrder';

// --- Actions ---
export const UserOrderActions = createActions(MODULE, {
  showUserOrderSelectView: (viewType: userOrderViewType) => ({
    payload: { viewType },
  }),
});
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
export interface UserOrderState {
  selectUserOrderViewType: userOrderViewType | null;
}

declare module 'typeless/types' {
  export interface DefaultState {
    userOrder: UserOrderState;
  }
}

export type userOrderViewType = 'order' | 'userSetting';
