import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { UserOrderView } from './components/UserOrderView';
import { UserOrderActions, UserOrderState, MODULE } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: UserOrderState = {
  viewType: 'userSetting',
  userName: 'hoge fuga',
  favoritesList: [],
  favorites: '',
  orderNumber: 1,
};

export const reducer = createReducer(initialState)
  .on(UserOrderActions.showUserOrderSelectView, (state, { viewType }) => {
    state.viewType = viewType;
  })
  .on(UserOrderActions.changeName, (state, { name }) => {
    state.userName = name;
  });

// --- Module ---
export default () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['userOrder'],
    actions: UserOrderActions,
  });
  return <UserOrderView />;
};
