import React from 'react';
import styled from 'styled-components';
import { Link } from '@/components/Link';

type NavBarProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background.navbar};
  color: ${({ theme }) => theme.text.secondary};
`;

export const NavBar = ({ setTheme, theme }: NavBarProps) => {
  return (
    <Nav>
      <Link color='primary' href={'/'}>
        Home
      </Link>
      <Link color='primary' href={'/about'}>
        About
      </Link>
      <Link color='primary' href={'/project'}>
        The Project
      </Link>
      <Link color='primary' href={'/team'}>
        The Team
      </Link>
      <Link color='primary' href={'/timeline'}>
        Timeline
      </Link>
      <Link color='primary' href={'/contact'}>
        Contact
      </Link>
    </Nav>
  );
};
