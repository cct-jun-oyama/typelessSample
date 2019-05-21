import React from 'react';
import Modal from '../../../modal/components/Modal';
import { SelectToleranceView } from '../modalContents/selectToleranceView/SelectToleranceView';
import { HoleTypeView } from '../modalContents/holeTypeView/holeTypeView';
import { UpdateButtons } from '../../../modal/components/UpdateButtons';

export const HoleModal = () => {
  return (
    <Modal title="穴情報指示">
      <div className="modal-col2">
        <div className="modal-left-contents">
          <img src="/images/threeSteppedHole.png" alt="" />
        </div>
        <div className="modal-right-contents">
          <SelectToleranceView />
          <HoleTypeView />
          <UpdateButtons />
        </div>
      </div>
    </Modal>
  );
};
