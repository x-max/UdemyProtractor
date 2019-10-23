// An example configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: false,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'goog:chromeOptions': {
      w3c: false
      }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['PracticeExercise.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
