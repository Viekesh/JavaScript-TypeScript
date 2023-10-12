import * as csv from "csv-parse";
import fs from "fs";



let sum = 0;

fs.createReadStream("Transaction.csv").pipe(csv.parse({ delimiter: "," })).on("data", function (row) {
    // console.log(row);
    sum += parseFloat(row[1]);
    console.log(sum);
}).on("end", function () {
    console.log(sum);
}).on("error", function (error) {
    console.log(error);
});
