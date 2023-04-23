import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'src/components/image/Image';
import { LinkWrapper } from 'src/components/link';
import { PATH_PAGE } from 'src/routes/paths';

const RegistrationAvatar2DSubmission = () => (
  <Box
    sx={{
      width: 480,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Stack sx={{ alignItems: 'center', gap: 8 }}>
      <Typography variant="h4">Thank you for your submission!</Typography>
      <Image src="/assets/images/registration/submission.png" sx={{ width: 320, height: 320 }} />
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        Your submission will be processed within 24 hours, and your avatars will be accessible once
        processing is complete.
        <br />
        <br /> To check the status of your submission, please visit the Dashboard.
      </Typography>
      <Stack sx={{ flexDirection: 'row', gap: 2 }}>
        <LinkWrapper href={PATH_PAGE.registration}>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            sx={{ width: 248, height: 48, color: 'text.primary' }}
          >
            Register Another
          </Button>
        </LinkWrapper>
        <LinkWrapper href={PATH_PAGE.dashboard}>
          <Button variant="contained" color="primary" size="large" sx={{ width: 248, height: 48 }}>
            Visit Dashboard
          </Button>
        </LinkWrapper>
      </Stack>
    </Stack>
  </Box>
);

export default RegistrationAvatar2DSubmission;
