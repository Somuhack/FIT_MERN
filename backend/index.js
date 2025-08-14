const express = require("express")
const path = require('path');
const baseRouter = require("./src/router/baseRouter")
const permissinMiddleware = require("./src/middleware/collagePermission")
const server =express()

// server.get("/",Home)
server.use("/api/v1/",baseRouter)
// const collagePermission =(req,res,next)=>{
//       if(req.query.isclassStart){
//         next()
//       }
//       else{
//         res.send("Your collage is not permissed to strat the class right now")
//       }
// }
server.get("/start-class",permissinMiddleware.collagePermission,permissinMiddleware.istituePermisiion,(req,res)=>{
    res.end("Ok Student Your Class Is Start from Tommorow")
})
server.set('view engine','ejs')
server.get('/myhome',(req,res)=>{
      let people = ['geddy', 'neil', 'alex'];
    res.render("index",{data:people})
})
server.use("/api/public/static/",express.static(path.join(__dirname,"public")))
server.get("/contact",(req,res)=>{
    res.send("Contact us at 1234567890")
})

server.get("/profile/:username/:pass",(req,res)=>{
    console.log(req.query.age);
    
    res.end(`wellcome ${req.params.username} to our page and your password is ${req.params.pass}`)
})
server.get("/add/:a/:b",(req,res)=>{
    res.end(`Sum is ${parseInt(req.params.a)+parseInt(req.params.b)}`)
})
server.listen(4000,()=>{
    console.log("Server is running on port http://localhost:4000/")
}) 
//0 t0 65535
// M E R N