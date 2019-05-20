import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { FitToleranceActions } from '../interface';

export function FitToleranceView() {
  const { decrease } = useActions(FitToleranceActions);
  const { counter } = useMappedState(state => state.fitTolerance);

  return (
    <div>
      Module B. <br />
      Counter {counter} <br />
      <button onClick={decrease}>decrease</button> <br />
      <small>Counter will reset if you unmount this module.</small>
    </div>
  );
}
