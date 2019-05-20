import { createActions } from 'typeless';

export const MODULE = 'oneSidedTolerance';

export const OneSidedToleranceActions = createActions(MODULE, {
  double: null,
});

export interface OneSidedToleranceState {
  counter: number;
}

declare module 'typeless/types' {
  interface DefaultState {
    oneSidedTolerance: OneSidedToleranceState;
  }
}
