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
  { id: 'apple', name: 'りんご', amount: 140, kind: 'fruit', selected: true },
  { id: 'banana', name: 'ばなな', amount: 180, kind: 'fruit', selected: false },
  { id: 'sheep', name: 'ひつじ', amount: 700, kind: 'meat', selected: false },
  { id: 'horse', name: 'うま', amount: 800, kind: 'meat', selected: false },
  { id: 'iron', name: 'てつ', amount: 510, kind: 'metal', selected: false },
  { id: 'copper', name: 'どう', amount: 600, kind: 'metal', selected: false },
];

export const OrderNumberList: OrderNumberList = [
  { id: 1, selected: true },
  { id: 2, selected: false },
  { id: 3, selected: false },
  { id: 4, selected: false },
  { id: 5, selected: false },
  { id: 6, selected: false },
  { id: 7, selected: false },
  { id: 8, selected: false },
  { id: 9, selected: false },
  { id: 10, selected: false },
];

// --- Actions ---
export const Actions = createActions(MODULE, {
  selectView: (viewType: ViewType) => ({
    payload: { viewType },
  }),
  changeName: (name: string) => ({
    payload: { name },
  }),
  selectFavoritesKind: (props: FavoritesKindProps) => ({
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
export type FavoritesKindProps = FavoritesKindData;

// --- Types ---
export interface State {
  viewType: ViewType | null;
  userName: string;
  favoritesKindList: FavoritesKindList;
  favoritesList: FavoritesList;
  orderNumberList: OrderNumberList;
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

export type OrderNumber = { id: number; selected: boolean };
export type OrderNumberList = OrderNumber[];

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
  selected: boolean;
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
