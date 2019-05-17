import React from 'react';
import { DefaultSuspense } from 'src/components/DefaultSuspense';
import { RouteConfig } from 'src/types';
import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'myPage';

// --- Actions ---
export const MyPageActions = createActions(MODULE, {});

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'));

const MyPageRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
);

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/mypage',
  component: <MyPageRoute />,
};

// --- Types ---
export interface MyPageState {
  foo: string;
}

declare module 'typeless/types' {
  export interface DefaultState {
    myPage: MyPageState;
  }
}
