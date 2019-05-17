import React from 'react';
import { Dashboard } from 'src/components/Dashboard';
import { Link } from 'src/components/Link';

export const MyPageView = () => {
  return (
    <Dashboard>
      Feature sample1
      <br />
      <Link href="/sample1">
        Go to sample feature 2 (set "slow 3G" to see a spinner)
      </Link>
      <Link href="/sample2">
        Go to sample feature 2 (set "slow 3G" to see a spinner)
      </Link>
    </Dashboard>
  );
};
