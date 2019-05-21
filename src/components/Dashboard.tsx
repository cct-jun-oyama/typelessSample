import * as React from 'react';
import { GlobalActions } from 'src/features/global/interface';
import styled from 'styled-components';
import { useActions } from 'typeless';
import { Button } from './Button';
import { Link } from 'src/components/Link';

const Header = styled.header`
  display: flex;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

const AppName = styled.h1`
  font-weight: 400;
  margin: 0;
  margin-right: auto;
  font-size: 1.25rem;
`;

const Main = styled.main`
  padding: 20px;
`;

interface DashboardProps {
  className?: string;
  children: React.ReactNode;
}

export const Dashboard = (props: DashboardProps) => {
  const { children } = props;
  const { logout } = useActions(GlobalActions);
  return (
    <>
      <Header>
        <AppName>test app</AppName>
        <Link href="/sample1">sample1</Link>
        <Link href="/sample2">sample2</Link>
        <Link href="/mypage">myPage</Link>
        <Link href="/userOrder">userOrder</Link>
        <Button onClick={logout}>logout</Button>
      </Header>
      <Main>{children}</Main>
    </>
  );
};
