// index.ts
import express from 'express';
import http from 'http';
import cors from 'cors';
import { appRoutes } from './routes/app.routes';

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: '*', optionsSuccessStatus: 204 }));
app.use(appRoutes.router);

const PORT = process.env.PORT || 5000;

// SERVER LISTEN ==================================================
server.listen(PORT, () => {
	console.info(`Server has started listening on port ${PORT}`);
});
