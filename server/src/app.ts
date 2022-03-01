import express from 'express';
import config from 'config';
import path from 'path';
import log from './logger';
import connect from './db/connect';
import router from './routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import deserializeUser from './middleware/deserializeUser';

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
}));
app.use(cookieParser());

app.use(deserializeUser);

app.use('/uploads', express.static(path.resolve('uploads')));

app.listen(port, host, () => {
  log.info(`Server is listening on ${host}:${port}`)

  connect();

  router(app);
});
