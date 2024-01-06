import type express from 'express'

export async function login (req: express.Request, res: express.Response) { }

export async function register (req: express.Request, res: express.Response) {
  console.log(req.body)
  res.status(200).send({
    message: 'Server is processing.'
  })
}

export async function sendRecoveryEmail (
  req: express.Request,
  res: express.Response
) { }
