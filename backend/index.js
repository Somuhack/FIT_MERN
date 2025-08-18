const express = require("express")
const baseRouter = require("./src/router/baseRouter")
const userRouter = require("./src/router/userRouter")
const connDb = require("./src/config/connDB")
const server =express()
server.use(express.json())

// server.get("/",Home)
server.use("/api/v1/",baseRouter)
server.use("/api/v1/user",userRouter)
connDb().then(()=>{
    server.listen(4000,()=>{
    console.log("Server is running on port http://localhost:4000/")
}) 
}).catch((err)=>{
    console.error("Failed to connect to the database:", err);
})


//0 t0 65535
// M E R N