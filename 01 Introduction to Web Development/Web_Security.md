<p align="center"> Web Security </p>

Web security is crucial for protecting data and preventing attacks. Here are some common types of attacks:

- Injection attacks
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)


The browser plays a key role in protecting users from these threats. Among the security measures it implements, the most fundamental ones include:


## Same origin policy

This policy restricts how scripts from different origins can interact. For example, if you have one tab open to a banking site and another to a malicious site, the malicious site cannot access the contents of the banking site. This also applies to `iframes` or embedded websites; the parent site cannot access data managed by the embedded site. The same restriction applies to network requests.

## Cross origin Resource sharing (CORS)

In some cases, you may need to bypass the same-origin policy, such as when accessing a public API. CORS comes into play here. It primarily works through headers. Two key CORS headers are:

- `Access-Control-Allow-Origin`: Specifies which origins can make requests to the server.
- `Access-Control-Allow-Credentials`: Indicates whether credentials should be sent with cross-origin requests.

## Cross site scripting (XSS)

In an XSS attack, an attacker injects JavaScript code into the UI, bypassing the same-origin policy. XSS attacks come in different forms:

1. **Persistent**: Injecting malicious code into a website's comment section.

2. **Non-Persistent**: Sending a link with malicious code in the search parameters.

3. **DOM-Based**: The attack happens entirely on the frontend without sending data to the server.


## window.opener()

This JavaScript property is used to open a new tab, which can introduce vulnerabilities. The solution is to add the `rel="noopener noreferrer"` attribute to links.

## Cross-Site Request Forgery (CSRF)

In a CSRF attack, a malicious website tricks a user into performing actions on another site where the user is authenticated. To prevent CSRF attacks, you can use:

- **CSRF tokens**: A unique token is generated for each user session and sent with each request. The server validates the token before processing the request.

- **SameSite cookies**: A cookie attribute that prevents the browser from sending cookies in cross-site requests.

- **Referrer Policy**: A header that controls how much information is included in the `Referer` header.

- **Content Security Policy (CSP)**: A header that restricts the sources of content that can be loaded on a website.

- **HTTPOnly and Secure flags**: Flags that prevent cookies from being accessed by JavaScript and only sent over HTTPS, respectively.

## Open Authorization (O-auth)

OAuth is a protocol for authorization that allows different services to communicate and know what they are and are not authorized to do. It provides API access to other websites without sharing passwords. OAuth is widely used today, for example, when signing in with Google, GitHub, or Facebook.

The basic process of OAuth works like this:

- A website requests access to a service like Google or Facebook to verify your identity or access certain data.

- The service (e.g., Google) sends a popup asking if you trust the website to access specific parts of your account.

- Once you confirm, the service sends a token to the website, which can be used to perform the allowed tasks.

A common token used in OAuth is the **JWT** (JSON Web Token). These tokens are signed, meaning while anyone can see the token, the server can detect if it has been tampered with.
