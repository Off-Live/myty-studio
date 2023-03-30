import { AssetCollectionItems } from 'src/@types/assetCollection';
import { Container } from '@mui/system';
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Typography,
  styled,
} from '@mui/material';
import Iconify from 'src/components/iconify/Iconify';
import { TableHeadCustom, useTable } from 'src/components/table';
import { TableHeadCustomProps } from 'src/components/table/TableHeadCustom';
import { StyledRoot } from '../styles/StyledRoot';
import CollectionDashboardRow from './CollectionRow';

const DashboardContainer = styled(Container)`
  box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12);
`;

type CollectionDashboardProps = {
  assetCollectionItems: AssetCollectionItems[];
  tableHeaderProps: TableHeadCustomProps;
};

const CollectionDashboard = ({
  assetCollectionItems,
  tableHeaderProps,
}: CollectionDashboardProps) => {
  const { page, rowsPerPage, onChangePage, onChangeRowsPerPage } = useTable({
    defaultRowsPerPage: 5,
  });
  return (
    <StyledRoot>
      <Container
        sx={{
          boxShadow: `0px 10px 2px -10px rgba(145, 158, 171, 0.2), 0px 10px 24px -10px rgba(145, 158, 171, 0.12)`,
        }}
      >
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
                {assetCollectionItems
                  .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                  .map((row) => (
                    <CollectionDashboardRow row={row} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            count={assetCollectionItems.length}
            page={page}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
          />
        </Stack>
      </Container>
    </StyledRoot>
  );
};

export default CollectionDashboard;
