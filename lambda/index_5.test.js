const {handler} = require("./index_5")

describe("Lambda handler function", function () {

  it("should be a function", function () {
    expect(typeof handler).toBe("function")
  })

  it("should write to DynamoDB", function (done) {
    const event = {name: "Quicken Loans"}

    handler(event, {}, (error, response) => {
      expect(error).toBeNull()
      expect(response).toMatchSnapshot()
      done()
    })
  })

  it("should handle an error in Dynamo #putItem()", function (done) {
    const event = {name: "This should result in an error from the DynamoDB mock"}

    handler(event, {}, (error, response) => {
      expect(error).toBe("This should result in an error from the DynamoDB mock")
      done()
    })
  })

})
