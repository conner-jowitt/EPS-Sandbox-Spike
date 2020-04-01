const Boom = require('boom')
const mocks = require('../../services/mocks')
const objectHelper = require("../../helpers/object-helper")
const requestValidator = require("../../validators/request-validator")

module.exports = [

    {
        method: 'POST',
        path: '/Prescription/translate',
        handler: (request, h) => {

            if (!requestValidator.verifyResourceTypeIsBundle(request)) {
                throw Boom.badRequest(
                    "ResourceType must be 'Bundle' on request",
                    {operationOutcomeCode: "value", apiErrorCode: "INCORRECT_RESOURCETYPE"}
                )
            }

            if (!requestValidator.verifyBundleContainsEntries(request)) {
                throw Boom.badRequest(
                    "ResourceType Bundle must contain 'entry' field",
                    {operationOutcomeCode: "value", apiErrorCode: "MISSING_FIELD"}
                )
            }

            if (!requestValidator.verifyBundleEntryContainsMedicationRequest(request)) {
                throw Boom.badRequest(
                    "Request must contain at least one 'MedicationRequest' entry",
                    {operationOutcomeCode: "value", apiErrorCode: "MISSING_FIELD"}
                )
            }

            if (!requestValidator.verifyBundleEntryContainsOnePatient(request)) {
                throw Boom.badRequest(
                    "Request must contain one 'Patient' entry",
                    {operationOutcomeCode: "value", apiErrorCode: "MISSING_FIELD"}
                )
            }

            if (!requestValidator.verifyBundleEntryContainsPractitioner(request)) {
                throw Boom.badRequest(
                    "Request must contain at least one 'Practitioner' entry",
                    {operationOutcomeCode: "value", apiErrorCode: "MISSING_FIELD"}
                )
            }

            if (!requestValidator.verifyBundleEntryContainsOneEncounter(request)) {
                throw Boom.badRequest(
                    "Request must contain one 'Encounter' entry",
                    {operationOutcomeCode: "value", apiErrorCode: "MISSING_FIELD"}
                )
            }

            if (!requestValidator.verifyBundleEntryContainsTwoOrganizations(request)) {
                throw Boom.badRequest(
                    "Request must contain two 'Organization' entries",
                    {operationOutcomeCode: "value", apiErrorCode: "MISSING_FIELD"}
                )
            }

            return h.response(mocks.actualResponse).header('test', 'yo')
        }
    }
]
