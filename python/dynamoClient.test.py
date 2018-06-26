import unittest
import boto3
import inspect
from dynamoClient import Factory
from moto import mock_dynamodb2, mock_dynamodb2_deprecated


@mock_dynamodb2
class DynamoDBTestSuite(unittest.TestCase):
    setupdone = False
    def setUp(self):

        self.TableName = 'Hello'
        self.Region = 'us-east-1'

        if self.setupdone:
            return

        # run this setup only once per suite of tests
        client = boto3.resource('dynamodb', region_name=self.Region)
        client.create_table(
            TableName=self.TableName,
            KeySchema=[
                {
                    'AttributeName': 'id',
                    'KeyType': 'HASH'
                }
            ],
            AttributeDefinitions=[
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 1,
                'WriteCapacityUnits': 1
            }
        )
        self.__class__.setupdone = True

    def test_Should_Be_a_Class(self):
        self.assertTrue(inspect.isclass(Factory),'Should Be a Class')

    def test_Should_Return_an_Object(self):
        instance = Factory(self.TableName, self.Region)
        self.assertTrue(isinstance(instance, object), 'Should Return an Object')

    def test_Should_be_OK(self):
        instance = Factory(self.TableName, self.Region)
        record = instance.add({'id': 'unique-identifier-foo', 'name': 'Foo'})
        self.assertEqual(record['Attributes']['name'], 'Foo', 'Record Added')

    def test_Should_be_Bad(self):
        instance = Factory(self.TableName, self.Region)
        try:
            instance.add({'name': 'Foo'})
            self.assertTrue(False)
        except Exception:
            self.assertTrue(True, 'This should result in an error from the DynamoDB mock')


if __name__ == '__main__':
    unittest.main()
