import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { TwoSidedToleranceActions } from '../interface';

export function TwoSidedToleranceView() {
  const { double } = useActions(TwoSidedToleranceActions);
  const { counter } = useMappedState(state => state.twoSidedTolerance);

  return (
    <div>
      Module Two. <br />
      Counter {counter} <br />
      <button onClick={double}>double</button>
    </div>
  );
}
