import { createActions } from 'typeless';

export const MODULE = 'twoSidedTolerance';

export const TwoSidedToleranceActions = createActions(MODULE, {
  double: null,
});

export interface TwoSidedToleranceState {
  counter: number;
}

declare module 'typeless/types' {
  interface DefaultState {
    twoSidedTolerance: TwoSidedToleranceState;
  }
}
