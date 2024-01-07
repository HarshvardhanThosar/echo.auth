import type express from 'express';
import { healthChecker } from '../../scripts/health-check';

const { API_VERSION = '1', NODE_VERSION = '' } = process.env;

export async function checkHealth(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
): Promise<void> {
  try {
    const healthData = await healthChecker(false);
    response.send(200).json({
      message: 'Health status fetched successfully!',
      server: {
        project: 'echo.auth',
        instance: 'something',
        node_version: NODE_VERSION,
        api_version: API_VERSION,
      },
      data: healthData,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: 'Something went wrong!',
    });
  }
}
