const mongoose = require("mongoose");

const connectDatabase = async () => {
    console.log("Estamos connectando");

    mongoose.connect("mongodb+srv://root:123@cluster0.epzhwia.mongodb.net/?retryWrites=true&w=majority", 
    {
        useNewUrlParser:true, useUnifiedTopology:true
    })
    .then(()=>{console.log("___Banco de dados connectado___")})
    .catch((error) => {console.log("Falha na conexão com o banco de dados: ", error)})
}


module.exports = connectDatabase