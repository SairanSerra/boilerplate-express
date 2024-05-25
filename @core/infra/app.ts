import { router } from './routes'
import express from 'express'
import cors from 'cors'

export const app = express()

/**
 *
 *Middleware
 */

app.use(express.json())
app.use(cors())

/**
 * Routes
 */

app.use('/v1', router)
app.use('/v1/record', router)
