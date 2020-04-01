const Boom = require('boom')
const mocks = require('../../services/mocks')
const objectHelper = require("../../helpers/object-helper")
const requestValidator = require("../../validators/request-validator")

module.exports = [

    {
        method: 'POST',
        path: '/Perscription/translate',
        handler: (request, h) => {
            // if (!objectHelper.checkObjectEquality(request.payload, mocks.expectedRequest)) {
            //     throw Boom.badRequest(
            //         "Incorrect request",
            //         {operationOutcomeCode: "value", apiErrorCode: "INCORRECT_REQUEST"}
            //     )
            // }

            if (!requestValidator.verifyResourceTypeIsBundle(request)) {
                throw Boom.badRequest(
                    "Resource type must be bundle",
                    {operationOutcomeCode: "value", apiErrorCode: "INCORRECT_RESOURCE_TYPE"}
                )
            }

            return h.response(mocks.actualResponse).header('test', 'yo')
        }
    }
]
