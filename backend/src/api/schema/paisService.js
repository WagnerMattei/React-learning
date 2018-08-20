const Pais = require('./schema').pais;

Pais.methods(['get', 'post', 'put', 'delete'])
Pais.updateOptions({new: true, runValidators: true})

module.exports = Pais