import { app } from './app'

const port = process.env.PORT || 3333

const server = app.listen(port, () =>
  console.log(`App is Running in port ${port}`),
)

process.on('SIGINT', () => {
  server.close()
  console.log('App Stoped')
})
