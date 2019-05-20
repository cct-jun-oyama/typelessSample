import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import { FitToleranceActions, FitToleranceState, MODULE } from './interface';
import { FitToleranceView } from './components/FitToleranceView';

const epic = createEpic(MODULE);

const initialState: FitToleranceState = {
  counter: 0,
};

const reducer = createReducer(initialState)
  .on(FitToleranceActions.decrease, state => {
    state.counter--;
  })
  .on(FitToleranceActions.$unmounting, state => {
    state.counter = 0;
  });

export default function CatModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['fitTolerance'],
    actions: FitToleranceActions,
  });

  return <FitToleranceView />;
}
