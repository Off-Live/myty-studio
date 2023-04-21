import { Box, Container, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import MainLayout from 'src/layouts/main/MainLayout';
import {
  RegistraionAvatar2DUpload,
  RegistrationAvatar2DStepper,
} from 'src/sections/registration/avatar2D';
import RegistrationAvatar2DTestAvatar from 'src/sections/registration/avatar2D/RegistrationAvatar2DTestAvatar';
import { RegistrationAvatar2DStep } from 'src/sections/registration/avatar2D/types';
import { StyledRoot } from 'src/sections/styles/StyledRoot';

// -----------------------------------

// -----------------------------------
Registration2DAvatar.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;
// -----------------------------------

export default function Registration2DAvatar() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = useCallback(
    () => setActiveStep((prevActiveStep) => prevActiveStep + 1),
    [setActiveStep]
  );

  const handleBack = useCallback(
    () => setActiveStep((prevActiveStep) => prevActiveStep - 1),
    [setActiveStep]
  );

  const steps: RegistrationAvatar2DStep[] = useMemo(
    () => [
      {
        label: 'Upload',
        content: <RegistraionAvatar2DUpload handleNext={handleNext} />,
      },
      {
        label: 'Test Avatar',
        content: <RegistrationAvatar2DTestAvatar handleBack={handleBack} handleNext={handleNext} />,
      },
      {
        label: 'Put Metadata',
        content: <></>,
      },
    ],
    [handleBack, handleNext]
  );
  return (
    <StyledRoot>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Stack sx={{ gap: 5, py: 7.5, width: 786 }}>
            <Typography variant="h4">2D Avatar Registration</Typography>
            <RegistrationAvatar2DStepper
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
            {steps[activeStep].content}
          </Stack>
        </Box>
      </Container>
    </StyledRoot>
  );
}
