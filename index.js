const {app, port, express} = require('./app')
const dotenv = require('dotenv');
const databaseConnected = require('./src/database/conexion');
const cors = require('cors')

// middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.listen(port, (req, res) =>{
    try{
        databaseConnected();
        console.log("puerto corriendo en", port)
    } catch(error){
        console.log(error);
    }
});

app.use('/api', require('./src/routes/rutas'));