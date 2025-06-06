import dotenvx from '@dotenvx/dotenvx';
dotenvx.config();

import express from 'express';
import initializeServer from './server';

const app = express();

initializeServer(app);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
