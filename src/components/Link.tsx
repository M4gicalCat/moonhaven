import styled from 'styled-components';
import NextLink from 'next/link';

export const Link = styled(NextLink)`
  color: ${({ theme, color = 'primary' }) => theme.text[color]};

  cursor: pointer;
`;
