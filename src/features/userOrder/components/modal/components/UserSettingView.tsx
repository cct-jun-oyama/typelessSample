import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { Actions } from '../interface';
import _ from 'lodash';

export const UserSettingView = () => {
  const { changeName, selectFavoritesList } = useActions(Actions);
  const { userName, favoritesKindList } = useMappedState(
    state => state.userOrderModal
  );
  return (
    <div style={{ width: '300px' }}>
      <label>名前</label>
      <input
        name="username"
        value={userName}
        onChange={e => changeName(e.target.value as string)}
      />
      <p>好きなもの</p>
      {favoritesKindList.map((v, i) => {
        return (
          <label key={i}>
            {v.name}
            <input
              type="checkbox"
              checked={v.checked}
              onChange={e =>
                selectFavoritesList({
                  id: v.id,
                  name: v.name,
                  checked: e.target.checked,
                })
              }
            />
          </label>
        );
      })}
    </div>
  );
};

export default UserSettingView;
