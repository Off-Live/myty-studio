import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Link, BoxProps } from '@mui/material';
import Image from '../image/Image';

export interface MYTYStudioLogoProps extends BoxProps {
  disabledLink?: boolean;
}

const MYTYStudioLogo = forwardRef<HTMLDivElement, MYTYStudioLogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Image
        src="/logo/myty-studio-logo.svg"
        sx={{ width: 171.72, height: 20, cursor: 'pointer', ...sx }}
      />
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={NextLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default MYTYStudioLogo;
