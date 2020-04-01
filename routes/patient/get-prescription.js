const Boom = require('boom')

module.exports = [

    {
        method: 'GET',
        path: '/Prescription',
        handler: (request, h) => {
            return h.response({'test': 'string'})
        }
    },
]
