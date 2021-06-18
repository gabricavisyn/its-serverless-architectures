import json


def hello(event, context):
    print("hello world!!!")
    
    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> de4f989a18eb9909f992a5a39a4c8964f6e25d2b
>>>>>>> 2342a5022bbd3eecc875717678062f6e7f8d74d2
    return response
