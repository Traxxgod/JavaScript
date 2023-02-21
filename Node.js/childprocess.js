

// let cp = require("child_process");
// console.log("Trying to open calculater");
// cp.execSync("calc");
// console.log("calculater opened");


// // let cp = require("child_process");
// console.log("Trying to open VS_Code");
// cp.execSync("code");
// console.log("VS_Code opened");


// let cp = require("child_process");
// console.log("Trying to open Virtusa website");
// cp.execSync("start chrome https://leetcode.com/Traxxgod/");
// console.log("Virtusa Web site opened");

//simply google how to open in command line and we can open through command line and from here also as we can see

// ab mai ek file bnauga or usko run krauga isse child module se

let childProcess = require("child_process");
let output = childProcess.execSync("node abc.js");
console.log(""+output);