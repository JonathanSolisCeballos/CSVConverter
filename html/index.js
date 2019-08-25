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
<body></body>`;

const fs = require('fs');

fs.readFile('sample2.csv','utf8', (err, data) => {
  if (err) throw err;
  htmlOutput += "<table>\n<thead>\n<tr>\n";
  let pData = data.split('\r\n');
  pData[0].split(',').map(el => {htmlOutput+=`<th>${el}</th>\n`});
  htmlOutput += "</tr>\n</thead>\n<tbody>\n";

  pData.shift();

  pData.map(row => {
    htmlOutput += "<tr>\n";
    row.split(',').map(el=>{
      htmlOutput += `<td>${el}</td>\n`;
    })
    htmlOutput += "</tr>\n";
  })
  // console.log(pData);
  htmlOutput += "</tbody>\n</table></body></html>";

  fs.writeFile("output.html", htmlOutput, function(err) {
    if(err) {
        return console.log(err);
    }
    
    console.log("The html was saved!");
}); 
  console.log(htmlOutput);
  // console.log(pData);
});