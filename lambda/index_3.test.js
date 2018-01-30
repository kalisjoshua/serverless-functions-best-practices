const {handler} = require("./index_3")

describe("Lambda handler function", function () {

  it("should be a function", function () {
    expect(typeof handler).toBe("function")
  })

  it("should match snapshot", function (done) {
    const event = {name: "Quicken Loans"}

    handler(event, {}, (error, response) => {
      expect(error).toBeNull()
      expect(JSON.parse(response)).toMatchSnapshot()
      done()
    })
  })

})
