const fs = require("fs")

// create a new file "notes.txt" and write the content inside
// fs.writeFileSync("notes.txt", "My name is Andrew!")

/*
Challenge: Append a message to notes.txt

1. Use appendFileSync to append to the file
2. Run the Script
3. Check your work by opening the file and viewing the appended text
*/

try{
    fs.appendFileSync("notes.txt","\nthis is the appended message","utf-8");
} catch(err){
    console.log(err)
}