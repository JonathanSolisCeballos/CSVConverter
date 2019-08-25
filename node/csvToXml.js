const csvFilePath='sample.csv';
const csv=require('csvtojson');
const fs = require('fs');
var builder = require('xmlbuilder');

const convertFile = async() =>{
  try{
    const jsonArray=await csv().fromFile(csvFilePath);

    var obj = {
      record : [...jsonArray]
    };

    var xml = builder.create(obj, { encoding: 'utf-8' }).end({ pretty: true});
    console.log(xml);

    fs.writeFile("output.xml", xml, function(err) {
      if(err) {
          return console.log(err);
      }
      
      console.log("The xml was saved!");
  }); 
  }
  catch(err){
    console.log(err)
  }
  
};
convertFile();
// var obj = {
//   data: {
//     records: {
//       value: {
//         '@field': '', // attributes start with @
//         '#text': '' // text node
//       }
//     }
//   }
// };