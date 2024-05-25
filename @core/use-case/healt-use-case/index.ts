import { Request, Response } from 'express'

export default function health(req: Request, res: Response) {
  const body = {
    statusCode: 200,
    message: 'Server is Runing',
  }

  return res.status(200).json(body)
}
