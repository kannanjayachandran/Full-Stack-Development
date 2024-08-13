<h1 align="center"> HTTP Protocol </h1>

The **Hypertext Transfer Protocol** (HTTP) is an _application-layer_ protocol used for communication between clients and servers. It is the foundation of data communication on the web, designed to transfer various types of data, primarily hypertext documents.

HTTP follows a **client-server architecture** and is **stateless**.

## HTTP Request

An `HTTP` request is how a client asks for data from the server. It consists of three main parts: `method`, `path`, and `protocol`. The `method` specifies the type of request, the `path` indicates the location of the resource on the server, and the `protocol` defines the version of HTTP used. Additionally the request includes `headers` (for additional information) and a `body` (for sending the actual data). 

Common HTTP methods are:

### GET

`GET` is the request method used to retrieve data from the server.

```h
GET /example/electronics/mobiles HTTP/1.1
```

### POST

The POST method sends data to the server, with the data included in the request's body.

```h
POST /Submit HTTP/1.1 
HOST: www.example.com
Accept: text/html
Content-Type: application/Json
{
    "name": "Iphone",
    "Price": 150000
}
```

### PUT

The PUT method is used to update a resource on the server.

```h
PUT /example/electronics/mobiles/iphone HTTP/1.1
```

### DELETE

The DELETE method is used to delete a resource on the server.

```h
DELETE /example/electronics/mobiles/iphone HTTP/1.1
```

We have other http methods like 

- `PATCH` is used to update a resource partially.
- `HEAD` is used to get the headers of a resource.
- `OPTIONS` is used to get the supported methods of a resource.

Let's look a HTTP Response

```h
HTTP/1.1 200 OK
Content-Type: text/html

<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <h1>Mobiles</h1>
        <ul>
            <li>Iphone</li>
            <li>OnePlus</li>
            <li>Samsung</li>
        </ul>
    </body>
</html>
```

## HTTP Status Codes

HTTP status codes are standard response codes given by web servers. They are used to indicate the outcome of an HTTP request. The status codes are divided into five categories:

| sl.no | Status Code | Description   |
| ----- | ----------- | ------------- |
| 1     | 1xx         | Informational |
| 2     | 2xx         | Success       |
| 3     | 3xx         | Redirection   |
| 4     | 4xx         | Client Error  |
| 5     | 5xx         | Server Error  |

### 2xx Success

| sl.no | Status Code | Description                   |
| ----- | ----------- | ----------------------------- |
| 1     | 200         | OK                            |
| 2     | 201         | Created                       |
| 3     | 202         | Accepted                      |
| 4     | 203         | Non-Authoritative Information |
| 5     | 204         | No Content                    |

### 4xx Client Error

| sl.no | Status Code | Description       |
| ----- | ----------- | ----------------- |
| 1     | 400         | Bad Request       |
| 2     | 401         | Unauthorized      |
| 3     | 402         | Payment Required  |
| 4     | 403         | Forbidden         |
| 5     | 404         | Not Found         |
| 6     | 429         | Too Many Requests |

### 5xx Server Error

| sl.no | Status Code | Description                |
| ----- | ----------- | -------------------------- |
| 1     | 500         | Internal Server Error      |
| 2     | 501         | Not Implemented            |
| 3     | 502         | Bad Gateway                |
| 4     | 503         | Service Unavailable        |
| 5     | 504         | Gateway Timeout            |
| 6     | 505         | HTTP Version Not Supported |
| 7     | 507         | Insufficient Storage       |

- Most common ones are `200, 201, 301, 302, 400, 401, 403, 404, 500, 501, 503`

## HTTPS

`HTTPS` is the secure version of HTTP, where the communication between the client and server is encrypted. It uses `SSL/TLS` to encrypt the data. 

## Cookies

We use the `set-cookie` header to set cookies and `cookie` to send the cookies to the server.

## CORS

Cross-Origin Resource Sharing (CORS) is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated. It's a security feature implemented by browsers to prevent malicious websites from stealing data. 

## WebSockets

WebSockets is a communication protocol that provides full-duplex communication channels over a single TCP connection. It's a two-way communication channel that operates over a single socket and is ideal for real-time applications. 

> More on [ API's; How two applications talk to each other](./API.md)
