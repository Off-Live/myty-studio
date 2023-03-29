import { forwardRef } from 'react';
import { Tooltip, Typography } from '@mui/material';
import { TextMathLengthProps } from './types';

const TextMathLength = forwardRef<HTMLAnchorElement, TextMathLengthProps>(
  ({ children, variant = 'body1', maxLength = 10, sx, ...other }, ref) => {
    const childrenString = children?.toString().slice(0, maxLength).concat('...');
    return (
      <Tooltip title={children?.toString()} arrow>
        <Typography ref={ref} variant={variant} {...other}>
          {childrenString}
        </Typography>
      </Tooltip>
    );
  }
);

export default TextMathLength;
