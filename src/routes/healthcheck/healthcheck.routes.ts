import express from 'express';
import { checkHealth } from './healthcheck.controller';

const router = express.Router();

router.get('/', checkHealth);

export default router;
