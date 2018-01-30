const dynamoClientFactory = require("./dynamoClient")

const ddbClient = new dynamoClientFactory("SuperAwesome")

function handler(event, context, callback) {
  ddbClient.add({name: event.name})
    .then(response => callback(null, response))
    .catch(callback)
}

module.exports = {handler}
