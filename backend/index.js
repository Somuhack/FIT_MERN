const express = require("express")
const baseRouter = require("./src/router/baseRouter")
const server =express()

// server.get("/",Home)
server.use("/api/v1/",baseRouter)

server.listen(4000,()=>{
    console.log("Server is running on port http://localhost:4000/")
}) 
//0 t0 65535
// M E R N