import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ComingSoonIllustration } from 'src/assets/illustrations';
import WalletButton from 'src/components/buttons/WalletButton';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { StyledRoot } from './styles/StyledRoot';

const WalletConnectionRequirement = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === 'authenticated') Router.reload();
  }, [status]);
  return (
    <StyledRoot>
      <Container>
        <Stack direction="column" alignItems="center" spacing={10}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h3">Please connect wallet</Typography>
            <Typography variant="body1">
              We need your address to show your asset registrations
            </Typography>
          </Stack>
          <ComingSoonIllustration />
          <Box>
            <WalletButton />
          </Box>
        </Stack>
      </Container>
    </StyledRoot>
  );
};

export default WalletConnectionRequirement;
