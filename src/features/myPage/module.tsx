import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { MyPageView } from './components/MyPageView';
import { MyPageActions, MyPageState, MODULE } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: MyPageState = {
  foo: 'bar',
  viewType: null,
};

export const reducer = createReducer(initialState).on(
  MyPageActions.show,
  (state, { viewType }) => {
    state.viewType = viewType;
  }
);

// --- Module ---
export default () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['myPage'],
    actions: MyPageActions,
  });
  return <MyPageView />;
};
