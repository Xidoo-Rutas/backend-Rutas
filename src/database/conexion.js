const mongoose = require("mongoose");

const databaseConnected = () =>{
    mongoose
    .set("strictQuery", true)
    .connect('mongodb+srv://root:root@tester.ssgowty.mongodb.net/xidoo')   
    .then(() => console.log("Se ha enlazado a la base de datos (cloud)"))
    .catch((error) =>console.error("'Ocurrio un error al conectarse a la base de datos (cloud)"))
}

module.exports = databaseConnected;