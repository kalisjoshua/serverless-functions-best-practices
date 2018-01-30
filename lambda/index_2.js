function handler(event, context, callback) {

  callback(null, `Hello ${event.name}!`)
}

module.exports = {handler}
