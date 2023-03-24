import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import CardWithButton, { CardWithButtonProps } from 'src/pages/card/CardWithButton';
import Iconify from 'src/components/iconify/Iconify';
import { Stack } from '@mui/system';
import useResponsive from 'src/hooks/useResponsive';
import { StyledRoot } from '../styles/StyledRoot';

const CARD_WITH_BUTTONS: CardWithButtonProps[] = [
  {
    title: 'Create',
    logoPath: '/assets/icons/brush-filled.svg',
    button: (
      <Button variant="soft" endIcon={<Iconify icon="eva:external-link-fill" />}>
        Learn How
      </Button>
    ),
    description: `Learn how to create
                2D &  3D avatars
                for MYTY Metaverse`,
  },
  {
    title: 'Register',
    logoPath: '/assets/icons/add-circle-filled.svg',
    button: (
      <Button variant="soft" disabled>
        Comming Soon
      </Button>
    ),
    description: `Link your
                  2d & 3D avatars to 
                  NFT Contracts`,
  },
  {
    title: 'Review',
    logoPath: '/assets/icons/check-circle-filled.svg',
    button: <Button variant="soft">Visit Dashboard</Button>,
    description: `Emulate your avatars
                  as if they are on
                  MYTY Metaverse apps`,
  },
];

const Title = styled(Typography)``;
const Description = styled(Typography)``;
const BGContainer = styled(Container)``;

const MYTYStudioHome = () => {
  const isDesktop = useResponsive('up', 'md');
  const isXS = useResponsive('down', 'sm');
  return (
    <StyledRoot>
      <BGContainer>
        <Grid container justifyContent="space-between">
          <Grid item xs={isDesktop ? 7.5 : 12}>
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Title variant="h3">Supercharge Your Avatar Across Metaverses</Title>
                <Description variant="body1">
                  You can unlock the potential of your avatars by registering 2D and 3D avatars on
                  MYTY Studio today. This will empower your avatars to thrive across a variety of
                  MYTY metaverses with advanced functionality and compatibility. Join the Metaverse
                  with MYTY Studio!
                </Description>
              </Stack>
              <Stack
                direction={isXS ? 'column' : 'row'}
                alignItems="center"
                justifyContent="space-between"
                paddingY="40px"
                paddingRight="40px"
                spacing={1}
              >
                {CARD_WITH_BUTTONS.map((item) => (
                  <CardWithButton {...item} />
                ))}
              </Stack>
            </Stack>
          </Grid>
          {isDesktop && (
            <Grid item xs={3.5}>
              <Box
                component="img"
                src="/assets/illustrations/characters/character_2.svg"
                sx={{ width: 338, height: 519 }}
              />
            </Grid>
          )}
        </Grid>
      </BGContainer>
    </StyledRoot>
  );
};

export default MYTYStudioHome;
