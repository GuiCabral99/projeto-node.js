const express = require('express')

const app = express()

const port = 3333

app.get('/home', (req, res) => {
    res.contentType('text/html')
    res.status(200).send('<h1>hello world</h1>')
})

app.get('/users', (req, res) => {
    const users = [
        {
        name: "Guilherme",
        email: "gui@cabral.com",
        },
        {
        name: "Julia",
        email: "julia@beatriz.com",
        },
    ];

    res.status(200).json(users)
})

app.listen(port, () => console.log(`Rodando na porta ${port}`))