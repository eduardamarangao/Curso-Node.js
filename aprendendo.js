const mongoose = require("mongoose");

// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/aprendendo")
  .then(function () {
    console.log("Conectado com sucesso");
  })
  .catch(function (err) {
    console.log("Houve um erro ao se conectar ao MongoB" + err);
  });
