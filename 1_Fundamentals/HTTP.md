# HTTP Protocol

The **Hypertext Transfer Protocol** (*HTTP*) is an _application-layer_ protocol used for communication between client and server. It is the foundation of data communication on the World Wide Web. It is designed to facilitate the transfer of various types of data, primarily hypertext documents.

HTTP follows a __client-server architecture__ and is __stateless__.

## HTTP Request

`HTTP` request are simply a way to ask for data from the server. The request consists of three parts: `method`, `path` and `protocol`. `method` is used to specify the type of request. `path` is used to specify the location of the resource on the server. `protocol` is used to specify the version of the protocol used. The request can also contain `headers` (to send additional information) and `body` (to send the data). HTTP methods are;

### GET

```http
GET /example/electronics/mobiles HTTP/1.1
```

`GET` is the `method` of the request. It is used to retrieve data from the server. `/example/electronics/mobiles` is the `path` of the request. It is the location of the resource on the server. `HTTP/1.1` is the `protocol` of the request. It is the version of the protocol used.

### POST

```http
POST /Submit HTTP/1.1
HOST: www.example.com
Accept: text/html
Content-Type: application/Json
{
    "name": "Iphone",
    "Price": 150000
}
```

We use post method to send data to the server. The data is sent in the body of the request. Here `content-type` is used to specify the type of data being sent. The data inside the curly braces is known as `payload` or body of the request.

## HTTP Response

```http
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

## Other HTTP Methods

- `PUT` is used to update a resource.
- `DELETE` is used to delete a resource.
- `PATCH` is used to update a resource partially.
- `HEAD` is used to get the headers of a resource.
- `OPTIONS` is used to get the supported methods of a resource.

## HTTP Status Codes

| sl.no | Status Code | Description   |
| ----- | ----------- | ------------- |
| 1     | 1xx         | Informational |
| 2     | 2xx         | Success       |
| 3     | 3xx         | Redirection   |
| 4     | 4xx         | Client Error  |

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

## Cookies

We use the `set-cookie` header to set cookies. The `cookie` header is used to send the cookies to the server.

## HTTPS

HTTPS is the secure version of HTTP. It uses `SSL` or `TLS` to encrypt the data. It uses port 443. A high level overview of how HTTPS works is given below.

- While the client and the server communicates; the server sends `public key` + `certificate` to the client.

- The client would then verify the certificate and create a `session key`, which is used to encrypt the data throughout the session.

- The client would then encrypt the session key using the public key and send it to the server.

- The server would then decrypt the session key using the server's private key and use it to decrypt the data.

> More on **APIs** [How to communicate with the server](./API.md)
