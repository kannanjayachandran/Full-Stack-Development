# Web Security 🔐

Web security is a very important topic. It is very important to know how to secure our data and how to prevent attacks. There are many types of attacks. Some of them are;

- Injection attacks
- Cross site scripting (XSS)
- Cross site request forgery (CSRF)

The browser is responsible for protecting the end user from these attacks. Out of many security measures, the most basic ones the browser implements to protect the end user is; 

## Same origin policy 🪪

It restrict the way scripts from other origin can interact. In practice what this means is that the if we have two tabs open in our PC one having a banking site opened and another malicious website then the malicious site wont be able to access the contents of the baking site. This also applies to `iframes` or embedding a website in another one. The parent website won't have any access to the data stored or managed by the embedded site. This is also applicable to network requests.

## Cross origin Resource sharing (CORS) 🪪

In some cases, like when we may need to access a public api, we may need to circumvent the same origin policy. That's where CORS come into the picture. It primarily works through headers. Two important CORS headers are :

- Access control allow origin : Indicates another origin that can request the server.
- Access control allow credentials : Indicates it's credentials should be sent cross origin.

## Some other types of attacks 🥷

### 1. Cross site scripting (XSS)

In this type of attack the attacker would inject JS code into the UI, thus circumvent the same origin policy. It is of different types.

1. Persistent : Commenting some malicious code in the comment section of a website.
2. Non-Persistent : Sending a link with some search parameter and thus execute malicious code.
3. Dom based : It does not send data to the server, everything happens on the frontend.

### 2. window.opener()

It is a JS property to open a new tab. This can open many vulnerabilities. Solution -> add (`rel="no opener no reference") attribute.


## Open Authorization (O-auth)

The primary purpose of authorization is for different services to communicate with each other and to know what they are and are not authorized to do. It gives API access to other websites without passwords. O auth is used pretty much everywhere now a days; like sign in with Google, GitHub, facebook; all are O auth. The basic working of O Auth is like this;

- A website would need access to some service like google or facebook or may require to verify your identity.
- It would send a request to google, then google would send a popup asking the used whether the user trusts the website to give them access to the person's google account or some part of it to some particular operations.
- Once the user confirms, Google would send a token to the website which could be used to perform the task.

The common token used for O auth is `JWT` or Json web token. These tokens are signed and while everyone could see the token, the server would know if someone tampered it.

