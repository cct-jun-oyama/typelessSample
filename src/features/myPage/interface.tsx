import React from 'react';
import { DefaultSuspense } from 'src/components/DefaultSuspense';
import { RouteConfig } from 'src/types';
import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'myPage';

// --- Actions ---
export const MyPageActions = createActions(MODULE, {
  showToleranceSelectView: (viewType: SelectToleranceViewType) => ({
    payload: { viewType },
  }),
  showHoleSelectView: (viewType: HoleTypeViewType) => ({
    payload: { viewType },
  }),
});
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
  selectToleranceViewType: SelectToleranceViewType | null;
  holeTypeViewType: HoleTypeViewType | null;
}

declare module 'typeless/types' {
  export interface DefaultState {
    myPage: MyPageState;
  }
}

export type SelectToleranceViewType =
  | 'noTolerance'
  | 'fitTolerance'
  | 'oneSidedTolerance'
  | 'twoSidedTolerance';

export type HoleTypeViewType = 'insert' | 'straight' | 'tap';
