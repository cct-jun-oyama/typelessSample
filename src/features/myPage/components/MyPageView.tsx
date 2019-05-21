import React from 'react';
import { useActions } from 'typeless';
import { Dashboard } from 'src/components/Dashboard';
import { Link } from 'src/components/Link';
import { HoleModal } from './modalContents/HoleModal';
import { ModalActions } from '../../modal/interface';

export const MyPageView = () => {
  const { openModal } = useActions(ModalActions);

  return (
    <Dashboard>
      <h2>My Page</h2>
      <Link href="/sample1">
        Go to sample feature 2 (set "slow 3G" to see a spinner)
      </Link>
      <Link href="/sample2">
        Go to sample feature 2 (set "slow 3G" to see a spinner)
      </Link>
      <button className="button-default" onClick={() => openModal()}>
        Show Modal
      </button>
      <HoleModal />
    </Dashboard>
  );
};
