import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import { OrderActions, OrderState, MODULE } from './interface';
import { OrderView } from './components/OrderView';

const epic = createEpic(MODULE);

const initialState: OrderState = {
  counter: 1,
};

const reducer = createReducer(initialState).on(OrderActions.double, state => {
  state.counter *= 2;
});

export default function CatModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['order'],
  });

  return <OrderView />;
}
