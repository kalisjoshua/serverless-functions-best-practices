const {handler} = require("./index_2")

describe("Lambda handler function", function () {

  it("should be a function", function () {
    expect(typeof handler).toBe("function")
  })

  it("should return 'Hello Quicken Loans!'", function (done) {
    const event = {name: "Quicken Loans"}

    handler(event, {}, (error, response) => {
      expect(error).toBeNull()
      expect(response).toBe(`Hello ${event.name}!`)
      done()
    })
  })

})
