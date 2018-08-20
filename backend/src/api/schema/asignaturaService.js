const Asignatura = require('./schema').asignatura;

Asignatura.methods(['get', 'post', 'put', 'delete'])
Asignatura.updateOptions({new: true, runValidators: true})

Asignatura.route('count', (req, res, next) =>
{
    Asignatura.count((error, value) =>
    {
        if (error)
        {
            res.status(500).json({ errors: [error] })
        } else
        {
            res.json({value});
        }
    })
})

module.exports = Asignatura