const fs = require('fs');

// const book = {
//     title: "book 1",
//     author: 'author 1'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);


const read = fs.readFileSync('1-json.json');

const dataJSON = read.toString();

const data = JSON.parse(dataJSON);
console.log(data.author);
// data.author = 'Nanhe Pandey';
// data.title = "My life";

// const bookJSON = JSON.stringify(data);
// fs.writeFileSync('1-json.json', bookJSON);


