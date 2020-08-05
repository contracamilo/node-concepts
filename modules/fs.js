const fs = require('fs');

function read(route, cb) {
    fs.readFile(route, (err, data) => {
        //cb(data.toString());
        console.log(data.toString())
    })
}




function write(route, content, cb) {
	fs.writeFile(route, content, (err) => (err ? console.error("can't write", err) : console.log("written correctly")));
}


function erase(route, cb) {
    fs.unlink(route, cb);
} 

//write(__dirname + '/archivo1.txt', 'Soy un archivo nuevo');
// read(__dirname + '/testfile.txt');
 erase(__dirname + '/archivo1.txt', console.log);