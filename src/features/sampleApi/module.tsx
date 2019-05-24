import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { SampleApiView } from './components/SampleApiView';
import { SampleApiActions, SampleApiState, MODULE } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: SampleApiState = {
  foo: 'bar',
};

export const reducer = createReducer(initialState);

// --- Module ---
export default () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['sampleApi'],
    actions: SampleApiActions,
  });
  return <SampleApiView />;
};
