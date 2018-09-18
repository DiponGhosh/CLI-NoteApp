var fs = require('fs')

var fetchNote = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    } catch(e) {
        return []
    }
}

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    var notes = fetchNote()
    var cnote = {
        title,
        body
    }

    var duplicateNote = notes.filter( (note) => note.title === title )

    if (duplicateNote.length === 0) {
        notes.push(cnote)
        saveNote(notes)
        return cnote
    }
}

var getAll = () => {
    notes = fetchNote()
    return notes
}

var readNote = (title) => {
    var notes = fetchNote()
    var filteredNote = notes.filter( (note) => note.title === title )
    return filteredNote
}

var removeNote = (title) => {
    notes = fetchNote()
    var restNotes = notes.filter( (note) => note.title !== title )
    saveNote(restNotes)
    if (notes.length !== restNotes.length) {
        return true
    } else {
        return false
    }
}

var noteLog = (note) => {
    console.log('----------')
    console.log('Title:', note.title)
    console.log('Body:', note.body)
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    noteLog
}

