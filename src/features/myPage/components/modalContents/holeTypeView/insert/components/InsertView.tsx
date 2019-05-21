import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { InsertActions } from '../interface';

export function InsertView() {
  const { double } = useActions(InsertActions);
  const { counter } = useMappedState(state => state.insert);

  return (
    <div>
      Module Two. <br />
      Counter {counter} <br />
      <button onClick={double}>double</button>
    </div>
  );
}
