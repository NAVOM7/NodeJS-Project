const { default: chalk } = require('chalk');
const fs = require('fs');

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if(!duplicateNote) {
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added...'));
    } else {
        console.log(chalk.red.inverse('Title already exist'));
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const filteredNote = notes.filter( (note) => note.title !== title)
    notes.length === filteredNote.length ? console.log(chalk.red.inverse('No Notes Found!')) : console.log(chalk.green.inverse('Note removed!'))
    saveNotes(filteredNote);
    console.log(title);
}

const listNotes = () => {
    const notes = loadNotes();
    const titleList = [];
    notes.forEach((note) => {
        titleList.push(note.title);
    })
    return titleList;
}

const readNotes = (title) => {
    const notes = loadNotes();
    const filteredNote = notes.find((note) => note.title === title);
    if(filteredNote) {
        console.log(chalk.green.inverse(title + ': ' + filteredNote.body));
    }
    else {
        console.log(chalk.red.inverse('Note Not Found!'));
    }
    
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e) {
        return [];
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    getNotes: loadNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}