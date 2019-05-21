import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'modal';

// --- Actions ---
export const ModalActions = createActions(MODULE, {
  openModal: () => ({ payload: { isShowing: true } }),
  closeModal: () => ({ payload: { isShowing: false } }),
});

// --- Types ---
export interface ModalState {
  isShowing: Boolean;
}

export type Props = {
  title: String;
  children: any;
};

declare module 'typeless/types' {
  export interface DefaultState {
    modal: ModalState;
  }
}
