import { createActions } from 'typeless';

export const MODULE = 'fitTolerance';

export const FitToleranceActions = createActions(MODULE, {
  decrease: null,
  $unmounting: null,
});

export interface FitToleranceState {
  counter: number;
}

declare module 'typeless/types' {
  interface DefaultState {
    fitTolerance: FitToleranceState;
  }
}
