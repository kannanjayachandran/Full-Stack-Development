<h1 align="center"> Application Programming Interface (API) </h1>

An API is simply a way in which two applications communicate with each other. We can think of it as a contract of service between two applications. The API defines how one application can request data from another application and how the other application will respond to that request.

There are different ways API's can be implemented. Some of them are;

### RESTful API's

REST stands for **Representational State Transfer**. It is a set of rules that are used to create API's. With REST we would be working with resources. At the core REST is based on what we call `Architectural Constraints`. They are;

- Client-Server : Must follow client-server model.

- Stateless : The server must not store any information about the client.

- Cacheable : The server must be able to cache the responses (Not every end-point must be cacheable but every end-point must define whether they are cacheable or not).

- Layered System : The server must be able to communicate with other servers.

- Uniform Interface : The server must have a uniform interface.

- Code on Demand : The server must be able to send code to the client (This is optional).

### RPC API's

RPC stands for Remote Procedure Call. The core idea of RPC API's are API endpoints represent actions or functions.
[REST is based on the idea of resources and RPC is based on the idea of actions/procedures.]

### SOAP API's

SOAP stands for Simple Object Access protocol. It uses `XML` to transfer data. It can get very verbose and complex, hence soap is not used for frontend to backend communication. It is used for backend to backend communication.

### GraphQL API's

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It would only return the essential data that is needed.
