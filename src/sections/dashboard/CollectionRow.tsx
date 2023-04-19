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
  styled,
  Link,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { AssetCollectionItems } from 'src/@types/assetCollection';
import Iconify from 'src/components/iconify/Iconify';
import Label from 'src/components/label/Label';
import TextMathLength from 'src/components/text-max-length/TextMaxLength';
import { displayTokensToString } from 'src/utils/display';
import { PATH_PAGE } from 'src/routes/paths';
import { chainIconMap, compatiblityTooltipMap } from './dashboard-config';

type CollectionDashboardRowProp = {
  row: AssetCollectionItems;
};

const MENU_ITEMS = [
  {
    title: 'Review Avatar',
    iconifyPath: 'ic:round-videocam',
    clickPath: PATH_PAGE.avatarviewer,
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

const TableCellDefaultCursor = styled(TableCell)`
  cursor: default;
`;

const CollectionDashboardRow = ({ row }: CollectionDashboardRowProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState<HTMLElement | null>(null);
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => setIsMenuOpen(event.currentTarget),
    [setIsMenuOpen]
  );
  const handleClose = useCallback(() => setIsMenuOpen(null), []);

  return (
    <TableRow key={`${row.avatarName}-${row.version}`}>
      <TableCellDefaultCursor sx={{ p: 0, pl: 2 }}>
        {chainIconMap[row.chain]}
      </TableCellDefaultCursor>
      <TableCellDefaultCursor>
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
      </TableCellDefaultCursor>
      <TableCellDefaultCursor>{row.version}</TableCellDefaultCursor>
      <TableCellDefaultCursor>
        <Tooltip title={row.collectionAdress} arrow>
          <Typography variant="inherit" sx={{ width: 'fit-content' }}>
            {row.linkedNFT}
          </Typography>
        </Tooltip>
      </TableCellDefaultCursor>
      <TableCellDefaultCursor align="right">
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Tooltip title={displayTokensToString(row.supportedTokenId)} arrow>
            <Typography variant="inherit" sx={{ width: 'fit-content' }}>
              {row.supportedTokenId.length}
            </Typography>
          </Tooltip>
        </Box>
      </TableCellDefaultCursor>
      <TableCellDefaultCursor>{row.createdDate}</TableCellDefaultCursor>
      <TableCellDefaultCursor>
        <Stack direction="row" spacing={1} justifyContent="center">
          {row.compatiblity.map((tag) => (
            <Tooltip title={compatiblityTooltipMap[tag]} arrow placement="top">
              <Label variant="soft" color="info">
                <Box>{tag}</Box>
              </Label>
            </Tooltip>
          ))}
        </Stack>
      </TableCellDefaultCursor>
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
              <Link href={item.clickPath} color="inherit" target="_blank" rel="noopener">
                <Stack direction="row" spacing={1}>
                  {item.iconifyPath && (
                    <Iconify icon={item.iconifyPath} sx={{ width: 24, height: 24 }} />
                  )}
                  <Typography variant="inherit">{item.title}</Typography>
                </Stack>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default CollectionDashboardRow;
