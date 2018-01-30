function DynamoDB() {}
DynamoDB.prototype = {
  ...DynamoDB.prototype,

  putItem(params, callback) {
    if (params.Item.name === "This should result in an error from the DynamoDB mock") {
      callback("This should result in an error from the DynamoDB mock")
    } else {
      callback(null, params.Item)
    }
  },
}

module.exports = {DynamoDB}
