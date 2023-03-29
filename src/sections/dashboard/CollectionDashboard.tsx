import React from 'react';
import { AssetCollectionItems } from 'src/@types/assetCollection';
import { Container } from '@mui/system';
import {
  Box,
  Button,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Iconify from 'src/components/iconify/Iconify';
import { TableHeadCustom } from 'src/components/table';
import { TableHeadCustomProps } from 'src/components/table/TableHeadCustom';
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Label from 'src/components/label/Label';
import TextMaxLine from 'src/components/text-max-line/TextMaxLine';
import TextMathLength from 'src/components/text-max-length/TextMaxLength';
import { StyledRoot } from '../styles/StyledRoot';

type CollectionDashboardProps = {
  assetCollectionItems: AssetCollectionItems[];
  tableHeaderProps: TableHeadCustomProps;
};

const CollectionDashboard = ({
  assetCollectionItems,
  tableHeaderProps,
}: CollectionDashboardProps) => (
  <StyledRoot>
    <Container>
      <Stack spacing={2.5} sx={{ my: 7.5 }} direction="column">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">My Collections</Typography>
          <Box>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              Add New
            </Button>
          </Box>
        </Stack>
        <TableContainer>
          <Table>
            <TableHeadCustom {...tableHeaderProps} />
            <TableBody>
              {assetCollectionItems.map((row) => (
                <TableRow key={`${row.avatarName}-${row.version}`}>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Box
                        component="img"
                        src="/assets/sample-avatar.svg"
                        style={{ width: 40, height: 40 }}
                      />
                      <Stack>
                        <TextMathLength variant="subtitle2" maxLength={10}>
                          {row.avatarName}
                        </TextMathLength>
                        <Typography variant="body2">{row.creator}</Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.version}</TableCell>
                  <TableCell>{row.linkedNFT}</TableCell>
                  <TableCell>{row.supportedTokenType}</TableCell>
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
                    <Iconify icon="eva:more-vertical-fill" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  </StyledRoot>
);

export default CollectionDashboard;
