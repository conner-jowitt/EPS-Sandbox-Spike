
module.exports = {
    
    // validateIfMatchParameter: function (request) {
    //     return request.headers["if-match"] || (request.headers["if-match"].startsWith('W/"') && request.headers["if-match"].endsWith('"'))
    // },

    // validateIfMatchHeaderIsCorrectVersion: function(request, examplePatient) {
    //     return request.headers["if-match"].slice(3, -1) == examplePatient.meta.versionId
    // },

    // validateContentTypeHeader: function (request) {
    //     return request.headers["content-type"] || request.headers["content-type"].toLowerCase() === "application/json-patch+json"
    // },

    // verifyPatchObjectHasBeenSubmitted: function(request) {
    //     return request.payload || request.payload.patches || request.payload.patches.length !== 0
    // },

    verifyResourceTypeIsBundle: function(request) {
        return request.payload && request.payload["resourceType"] && request.payload["resourceType"] === "Bundle"
    },

    verifyBundleContainsEntries: function(request) {
        return request.payload && request.payload["entry"]
    },

    verifyBundleEntryContainsMedicationRequest: function(request) {
        return request.payload["entry"].filter(entry => entry["resourceType"] === "MedicationRequest").length !== 0
    },

    verifyBundleEntryContainsOnePatient: function(request) {
        return request.payload["entry"].filter(entry => entry["resourceType"] === "Patient").length === 1
    },

    verifyBundleEntryContainsPractitioner: function(request) {
        return request.payload["entry"].filter(entry => entry["resourceType"] === "Practitioner").length !== 0
    },

    verifyBundleEntryContainsOneEncounter: function(request) {
        return request.payload["entry"].filter(entry => entry["resourceType"] === "Encounter").length === 1
    },

    verifyBundleEntryContainsTwoOrganizations: function(request) {
        return request.payload["entry"].filter(entry => entry["resourceType"] === "Organization").length === 2
    }
}