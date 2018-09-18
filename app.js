const fs = require('fs')
const notes = require('./notes.js')
const yargs = require('yargs')

const titleOptions = {
    describe: 'Title of Note',
    alias: 't',
    demand: true
}

const bodyOptions = {
    describe: 'Body of Note',
    alias: 'b',
    demand: true
}

var argv = yargs.command('add', 'add new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('remove', 'delete a note', {
    title: titleOptions
})
.command('read', 'display or show a note', {
    title: titleOptions
})
.command('list', 'view all notes')
.help()
.argv
var command = argv._[0]

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note Added')
        notes.noteLog(note)
    } else {
        console.log("Note can't be added")
        console.log('There may be another note with same title or check command attributes')
    }
} else if (command === 'remove') {
    var flag = notes.removeNote(argv.title)
    if (flag) {
        console.log('Note Removed')
        // notes.noteLog()
    } else {
        console.log("Couldn't delete")
        console.log('---------------')
        console.log('There is no such note')
    }
} else if (command === 'list') {
    allNotes = notes.getAll()
    allNotes.forEach((note) => {
        notes.noteLog(note)
    })
    if(allNotes.length < 1) {
        console.log('Currently there are no notes')
    }
} else if (command === undefined) {
    console.log('Found no command')
} else if(command === 'read') {
    var note = notes.readNote(argv.title)
    if(note.length) {
        console.log('Here is your note')
        notes.noteLog(note)
    } else {
        console.log('---------------')
        console.log('Note not found')
    }
} else {
    console.log('Command not recognized')
}
