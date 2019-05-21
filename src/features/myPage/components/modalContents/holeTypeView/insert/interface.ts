import { createActions } from 'typeless';

export const MODULE = 'insert';

export const InsertActions = createActions(MODULE, {
  double: null,
});

export interface InsertState {
  counter: number;
}

declare module 'typeless/types' {
  interface DefaultState {
    insert: InsertState;
  }
}
