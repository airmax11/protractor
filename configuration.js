exports.config = {
  //  seleniumAddress: "http://localhost:4444/wd/hub",
    specs: [
    //  "spec1.js",
    //  "spec2.js",
    //  "actions.js",
    //  "frame.js",
    "project_1/practice.js"
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