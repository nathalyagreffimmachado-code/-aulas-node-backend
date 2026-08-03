import express from 'express'


const router = express.Router()

router.get("/somar", (req, res) => {
const { num1, num2  } = req.query
const resultado = Number(num1) + Number(num2)
res.status(200).send({message: resultado})

}) 

router.get("/api/salario", (req, res) => {
    const { valor,hora} = req.query
    const resultado = valor*hora
    res.status(200).send({message: resultado})
})

router.get("/peso", (req, res) => {
    const {peso1,peso2,peso3,peso4,peso5} = req.query
    const resultado = (peso1,peso2,peso3,peso4,peso5)/5
    res.status(200).send({message: resultado})
})

router.get("/temp",(req, res) => {
    const {celsius} = req.query
    const resultado = (9*celsius+160)/5;
    res.status(200).send({message: resultado})
})



export default router