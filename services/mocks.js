const fs = require('fs')

module.exports = {
    expectedRequest: JSON.parse(fs.readFileSync('mocks/Request.json')),
    actualResponse: JSON.parse(fs.readFileSync('mocks/Response.json')),
}