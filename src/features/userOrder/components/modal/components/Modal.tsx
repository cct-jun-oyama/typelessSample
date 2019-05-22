import React from 'react';
import Modal from 'src/features/modal/components/Modal';
import { ModalView } from './ModalView';
import { useModalModule } from '../module';

export const UserOrderModal = () => {
  useModalModule();
  return (
    <Modal title="好きなものの金額">
      <ModalView />
    </Modal>
  );
};
