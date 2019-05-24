import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { Actions, OrderNumber, Favorites } from '../interface';
import { FilteredFavoritesList } from '../selectors';

export const OrderView = () => {
  const { selectFavorites, selectOrderNumber } = useActions(Actions);
  const {
    totalAmount,
    orderNumberList,
    favorites,
    orderNumber,
  } = useMappedState(state => state.userOrderModal);
  return (
    <div style={{ width: '300px' }}>
      <p>すきなもの</p>
      <select
        onChange={e => selectFavorites(e.target.value as Favorites)}
        defaultValue={favorites}
      >
        {FilteredFavoritesList().map((v, i) => {
          return (
            <option key={i} value={v.id}>
              {v.name}
            </option>
          );
        })}
      </select>
      <p>数量</p>
      <select
        onChange={e => selectOrderNumber(Number(e.target.value))}
        defaultValue={String(orderNumber)}
      >
        {orderNumberList.map((v: OrderNumber, i) => {
          return (
            <option key={i} value={v.id} selected={v.selected}>
              {v.id}
            </option>
          );
        })}
      </select>
      <p>合計 {totalAmount}円</p>
    </div>
  );
};

export default OrderView;
