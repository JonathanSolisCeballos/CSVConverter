/** csv file
a,b,c
1,2,3
4,5,6
*/
const csvFilePath='sample.csv';
const csv=require('csvtojson');
const fs = require('fs');

const convertFile = async() =>{
  const jsonArray=await csv().fromFile(csvFilePath);
  fs.writeFile("output.json", JSON.stringify(jsonArray), function(err) {
    if(err) {
        return console.log(err);
    }
  
    console.log("The file was saved!");
}); 
};
convertFile();

// SAME CODE BUT WITH PROMISE.

// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
  
//   fs.writeFile("output.json", JSON.stringify(jsonObj), function(err) {
//       if(err) {
//           return console.log(err);
//       }
  
//       console.log("The file was saved!");
//   }); 
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */ 
// })