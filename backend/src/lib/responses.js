export const ok = (body) => ({ statusCode: 200, headers: cors(), body: JSON.stringify(body) });
export const created = (body) => ({ statusCode: 201, headers: cors(), body: JSON.stringify(body) });
export const noContent = () => ({ statusCode: 204, headers: cors(), body: '' });
export const badRequest = (msg) => ({ statusCode: 400, headers: cors(), body: JSON.stringify({ error: msg }) });
export const notFound = (msg) => ({ statusCode: 404, headers: cors(), body: JSON.stringify({ error: msg }) });
export const serverError = (e) => ({ statusCode: 500, headers: cors(), body: JSON.stringify({ error: e?.message || 'Internal Error' }) });
const cors = () => ({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type,Authorization', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS' });
