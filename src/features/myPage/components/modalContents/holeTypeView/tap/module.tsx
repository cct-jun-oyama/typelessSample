import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import { TapActions, TapState, MODULE } from './interface';
import { TapView } from './components/TapView';

const epic = createEpic(MODULE);

const initialState: TapState = {
  counter: 1,
};

const reducer = createReducer(initialState).on(TapActions.double, state => {
  state.counter *= 2;
});

export default function CatModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['tap'],
  });

  return <TapView />;
}
