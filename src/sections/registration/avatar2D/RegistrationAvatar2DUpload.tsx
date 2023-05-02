import { Box, Button, Stack, Typography } from '@mui/material';
import { UploadIllustration } from 'src/assets/illustrations';
import Label from 'src/components/label/Label';
import { RHFUploadAsset } from 'src/components/hook-form';
import { StyledCardBox } from './styles';

// -----------------------------------
type UploadFiles = 'unitypackageFile' | 'assetbundleFile';

const Avatar2DUploadOptoins = [
  {
    imagePath: <UploadIllustration sx={{ width: 212, height: 160 }} />,
    title: 'Upload Assetbundle',
    formName: 'assetbundleFile',
    description: 'This is needed to emulate your avatars before uploading them',
    tage: ['*.assetbundle'],
  },
  {
    imagePath: <UploadIllustration sx={{ width: 212, height: 160 }} />,
    title: 'Upload UnityProject',
    formName: 'unitypackageFile',
    description: 'This is needed to create Avatar files and upload to the server',
    tage: ['*.unitypackage'],
  },
];

// -----------------------------------

export type RegistraionAvatar2DUploadProps = {
  handleNext?: () => void;
  handleDrop: (formName: UploadFiles) => (acceptedFiles: File[]) => void;
  handleDelete: (formName: UploadFiles) => () => void;
  getFormValue: (formName: UploadFiles) => any;
};

const RegistraionAvatar2DUpload = ({
  handleNext,
  handleDrop,
  handleDelete,
  getFormValue,
}: RegistraionAvatar2DUploadProps) => (
  <Box>
    <Stack sx={{ gap: 5 }}>
      <Stack
        sx={{
          gap: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Avatar2DUploadOptoins.map((item) => (
          <Box>
            <RHFUploadAsset
              name={item.formName}
              sx={{ width: 280, height: 376 }}
              onDrop={handleDrop(item.formName as UploadFiles)}
              onDelete={handleDelete(item.formName as UploadFiles)}
              placeholder={
                <StyledCardBox sx={{ width: 280, height: 376 }}>
                  <Stack sx={{ alignItems: 'center', gap: 1, p: 5 }}>
                    {item.imagePath}
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                    <Stack>
                      {item.tage.map((tag) => (
                        <Label variant="filled" sx={{ width: 'fit-content' }}>
                          {tag}
                        </Label>
                      ))}
                    </Stack>
                  </Stack>
                </StyledCardBox>
              }
            />
          </Box>
        ))}
      </Stack>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          variant="contained"
          sx={{ width: 284, height: 48 }}
          onClick={handleNext}
          disabled={!(getFormValue('assetbundleFile') && getFormValue('unitypackageFile'))}
        >
          Next
        </Button>
      </Box>
    </Stack>
  </Box>
);

export default RegistraionAvatar2DUpload;
