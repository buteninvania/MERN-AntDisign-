const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/employees', require('./routes/employees.routes'))

const PORT = config.get('port') || 5001

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()
