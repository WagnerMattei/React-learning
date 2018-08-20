const Alumno = require('./schema').alumno;

Alumno.methods(['get', 'post', 'put', 'delete'])
Alumno.updateOptions({ new: true, runValidators: true })

Alumno.route('count', (req, res, next) =>
{
    Alumno.count((error, value) =>
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

module.exports = Alumno