import { createActions } from 'typeless';

export const MODULE = 'tap';

export const TapActions = createActions(MODULE, {
  double: null,
});

export interface TapState {
  counter: number;
}

declare module 'typeless/types' {
  interface DefaultState {
    tap: TapState;
  }
}
