import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { OrderActions } from '../interface';

export function OrderView() {
  const { double } = useActions(OrderActions);
  const { counter } = useMappedState(state => state.order);

  return (
    <div style={{ width: '300px' }}>
      <p>穴径公差タイプ</p>
      <select>
        <option value="noTolerance">りんご</option>
        <option value="fitTolerance">ばなな</option>
        <option value="oneSidedTolerance">ラム</option>
        <option value="twoSidedTolerance">ウマ</option>
        <option value="twoSidedTolerance">鉄</option>
        <option value="twoSidedTolerance">銅</option>
      </select>
      <p>数量</p>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>合計 0</p>
    </div>
  );
}
