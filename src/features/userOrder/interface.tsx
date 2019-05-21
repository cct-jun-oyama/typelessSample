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
  changeName: (name: string) => ({
    payload: { name },
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
  viewType: userOrderViewType | null;
  userName: string;
  favoritesList: favoritesListType[];
  favorites: favorites;
  orderNumber: number;
}

declare module 'typeless/types' {
  export interface DefaultState {
    userOrder: UserOrderState;
  }
}

export type userOrderViewType = 'order' | 'userSetting';

export type favoritesListType = 'fruit' | 'meat' | 'metal';

export type favorites =
  | 'apple'
  | 'banana'
  | 'sheep'
  | 'horse'
  | 'iron'
  | 'copper'
  | '';

export const FavoritesList = [
  { id: 'fruit', name: 'くだもの' },
  { id: 'meat', name: 'にく' },
  { id: 'metal', name: 'きんぞく' },
];

export const Favorites = [
  { id: 'apple', name: 'りんご', amount: 140 },
  { id: 'banana', name: 'ばなな', amount: 180 },
  { id: 'sheep', name: 'ひつじ', amount: 700 },
  { id: 'horse', name: 'うま', amount: 800 },
  { id: 'iron', name: 'てつ', amount: 510 },
  { id: 'copper', name: 'どう', amount: 600 },
];

export const OrderNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
