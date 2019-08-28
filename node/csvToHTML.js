const csvPath = "./input/sample2.csv"; //The path where the csv file is
const htmlPath = "./output/output.html"; //The path where you want to store the file converted

const fs = require("fs");

const csvToHTML = (csvPath, whereToSave) => {
  //Set the boilerplate for html document
  let htmlOutput = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data from CSV</title>
  <link href="style.css" rel="stylesheet" />
</head>
<body>`;

  fs.readFile(csvPath, "utf8", (err, data) => {
    if (err) throw err;
    htmlOutput += "<table>\n<thead>\n<tr>\n";
    let pData = data.split("\r\n");
    pData[0].split(",").map(el => {
      htmlOutput += `<th>${el}</th>\n`;
    });
    htmlOutput += "</tr>\n</thead>\n<tbody>\n";

    pData.shift(); //Remove the first index of the array

    pData.map(row => {
      htmlOutput += "<tr>\n";
      row.split(",").map(el => {
        htmlOutput += `<td>${el}</td>\n`;
      });
      htmlOutput += "</tr>\n";
    });

    htmlOutput += "</tbody>\n</table></body></html>";

    fs.writeFile(whereToSave, htmlOutput, function(err) {
      return err ? console.log(err) : console.log("The HTML was saved!");
    });
  });
};

csvToHTML(csvPath, htmlPath);