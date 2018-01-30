const {handler} = require("./index_0")

describe("Lambda handler function", function () {

  // synchronous test
  it("should be a function", function () {
    expect(typeof handler).toBe("function")
  })

  it("should execute without error", function () {
    expect(handler()).toBeUndefined()
  })

})
