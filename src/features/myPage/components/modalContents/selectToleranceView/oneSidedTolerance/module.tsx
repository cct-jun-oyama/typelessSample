import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import {
  OneSidedToleranceActions,
  OneSidedToleranceState,
  MODULE,
} from './interface';
import { OneSidedToleranceView } from './components/OneSidedToleranceView';

const epic = createEpic(MODULE);

const initialState: OneSidedToleranceState = {
  counter: 1,
};

const reducer = createReducer(initialState).on(
  OneSidedToleranceActions.double,
  state => {
    state.counter *= 2;
  }
);

export default function CatModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['oneSidedTolerance'],
  });

  return <OneSidedToleranceView />;
}
