import React from 'react';
import ReactDOM from 'react-dom';
import { useActions } from 'typeless';
import { useMappedState } from 'typeless';
import './modal.css';
import { UpdateButtons } from './UpdateButtons';
import { ModalActions, Props } from '../../modal/interface';
import { useModalModule } from '../../modal/module';

export const Modal = (props: Props) => {
  const { closeModal } = useActions(ModalActions);
  useModalModule();
  const { isShowing } = useMappedState(state => state.modal);

  const dom = isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div
              className="modal-wrapper"
              aria-modal
              aria-hidden
              tabIndex={-1}
              role="dialog"
            >
              <div className="modal">
                <div className="modal-header">
                  <p className="modal-title">{props.title}</p>
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {props.children}
                  <UpdateButtons />
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

  return dom;
};
export default Modal;
