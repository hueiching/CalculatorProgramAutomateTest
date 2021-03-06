// conf.js
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
  //drive the browser directly, without having to execute Selenium server explicitly
  directConnect: true, 
  
  framework: 'jasmine',
  specs: ['..//spec/spec.js'],
  
  capabilities: {
    browserName: 'firefox',
  },
  plugins: [
    {
    // The module name
    package: "protractor-react-selector"
    }
  ],
  
  //OPtion to be passed to Jasmine
  jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
  },
  
  onPrepare: function(){
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true, //Displays a summary of all failures after execution.
      displayFailuredSpec: true, //Displays a summary of all specs that failed after execution.
      displaySuiteNumber: true, //Displays the suite number executed hierarchically if the suites are set.
      displaySpecDuration: true //Displays the duration of the spec run.
    }));
  }
}