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
import React, { useCallback, useState } from 'react';
import { AssetCollectionItems } from 'src/@types/assetCollection';
import Iconify from 'src/components/iconify/Iconify';
import Label from 'src/components/label/Label';
import TextMathLength from 'src/components/text-max-length/TextMaxLength';
import { displayTokensToString } from 'src/utils/display';
import { chainIconMap, compatiblityTooltipMap } from './dashboard-config';

// --------------------------------------------
type MENU_ITEMS_TITLES = 'Review Avatar' | 'Update Version' | 'Grant Official';

const MENU_ITEMS: {
  title: MENU_ITEMS_TITLES;
  iconifyPath: string;
  clickPath?: string;
  disable?: boolean;
}[] = [
  {
    title: 'Review Avatar',
    iconifyPath: 'ic:round-videocam',
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
// --------------------------------------------

type CollectionDashboardRowProp = {
  row: AssetCollectionItems;
};

const TableCellDefaultCursor = styled(TableCell)`
  cursor: default;
`;

const CollectionDashboardRow = ({ row }: CollectionDashboardRowProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState<HTMLElement | null>(null);
  //
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => setIsMenuOpen(event.currentTarget),
    [setIsMenuOpen]
  );
  const handleClose = useCallback(() => setIsMenuOpen(null), []);
  const wrapperTooltip = useCallback(
    (supportedTokenId: string[] | undefined) =>
      // eslint-disable-next-line react/no-unstable-nested-components
      (wrappedNode: ReactJSXElement): React.ReactNode => {
        if (supportedTokenId !== undefined) {
          return (
            <Tooltip title={displayTokensToString(supportedTokenId)} arrow>
              {wrappedNode}
            </Tooltip>
          );
        }
        return wrappedNode;
      },
    []
  );
  //
  return (
    <TableRow key={`${row.avatarName}-${row.version}`}>
      <TableCellDefaultCursor sx={{ p: 0, pl: 2 }}>
        {chainIconMap[row.chain]}
      </TableCellDefaultCursor>
      {/*  */}
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
      {/*  */}
      <TableCellDefaultCursor>{row.version}</TableCellDefaultCursor>
      {/*  */}
      <TableCellDefaultCursor>
        <Tooltip title={row.collectionAdress} arrow>
          <Typography variant="inherit" sx={{ width: 'fit-content' }}>
            {row.linkedNFT}
          </Typography>
        </Tooltip>
      </TableCellDefaultCursor>
      {/*  */}
      <TableCellDefaultCursor align="right">
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          {wrapperTooltip(row.supportedTokenId)(
            <Typography variant="inherit" sx={{ width: 'fit-content' }}>
              {row.supportedTokenCount}
            </Typography>
          )}
        </Box>
      </TableCellDefaultCursor>
      {/*  */}
      <TableCellDefaultCursor>{row.createdDate}</TableCellDefaultCursor>
      {/*  */}
      <TableCellDefaultCursor>
        <Stack direction="row" spacing={1} justifyContent="center">
          {row.compatiblity?.map((tag) => (
            <Tooltip title={compatiblityTooltipMap[tag]} arrow placement="top">
              <Label variant="soft" color="info">
                <Box>{tag}</Box>
              </Label>
            </Tooltip>
          ))}
        </Stack>
      </TableCellDefaultCursor>
      {/*  */}
      <TableCell>
        {row.format && (
          <Label variant="soft" color="secondary">
            {row.format}
          </Label>
        )}
      </TableCell>
      {/*  */}
      <TableCell>
        <IconButton onClick={handleClick}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
        <Menu open={Boolean(isMenuOpen)} anchorEl={isMenuOpen} onClick={handleClose}>
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.title} disabled={item.disable}>
              <Link
                href={item.title === 'Review Avatar' ? row.viewerURL : item.clickPath}
                color="inherit"
                target="_blank"
                rel="noopener"
              >
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
