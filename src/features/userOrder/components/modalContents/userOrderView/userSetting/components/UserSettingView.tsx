import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { FavoritesList, UserOrderActions } from '../../../../../interface';

export function UserSettingView() {
  const { changeName } = useActions(UserOrderActions);
  const { userName } = useMappedState(state => state.userOrder);
  return (
    <div style={{ width: '300px' }}>
      <label>名前</label>
      <input
        name="username"
        value={userName}
        onChange={e => changeName(e.target.value as string)}
      />
      <p>好きなもの</p>
      {FavoritesList.map(v => {
        return (
          <label>
            {v.name}
            <input
              type="checkbox"
              id={v.id}
              onChange={e => changeName(String(e.target.checked) as string)}
            />
          </label>
        );
      })}
    </div>
  );
}
