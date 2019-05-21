import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import { InsertActions, InsertState, MODULE } from './interface';
import { InsertView } from './components/InsertView';

const epic = createEpic(MODULE);

const initialState: InsertState = {
  counter: 1,
};

const reducer = createReducer(initialState).on(InsertActions.double, state => {
  state.counter *= 2;
});

export default function CatModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['insert'],
  });

  return <InsertView />;
}
