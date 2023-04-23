import Image from 'next/image';
import { useState } from 'react';
import checkingImage from 'public/assets/images/registration/avatar-checking.svg';
import { Box, Button, Stack, Typography, styled } from '@mui/material';
import Link from 'next/link';
import { PATH_PAGE } from 'src/routes/paths';
import { LinkWrapper } from 'src/components/link';
import { StyledCardBox } from './styles';

// ------------------

const ImageChecking = styled(Image)`
  width: 212;
  height: 160;
`;

// ------------------

export type RegistrationAvatar2DTestAvatarProps = {
  handleBack: () => void;
  handleNext: () => void;
};

const RegistrationAvatar2DTestAvatar = ({
  handleBack,
  handleNext,
}: RegistrationAvatar2DTestAvatarProps) => {
  const [isChecking, setIsChecking] = useState<boolean>(false);
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
    >
      <Stack sx={{ gap: 5, alignContent: 'center' }}>
        <LinkWrapper
          href={PATH_PAGE.avatarviewer}
          target="_blank"
          onClick={() => {
            setIsChecking(true);
          }}
        >
          <StyledCardBox sx={{ p: 5, width: 280, textDecoration: 'none' }}>
            <Stack sx={{ gap: 3 }}>
              <ImageChecking src={checkingImage} alt="checking image" />
              <Stack alignItems="center">
                <Typography variant="h6" sx={{ width: 130 }}>
                  Click to Test your Avatars
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Press Next after checking
                </Typography>
              </Stack>
            </Stack>
          </StyledCardBox>
        </LinkWrapper>
        <Stack sx={{ flexDirection: 'row', gap: 2 }}>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            sx={{ width: 134, height: 48, color: 'action.disabled' }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ width: 134, height: 48 }}
            disabled={!isChecking}
            onClick={handleNext}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RegistrationAvatar2DTestAvatar;
