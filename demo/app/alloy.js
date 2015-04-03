var test = require('com.enouvo.tigif');
Ti.API.info("module is => " + test);
Ti.API.info("module example() method returns => " + test.example());
Ti.API.info("module exampleProp is => " + test.exampleProp);
test.exampleProp = "This is a test value";