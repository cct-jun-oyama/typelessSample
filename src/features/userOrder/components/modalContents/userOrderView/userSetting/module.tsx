import React from 'react';
import { useModule, createEpic, createReducer } from 'typeless';
import { UserSettingActions, UserSettingState, MODULE } from './interface';
import { UserSettingView } from './components/UserSettingView';

const epic = createEpic(MODULE);

const initialState: UserSettingState = {
  counter: 0,
};

const reducer = createReducer(initialState)
  .on(UserSettingActions.decrease, state => {
    state.counter--;
  })
  .on(UserSettingActions.$unmounting, state => {
    state.counter = 0;
  });

export default function CatModule() {
  useModule({
    epic,
    reducer,
    reducerPath: ['userSetting'],
    actions: UserSettingActions,
  });

  return <UserSettingView />;
}
