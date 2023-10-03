// Modules
// Every file in node is a module. Node uses common JS library under the hood.
// Only sharing the minimum data or information is the reason for module
// Modules are essentially the mechanism which enables us to reuse the code.

const secret = "Secret Information";
const john = "John";
const peter = "Peter"

// exporting multiple items
module.exports = { john, peter };
