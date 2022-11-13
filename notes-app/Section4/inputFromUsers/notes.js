const fs = require("fs")

const getNotes = function (){
    return "Your notes ..."
}


const addNote = function(title,body){
    const notes = loadNotes()
    // check if the title is repeated
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length ===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("New note added!")
    } else{
        console.log("Note title taken!")
    }
    
}

const saveNotes = function(notes){
    const dataNotes = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataNotes)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []       
    }
    
}

module.exports =  {
    getNotes: getNotes,
    addNote: addNote
}