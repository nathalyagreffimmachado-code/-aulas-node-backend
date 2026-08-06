import express, { Router } from 'express'
import {dividir,somar} from '../service/cachorro.js'

const cachorro = express.Router()

cachorro.post("/somar", (req, res) => {
    try {
        const {num1,num2} = req.body
        const resultado = somar(Number(num1),Number(num2))
        res.status(200).send({
            message:resultado
        })
    } catch (error) {
        res.send(500)({message:error.message})

    }
})
cachorro.post("/dividir",(req,res)=>{
    try {
        const{num1,num2} = req.body
        const resultado = dividir(num1,num2)
        res.status(200).send({message: resultado})
    } catch (error) {
        res.status(500).send({message})
        
    }

})
export default cachorro