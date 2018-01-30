function handler(event, context, callback) {
  const response = JSON.stringify({
    name: "Unit testing Lambda locally"
  })

  callback(null, response)
}

module.exports = {handler}
