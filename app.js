const express= require('express')
const jwt=require ('jsonwebtoken') 
const port=3000

const app=express()
app.use(express.json())
app.use(express.urlencoded({extends:false}))


app.get('/',(req,res)=>{ 
    res.sendFile("./public/index.html",{
        root:__dirname
    })
})
 

app.use(express.static('public'))
app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto: ${port}`)
})