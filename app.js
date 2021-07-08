const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Mention title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler() {
        const title = notes.listNotes();
        if(title.length === 0) {
            console.log(chalk.red.inverse('No Notes Found'));
        } else {
            console.log(chalk.blue.inverse('List of notes...'));
            title.forEach((t) => {
                console.log(t);
            })
        }
    }
})

yargs.command({
    command: 'read',
    describe: 'read the notes list',
    builder: {
        title: {
            describe: 'mention title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(chalk.blue.inverse('Reading the Notes...'));
        notes.readNotes(argv.title);
    }
})

yargs.parse();
// console.log(yargs.argv)
