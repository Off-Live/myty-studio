import { LinkProps, TooltipComponentsPropsOverrides, TypographyProps } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type IProps = TypographyProps & LinkProps;

export interface TextMathLengthProps extends IProps {
  children: React.ReactNode;
  variant?: Variant;
  maxLength: number;
  tooltipProps?: TooltipComponentsPropsOverrides;
}
