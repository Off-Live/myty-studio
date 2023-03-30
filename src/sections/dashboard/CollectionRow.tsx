import {
  TableCell,
  TableRow,
  Box,
  Stack,
  Tooltip,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { AssetCollectionItems } from 'src/@types/assetCollection';
import Iconify from 'src/components/iconify/Iconify';
import Label from 'src/components/label/Label';
import TextMathLength from 'src/components/text-max-length/TextMaxLength';
import { displayTokensToString } from 'src/utils/display';

type CollectionDashboardRowProp = {
  row: AssetCollectionItems;
};

const MENU_ITEMS = [
  {
    title: 'Review Avatar',
    iconifyPath: 'ic:round-videocam',
    clickPath: '/',
  },
  {
    title: 'Update Version',
    iconifyPath: 'ic:round-trending-up',
    clickPath: '/',
    disable: true,
  },
  {
    title: 'Grant Official',
    iconifyPath: 'ic:baseline-verified',
    clickPath: '/',
    disable: true,
  },
];

const CollectionDashboardRow = ({ row }: CollectionDashboardRowProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState<HTMLElement | null>(null);
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => setIsMenuOpen(event.currentTarget),
    [setIsMenuOpen]
  );
  const handleClose = useCallback(() => setIsMenuOpen(null), []);

  return (
    <TableRow key={`${row.avatarName}-${row.version}`}>
      <TableCell>
        <Stack direction="row" spacing={2}>
          <Box component="img" src="/assets/sample-avatar.svg" style={{ width: 40, height: 40 }} />
          <Stack>
            <TextMathLength
              variant="subtitle2"
              maxLength={10}
              sx={{ width: 'fit-content' }}
              tooltipProps={{ placement: 'top' }}
            >
              {row.avatarName}
            </TextMathLength>
            <TextMathLength maxLength={10} variant="body2" sx={{ width: 'fit-content' }}>
              {row.creator}
            </TextMathLength>
          </Stack>
        </Stack>
      </TableCell>
      <TableCell>{row.version}</TableCell>
      <TableCell>
        <Tooltip title={row.collectionAdress} arrow>
          <Typography variant="inherit" sx={{ width: 'fit-content' }}>
            {row.linkedNFT}
          </Typography>
        </Tooltip>
      </TableCell>
      <TableCell>
        <Tooltip title={displayTokensToString(row.supportedTokenId)} arrow>
          <Typography variant="inherit" sx={{ width: 'fit-content' }}>
            {row.supportedTokenId.length}
          </Typography>
        </Tooltip>
      </TableCell>
      <TableCell>{row.createdDate}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={1}>
          {row.compatiblity.map((tag) => (
            <Label variant="soft" color="info">
              {tag}
            </Label>
          ))}
        </Stack>
      </TableCell>
      <TableCell>
        <Label variant="soft" color="secondary">
          {row.format}
        </Label>
      </TableCell>
      <TableCell>
        <IconButton onClick={handleClick}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
        <Menu open={Boolean(isMenuOpen)} anchorEl={isMenuOpen} onClick={handleClose}>
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.title} disabled={item.disable}>
              <Stack direction="row" spacing={1}>
                {item.iconifyPath && (
                  <Iconify icon={item.iconifyPath} sx={{ width: 24, height: 24 }} />
                )}
                <Typography variant="inherit">{item.title}</Typography>
              </Stack>
            </MenuItem>
          ))}
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default CollectionDashboardRow;
