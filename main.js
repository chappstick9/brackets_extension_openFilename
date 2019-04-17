/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
        DocumentManager = brackets.getModule("document/DocumentManager"),
        FileSystem = brackets.getModule("filesystem/FileSystem"),
        EditorManager = brackets.getModule("editor/EditorManager");

    
    // Function to run when the user ctrl+clicks filename
    function handleCtrlClick() {
        var editor = EditorManager.getCurrentFullEditor();
        var selection = editor.getSelectedText();
        window.alert("User has highlighted " + selection);
        console.log("index.html");
        var filename = require.toUrl(selection);
        console.log("ToURL is " + filename);
        var file = FileSystem.getFileForPath(filename);
        console.log(file);
        DocumentManager.getDocumentForPath(filename, file)
            .then(function (value) {
                console.log("Value is " + value);
            });
        /*document.then = function (value) {
            console.log("We get here");
            console.log("Value is " + value);
            //EditorManager.openDocument(document);  
            //return;
        };*/
        console.log("WTF");
    }
    
    
    
    
    // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID = "ctrlClick.alertUs";   // package-style naming to avoid collisions
    CommandManager.register("CtrlClickFile", MY_COMMAND_ID, handleCtrlClick);

    KeyBindingManager.addBinding(MY_COMMAND_ID, "Ctrl-Shift-Alt-B");
    
});