const fetch = require("node-fetch");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var flatten = require('flat')
 
async function main(){

  const testCases = [
    {from:'https://maltsglobal.diageoplatform.com/en-gb/aboutus', to:'sdhttps://maltsglobal.diageoplatform.com/en-gb/'}
  ]
  
  testCases.forEach((test) =>{
    fetch(test.from,{redirect:"manual"})
      .then(res => {  
          assert.equal(301,res.status)
          assert.equal(test.to,res.headers.get('location'))
      })
    .catch(error => console.error(JSON.stringify(error)));
  });

   
 

}

  
main().then(console.log("completed"))
