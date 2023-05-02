import { useDropzone } from 'react-dropzone';
// @mui
import { styled, alpha } from '@mui/material/styles';
//
import { Box, IconButton } from '@mui/material';
import Iconify from '../iconify';
//
import { UploadProps } from './types';
import RejectionFiles from './errors/RejectionFiles';

// ----------------------------------------------------------------------

const StyledDropZone = styled('div')(({ theme }) => ({
  width: 64,
  height: 64,
  fontSize: 24,
  display: 'flex',
  flexShrink: 0,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(0.5),
  color: theme.palette.text.disabled,
  borderRadius: theme.shape.borderRadius,
  border: `dashed 1px ${theme.palette.divider}`,
  backgroundColor: alpha(theme.palette.grey[500], 0.08),
  '&:hover': {
    opacity: 0.72,
  },
}));

// ----------------------------------------------------------------------

export default function UploadAsset({
  placeholder,
  error,
  disabled,
  sx,
  onDelete,
  ...other
}: UploadProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    disabled,
    ...other,
  });
  const hasFile = !!other.file;

  const isError = isDragReject || error;

  return (
    <Box sx={{ width: 1, position: 'relative', ...sx }}>
      <StyledDropZone
        {...getRootProps()}
        sx={{
          ...(isDragActive && {
            opacity: 0.72,
          }),
          ...(isError && {
            color: 'error.main',
            bgcolor: 'error.lighter',
            borderColor: 'error.light',
          }),
          ...(disabled && {
            opacity: 0.48,
            pointerEvents: 'none',
          }),
          ...sx,
        }}
      >
        <input {...getInputProps()} />

        {placeholder || <Iconify icon="eva:cloud-upload-fill" width={28} />}
      </StyledDropZone>
      <RejectionFiles fileRejections={fileRejections} />
      {hasFile && onDelete && (
        <IconButton
          size="small"
          onClick={onDelete}
          sx={{
            top: 16,
            right: 16,
            zIndex: 9,
            position: 'absolute',
            color: (theme) => alpha(theme.palette.common.white, 0.8),
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
            },
          }}
        >
          <Iconify icon="eva:close-fill" width={18} />
        </IconButton>
      )}
    </Box>
  );
}
