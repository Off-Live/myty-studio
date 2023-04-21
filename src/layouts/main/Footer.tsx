// @mui
import { Box, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
// components
import MYTYStudioLogo from 'src/components/logo/MYTYStudioLogo';
import { SOCIALS } from 'src/config-global';
import useResponsive from 'src/hooks/useResponsive';
import Image from 'src/components/image/Image';

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
      <Divider />
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
              <Stack direction="row" gap={2.5}>
                {SOCIALS.map((social) => (
                  <Link href={social.path} target="_blank">
                    <Image src={social.icon} sx={{ widows: 24, height: 24 }} />
                  </Link>
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
            © 2022. All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );

  return simpleFooter;
}
