import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import { StraightActions, StraightState, MODULE } from './interface';
import { StraightView } from './components/StraightView';

const epic = createEpic(MODULE);

const initialState: StraightState = {
  counter: 0,
};

const reducer = createReducer(initialState)
  .on(StraightActions.decrease, state => {
    state.counter--;
  })
  .on(StraightActions.$unmounting, state => {
    state.counter = 0;
  });

export default function CatModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['straight'],
    actions: StraightActions,
  });

  return <StraightView />;
}
