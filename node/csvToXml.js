const csvPath='./input/sample.csv';//The path where the csv file is
const XMLPath = './output/output.xml';//The path where you want to store the file converted

const csv=require('csvtojson');
const fs = require('fs');
var builder = require('xmlbuilder');

const csvToXML = async(csvPath,whereToSave) =>{
  try{
    const jsonArray=await csv().fromFile(csvPath);

    var obj = {
      record : [...jsonArray]
    };

    var xml = builder.create(obj, { encoding: 'utf-8' }).end({ pretty: true});

    fs.writeFile(whereToSave, xml, (err) => {
      return err ? console.log(err) : console.log("The XML was saved!");
    }); 
  }
  catch(err){ console.log(err) }
};
csvToXML(csvPath,XMLPath);