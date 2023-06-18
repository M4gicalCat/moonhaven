import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Link } from '@/components/Link';
import { Switch } from '@/components/Switch/Switch';

type NavBarProps = {
  setTheme: Dispatch<SetStateAction<string>>;
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

const SkySwitch = styled(Switch)`
  --switch-on-color: yellow;
  --switch-off-color: #ddd;
  --switch-background-color: transparent;

  .sky_label .switch_container {
    --switch-border-color: #6600ff;
  }

  .switch_input:checked + .sky_label .switch_container {
    --switch-border-color: #aaa;
  }

  .cloud {
    position: absolute;
    top: 0;
    left: 0;
    border-top-right-radius: 1em;
    height: 100%;
    z-index: 10;
  }

  .cloud:nth-child(1) {
    width: 100%;
    background-color: #d1dff6;
    box-shadow: 0.1em 0 0.3em 0.4em #d1dff6;
  }

  .cloud:nth-child(2) {
    width: 66%;
    background-color: #b2cbf2;
    box-shadow: 0.1em 0 0.3em 0.4em #b2cbf2;
  }

  .cloud:nth-child(3) {
    width: 33%;
    background-color: #92b6f0;
    box-shadow: 0.1em 0 0.3em 0.4em #92b6f0;
  }

  .crater {
    background-color: #aaa;
    width: 0.2em;
    height: 0.2em;
    border-radius: 0.1em;
    position: absolute;
    z-index: calc(var(--switch-z-index) + 3);
  }

  .crater:nth-child(1) {
    top: 15%;
    left: 15%;
  }

  .crater:nth-child(2) {
    top: 30%;
    right: 25%;
    width: 0.15em;
    height: 0.15em;
    border-radius: 0.075em;
  }

  .crater:nth-child(3) {
    top: 65%;
    left: 40%;
    width: 0.175em;
    height: 0.175em;
    border-radius: 0.0875em;
  }

  .circle {
    position: relative;
  }

  .star {
    color: #fff;
    font-size: 0.5em;
    position: absolute;
    width: min-content;
    height: max-content;
  }

  .star::after {
    content: '✦';
  }

  .star:nth-child(1) {
    right: 0.1em;
    top: 0.3em;
    color: #f5eeb3;
  }

  .star:nth-child(2) {
    left: 0;
    bottom: 0.3rem;
  }

  .star:nth-child(3) {
    left: 66%;
    font-size: 0.35em;
  }

  .star:nth-child(4) {
    left: 50%;
    font-size: 0.2em;
    top: 40%;
  }

  .star:nth-child(5) {
    top: 0.1em;
    font-size: 0.3em;
    left: 25%;
    color: #f5deb3;
  }

  .star:nth-child(6) {
    right: 20%;
    font-size: 0.35em;
    bottom: 15%;
    color: #f5deb3;
  }

  .switch_background > .off {
    background: linear-gradient(-45deg, #000, #333);
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
    <SkySwitch
      onChange={e => setTheme(e.target.checked ? 'light' : 'dark')}
      checked={theme === 'light'}
      background={{
        on: (
          <>
            <div className='cloud'></div>
            <div className='cloud'></div>
            <div className='cloud'></div>
          </>
        ),
        off: (
          <>
            <div className='star' />
            <div className='star' />
            <div className='star' />
            <div className='star' />
            <div className='star' />
          </>
        ),
        fullWidth: true,
      }}
      off={
        <>
          <span className='crater'></span>
          <span className='crater'></span>
          <span className='crater'></span>
        </>
      }
    />
  </Nav>
);
