import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { NavBar } from '@/components/NavBar';
import { LoremIpsum } from '@/components/LoremIpsum';
import { UseScrollSpeed } from '@/hooks/useScrollSpeed';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;

const Spacer = styled.div`
  height: 200vh;
`;

const Block = styled.div`
  pointer-events: all;
  height: max-content;
  width: max-content;
  max-width: calc(100vw - 2rem);
  background: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.secondary};
  padding: 1rem;
  border-radius: 0.5rem;
  border: solid 1px ${({ theme }) => theme.border.primary};
`;

const Blocks = () => {
  const ref = useRef<HTMLDivElement>(null);
  UseScrollSpeed(5, ref);

  return (
    <Container ref={ref}>
      <Spacer />
      <Block>
        <LoremIpsum paragraphs={3} />
      </Block>
      <Spacer />
      <Block>
        <LoremIpsum paragraphs={3} />
      </Block>
      <Spacer />
    </Container>
  );
};

type HomeProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
};

export default function Home({ setTheme, theme }: HomeProps) {
  const [hasArrivedOnClient, setHasArrivedOnClient] = React.useState(false);
  useEffect(() => {
    setHasArrivedOnClient(true);
  }, []);
  return (
    <>
      <NavBar setTheme={setTheme} theme={theme} />
      <LoremIpsum paragraphs={500} />
      {/* TODO: display blocks on server without scroll script*/}
      {hasArrivedOnClient ? <Blocks /> : null}
    </>
  );
}
