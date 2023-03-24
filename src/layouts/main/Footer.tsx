// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
// components
import MYTYStudioLogo from 'src/components/logo/MYTYStudioLogo';
import { HEADER, SOCIALS } from 'src/config-global';
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';
import { theme } from 'antd';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'MYTY',
    children: [
      { name: 'About us', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  },
  {
    headline: 'LEGAL',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'CONTACT',
    children: [{ name: 'hello@myty.space', href: '#' }],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isDesktop = useResponsive('up', 'md');

  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Stack
          spacing={1}
          direction="column"
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          sx={{
            mt: 5,
            mb: { xs: 5, md: 0 },
          }}
        >
          <Stack direction="row" justifyContent={{ xs: 'center', md: 'space-between' }}>
            <MYTYStudioLogo />
            {isDesktop && (
              <Stack direction="row">
                {SOCIALS.map((social) => (
                  <IconButton key={social.name}>
                    <Iconify icon={social.icon} />
                  </IconButton>
                ))}
              </Stack>
            )}
          </Stack>
          <Typography
            variant="caption"
            component="div"
            style={{ margin: '0' }}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            © All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Grid item xs={8} md={3}>
            <MYTYStudioLogo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            <Stack
              spacing={1}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 5,
                mb: { xs: 5, md: 0 },
              }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name}>
                  <Iconify icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ xs: 'column', md: 'row' }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={NextLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 10,
            pb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2023. All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return isHome ? simpleFooter : mainFooter;
}
