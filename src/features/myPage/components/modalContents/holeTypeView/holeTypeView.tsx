import React, { Suspense } from 'react';
import { useActions, useMappedState } from 'typeless';
import { MyPageActions, HoleTypeViewType } from '../../../interface';

const Insert = React.lazy(() => import('./insert/module'));
const Straight = React.lazy(() => import('./straight/module'));
const Tap = React.lazy(() => import('./tap/module'));

export const HoleTypeView = () => {
  const { showHoleSelectView } = useActions(MyPageActions);
  const { holeTypeViewType } = useMappedState(state => state.myPage);

  const renderContent = () => {
    switch (holeTypeViewType) {
      case 'insert': {
        return <Insert />;
      }
      case 'straight': {
        return <Straight />;
      }
      case 'tap': {
        return <Tap />;
      }
    }
  };
  return (
    <>
      <p style={{ color: '#4c4c4c', fontSize: '13px' }}>
        -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- ①
        -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
      </p>
      <span>穴タイプ</span>
      <input
        type="radio"
        name="aradio"
        value="straight"
        checked={holeTypeViewType === 'straight'}
        onChange={e => showHoleSelectView(e.target.value as HoleTypeViewType)}
      />
      <label>ストレート</label>
      <input
        type="radio"
        name="aradio"
        value="tap"
        checked={holeTypeViewType === 'tap'}
        onChange={e => showHoleSelectView(e.target.value as HoleTypeViewType)}
      />
      <label>タップ</label>
      <input
        type="radio"
        name="aradio"
        value="insert"
        checked={holeTypeViewType === 'insert'}
        onChange={e => showHoleSelectView(e.target.value as HoleTypeViewType)}
      />
      <label>インサート</label>
      <div style={{ padding: 15 }}>
        <Suspense fallback={<div>Loading...</div>}>{renderContent()}</Suspense>
      </div>
    </>
  );
};
