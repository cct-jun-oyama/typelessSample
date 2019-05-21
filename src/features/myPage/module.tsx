import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { MyPageView } from './components/MyPageView';
import { MyPageActions, MyPageState, MODULE } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: MyPageState = {
  selectToleranceViewType: null,
  holeTypeViewType: null,
};

export const reducer = createReducer(initialState)
  .on(MyPageActions.showToleranceSelectView, (state, { viewType }) => {
    state.selectToleranceViewType = viewType;
  })
  .on(MyPageActions.showHoleSelectView, (state, { viewType }) => {
    state.holeTypeViewType = viewType;
  });

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
