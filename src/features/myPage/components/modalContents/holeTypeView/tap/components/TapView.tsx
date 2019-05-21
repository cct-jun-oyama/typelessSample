import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { TapActions } from '../interface';

export function TapView() {
  const { double } = useActions(TapActions);
  const { counter } = useMappedState(state => state.tap);

  return (
    <div>
      Module C. <br />
      Counter {counter} <br />
      <button onClick={double}>double</button>
    </div>
  );
}
