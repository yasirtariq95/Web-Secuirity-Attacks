//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_script_create
//Frame killer script: https://en.wikipedia.org/wiki/Framekiller
//https://www.danielcrabtree.com/blog/25/gotchas-with-dynamically-adding-script-tags-to-html
//After alot of struggle in finding the right pattern for the script, i finally used this source :
//https://stackoverflow.com/questions/37614493/bypass-iframe-detection-with-a-chrome-extension
console.log("Extention test second try");
var trigger = document.documentElement;
var createScript = document.createElement("script");
var addScript = document.createTextNode("if(top !== self) {window.self = window.top;}");
createScript.appendChild(addScript);
console.log(createScript);
console.log(document.body);

trigger.appendChild(createScript);
console.log(trigger);





