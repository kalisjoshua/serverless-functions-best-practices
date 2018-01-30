const {DynamoDB} = require("aws-sdk")

const ddbClient = new DynamoDB()

function handler(event, context, callback) {
  const params = {
    TableName: "SuperAwesome",
    Item: {
      id: `unique-identifier-${event.name.toLowerCase()}`,
      name: event.name
    }
  }

  const putItemHandler = (error, data) =>
    error ? callback(error) : callback(null, data)

  ddbClient.putItem(params, putItemHandler)
}

module.exports = {handler}
