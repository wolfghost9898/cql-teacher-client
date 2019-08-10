//---------------------------------------------- Configuracion codeMirror --------------------------------------------------------------------------

var prefEditor = {
    lineNumbres: true,
    mode: "text/x-sql",
    theme: "paraiso-dark",
    readOnly: true
};

var editor = document.getElementById("editor");
var ed;
if(editor){
    ed = CodeMirror.fromTextArea(editor,prefEditor);
   ed.refresh();
}

//----------------------------------- configurar blockly-----------------------------
var workspacePlayground;
function configurarBlockly(){
     workspacePlayground = Blockly.inject('blocklyDiv',
        {toolbox: document.getElementById('toolbox')});
    
    workspacePlayground.addChangeListener(showCode);
}


//---------------------------------Funcion para cerrar sesion---------------------------------------------------
function getOut(){
    document.cookie = "username=;";
    window.location.href = '/';
}

