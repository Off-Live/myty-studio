import { Box, Container, Stack, Typography } from '@mui/material';
import * as Yup from 'yup';
import { useSession } from 'next-auth/react';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AvatarCompatibility,
  AvatarType,
  SupportAddress,
  SupportedChain,
} from 'src/@types/assetCollection';
import AuthGuard from 'src/auth/AuthGuard';
import FormProvider from 'src/components/hook-form/FormProvider';
import MainLayout from 'src/layouts/main/MainLayout';
import {
  RegistraionAvatar2DUpload,
  RegistrationAvatar2DStepper,
  RegistrationAvatar2DPutMetadata,
  RegistrationAvatar2DSubmission,
} from 'src/sections/registration/avatar2D';
import RegistrationAvatar2DTestAvatar from 'src/sections/registration/avatar2D/RegistrationAvatar2DTestAvatar';
import { RegistrationAvatar2DStep } from 'src/sections/registration/avatar2D/types';
import { StyledRoot } from 'src/sections/styles/StyledRoot';
import axios from 'axios';
import { IAssetsPostParams } from '../api/registry/assets/types';

// -----------------------------------
export type IFormValuesProps = {
  chain: SupportedChain;
  creator: SupportAddress;
  fileName: string;
  unitypackageFile: File | null;
  assetbundleFile?: File | null;
  avatarName: string;
  nftContractAddress: SupportAddress;
  compatibility: AvatarType;
  supportingMode: AvatarCompatibility | 'Both';
};

// -----------------------------------
Registration2DAvatar.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;
// -----------------------------------

export default function Registration2DAvatar() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const session = useSession();

  const RegisterSchema = Yup.object().shape({
    chain: Yup.string().required('Chain is required'),
    creator: Yup.string().required('Creator is required'),
    fileName: Yup.string().required('File name is required'),
    unitypackageFile: Yup.mixed().required('Unitypackage is required'),
    avatarName: Yup.string().required('Avatar name is required'),
    nftContractAddress: Yup.string().required('NFT contract address is required'),
    compatibility: Yup.string().required('Compatibility is required'),
    supportingMode: Yup.string().required('Supporting mode is required'),
  });

  const defaultFormValues: IFormValuesProps = {
    chain: 'ethereum',
    creator: session.data?.user?.email || '',
    fileName: 'test.unitypackage',
    unitypackageFile: null,
    assetbundleFile: null,
    avatarName: '',
    nftContractAddress: '',
    compatibility: '2D',
    supportingMode: 'Body',
  };

  const methods = useForm<IFormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: defaultFormValues,
  });

  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { isSubmitting, isValid, isSubmitSuccessful },
  } = methods;

  // -----------------------------------

  const onSubmit = useCallback(
    async (data: IFormValuesProps) => {
      try {
        const body: IAssetsPostParams = {
          chain: data.chain,
          nftCollectionAddress: data.nftContractAddress,
          creatorAddress: data.creator,
          name: data.avatarName,
          kitVersion: 'v1.2.0', // For test
          type: 'TYPE_UNITYPACKAGE',
        };
        const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL || '';
        const presignedURLRes = await axios.post(`${baseURL}/api/registry/assets`, body);
        if (presignedURLRes.status === 200) {
          const presignedUrl = presignedURLRes.data.key;
          const uploadRes = await axios.put(presignedUrl, data.unitypackageFile, {
            headers: { 'Content-Type': '*/*' },
          });
          if (uploadRes.status === 200) {
            console.log('done');

            reset();
          } else {
            // TODO: when failure, how to handle?
          }
        } else {
          // TODO: when failure, how to handle?
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    [reset]
  );

  const handleNext = useCallback(
    () => setActiveStep((prevActiveStep) => prevActiveStep + 1),
    [setActiveStep]
  );

  const handleBack = useCallback(
    () => setActiveStep((prevActiveStep) => prevActiveStep - 1),
    [setActiveStep]
  );

  const handleDrop = useCallback(
    (formName: 'unitypackageFile' | 'assetbundleFile') => (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (newFile) {
        setValue(formName, newFile, { shouldValidate: true });
      }
      if (formName === 'unitypackageFile')
        setValue('fileName', newFile.name, { shouldValidate: true });
    },
    [setValue]
  );

  const handleDelete = useCallback(
    (formName: 'unitypackageFile' | 'assetbundleFile') => () => {
      setValue(formName, null, { shouldValidate: true });
    },
    [setValue]
  );

  const getFormValue = useCallback(
    (formName: keyof IFormValuesProps) => getValues(formName),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getValues, watch()]
  );

  // -----------------------------------

  const registrationAvatar2DPutMetadataProps = useMemo(
    () => ({
      handleBack,
      isSubmitting,
      isValid,
    }),
    [handleBack, isSubmitting, isValid]
  );

  const RegistrationAvatar2DTestAvatarProps = useMemo(
    () => ({
      handleBack,
      handleNext,
    }),
    [handleBack, handleNext]
  );

  const RegistraionAvatar2DUploadProps = useMemo(
    () => ({
      handleNext,
      handleDrop,
      handleDelete,
      getFormValue,
    }),
    [handleNext, handleDrop, handleDelete, getFormValue]
  );

  // -----------------------------------

  const steps: RegistrationAvatar2DStep[] = useMemo(
    () => [
      {
        label: 'Upload',
        content: <RegistraionAvatar2DUpload {...RegistraionAvatar2DUploadProps} />,
      },
      {
        label: 'Test Avatar',
        content: <RegistrationAvatar2DTestAvatar {...RegistrationAvatar2DTestAvatarProps} />,
      },
      {
        label: 'Put Metadata',
        content: <RegistrationAvatar2DPutMetadata {...registrationAvatar2DPutMetadataProps} />,
      },
    ],
    [
      RegistraionAvatar2DUploadProps,
      RegistrationAvatar2DTestAvatarProps,
      registrationAvatar2DPutMetadataProps,
    ]
  );
  return (
    <AuthGuard>
      <StyledRoot>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {!isSubmitSuccessful ? (
              <Stack sx={{ gap: 5, py: 7.5, width: 786 }}>
                <Typography variant="h4">2D Avatar Registration</Typography>
                <RegistrationAvatar2DStepper
                  steps={steps}
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                />
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                  {steps[activeStep].content}
                </FormProvider>
              </Stack>
            ) : (
              <RegistrationAvatar2DSubmission />
            )}
          </Box>
        </Container>
      </StyledRoot>
    </AuthGuard>
  );
}
