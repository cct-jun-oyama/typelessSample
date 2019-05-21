import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { UserSettingActions } from '../interface';

export function UserSettingView() {
  const { decrease } = useActions(UserSettingActions);
  const { counter } = useMappedState(state => state.userSetting);

  return (
    <div style={{ width: '300px' }}>
      <label>名前</label>
      <input name="username" value="hoge" />
      <p>好きなもの</p>
      <label>
        くだもの
        <input type="checkbox" id="fruit" />
      </label>
      <label>
        肉
        <input type="checkbox" id="meat" />
      </label>
      <label>
        金属
        <input type="checkbox" id="metal" />
      </label>
    </div>
  );
}
