Serverless is a new paradigm in computing and fast becoming a trusted and
relied-upon solution covering many use cases. Serverless *functions* have
different names depending on the provider: Amazon AWS Lambda, Microsoft Azure
Functions, Google Cloud Functions, IBM/Apache OpenWhisk, and others. For our
purposes here we will focus on Amazon AWS Lambda; referred to as "Lambda
Functions" or more simply "Lambdas".

# Serverless Functions (Lambdas)

Lambdas are bundled up functionality waiting to be "called" or "triggered" by
something else. These functions are great for short-lived - 5 min or less of
run time - processes and event handlers.

It is important to understand that serverless functions are not residing on a
running server that is waiting for requests. Infrequent requests will suffer a
"cold start" cost as the function needs to be loaded into memory before
execution; however, functions that are invoked often may not incur this cost as
they might be optimized by being kept in memory ready for subsequent execution.

Even if Lambdas are smaller in scale than full applications running on a
traditional server that does not preclude them from following software best
practices such as following SOLID design principles or unit testing. In fact,
serverless architectures greatly emphasize many software design best practices
especially the concept of statelessness.

Some good use cases for Lambda use are:

  * API Gateway method handlers
  * CloudWatch event processors
  * Scheduled/automated background tasks

## Unit Testing Lambdas

Lambdas **can** - and **should** - be unit tested locally. Local unit testing
provides a fast feedback loop for development while also creating a quality
check for integration and deployment pipelines.

### Scenarios to Test

  1. Is the function available; exported correctly
  2. A simple "happy path" invocation
  3. A calculation based on input
  4. Use snapshots for large responses
  5. Mocking unavailable modules/resources/services
  6. Platform abstraction
