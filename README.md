# Serverless Nodejs Rest API with TypeScript And MongoDB Atlas

Questo è il progetto dell'applicazione BackEnd Rest API della app Learnn Game. E' sviluppata con il framework Serverless Framework e TypeScript. 
Il database utilizzato è un non relazionale MongoDB hostato su MongoDB Atlas.

# Continuous Delivery
Per il CD è impostata un'automazione su seed.run che effettua il deploy del progetto
su AWS in base al ramo git su cui viene effettuato il push:
- Se viene effettuato un push sul ramo git 'main', seed.run automaticamente avvia
  il processo di deploy su AWS nell'ambiente di sviluppo tramite il comando
```bash
sls deploy --stage dev
```
- Se viene effettuato un push sul ramo git 'master', seed.run automaticamente avvia
  il processo di deploy su AWS nell'ambiente di produzione tramite il comando
```bash
sls deploy --stage prod
```
In questo modo si hanno due ambienti sepatari del BackEnd che si collega a due database MongoDB differenti (utilizzando le variabili d'ambiente).


## Invoke the function locally

```bash
serverless invoke local --function find
```

Which should result in:

```bash
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.

{
    "statusCode": 200,
    "body": "{\"code\":0,\"message\":\"success\",\"data\":[{\"_id\":\"5dff21f71c9d440000a30dad\",\"createdAt\":\"2020-05-16T09:27:51.219Z\"},{\"_id\":\"5dff22ba1c9d440000a30dae\",\"createdAt\":\"2020-05-16T09:27:51.220Z\"}]}"
}
```

## Deploy

### To Test It Locally

* Run ```npm install``` to install all the necessary dependencies.
* Run ```npm run local``` use serverless offline to test locally. 

### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```

The expected result should be similar to:

```
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-rest-api-typescript.zip file to S3 (1.86 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
......................................
Serverless: Stack update finished...
Service Information
service: aws-node-rest-api-typescript
stage: dev
region: us-east-1
stack: aws-node-rest-api-typescript-dev
resources: 32
api keys:
  None
endpoints:
  POST - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/books
  PUT - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/books/{id}
  GET - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/books
  GET - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/books/{id}
  DELETE - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/books/{id}
functions:
  create: aws-node-rest-api-typescript-dev-create
  update: aws-node-rest-api-typescript-dev-update
  find: aws-node-rest-api-typescript-dev-find
  findOne: aws-node-rest-api-typescript-dev-findOne
  deleteOne: aws-node-rest-api-typescript-dev-deleteOne
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
```

## Usage

send an HTTP request directly to the endpoint using a tool like curl

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/books
```

## Scaling

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).
