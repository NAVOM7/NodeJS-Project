const fs = require('fs');
const chalk = require('chalk');
const getNote = () => {
    return "vikesh kumar";
}



const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter( (note) => note.title === title);

    const duplicateNote = notes.find((note) => note.title === title);

    debugger;

    if(!duplicateNote) {
        notes.push({
            title:title,
            body:body
        });
    
        saveNotes(notes);
        console.log('New Node added');
    } else {

        console.log('Note Taken!');
    }

    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};
const removeNote = (title) => {
     const notes=loadNotes();
     const notesToKeep =notes.filter((note) => note.title !==title);
     if(notes.length === notesToKeep.length){
         console.log(chalk.bgRed('No Note Found!'));
     }else{
        console.log(chalk.bgGreen('Note Removed!'));
       saveNotes(notesToKeep);
     }
}
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.magenta('Your Notes'));
    notes.forEach((note) =>{
        console.log(chalk.red(note.title) + ' -> ' + chalk.green(note.body));
    })
}

const readNote = (title) => {
    // var flag = 1;
    const notes = loadNotes();

    const readnotes = notes.find((note) => note.title === title);

    if(readnotes) {
        console.log(chalk.green(readnotes.title +' '+ readnotes.body));
    }else {
            console.log(chalk.red('Note Found !'));
    }
    

    // notes.forEach((note) => {
    //     if(note.title === title) {
    //         console.log(chalk.green('Found') + '\n' + chalk.magenta(note.title + ' ' + note.body));
    //         flag = 0;
    //         // break;
    //     }
    // })
    // if(flag === 1) {
    //     console.log(chalk.red('Note Found !'));
    // }
}

module.exports={
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
