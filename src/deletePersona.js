const AWS = require('aws-sdk')

const deletePersona = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb
    .delete({
      TableName: "persona",
      Key: { id },
    })
    .promise();

    return {
        status: 200,
        body: {
            message: "Persona eliminada"
        },
    };
}

module.exports = {
    deletePersona,
}