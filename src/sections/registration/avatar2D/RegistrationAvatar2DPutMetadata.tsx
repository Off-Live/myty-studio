import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { RHFRadioGroup, RHFTextField } from 'src/components/hook-form';
import { AvatarCompatibility, SupportedChain } from 'src/@types/assetCollection';
import Image from 'src/components/image/Image';
import { LoadingButton } from '@mui/lab';

// ---------------------------------------------

const SupportingModeOptions: { label: string; value: AvatarCompatibility | 'Both' }[] = [
  { label: 'Both', value: 'Both' },
  { label: 'Full-Body', value: 'Body' },
  { label: 'Head-only', value: 'Head' },
];

const SupportingChains: {
  label: string;
  value: SupportedChain;
  icons?: { active: React.ReactNode; inActive: React.ReactNode };
}[] = [
  {
    label: 'Ethereum',
    value: 'ethereum',
    icons: {
      active: (
        <Image
          src="/assets/icons/blockchain/ethereum-purple-icon.svg"
          sx={{ width: 24, height: 24 }}
        />
      ),
      inActive: (
        <Image
          src="/assets/icons/blockchain/ethereum-gray-icon.svg"
          sx={{ width: 24, height: 24 }}
        />
      ),
    },
  },
  {
    label: 'Polygon',
    value: 'polygon',
    icons: {
      active: (
        <Image
          src="/assets/icons/blockchain/polygon-purple-icon.svg"
          sx={{ width: 24, height: 24 }}
        />
      ),
      inActive: (
        <Image
          src="/assets/icons/blockchain/polygon-gray-icon.svg"
          sx={{ width: 24, height: 24 }}
        />
      ),
    },
  },
];

// ---------------------------------------------

export type RegistrationAvatar2DPutMetadataProps = {
  handleBack: () => void;
  isSubmitting: boolean;
  isValid: boolean;
};

const RegistrationAvatar2DPutMetadata = ({
  handleBack,
  isSubmitting,
  isValid,
}: RegistrationAvatar2DPutMetadataProps) => (
  <Box>
    <Card sx={{ p: 3 }}>
      <Stack sx={{ gap: 3 }}>
        <Stack gap={1}>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Chain
          </Typography>
          <RHFRadioGroup name="chain" options={SupportingChains} row />
        </Stack>
        <Stack gap={1}>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Avatar Information
          </Typography>
          <RHFTextField
            variant="filled"
            size="medium"
            name="creator"
            label="Creator Address"
            disabled
          />
          <RHFTextField
            variant="filled"
            size="medium"
            name="fileName"
            label="Avatar File Name"
            disabled
          />
          <RHFTextField
            variant="filled"
            name="avatarName"
            label="Avatar Name"
            helperText="This avatar name will be used by Avatar Users to identify your avatars from other avatars."
            required
          />
        </Stack>
        <Stack gap={1}>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            NFT Information
          </Typography>
          <RHFTextField
            variant="filled"
            name="nftContractAddress"
            label="NFT Contract Address"
            helperText="This is the NFT contract you want to link your avatars to"
            required
          />
        </Stack>
        <Stack gap={1}>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Compatibility
          </Typography>
          <RHFTextField variant="filled" name="compatibility" label="Avatar Type" disabled />
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Supporting Mode
          </Typography>
          <RHFRadioGroup name="supportingMode" options={SupportingModeOptions} row sx={{ px: 1 }} />
        </Stack>
      </Stack>
    </Card>
    <Box sx={{ pt: 5 }}>
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          size="large"
          color="inherit"
          sx={{ width: 134, height: 48, color: 'action.disabled' }}
          onClick={handleBack}
        >
          Back
        </Button>
        <LoadingButton
          variant="contained"
          type="submit"
          size="large"
          color="primary"
          sx={{ width: 134, height: 48 }}
          disabled={!isValid}
          loading={isSubmitting}
        >
          Confirm
        </LoadingButton>
      </Stack>
    </Box>
  </Box>
);

export default RegistrationAvatar2DPutMetadata;
