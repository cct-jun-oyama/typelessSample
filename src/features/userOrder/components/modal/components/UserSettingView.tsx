import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { FavoritesList, Actions } from '../interface';

export const UserSettingView = () => {
  const { changeName } = useActions(Actions);
  const { userName } = useMappedState(state => state.userOrderModal);
  return (
    <div style={{ width: '300px' }}>
      <label>名前</label>
      <input
        name="username"
        value={userName}
        onChange={e => changeName(e.target.value as string)}
      />
      <p>好きなもの</p>
      {FavoritesList.map((v, i) => {
        return (
          <label key={i}>
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
};

export default UserSettingView;
