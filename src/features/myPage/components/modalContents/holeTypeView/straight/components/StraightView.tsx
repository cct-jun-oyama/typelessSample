import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { StraightActions } from '../interface';

export function StraightView() {
  const { decrease } = useActions(StraightActions);
  const { counter } = useMappedState(state => state.straight);

  return (
    <div>
      Module B. <br />
      Counter {counter} <br />
      <button onClick={decrease}>decrease</button> <br />
      <small>Counter will reset if you unmount this module.</small>
    </div>
  );
}
