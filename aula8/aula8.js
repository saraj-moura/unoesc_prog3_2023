// Apresentar o nome de todas as pessoas que possuem um currículo 
db.curriculo.find({}, {nome: 1})

// Listar os artigos do Prof. José Palazzo 
db.curriculo.find({nome: 'José Palazzo'}, {artigo: 1})

// Liste o nome e a sigla de todos os eventos cadastrados 
db.veiculos.find({}, {nome: 1, sigla: 1})

// Apresente o nome do evento cuja sigla é SBBD 
db.veiculos.findOne({sigla: 'SBBD'}, {nome: 1})

// Liste o nome das pessoas que participaram do corpo editorial de um evento a partir de '2010' 
db.curriculo.aggregate([ { $unwind: "$corpo_editorial" }, { $lookup: { from: "veiculos", localField : "corpo_editorial.veiculo", estrangeiraCampo: "id", as: "veiculo" } }, { $match: { "corpo_editorial.data_inicio": { $gte: 2010 } } }, { $project: { _id: 0, "nome": 1 } } ])

// Liste os autores que publicaram no ERBD 
db.curriculo.aggregate([ { $unwind: "$artigo" }, { $lookup: { from: "veiculos", localField: "artigo.veiculo",strangeField: "id" , as: "veiculo" } }, { $match: { "veiculo.sigla": "ERBD" } }, { $project: { _id: 0, "artigo.autores": 1 } } ])