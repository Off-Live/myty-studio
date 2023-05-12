import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import React, { useMemo } from 'react';
import CardWithButton, { CardWithButtonProps } from 'src/components/buttons/CardWithButton';
import Iconify from 'src/components/iconify/Iconify';
import { Stack, alpha } from '@mui/system';
import useResponsive from 'src/hooks/useResponsive';
import { bgGradient } from 'src/utils/cssStyles';
import { useRouter } from 'next/router';
import { StyledRoot } from '../styles/StyledRoot';

const StyledBg = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  position: 'absolute',
  transform: 'scaleX(-1)',
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
}));

const Title = styled(Typography)``;
const Description = styled(Typography)``;

const MYTYStudioHome = () => {
  const { push } = useRouter();
  const CARD_WITH_BUTTONS: CardWithButtonProps[] = useMemo(
    () => [
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
        button: (
          <Button variant="soft" onClick={() => push('/dashboard')}>
            Visit Dashboard
          </Button>
        ),
        description: `Emulate your avatars
                    as if they are on
                    MYTY Metaverse apps`,
      },
    ],
    [push]
  );
  //
  const isDesktop = useResponsive('up', 'md');
  const isXS = useResponsive('down', 'sm');
  //
  return (
    <StyledRoot>
      <Container>
        <Grid container justifyContent="space-between" pt={10}>
          <Grid item xs={isDesktop ? 7.5 : 12}>
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Stack spacing={1} direction="row">
                  <Title
                    variant="h3"
                    sx={{
                      color: 'primary.main',
                    }}
                  >
                    Supercharge
                  </Title>
                  <Title variant="h3">Your Avatar Across</Title>
                  <Title
                    variant="h3"
                    sx={{
                      color: 'other.block',
                    }}
                  >
                    Metaverses
                  </Title>
                </Stack>
                <Description variant="body1" align="center" sx={{ color: 'text.secondary' }}>
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
                  <CardWithButton {...item} key={item.title} />
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
      </Container>
      <StyledBg />
    </StyledRoot>
  );
};

export default MYTYStudioHome;
