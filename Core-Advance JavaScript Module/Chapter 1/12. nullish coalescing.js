// Nullish coalescing operator '??'


The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.

// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

result = (a !== null && a !== undefined) ? a : b;
let user;

alert(user ?? "Anonymous"); // Anonymous (user not defined)

let user = "John";

alert(user ?? "Anonymous"); // John (user defined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// Comparison with ||
// The OR || operator can be used in the same way as ??, as it was described in the previous topic.

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

// The important difference between them is that:

// || returns the first truthy value.
// ?? returns the first defined value.

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0