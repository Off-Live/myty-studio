import { Box } from '@mui/material';
import { AvatarCompatibility, SupportedChain } from 'src/@types/assetCollection';

export const compatiblityTooltipMap: { [key in AvatarCompatibility]?: React.ReactNode } = {
  Head: (
    <>
      Works as a AR Filter that covers <strong> only the Head part</strong>
    </>
  ),
  Body: (
    <>
      Works as a <strong>Full-body</strong> avatar
    </>
  ),
};

export const chainIconMap: { [key in SupportedChain]: React.ReactNode } = {
  ethereum: (
    <Box
      component="img"
      src="/assets/icons/blockchain/ethereum-gray-icon.svg"
      style={{ width: 24, height: 24 }}
    />
  ),
  polygon: (
    <Box
      component="img"
      src="/assets/icons/blockchain/polygon-gray-icon.svg"
      style={{ width: 24, height: 24 }}
    />
  ),
};
