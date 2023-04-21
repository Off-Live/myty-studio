import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { UploadIllustration } from 'src/assets/illustrations';
import Label from 'src/components/label/Label';
import { StyledCardBox } from './styles';

// -----------------------------------
const Avatar2DUploadOptoins = [
  {
    imagePath: <UploadIllustration sx={{ width: 212, height: 160 }} />,
    title: 'Upload Assetbundle',
    description: 'This is needed to emulate your avatars before uploading them',
    tage: ['*.assetbundle'],
  },
  {
    imagePath: <UploadIllustration sx={{ width: 212, height: 160 }} />,
    title: 'Upload UnityProject',
    description: 'This is needed to create Avatar files and upload to the server',
    tage: ['*.unitypackage'],
  },
];

// -----------------------------------

export type RegistraionAvatar2DUploadProps = {
  handleBack?: () => void;
  handleNext?: () => void;
};

const RegistraionAvatar2DUpload = ({ handleBack, handleNext }: RegistraionAvatar2DUploadProps) => (
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
        {Avatar2DUploadOptoins.map((item, index) => (
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
        ))}
      </Stack>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button variant="contained" sx={{ width: 284, height: 48 }} onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Stack>
  </Box>
);

export default RegistraionAvatar2DUpload;
