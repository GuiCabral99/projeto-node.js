const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aprendendonodejs.wwj6our.mongodb.net/?retryWrites=true&w=majority`,
      (error) => {
        if (error) {
          return console.log(`Erro no banco de dados: ${error}`);
        }

        return console.log("conexão com o banco de dados realizada com sucesso");
      }
    );
}

module.exports = connectToDatabase