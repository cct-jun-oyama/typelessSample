import React, { Suspense } from 'react';
import { useActions, useMappedState } from 'typeless';
import { UserOrderActions, userOrderViewType } from '../../../interface';

const Order = React.lazy(() => import('./order/module'));
const UserSetting = React.lazy(() => import('./userSetting/module'));

export const UserOrderView = () => {
  const { showUserOrderSelectView } = useActions(UserOrderActions);
  const { selectUserOrderViewType } = useMappedState(state => state.userOrder);

  const renderContent = () => {
    switch (selectUserOrderViewType) {
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
            checked={selectUserOrderViewType === 'userSetting'}
            onChange={e =>
              showUserOrderSelectView(e.target.value as userOrderViewType)
            }
          />
        </label>
        <label>
          注文
          <input
            type="radio"
            name="orderradio"
            value="order"
            style={{ width: '50%', textAlign: 'center' }}
            checked={selectUserOrderViewType === 'order'}
            onChange={e =>
              showUserOrderSelectView(e.target.value as userOrderViewType)
            }
          />
        </label>
      </div>
      <div style={{ padding: 15 }}>
        <Suspense fallback={<div>Loading...</div>}>{renderContent()}</Suspense>
      </div>
    </>
  );
};
