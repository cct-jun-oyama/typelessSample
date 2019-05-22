import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { Actions, OrderNumbers, Favorites } from '../interface';

export const OrderView = () => {
  const { selectFavorites, selectOrderNumber } = useActions(Actions);
  const { favoritesList, totalAmount } = useMappedState(
    state => state.userOrderModal
  );
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
      <select onChange={e => selectOrderNumber(Number(e.target.value))}>
        {OrderNumbers.map((v: number, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <p>合計 {totalAmount}円</p>
    </div>
  );
};

export default OrderView;
