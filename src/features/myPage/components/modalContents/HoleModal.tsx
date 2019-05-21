import React, { Suspense } from 'react';
import { useActions, useMappedState } from 'typeless';
import Modal from '../../../modal/components/Modal';
import { MyPageActions, ViewType } from '../../interface';

const FitTolerance = React.lazy(() =>
  import('./selectToleranceView/fitTolerance/module')
);
const OneSidedTolerance = React.lazy(() =>
  import('./selectToleranceView/oneSidedTolerance/module')
);
const TwoSidedTolerance = React.lazy(() =>
  import('./selectToleranceView/twoSidedTolerance/module')
);

export const HoleModal = () => {
  const { show } = useActions(MyPageActions);
  const { viewType } = useMappedState(state => state.myPage);

  const renderContent = () => {
    switch (viewType) {
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
    <Modal title="穴情報指示">
      <div className="modal-col2">
        <div className="modal-left-contents">
          <img src="/images/threeSteppedHole.png" alt="" />
        </div>
        <div className="modal-right-contents">
          <p style={{ color: '#4c4c4c', fontSize: '13px' }}>
            -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- ①
            -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
          </p>
          <label>穴径公差タイプ</label>
          <select
            value={viewType || ''}
            onChange={e => show(e.target.value as ViewType)}
          >
            <option value="noTolerance">公差無</option>
            <option value="fitTolerance">はめあい公差</option>
            <option value="oneSidedTolerance">片側公差</option>
            <option value="twoSidedTolerance">両側公差</option>
          </select>
          <div style={{ padding: 15 }}>
            <Suspense fallback={<div>Loading...</div>}>
              {renderContent()}
            </Suspense>
          </div>
        </div>
      </div>
    </Modal>
  );
};
