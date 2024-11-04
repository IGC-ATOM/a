//file read & write

const fs = require('fs');

//Write
fs.writeFile('./test.text' , "Hello Maam", (err,res) => {});

//Read
// fs.readFile("./test.text", 'utf-8', (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

//append
// fs.appendFile("./test.text", "\n My name is Parth ", (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("data is added");
//     }
// });

//delete
// fs.unlink("./test.text",  (err, ) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file deleted ");
//     }
// });