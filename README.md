<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

service: reto-tata-lambda-serverless
stage: dev
region: us-west-2
stack: reto-tata-lambda-serverless-dev
endpoints:
  GET - https://l6ibrxdj04.execute-api.us-west-2.amazonaws.com/
  POST - https://l6ibrxdj04.execute-api.us-west-2.amazonaws.com/personas
  GET - https://l6ibrxdj04.execute-api.us-west-2.amazonaws.com/personas
  GET - https://l6ibrxdj04.execute-api.us-west-2.amazonaws.com/personas/{id}
  PUT - https://l6ibrxdj04.execute-api.us-west-2.amazonaws.com/personas/{id}
  DELETE - https://l6ibrxdj04.execute-api.us-west-2.amazonaws.com/personas/{id}
functions:
  hello: reto-tata-lambda-serverless-dev-hello
  agregarPersona: reto-tata-lambda-serverless-dev-agregarPersona
  listarPersonas: reto-tata-lambda-serverless-dev-listarPersonas
  listarPersona: reto-tata-lambda-serverless-dev-listarPersona
  actualizarPersona: reto-tata-lambda-serverless-dev-actualizarPersona
  eliminarPersona: reto-tata-lambda-serverless-dev-eliminarPersona
