import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import MainLayout from 'src/layouts/main/MainLayout';
import { PATH_PAGE } from 'src/routes/paths';
import RegistrationCard, {
  RegistrationCardProps,
} from 'src/sections/registration/RegistrationCard';
import { StyledRoot } from 'src/sections/styles/StyledRoot';

// -----------------------------------
const REGISTRATION_CARDS: RegistrationCardProps[] = [
  {
    pathImage: '/assets/images/registration/2d_avatar.png',
    title: '2D Avatars (MYTY Kit)',
    tag: ['*.unitypackage'],
    link: PATH_PAGE.registration_avatar2d,
  },
  {
    pathImage: '/assets/images/registration/3d_avatar.png',
    title: '3D Avatars',
    tag: ['*.vrm', '*.glb'],
    link: PATH_PAGE.registration_avatar3d,
    disabled: true,
  },
];

// -----------------------------------

Registration.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function Registration() {
  return (
    <StyledRoot>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Stack sx={{ width: 708, pt: 4, gap: 1 }}>
            <Typography variant="h4">Choose Type of Avatar</Typography>
            <Grid container spacing={2.5}>
              {REGISTRATION_CARDS.map((item) => (
                <Grid item xs={6}>
                  <RegistrationCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Container>
    </StyledRoot>
  );
}
