import React from 'react';
import { Image, keyframes, usePrefersReducedMotion, Box } from '@chakra-ui/react';
import logo from './spacex.png';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
      <Box maxW='150px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={logo} {...props} />
      </Box>
  );
};
