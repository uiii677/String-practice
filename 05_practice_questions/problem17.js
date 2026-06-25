//username = "umair"

let email = "umair@gmail.com"
let username = email.slice(0, email.indexOf('@'))

console.log(`Username = ${username}`);

//************************************

let gameName = "Umair-ui"
let part = gameName.split("-")

console.log(part[0]);
console.log(part[1]);

//************************************
// JAVASCRIPT
// Length: 10
// Last Character: t

let word = "JavaScript"

console.log(word.toUpperCase());
console.log(`Length : ${word.length}`);
console.log(`Last character : ${word.at(-1)}`)

//***************************************
//M.U.K

let name = "Muhammad Umair Iqbal"

let parts = name.split(" ")

console.log(`${parts[0].charAt(0)}.${parts[1].charAt(0)}.${parts[2].charAt(0)}`);