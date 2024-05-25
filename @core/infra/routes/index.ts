import health from '../../use-case/healt-use-case'
import { Request, Response, Router } from 'express'

export const router = Router()

router.get('/', (req: Request, res: Response) => {
  return health(req, res)
})
