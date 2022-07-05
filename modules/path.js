const path = require('path')

// Apenas o nome do aquivo atual
console.log(path.basename(__filename))

// Nome do diretorio atual (caminho)
console.log(path.dirname(__filename))

// Nome da extensao do arquivo
console.log(path.extname(__filename))

// Criar objeto Path
console.log(path.parse(__filename))

//Juntar caminhos de arquivos
console.log(path.join(__dirname));