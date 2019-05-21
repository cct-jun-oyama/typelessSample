import { createActions } from 'typeless';

export const MODULE = 'straight';

export const StraightActions = createActions(MODULE, {
  decrease: null,
  $unmounting: null,
});

export interface StraightState {
  counter: number;
}

declare module 'typeless/types' {
  interface DefaultState {
    straight: StraightState;
  }
}
