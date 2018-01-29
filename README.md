# Unit Testing Lambdas Locally

AWS Lambda function **can** - and **should** - be unit tested locally.

## Scenarios to test

  0. Is the function available
  1. A simple Lambda function that returns "Hello World!"
  2. A calculation based on input
  3. Use snapshots for large responses
  4. Mocking unavailable modules/resources/services
  5. Platform abstraction
