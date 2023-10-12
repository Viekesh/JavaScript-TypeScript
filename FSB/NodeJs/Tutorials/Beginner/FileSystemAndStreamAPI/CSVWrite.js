import * as stringify from "csv-stringify";
import fs from "fs";



const write = fs.createWriteStream(('log2.csv'));
const data = [[11, 22, 33], [44, 55, 66], [77, 88, 99]];
const columns = ["num1", "num2", "num3"];

const stringfier = stringify.stringify({ header: true, columns: columns });

for (let i = 0; i < data.length; i++) {
    stringfier.write(data[i]);
};

stringfier.pipe(write);