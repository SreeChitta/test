import { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { listItems, createItem, updateItem, deleteItem, Item } from '../api/client';
import ItemForm from '../components/ItemForm';
import ItemTable from '../components/ItemTable';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [editing, setEditing] = useState<Item | null>(null);

  const load = async () => setItems(await listItems());
  useEffect(() => { load(); }, []);

  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Create Item</Typography>
            <ItemForm onSubmit={async (payload) => { await createItem(payload); await load(); }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Items</Typography>
            <ItemTable rows={items} actions={{
              onEdit: (row) => setEditing(row),
              onDelete: async (row) => { await deleteItem(row.id); await load(); }
            }} />
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={!!editing} onClose={() => setEditing(null)} fullWidth maxWidth="sm">
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <ItemForm initial={editing ?? undefined} onSubmit={async (payload) => {
            if (editing) { await updateItem(editing.id, payload); setEditing(null); await load(); }
          }} />
        </DialogContent>
      </Dialog>
    </Container>
  );
}
