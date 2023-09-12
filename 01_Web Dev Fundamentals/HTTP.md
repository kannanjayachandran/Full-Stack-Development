# HTTP Protocol 📃

HTTP or Hypertext Transfer Protocol is a protocol that is used to transfer `hypermedia` across the web. It is a `stateless` protocol which means that the server does not remember the previous requests. We can use `cookies` to create sessions and thus make state. 

The `client` initiates the request and the `server` responds to it. Data is sent in the form of `text` and is `connection less`. It uses `TCP` as the transport layer protocol and uses port `80` by default.

## HTTP Request 📃

`HTTP` request are simply a way to ask for data from the server. The request consists of three parts: `method`, `path` and `protocol`. `method` is used to specify the type of request. `path` is used to specify the location of the resource on the server. `protocol` is used to specify the version of the protocol used.

### GET

```http
GET /amazon/mobiles HTTP/1.1
```

`GET` is the `method` of the request. It is used to retrieve data from the server. `/amazon/mobiles` is the `path` of the request. It is the location of the resource on the server. `HTTP/1.1` is the `protocol` of the request. It is the version of the protocol used.

```http
HOST: www.amazon.com
Accept: text/html
``` 

These are known as `headers`. They are used to send additional information about the request. 

### POST

```http
POST /Submit HTTP/1.1
HOST: www.amazon.com
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
        <title>Amazon</title>
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

## Other HTTP Methods 📌

- `PUT` is used to update a resource.
- `DELETE` is used to delete a resource.
- `PATCH` is used to update a resource partially.
- `HEAD` is used to get the headers of a resource.
- `OPTIONS` is used to get the supported methods of a resource.

## HTTP Status Codes 

|sl.no|Status Code|Description|
|---|---|---|
|1|1xx|Informational|
|2|2xx|Success|
|3|3xx|Redirection|
|4|4xx|Client Error|

### 2xx Success

|sl.no|Status Code|Description|
|---|---|---|
|1|200|OK|
|2|201|Created|
|3|202|Accepted|
|4|203|Non-Authoritative Information|
|5|204|No Content|
|6|205|Reset Content|
|7|206|Partial Content|

### 4xx Client Error

|sl.no|Status Code|Description|
|---|---|---|
|1|400|Bad Request|
|2|401|Unauthorized|
|3|402|Payment Required|
|4|403|Forbidden|
|5|404|Not Found|
|6|405|Method Not Allowed|
|26|429|Too Many Requests|
|27|431|Request Header Fields Too Large|
|28|451|Unavailable For Legal Reasons|

### 5xx Server Error

|sl.no|Status Code|Description|
|---|---|---|
|1|500|Internal Server Error|
|2|501|Not Implemented|
|3|502|Bad Gateway|
|4|503|Service Unavailable|
|5|504|Gateway Timeout|
|6|505|HTTP Version Not Supported|
|7|506|Variant Also Negotiates|
|8|507|Insufficient Storage|
|9|508|Loop Detected|

- Most common ones are 200, 201, 301, 302, 400, 401, 403, 404, 500, 501, 503

## Cookies 🍪

We use the `set-cookie` header to set cookies. The `cookie` header is used to send the cookies to the server. 

## HTTPS

HTTPS is the secure version of HTTP. It uses `SSL` or `TLS` to encrypt the data. It uses port 443. A high level overview of how HTTPS works is given below.

- While the client and the server communicates; the server sends `public key` + `certificate` to the client.
- The client would then verify the certificate and create a `session key`, which is used to encrypt the data throughout the session.
- The client would then encrypt the session key using the public key and send it to the server.
- The server would then decrypt the session key using the private key and use it to decrypt the data.

> More on **APIs** [How to communicate with the server](./API.md)
