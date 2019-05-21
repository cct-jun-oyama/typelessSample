import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { UserOrderView } from './components/UserOrderView';
import { UserOrderActions, UserOrderState, MODULE } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: UserOrderState = {
  selectUserOrderViewType: 'userSetting',
};

export const reducer = createReducer(initialState).on(
  UserOrderActions.showUserOrderSelectView,
  (state, { viewType }) => {
    state.selectUserOrderViewType = viewType;
  }
);

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
