import { createActions } from 'typeless';

export const MODULE = 'fitTolerance';

export const UserSettingActions = createActions(MODULE, {
  decrease: null,
  $unmounting: null,
});

export interface UserSettingState {
  counter: number;
}

declare module 'typeless/types' {
  interface DefaultState {
    userSetting: UserSettingState;
  }
}
