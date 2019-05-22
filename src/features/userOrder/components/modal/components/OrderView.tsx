import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { Actions, OrderNumbers, Favorites } from '../interface';

export const OrderView = () => {
  const { selectFavorites } = useActions(Actions);
  const { favoritesList } = useMappedState(state => state.userOrderModal);
  return (
    <div style={{ width: '300px' }}>
      <p>すきなもの</p>
      <select onChange={e => selectFavorites(e.target.value as Favorites)}>
        {favoritesList.map((v, i) => {
          return (
            <option key={i} value={v.id}>
              {v.name}
            </option>
          );
        })}
      </select>
      <p>数量</p>
      <select>
        {OrderNumbers.map((v: number, i) => {
          return (
            <option key={i} value="v">
              {v}
            </option>
          );
        })}
      </select>
      <p>合計 0</p>
    </div>
  );
};

export default OrderView;
