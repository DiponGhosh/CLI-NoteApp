var fs = require('fs');

var noteObject = {
    title: 'Travelling',
    body: 'I recently travelledto Dhaka'
};

var noteString = JSON.stringify(noteObject)
fs.writeFileSync('notes.json', noteString)

var noteStringRead = fs.readFileSync('notes.json')
var noteObjectRead = JSON.parse(noteStringRead)

console.log('Title:', noteObjectRead.title)
console.log('Body:', noteObjectRead.body)

