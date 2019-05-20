import React, { Suspense } from 'react';
import { useActions, useMappedState } from 'typeless';
import { Dashboard } from 'src/components/Dashboard';
import { Link } from 'src/components/Link';
import Modal from '../../../components/modal/Modal';
import useModal from '../../../components/modal/useModal';
import { MyPageActions, ViewType } from '../interface';

const FitTolerance = React.lazy(() =>
  import('./modalContents/selectToleranceView/fitTolerance/module')
);
const OneSidedTolerance = React.lazy(() =>
  import('./modalContents/selectToleranceView/oneSidedTolerance/module')
);
const TwoSidedTolerance = React.lazy(() =>
  import('./modalContents/selectToleranceView/twoSidedTolerance/module')
);

export const MyPageView = () => {
  const { isModalShowing, toggleModal } = useModal();
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
    <Dashboard>
      My Page
      <br />
      <Link href="/sample1">
        Go to sample feature 2 (set "slow 3G" to see a spinner)
      </Link>
      <Link href="/sample2">
        Go to sample feature 2 (set "slow 3G" to see a spinner)
      </Link>
      <button className="button-default" onClick={toggleModal}>
        Show Modal
      </button>
      <Modal isShowing={isModalShowing} hide={toggleModal} title="穴情報指示">
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
    </Dashboard>
  );
};
