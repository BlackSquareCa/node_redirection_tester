
  var assert = require('assert');
  const fetch = require("node-fetch");

  const HOST = "http://maltsglobal.diageoplatform.com:8080"

  describe('Redirects', function () {
    describe('#allOf()', function () {
        const testCases = [
            {from:'https://maltsglobal.diageoplatform.com/en-gb/learn-about-whisky/whisky-types',to:'http://maltsglobal.diageoplatform.com/en-gb/whisky-guide/whisky-types'},
            {from:'https://maltsglobal.diageoplatform.com/en-gb/learn-about-whisky/the-tasting/',to:'http://maltsglobal.diageoplatform.com/en-gb/whisky-guide/the-tasting/'},
            {from:'https://maltsglobal.diageoplatform.com/en-gb/guide-to-whisky/the-lingo/?p=k',to:'http://maltsglobal.diageoplatform.com/en-gb/whisky-guide/the-lingo/?p=k'},
            {from:'https://maltsglobal.diageoplatform.com/en-gb/guide-to-whisky/the-lingo/?p=j',to:'http://maltsglobal.diageoplatform.com/en-gb/whisky-guide/the-lingo/?p=j'},
            {from:'https://maltsglobal.diageoplatform.com/en-gb/guide-to-whisky/the-lingo/?p=h',to:'http://maltsglobal.diageoplatform.com/en-gb/whisky-guide/the-lingo/?p=h'}           
        
        
        
        ]
        testCases.forEach((test) =>{        
            it(`${test.from} should redirect to ${test.to} and return 301/2`, () => {                            
                return fetch(`${test.from}`)
                    .then(res => {
                        console.log(`Testing: ${res.status}  on ${res.url} `)  
                        console.log(`RedirectMatch 302 ^${test.from}?$ ${test.to}`)
                        assert(res.status!==404)
                        assert(res.url.indexOf(test.to) !== -1) 
                        
                        return 
                    })                
            });
        });
    });
  });