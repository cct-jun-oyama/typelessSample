import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import Modal from './components/Modal';
import { ModalActions, ModalState, MODULE, Props } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: ModalState = {
  isShowing: false,
};

export const reducer = createReducer(initialState)
  .on(ModalActions.openModal, (state, { isShowing }) => {
    state.isShowing = isShowing;
  })
  .on(ModalActions.closeModal, (state, { isShowing }) => {
    state.isShowing = isShowing;
  });

// --- Module ---
export default (props: Props) => {
  useModule({
    epic,
    reducer,
    reducerPath: ['modal'],
    actions: ModalActions,
  });
  return <Modal title={props.title} children={props.children} />;
};

// --- Module ---
export const useModalModule = () =>
  useModule({
    epic,
    reducer,
    reducerPath: ['modal'],
    actions: ModalActions,
  });
