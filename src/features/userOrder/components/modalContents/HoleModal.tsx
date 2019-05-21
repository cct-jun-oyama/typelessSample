import React from 'react';
import Modal from '../../../modal/components/Modal';
import { UserOrderView } from '../modalContents/userOrderView/userOrderView';

export const HoleModal = () => {
  return (
    <Modal title="好きなものの金額">
      <UserOrderView />
    </Modal>
  );
};
