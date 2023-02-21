let fs = require("fs");
// let buffer = fs.readFileSync("abc.js");
// console.log(""+buffer);

// fs.openSync("Prakhar.txt","w");
// fs.mkdirSync("shukla.txt");
// console.log("Prakhar.txt file opened");


// fs.writeFileSync("file.txt","  --------- jo bhi hai yha dikhao ---------------");
// console.log("" + fs.readFileSync("file.txt"));

// fs.appendFileSync("file.txt"," bhai tu kha hai idhar dekh");
// console.log("" + fs.readFileSync("file.txt"));

let content = fs.readdirSync("shukla.txt");
console.log(content);

for(let i=0;i<content.length;i++){
    let filename = content[i];
    console.log(fs.readFileSync("shukla.txt/filename"));
}

fs.existsSync()
fs.lstatSync()