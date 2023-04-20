// next
import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
// @mui
import { Box, Button, Container, Stack, Typography, styled } from '@mui/material';
// components
import MainLayout from 'src/layouts/main/MainLayout';
import gif404 from 'public/assets/gif/404-repeat.gif';
import Iconify from 'src/components/iconify/Iconify';

// ----------------------------------------------------------------------

Page404.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;
const GifImage = styled(Image)`
  height: 347;
`;

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Head>
        <title> 404 Page Not Found | MYTY-STUDIO</title>
      </Head>

      <Container>
        <Stack gap={0} sx={{ alignItems: 'center' }}>
          <Stack sx={{ maxWidth: 582, alignItems: 'center', pt: 7.5 }} gap={1}>
            <GifImage src={gif404} alt="404" />
            <Typography variant="h2" sx={{ color: 'text.secondary' }}>
              404
            </Typography>
            <Typography variant="h3" sx={{ color: 'text.primary' }}>
              Bad Request
            </Typography>
          </Stack>
          <Box sx={{ pt: 5 }}>
            <Button
              component={NextLink}
              href="/"
              size="large"
              variant="contained"
              sx={{ width: 172, height: 48 }}
              startIcon={<Iconify icon="ic:baseline-arrow-back" sx={{ width: 16, height: 16 }} />}
            >
              Back to Home
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
