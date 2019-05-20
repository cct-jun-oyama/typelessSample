import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { OneSidedToleranceActions } from '../interface';

export function OneSidedToleranceView() {
  const { double } = useActions(OneSidedToleranceActions);
  const { counter } = useMappedState(state => state.oneSidedTolerance);

  return (
    <div>
      Module C. <br />
      Counter {counter} <br />
      <button onClick={double}>double</button>
    </div>
  );
}
