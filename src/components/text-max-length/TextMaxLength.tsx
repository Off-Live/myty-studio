import { forwardRef } from 'react';
import { Tooltip, Typography } from '@mui/material';
import { TextMathLengthProps } from './types';

const TextMathLength = forwardRef<HTMLAnchorElement, TextMathLengthProps>(
  ({ children, variant = 'body1', maxLength = 10, sx, ...other }, ref) => {
    const childrenString = children?.toString().slice(0, maxLength).concat('...');
    return (
      <Tooltip arrow {...other.tooltipProps} title={children?.toString()}>
        <Typography ref={ref} variant={variant} {...other} sx={sx}>
          {childrenString}
        </Typography>
      </Tooltip>
    );
  }
);

export default TextMathLength;
