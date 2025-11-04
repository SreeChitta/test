import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

export type Item = { id: string; name: string; description?: string; createdAt?: string; updatedAt?: string };

export const listItems = async (): Promise<Item[]> => (await api.get('/items')).data;
export const getItem = async (id: string): Promise<Item> => (await api.get(`/items/${id}`)).data;
export const createItem = async (payload: Partial<Item>): Promise<Item> => (await api.post('/items', payload)).data;
export const updateItem = async (id: string, payload: Partial<Item>): Promise<Item> => (await api.put(`/items/${id}`, payload)).data;
export const deleteItem = async (id: string): Promise<void> => { await api.delete(`/items/${id}`); };

export default api;
