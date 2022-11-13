/* 
At C:\Users\jiayi_U\Desktop\Udemy\NodeJS\notes-app>, 
`npm init`
`npm install validator@13.7.0`
npm 
*/

const validator = require("validator")

console.log(validator.isEmail("andrew@example.com"))
console.log(validator.isURL("https://mead.io"))
