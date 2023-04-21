import { Box, styled } from '@mui/material';

export const StyledCardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[400]}`,
  borderRadius: theme.spacing(1),
}));
