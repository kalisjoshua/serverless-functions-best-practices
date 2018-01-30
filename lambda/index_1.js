function handler(event, context, callback) {
  // The `event` has information about the invocation of the Lambda:
  //   - Source: S3, API Gateway, etc.
  //   - Arguments: Bucket Name, Files, HTTP Method, Path, Query String, etc.

  // context.succeed(response) === callback(null, response)
  // context.fail(error) === callback(error)

  callback(null, "Hello World!")
}

module.exports = {handler}
