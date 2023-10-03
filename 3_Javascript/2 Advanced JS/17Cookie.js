// Cookies are the most basic form of browser storage; they are simply key-value pairs.
document.cookie = `isReal=True; expires=${new Date().toUTCString()}`;
console.log(document.cookie);

// Along with expires we can also use max-age property to delete a cookie.
// secure : enforces Https
// samesite=strict : cookies won't be shared across origin.

const watchName = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith('watchName='))
    .split('=')[1]; // left of equal would be the name and right would be value; hence index 1
console.log(watchName);