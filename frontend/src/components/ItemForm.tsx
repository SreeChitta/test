import { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import { Item } from '../api/client';

type Props = { onSubmit: (payload: Partial<Item>) => Promise<void>; initial?: Partial<Item> };
export default function ItemForm({ onSubmit, initial }: Props) {
  const [name, setName] = useState(initial?.name || '');
  const [description, setDescription] = useState(initial?.description || '');
  useEffect(() => { setName(initial?.name || ''); setDescription(initial?.description || ''); }, [initial]);
  return (
    <Box component="form" onSubmit={async (e) => { e.preventDefault(); await onSubmit({ name, description }); }}>
      <Stack spacing={2} sx={{ p: 2 }}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={3} fullWidth />
        <Button type="submit" variant="contained">Save</Button>
      </Stack>
    </Box>
  );
}
