import React from 'react';
import { DefaultSuspense } from 'src/components/DefaultSuspense';
import { RouteConfig } from 'src/types';
import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'userOrderModal';

export const FavoritesKindList: FavoritesKindList = [
  { id: 'fruit', name: 'くだもの', checked: false },
  { id: 'meat', name: 'にく', checked: false },
  { id: 'metal', name: 'きんぞく', checked: false },
];

export const FavoritesList: FavoritesList = [
  { id: 'apple', name: 'りんご', amount: 140, kind: 'fruit' },
  { id: 'banana', name: 'ばなな', amount: 180, kind: 'fruit' },
  { id: 'sheep', name: 'ひつじ', amount: 700, kind: 'meat' },
  { id: 'horse', name: 'うま', amount: 800, kind: 'meat' },
  { id: 'iron', name: 'てつ', amount: 510, kind: 'metal' },
  { id: 'copper', name: 'どう', amount: 600, kind: 'metal' },
];

export const OrderNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// --- Actions ---
export const Actions = createActions(MODULE, {
  selectView: (viewType: ViewType) => ({
    payload: { viewType },
  }),
  changeName: (name: string) => ({
    payload: { name },
  }),
  selectFavoritesList: (props: FavoritesListProps) => ({
    payload: { props },
  }),
  selectFavorites: (favoritesName: Favorites) => ({
    payload: { favoritesName },
  }),
  selectOrderNumber: (orderNumber: number) => ({
    payload: { orderNumber },
  }),
});

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'));

const UserOrderModalRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
);

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/userOrderModal',
  component: <UserOrderModalRoute />,
};

// --- Payload ---
export type FavoritesListProps = FavoritesKindData;

// --- Types ---
export interface State {
  viewType: ViewType | null;
  userName: string;
  favoritesKindList: FavoritesKindList;
  favoritesList: FavoritesList;
  favorites: Favorites;
  orderNumber: number;
  totalAmount: number;
}

declare module 'typeless/types' {
  export interface DefaultState {
    userOrderModal: State;
  }
}

export type ViewType = 'order' | 'userSetting';

export type FavoritesKind = 'fruit' | 'meat' | 'metal' | '';

export type FavoritesKindData = {
  id: FavoritesKind;
  name: string;
  checked: boolean;
};

export type FavoritesKindList = FavoritesKindData[];

export type FavoritesData = {
  id: Favorites;
  name: string;
  amount: number;
  kind: FavoritesKind;
};

export type FavoritesList = FavoritesData[];

export type Favorites =
  | 'apple'
  | 'banana'
  | 'sheep'
  | 'horse'
  | 'iron'
  | 'copper'
  | '';
