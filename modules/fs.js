const fs = require('fs')
const path = require('path')

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if (error){
        return console.log(`erro: ${error}`)
    }

    console.log('pasta criada com sucesso')
})

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'Hello world ', (error) => {
  if (error) {
    return console.log(`Erro: ${error}`);
  }

  console.log("Arquivo criado com sucesso!");

  // Adicionar um arquivo
  fs.appendFile(
    path.join(__dirname, "/teste", "teste.txt"),
    "Hello node",
    (error) => {
      if (error) {
        return console.log(`Erro: ${error}`);
      }

      console.log("Arquivo adiconado com sucesso!");
    }
  );

  // Ler um arquivo
  fs.readFile(
    path.join(__dirname, "/teste", "teste.txt"),
    "utf8",
    (error, data) => {
      if (error) {
        return console.log(`Erro: ${error}`);
      }

      console.log(data);
    }
  );
})