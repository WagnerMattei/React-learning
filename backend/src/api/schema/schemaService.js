const Schema = require('./schema');

Schema.methods(['get', 'post', 'put', 'delete'])
Schema.updateOptions({new: true, runValidators: true})

module.exports = Schema