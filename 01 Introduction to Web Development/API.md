<h1 align="center"> Application Programming Interface (API) </h1>

An API is sort of a contract that defines how one application can request data from another and how the other will respond (How two applications communicate).


There are different standards through which API's could be implemented, including; 

## RESTful API's

REST stands for **Representational State Transfer**. It follows a set of rules to create APIs, focusing on resources. The core of REST is based on `Architectural Constraints`:

- **Client-Server:** Follows the client-server model.
- **Stateless:** The server does not store any information about the client.
- **Cacheable:** Responses can be cached. Every endpoint must define whether it is cacheable or not.
- **Layered System:** The server can communicate with other servers.
- **Uniform Interface:** A uniform interface is maintained.
- **Code on Demand:** The server can send code to the client (optional).

Imagine you have a service that manages users. To get information about a specific user, you might use a REST API endpoint like this: `GET /users/{userId}`. This endpoint would return the user with the specified ID. The response might look like this:

```h
{
    "id": 123,
    "name": "John Doe",
    "email": "johndoe@example.com"
}
```

## RPC API's

RPC stands for **Remote Procedure Call**. RPC APIs represent actions or functions through their endpoints, focusing on procedures rather than resources. For instance, if you wanted to update a user's email, you might have an endpoint like this: `POST /updateUserEmail`. The request might look like this:

```h
{
    "userId": 123,
    "newEmail": "newemail@example.com"
}
```

## SOAP API's

SOAP stands for **Simple Object Access Protocol**. It uses `XML` to transfer data. SOAP can be very verbose and complex, so it is typically used for backend-to-backend communication rather than frontend-to-backend.

Suppose you want to retrieve user data; Endpoint: `POST /getUserData` and the request might look like this:

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <getUserData>
            <userId>123</userId>
        </getUserData>
    </soap:Body>
</soap:Envelope>
```

The response might look like this:

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <getUserDataResponse>
            <user>
                <id>123</id>
                <name>John Doe</name>
                <email>johndoe@example.com</email>
            </user>
        </getUserDataResponse>
    </soap:Body>
</soap:Envelope>
```


## GraphQL API's

GraphQL is a query language for APIs and a runtime for executing those queries with your data. It only returns the specific data requested. It allows multiple resources to be queried in a single request, reducing the number of requests needed compared to REST APIs. The server responds with data in a structure that mirrors the client's request, making it more efficient and flexible.

Suppose you want to get only the user's name and email:

```graphql
{
  user(id: 123) {
    name
    email
  }
}
```

The response might look like this;

```h
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
  }
}
```

> Read more about [How content gets rendered in the browser](./Rendering.md)
