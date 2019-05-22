import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { ModalView } from './components/ModalView';
import { Actions, State, MODULE } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: State = {
  viewType: 'userSetting',
  userName: 'hoge fuga',
  favoritesList: [],
  favorites: '',
  orderNumber: 1,
};

export const reducer = createReducer(initialState)
  .on(Actions.selectView, (state, { viewType }) => {
    state.viewType = viewType;
  })
  .on(Actions.changeName, (state, { name }) => {
    state.userName = name;
  });

// --- Module ---
export default () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['userOrderModal'],
    actions: Actions,
  });
  return <ModalView />;
};

export const useModalModule = () =>
  useModule({
    epic,
    reducer,
    reducerPath: ['userOrderModal'],
    actions: Actions,
  });
