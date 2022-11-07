const AWS = require('aws-sdk')

const getPersona = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const result = await dynamodb
    .get({
      TableName: "persona",
      Key: { id },
    })
    .promise();

    const persona = result.Item;
    return {
        status: 200,
        body: persona,
    };

};

module.exports = {
    getPersona,
};