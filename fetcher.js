const request = require('request');
const fs = require('fs');
const parametersIn = process.argv.splice(2);
const link = parametersIn[0];
const destination = parametersIn[1];

const pageFetcher = function(url, callback){
  request(url, (error, response, body) => {
    if(error) {
      console.log('ERROR:', error);
      return
    };
    callback(body);
  })
}
  pageFetcher(link,(elt) => {fs.writeFile(destination, elt, function(error) {
    if(error) {
      return error;
    }
    console.log("The file was saved");
  })
});

