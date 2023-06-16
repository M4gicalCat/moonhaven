import styled, { DefaultTheme } from 'styled-components';
import React from 'react';
import { NavBar } from '@/components/NavBar';

const Test = styled.div`
  color: ${({ theme }) => theme.text.secondary};
`;

type HomeProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export default function Home({ setTheme }: HomeProps) {
  return (
    <>
      <NavBar setTheme={setTheme} />
      <Test>echo toto</Test>
      <Test>echo toto</Test>
    </>
  );
}
