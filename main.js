/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets*/

define(function (require) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
        EditorManager = brackets.getModule("editor/EditorManager");

    
    // main.js
    
    // Function to run when the user ctrl+clicks filename
    function handleCtrlClick() {
        var editor = EditorManager.getCurrentFullEditor();
        var selection = editor.getSelectedText();
        var filename = require.toUrl(selection);
        prompt("The full path to the file is: ", filename);
    }
    
    // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID = "ctrlClick.alertUs";   // package-style naming to avoid collisions
    CommandManager.register("CtrlClickFile", MY_COMMAND_ID, handleCtrlClick);

    KeyBindingManager.addBinding(MY_COMMAND_ID, "Ctrl-P");
    
});