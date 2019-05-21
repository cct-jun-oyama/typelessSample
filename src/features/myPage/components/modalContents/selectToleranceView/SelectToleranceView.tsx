import React, { Suspense } from 'react';
import { useActions, useMappedState } from 'typeless';
import { MyPageActions, SelectToleranceViewType } from '../../../interface';

const FitTolerance = React.lazy(() => import('./fitTolerance/module'));
const OneSidedTolerance = React.lazy(() =>
  import('./oneSidedTolerance/module')
);
const TwoSidedTolerance = React.lazy(() =>
  import('./twoSidedTolerance/module')
);

export const SelectToleranceView = () => {
  const { showToleranceSelectView } = useActions(MyPageActions);
  const { selectToleranceViewType } = useMappedState(state => state.myPage);

  const renderContent = () => {
    switch (selectToleranceViewType) {
      case 'fitTolerance': {
        return <FitTolerance />;
      }
      case 'oneSidedTolerance': {
        return <OneSidedTolerance />;
      }
      case 'twoSidedTolerance': {
        return <TwoSidedTolerance />;
      }
    }
  };
  return (
    <>
      <p style={{ color: '#4c4c4c', fontSize: '13px' }}>
        -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- ①
        -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
      </p>
      <label>穴径公差タイプ</label>
      <select
        value={selectToleranceViewType || ''}
        onChange={e =>
          showToleranceSelectView(e.target.value as SelectToleranceViewType)
        }
      >
        <option value="noTolerance">公差無</option>
        <option value="fitTolerance">はめあい公差</option>
        <option value="oneSidedTolerance">片側公差</option>
        <option value="twoSidedTolerance">両側公差</option>
      </select>
      <div style={{ padding: 15 }}>
        <Suspense fallback={<div>Loading...</div>}>{renderContent()}</Suspense>
      </div>
    </>
  );
};
