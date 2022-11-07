const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const addPersona = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { nombre, edad } = JSON.parse(event.body);
    const createdAt = new Date()
    const id = v4()

    const newPerson = {
        id,
        nombre,
        edad,
        createdAt
      };
    await dynamodb
     .put({
        TableName: "persona",
        Item: newPerson,
     })
     .promise();

     return {
        statusCode: 200,
        body: JSON.stringify(newPerson)
     }
};

module.exports = {
    addPersona,
};