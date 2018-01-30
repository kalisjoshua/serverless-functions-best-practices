const factory = require("./dynamoClient")

describe("DynamoDB Client Factory", function () {
  it("should be a function", function () {
    expect(typeof factory).toBe("function")
  })

  it("should return an object", function () {
    expect(typeof factory("Hello")).toBe("object")
  })

  describe("#add()", function () {
    const instance = factory("HelloWorld")

    it("should be a function", function () {
      expect(typeof instance.add).toBe("function")
    })

    it("should resolve a Promise", function (done) {
      instance.add({name: "Foo"})
        .then(data => {
          expect(data.name).toBe("Foo")
          done()
        })
        .catch(error => {
          expect(false).toBeTruthy()
          done()
        })
    })

    it("should reject a Promise", function (done) {
      instance.add({name: "This should result in an error from the DynamoDB mock"})
        .then(data => {
          expect(false).toBeTruthy()
          done()
        })
        .catch(error => {
          expect(error).toBe("This should result in an error from the DynamoDB mock")
          done()
        })
    })
  })
})
