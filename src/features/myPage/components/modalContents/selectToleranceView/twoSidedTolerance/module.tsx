import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import {
  TwoSidedToleranceActions,
  TwoSidedToleranceState,
  MODULE,
} from './interface';
import { TwoSidedToleranceView } from './components/TwoSidedToleranceView';

const epic = createEpic(MODULE);

const initialState: TwoSidedToleranceState = {
  counter: 1,
};

const reducer = createReducer(initialState).on(
  TwoSidedToleranceActions.double,
  state => {
    state.counter *= 2;
  }
);

export default function CatModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['twoSidedTolerance'],
  });

  return <TwoSidedToleranceView />;
}
