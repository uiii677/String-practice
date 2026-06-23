let email = "umair@gmail.com"

let postionAt = email.indexOf('@')

let domain = email.slice(postionAt);

console.log(email.charAt(0) + "*****" + domain);