/*
Blockly.Javascript['Tablas'] = function(block){
    console.log(block);
}
*/



function generarCodigo(){
    var code = Blockly.JavaScript.workspaceToCode(workspacePlayground);
    
    // now what do you do want to do with code...?
    console.log(code);
}

//--------------------------------------------------------------------- SELECT----------------------------------------------------------
Blockly.JavaScript['select'] = function(block) {
    //console.log(block);
    var code = "SELECT ";

    //------------------------------------------------- CAMPOS EN SELECT --------------------------------------------------------------
    if(block.childBlocks_[0].getFieldValue('campo')) code += getCampos(block.childBlocks_[0]);
    else if(block.childBlocks_[0].getFieldValue('Tabla')){
        let tabla = block.childBlocks_[0].getFieldValue('Tabla');
        let campo = block.childBlocks_[0].getFieldValue('Campos');
        code+= tabla + "." + campo;
    }else if(block.childBlocks_[0].getFieldValue('valor')) code +=  block.childBlocks_[0].getFieldValue('valor');

    code += "\n";
    //-------------------------------------------------- CAMPOS DE FROM--------------------------------------------------------------------

    code+= "FROM ";
    if(block.childBlocks_[1].getFieldValue('campo')) code += getCampos(block.childBlocks_[1]) + "\n";
    else if(block.childBlocks_[1].getFieldValue('valor')) code +=  block.childBlocks_[1].getFieldValue('valor');

    code += "\n";

    //-------------------------------------------------- WHERE -----------------------------------------------------------------------------
    if(block.childBlocks_.length[2]) if(block.childBlocks_.length[2].getFieldValue('WHERE')) code += block.childBlocks_.length[2].getFieldValue('WHERE');

    return code;
};
//---------------------------------------------------------------------- CAMPOS DE TEXTO---------------------------------------------------
Blockly.JavaScript['campo'] = function(block) {
    var text = block.getFieldValue('campo');
    return [text];
};

//----------------------------------------------------------------------- WHERE ---------------------------------------------------------------
Blockly.JavaScript['where'] = function(block){
    let code = "WHERE ";
    if(block.childBlocks_[0]) code += resolverOperacion(block.childBlocks_[0])
    code += "\n";
    return code;
}

//--------------------------------------------------------------------------- resolver las operaciones ---------------------------------------------------
function resolverOperacion(operacion){
    if(operacion.getFieldValue("valor")) return operacion.getFieldValue("valor");
    else if (operacion.getFieldValue("OPERA")){
        let opera1 = null;
        let opera2 = null;
        let operando = operacion.getFieldValue("OPERA");
        if(operacion.childBlocks_[0]) opera1 = resolverOperacion(operacion.childBlocks_[0]);
        if(operacion.childBlocks_[1]) opera2 = resolverOperacion(operacion.childBlocks_[1]);
        return opera1 + " " + operando + " " + opera2;
    }else if(operacion.getFieldValue("ARITMETICA")){
        let opera1 = null;
        let opera2 = null;
        let operando = operacion.getFieldValue("ARITMETICA");
        if(operacion.childBlocks_[0]) opera1 = resolverOperacion(operacion.childBlocks_[0]);
        if(operacion.childBlocks_[1]) opera2 = resolverOperacion(operacion.childBlocks_[1]);
        return opera1 + " " + operando + " " + opera2;
    }
    return "";
}

//-------------------------------------------------------------------- condiciones booleanas ---------------------------------------------------
Blockly.JavaScript['condicion'] = function(block){
    console.log(block);
    return "condicion";
}

//------------------------------------------------ concatena los campos de un select ------------------------------------------------------------
function getCampos(hijo){
  let code = hijo.getFieldValue("campo");
  if(hijo.childBlocks_.length > 0) code += "," + getCampos(hijo.childBlocks_[0]);
  return code;
}

//------------------------------------------------ concatena las tablas de un select ------------------------------------------------------------
function getTablas(hijo){
    let code = hijo.getFieldValue("campo");
    if(hijo.childBlocks_.length > 1) code += "," + getTablas(hijo.childBlocks_[1]);
    return code;
  }