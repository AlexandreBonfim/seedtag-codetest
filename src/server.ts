import { app } from './app'

app
  .listen({
    host: '0.0.0.0',
    port: 8888,
  })
  .then(() => {
    console.log('Server running on port 3333 🚀')
  })
