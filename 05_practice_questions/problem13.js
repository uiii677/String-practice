// First and last character
//U.K

let fullName = "Umair Iqbal Khan"
let part = fullName.split(" ")
let firstChar = part[0].charAt(0)
let secondChar = part[part.length - 1].charAt(0)

console.log(`${firstChar}.${secondChar}`);

//last Character Checker

let lastChar = fullName.charAt(fullName.length - 1)

console.log(`Last character : ${lastChar}`);

