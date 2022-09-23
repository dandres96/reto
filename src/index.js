const express = require("express");
const mongoose = require ("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port,()=> console.log("server listening to",port));

app.use(express.json());
app.use("/api",userRoute);

app.get('/',(req,res)=>res.send('Bienvenido al index del proyecto'))
// Método de conexión con la base de datos

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(()=> console.log("conectado mongodb"))
    .catch((error)=>console.error(error));

    // Middleware: URI de conexión para probar los request(GET, POST,DELETE, PUT)
    app.use(express.json())
    //localhost:3000/api/users
    app.use('/api', userRoute)