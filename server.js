import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import pokeRoutes from './routes/pokemons'

const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/poke/', pokeRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
