import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Item } from '../api/client';

export type Actions = {
  onEdit: (row: Item) => void;
  onDelete: (row: Item) => void;
};

const columns = (actions: Actions): GridColDef[] => [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 2 },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    getActions: (params) => [
      <GridActionsCellItem
        key="edit"
        icon={<EditIcon />}
        label="Edit"
        onClick={() => actions.onEdit(params.row)}
        showInMenu={false}
      />,
      <GridActionsCellItem
        key="delete"
        icon={<DeleteIcon />}
        label="Delete"
        onClick={() => actions.onDelete(params.row)}
        showInMenu={false}
      />
    ],
  },
];

export default function ItemTable({ rows, actions }: { rows: Item[]; actions: Actions }) {
  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGrid
        rows={rows}
        getRowId={(r) => r.id}
        columns={columns(actions)}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
