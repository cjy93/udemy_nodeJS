const chalk = require("chalk")
const notes = require("./notes.js")
const yargs = require("yargs")

// command line argument to retrieve from process
// first argv is path to nodejs exe
// second is path to the file
// third onwards is your input values
// const command = process.argv[2].toLowerCase();
// if (command === "add"){
//     console.log("Add note!")
// } else if (command === "remove"){
//     console.log("Removing note!")
// }

// `node app add`

/*
`npm install yargs` 
to grab the command line arguments
*/
// `node app.js --help`


// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command:"add",
    describe: " add a new note",
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption: true,
            type:"string"
        }
    },
    handler: function(argv){
        // console.log("Title: "+argv.title)
        // console.log("Body: " + argv.body)
        notes.addNote(argv.title, argv.body)
    }    
})

// Create a remove command
yargs.command({
    command:"remove",
    describe: "remove a note",
    handler: function(){
        console.log("Remove a note")
    }
}) // `node app.js remove` see output

// Create a list command
yargs.command({
    command:"list",
    describe:"List your note",
    handler: function(){
        console.log("Listing out all the notes")
    }
})

// Create a read command
yargs.command({
    command:"read",
    describe:"Read your notes",
    handler: function(){
        console.log("Read your notes")
    }
})

//
yargs.parse() // console.log(yargs.argv)