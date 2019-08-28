const csvPath = './input/sample.csv';//The path where the csv file is
const JSONPath = './output/output.json';//The path where you want to store the file converted

const csv = require("csvtojson");
const fs = require("fs");


/***
 * @param {String} filePath The path of the csv input file.
 * @returns {String} A string saying the file was saved or an error if they were.
 */
const csvToJSON = async function  (csvPath,whereToSave) {
  const jsonArray = await csv().fromFile(csvPath);
  fs.writeFile(whereToSave, JSON.stringify(jsonArray), err => {
    return err ? console.log(err) : console.log("The JSON was saved!");
  });
}
csvToJSON(csvPath,JSONPath);