// next
import Head from 'next/head';
// @mui
import { Box } from '@mui/material';
// layouts
import MYTYStudoHome from 'src/sections/home/MYTYStudioHome';
import MainLayout from '../layouts/main';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title> MYTY STUDIO </title>
      </Head>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <MYTYStudoHome />
      </Box>
    </>
  );
}
