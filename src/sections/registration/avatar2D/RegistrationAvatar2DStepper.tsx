import { Box, Step, StepLabel, StepProps, Stepper } from '@mui/material';
import { RegistrationAvatar2DStep } from './types';

// -----------------------------------

export type RegistrationAvatar2DStepperProps = {
  steps: RegistrationAvatar2DStep[];
  activeStep: number;
  setActiveStep: (value: React.SetStateAction<number>) => void;
};

// -----------------------------------

const RegistrationAvatar2DStepper = ({
  steps,
  activeStep,
  setActiveStep,
}: RegistrationAvatar2DStepperProps) => (
  <Box>
    <Stepper alternativeLabel activeStep={activeStep}>
      {steps.map((step, index) => {
        const isCompleted = index < activeStep;
        const stepOption: StepProps = {
          completed: isCompleted,
        };
        return (
          <Step key={step.label} {...stepOption}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  </Box>
);
export default RegistrationAvatar2DStepper;
