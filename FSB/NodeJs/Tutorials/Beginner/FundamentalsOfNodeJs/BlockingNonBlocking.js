import fs from 'fs';

async function getFile(fileName){
    let data = fs.promises.readFile(fileName);
    return (await data).toString();
}

let dataGet = await getFile('async.txt');
console.log("Code here!");
console.log("More code!");
console.log(dataGet);