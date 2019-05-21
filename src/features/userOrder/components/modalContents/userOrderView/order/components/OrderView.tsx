import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { OrderActions } from '../interface';
import { Favorites, OrderNumbers } from '../../../../../interface';

export function OrderView() {
  const { double } = useActions(OrderActions);
  const { counter } = useMappedState(state => state.order);

  return (
    <div style={{ width: '300px' }}>
      <p>すきなもの</p>
      <select>
        {Favorites.map(v => {
          return <option value="v.id">{v.name}</option>;
        })}
      </select>
      <p>数量</p>
      <select>
        {OrderNumbers.map((v: number) => {
          return <option value="v">{v}</option>;
        })}
      </select>
      <p>合計 0</p>
    </div>
  );
}
