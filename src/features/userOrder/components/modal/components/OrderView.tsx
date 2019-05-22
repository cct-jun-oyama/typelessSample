import React from 'react';
// import { useActions, useMappedState } from 'typeless';
import { Favorites, OrderNumbers } from '../interface';

export const OrderView = () => {
  // const { double } = useActions(OrderActions);
  // const { counter } = useMappedState(state => state.order);

  return (
    <div style={{ width: '300px' }}>
      <p>すきなもの</p>
      <select>
        {Favorites.map((v, i) => {
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
