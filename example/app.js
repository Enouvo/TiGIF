// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var com_enouvo_tigif = require('com.enouvo.tigif');
Ti.API.info("module is => " + com_enouvo_tigif);

label.text = com_enouvo_tigif.example();

Ti.API.info("module exampleProp is => " + com_enouvo_tigif.exampleProp);
com_enouvo_tigif.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = com_enouvo_tigif.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}

