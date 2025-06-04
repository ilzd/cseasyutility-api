import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import lineupRoutes from './routes/lineup.routes'
import mapRoutes from './routes/map.routes'
import mapAreaRoutes from './routes/mapArea.routes'

// Load env variables
dotenv.config()

async function startServer() {
  // Connect to database before starting the server
  await connectDB()

  const app = express()
  app.use(cors())
  app.use(express.json())

  // Routes
  app.use('/api/lineups', lineupRoutes)
  app.use('/api/maps', mapRoutes)
  app.use('/api/mapAreas', mapAreaRoutes)

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer().catch((err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})
