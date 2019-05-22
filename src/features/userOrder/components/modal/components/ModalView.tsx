import React, { Suspense } from 'react';
import { useActions, useMappedState } from 'typeless';
import { Actions, ViewType } from '../interface';

const Order = React.lazy(() => import('./OrderView'));
const UserSetting = React.lazy(() => import('./UserSettingView'));

export const ModalView = () => {
  const { selectView } = useActions(Actions);
  const { viewType } = useMappedState(state => state.userOrderModal);

  const renderContent = () => {
    switch (viewType) {
      case 'order': {
        return <Order />;
      }
      case 'userSetting': {
        return <UserSetting />;
      }
    }
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <label>
          ユーザー情報
          <input
            type="radio"
            name="userSettingradio"
            value="userSetting"
            style={{ width: '50%', textAlign: 'center' }}
            checked={viewType === 'userSetting'}
            onChange={e => selectView(e.target.value as ViewType)}
          />
        </label>
        <label>
          注文
          <input
            type="radio"
            name="orderradio"
            value="order"
            style={{ width: '50%', textAlign: 'center' }}
            checked={viewType === 'order'}
            onChange={e => selectView(e.target.value as ViewType)}
          />
        </label>
      </div>
      <div style={{ padding: 15 }}>
        <Suspense fallback={<div>Loading...</div>}>{renderContent()}</Suspense>
      </div>
    </>
  );
};
