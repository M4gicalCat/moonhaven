import { Children, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Link } from '@/components/Link';
import { SkySwitch } from '@/components/Switch/SkySwitch';

type NavBarProps = {
  setTheme: Dispatch<SetStateAction<string>>;
  theme: string;
};

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(
    ${({ children }) => Children.count(children)},
    1fr
  );
  background-color: ${({ theme }) => theme.background.navbar};
  color: ${({ theme }) => theme.text.secondary};

  > * {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
    transition-duration: 0.5s;
    &:hover {
      background-color: ${({ theme }) => `${theme.background.primary}77`};
    }
  }
`;

export const NavBar = ({ setTheme, theme }: NavBarProps) => (
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
    <div>
      <SkySwitch
        onChange={e => setTheme(e.target.checked ? 'light' : 'dark')}
        checked={theme === 'light'}
      />
    </div>
  </Nav>
);
