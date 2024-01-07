import type express from 'express';

export async function login(
  request: express.Request,
  response: express.Response,
): Promise<void> {}

export async function register(
  request: express.Request,
  response: express.Response,
): Promise<void> {
  console.log(request.body);
  response.status(200).send({
    message: 'Server is processing.',
  });
}

export async function sendRecoveryEmail(
  request: express.Request,
  response: express.Response,
): Promise<void> {}
