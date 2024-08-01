const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const loginModel = require("./admin")
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://rosemol:rosemol1t@cluster0.4vxoeox.mongodb.net/swiggyappdb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})

app.post("/adminsignup",(req,res)=>{
    let input = req.body
    let hashedpassword = bcrypt.hashSync(input.password,10)
    input.password = hashedpassword
    console.log(input)
    let result = new loginModel(input)
    result.save()
    res.json({"status":"success"}) 
})

app.listen(5050,()=>{
    console.log("server started")
})