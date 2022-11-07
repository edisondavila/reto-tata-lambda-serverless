const AWS = require('aws-sdk')

const getPersonas = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb
            .scan({
                TableName: "persona",
            })
            .promise();

        const personas = result.Items;
        console.log("personas: ",personas);
        return {
            status: 200,
            body: {
                personas
            }
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getPersonas,
};