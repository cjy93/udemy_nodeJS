const fs = require("fs")
// const book={
//     title:"Ego is the Enemy",
//     author:"Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.author)

// fs.writeFileSync("1-JSON.json", bookJSON)

// in the json file we have {"title":"Ego is the Enemy","author":"Ryan Holiday"}
/* const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title) */

// Challenge
// get data from links.mead.io/json-sample
/*
Challenge: Work with JSON and the file system
1. Load and parse the JSON data
2. Change the name and age property using your info
3. Stringify the changed object and overwrite the original data
4. Test your work by viewing data in the JSON file
*/
const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON= dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name="jiayi"
data.age= 29
console.log(data)
// stringigy
user = JSON.stringify(data)
// overwrite the existing file
fs.writeFileSync("1-JSON.json",user)