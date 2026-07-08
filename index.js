import express from 'express'
import bancoDeDados from './repository/index.js'
 
// server ou app
const app = express()
 
app.get("/api/pessoa/:id", (req, res) => {
    const { id } = req.params 
   const pessoa = bancoDeDados.find(it => it.id == id)
    if(!pessoa) {
        res.send({message: "Pessoa nao econtrada"})
        return
    }
 
    res.send({ pessoa })
 
})

// http://localhost:3000/api/pessoa?id=3&name=joao
app.get("/api/pessoa", (req, res) => {
  const { id, name } = req.query
     if(!id || !name) {
        res.send({message: "favor informar id e name"})
        return
    }
    bancoDeDados.push({id, name})
    console.log(bancoDeDados)
    res.send({ message: "Pessoa criada com sucesso" })
})



app.get("/api/numeros", (req, res)=>{
    const {num1,num2} = req.query
    
})







app.listen(3000,() => {
    console.log("Servidor ouvindo na porta 3000")
})