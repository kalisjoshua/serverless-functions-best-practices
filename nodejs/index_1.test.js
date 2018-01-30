const {handler} = require("./index_1")

describe("Lambda handler function", function () {

  // synchronous test
  it("should be a function", function () {
    expect(typeof handler).toBe("function")
  })

  // asynchronous test
  it("should return 'Hello World!'", function (done) {
    handler({}, {}, (error, response) => {
      expect(error).toBeNull()
      expect(response).toBe("Hello World!")
      done()
    })
  })

})
