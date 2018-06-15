import boto3


class Factory:
    def __init__(self, tablename, region):
        self.tablename = tablename
        self.region = region

    def add(self, Item):
        try:
            client = boto3.resource('dynamodb', region_name=self.region)
            return client.Table(self.tablename).put_item(Item=Item)
        except Exception as e:
            raise e
