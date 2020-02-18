exports.config = {
  //  seleniumAddress: "http://localhost:4444/wd/hub",
    specs: [
    //  "spec1.js",
    //  "spec2.js",
         "actions.js"
   ],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
           args: [
     //   "--headless",
        "--window-size=1600,900"
      ],
        'w3c': false
        } 
    }
};