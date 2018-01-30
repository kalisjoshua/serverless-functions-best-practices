const {DynamoDB} = require("aws-sdk")

const client = new DynamoDB()

function factory(TableName) {

  return {
    add(Item, callback) {
      Item.id = `unique-identifier-${Item.name.toLowerCase()}`

      return new Promise((resolve, reject) =>
        client.putItem({TableName, Item}, (error, response) =>
          error ? reject(error, response) : resolve(response)))
    }
  }
}

module.exports = factory
