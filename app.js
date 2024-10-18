import express from 'express';
import 'dotenv/config';
import config from './src/utils/config.js';

const app = express();

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});