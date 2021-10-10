import express, { urlencoded, json } from 'express';
import config from './config';

const app = express();

// middlewares
app.use(json());
app.use(urlencoded({ extended: false }));

app.set('PORT', config.PORT || 4500);

export default app;
