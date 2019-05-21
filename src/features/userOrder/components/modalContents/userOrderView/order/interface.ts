import { createActions } from 'typeless';

export const MODULE = 'oneSidedTolerance';

export const OrderActions = createActions(MODULE, {
  double: null,
});

export interface OrderState {
  counter: number;
}

declare module 'typeless/types' {
  interface DefaultState {
    order: OrderState;
  }
}
