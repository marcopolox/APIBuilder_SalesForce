var Arrow = require('arrow');
var Model = Arrow.createModel('SFCombined', {
    "connector": "appc.composite",
    "fields": {
        "Name": {
            "name": "Name",
            "type": "string",
            "description": "Account Name",
            "required": true,
            "model": "appc.salesforce/Account"
        },
        "Type": {
            "name": "Type",
            "type": "string",
            "description": "Account Type",
            "model": "appc.salesforce/Account"
        },
        "AnnualRevenue": {
            "name": "AnnualRevenue",
            "type": "number",
            "description": "Annual Revenue",
            "model": "appc.salesforce/Account"
        },
        "OpportunityName": {
            "type": "string",
            "description": "Name",
            "required": true,
            "model": "appc.salesforce/Opportunity",
            "name": "Name"
        },
        "Amount": {
            "name": "Amount",
            "type": "number",
            "description": "Amount",
            "model": "appc.salesforce/Opportunity"
        }
    },
    "actions": [
        "read"
    ],
    "metadata": {
        "left_join": [
            {
                "model": "appc.salesforce/Opportunity",
                "join_properties": {
                    "AccountId": "id"
                }
            }
        ]
    }
});
module.exports = Model;