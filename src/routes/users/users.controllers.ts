import type express from 'express'

export async function login (req: express.Request, res: express.Response) {}

export async function register (req: express.Request, res: express.Response) {
  const { email, password } = req.body
  console.log(email)
  console.log(password)
}

export async function sendRecoveryEmail (
  req: express.Request,
  res: express.Response
) {}
