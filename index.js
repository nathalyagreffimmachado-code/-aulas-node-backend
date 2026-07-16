import express from 'express'
import cachorro from './router/cachorro.js'

 
// server ou app
const app = express()

app.use(express.json())

app.use('/api/v1/cachorro', cachorro)

// app.post("/api/v1/somar", (req, res) => {
// const { num1, num2  } = req.body
// const resultado = Number(num1) + Number(num2)
// res.status(200).send({message: resultado})

// }) 

// app.post("/api/v1/sub", (req, res) => {
//     const { num1, num2  } = req.body
// const resultado = Number(num1) - Number(num2)
// res.status(200).send({message: resultado})

//  })
//  app.get("/api/v1/div", (req, res) => { 
//     const { num1, num2  } = req.query
// const resultado = Number(num1) / Number(num2)
// res.status(200).send({message: resultado})

//  })
// app.get("/api/v1/mult", (req, res) => { 
//      const { num1, num2  } = req.query
// const resultado = Number(num1) * Number(num2)
// res.status(200).send({message: resultado})

// })

app.listen(3000,() => {
    console.log("Servidor ouvindo na porta 3000")
})                            