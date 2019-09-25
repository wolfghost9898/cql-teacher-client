/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var GramaticaLup = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,20],$V2=[1,21],$V3=[1,22],$V4=[1,23],$V5=[1,35],$V6=[1,34],$V7=[1,47],$V8=[1,46],$V9=[8,23,26],$Va=[1,52],$Vb=[1,82],$Vc=[1,104],$Vd=[1,136],$Ve=[1,140],$Vf=[1,144],$Vg=[1,211],$Vh=[1,214];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instrucciones":4,"inLogin":5,"inLogout":6,"datas":7,"CORIZQ":8,"MAS":9,"LOGIN":10,"CORDER":11,"SUCCESS":12,"MENOS":13,"FAIL":14,"LOGOUT":15,"data":16,"mensajeError":17,"mensaje":18,"consulta":19,"allData":20,"ERROR":21,"LINE":22,"ENTERO":23,"COLUMN":24,"TYPE":25,"CUERPO":26,"DESC":27,"cuerpo":28,"MESSAGE":29,"DATA":30,"indatabases":31,"DATABASES":32,"databases":33,"database":34,"DATABASE":35,"name":36,"elementos":37,"inTablas":38,"inProcedures":39,"inTypes":40,"TYPES":41,"types":42,"type":43,"inAtributo":44,"ATTRIBUTES":45,"atributos":46,"atributo":47,"ATTRIBUTE":48,"TABLES":49,"tablas":50,"tabla":51,"TABLE":52,"inColumnas":53,"COLUMNS":54,"columnas":55,"columna":56,"PROCEDURES":57,"procedures":58,"procedure":59,"PROCEDURE":60,"NAME":61,"$accept":0,"$end":1},
terminals_: {2:"error",8:"CORIZQ",9:"MAS",10:"LOGIN",11:"CORDER",12:"SUCCESS",13:"MENOS",14:"FAIL",15:"LOGOUT",21:"ERROR",22:"LINE",23:"ENTERO",24:"COLUMN",25:"TYPE",26:"CUERPO",27:"DESC",29:"MESSAGE",30:"DATA",32:"DATABASES",35:"DATABASE",41:"TYPES",45:"ATTRIBUTES",48:"ATTRIBUTE",49:"TABLES",52:"TABLE",54:"COLUMNS",57:"PROCEDURES",60:"PROCEDURE",61:"NAME"},
productions_: [0,[3,1],[3,1],[4,1],[4,1],[4,1],[5,11],[5,11],[6,11],[6,11],[7,2],[7,1],[16,1],[16,1],[16,1],[16,1],[17,44],[18,9],[19,9],[28,2],[28,2],[28,1],[28,1],[20,1],[31,9],[31,8],[33,2],[33,1],[34,10],[34,9],[37,2],[37,2],[37,2],[37,1],[37,1],[37,1],[40,9],[40,8],[42,2],[42,1],[43,10],[44,9],[46,2],[46,1],[47,9],[38,9],[38,8],[50,2],[50,1],[51,10],[53,9],[55,2],[55,1],[56,9],[39,9],[39,8],[58,2],[58,1],[59,9],[36,9]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 parser.arbol.raiz = $$[$0]; this.$ = $$[$0];  
break;
case 2:
 console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
break;
case 3: case 4: case 27: case 39: case 43: case 48: case 52: case 57:
this.$ = []; this.$.push($$[$0]);
break;
case 5:
this.$ = $$[$0];
break;
case 6:
 this.$ = new Login(true);
break;
case 7:
 this.$ = new Login(false);
break;
case 8:
 this.$ = new Logout(true);
break;
case 9:
 this.$ = new Logout(false);
break;
case 10:
this.$ = $$[$0-1]; this.$.push($$[$0])
break;
case 11:
this.$ = []; this.$.push($$[$0])
break;
case 12: case 13: case 14: case 15: case 21: case 22:
this.$ = $$[$0]
break;
case 16:
this.$ = new MensajesError($$[$0-8],$$[$0-17],$$[$0-35],$$[$0-26]);
break;
case 17:
this.$ = new Mensaje($$[$0-4]);
break;
case 18:
this.$ = new Consulta($$[$0-4]);
break;
case 19: case 20:
this.$ = $$[$0-1] + "\n" + $$[$0]
break;
case 23:
this.$ = new Estructura({bases: $$[$0]});
break;
case 24: case 36: case 45: case 53: case 54: case 58: case 59:
this.$ = $$[$0-4];
break;
case 25: case 37: case 46:
this.$ = [];
break;
case 26:
this.$= $$[$0-1]; this.$.push($$[$0]);
break;
case 28:
this.$ = {name:$$[$0-5],objetos:$$[$0-4]};
break;
case 29:
this.$ = {name:$$[$0-4],tablas:[]};
break;
case 30:
this.$ = $$[$0-1]; this.$.push({tipo: "tabla", data : $$[$0]});
break;
case 31:
this.$ = $$[$0-1]; this.$.push({tipo: "procedur", data : $$[$0]});
break;
case 32:
this.$ = $$[$0-1]; this.$.push({tipo: "type", data : $$[$0]});
break;
case 33:
this.$ = []; this.$.push({tipo: "tabla", data : $$[$0]});
break;
case 34:
this.$ = []; this.$.push({tipo: "type", data : $$[$0]});
break;
case 35:
this.$ = []; this.$.push({tipo: "procedur", data : $$[$0]});
break;
case 38: case 42: case 47: case 51: case 56:
this.$ = $$[$0-1]; this.$.push($$[$0]);
break;
case 40:
this.$ = {name: $$[$0-5], atributos: $$[$0-4]};
break;
case 41: case 44: case 50:
this.$ = $$[$0-4]
break;
case 49:
this.$ = {name: $$[$0-5], columnas: $$[$0-4] };
break;
case 55:
this.$ = [s];
break;
}
},
table: [{2:[1,3],3:1,4:2,5:4,6:5,7:6,8:[1,7],16:8,17:9,18:10,19:11,20:12,31:13},{1:[3]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{1:[2,4]},{1:[2,5],8:[1,15],16:14,17:9,18:10,19:11,20:12,31:13},{9:[1,16]},o($V0,[2,11]),o($V0,[2,12]),o($V0,[2,13]),o($V0,[2,14]),o($V0,[2,15]),o($V0,[2,23]),o($V0,[2,10]),{9:[1,17]},{10:[1,18],15:[1,19],21:$V1,29:$V2,30:$V3,32:$V4},{21:$V1,29:$V2,30:$V3,32:$V4},{11:[1,24]},{11:[1,25]},{11:[1,26]},{11:[1,27]},{11:[1,28]},{11:[1,29]},{8:[1,30]},{8:[1,31]},{8:[1,32]},{23:$V5,26:$V6,28:33},{23:$V5,26:$V6,28:36},{8:[1,38],33:37,34:39},{12:[1,40],14:[1,41]},{12:[1,42],14:[1,43]},{9:[1,44]},{8:[1,45],23:$V7,26:$V8},o($V9,[2,21]),o($V9,[2,22]),{8:[1,48],23:$V7,26:$V8},{8:[1,49],34:50},{9:$Va,13:[1,51]},{8:[2,27]},{11:[1,53]},{11:[1,54]},{11:[1,55]},{11:[1,56]},{22:[1,57]},{13:[1,58]},o($V9,[2,19]),o($V9,[2,20]),{13:[1,59]},{9:$Va,13:[1,60]},{8:[2,26]},{32:[1,61]},{35:[1,62]},{8:[1,63]},{8:[1,64]},{8:[1,65]},{8:[1,66]},{11:[1,67]},{29:[1,68]},{30:[1,69]},{32:[1,70]},{11:[1,71]},{11:[1,72]},{13:[1,73]},{13:[1,74]},{13:[1,75]},{13:[1,76]},{23:[1,77]},{11:[1,78]},{11:[1,79]},{11:[1,80]},o($V0,[2,25]),{8:$Vb,36:81},{10:[1,83]},{10:[1,84]},{15:[1,85]},{15:[1,86]},{8:[1,87]},o($V0,[2,17]),o($V0,[2,18]),o($V0,[2,24]),{8:[1,89],37:88,38:90,39:92,40:91},{9:[1,93]},{11:[1,94]},{11:[1,95]},{11:[1,96]},{11:[1,97]},{13:[1,98]},{8:[1,99],38:100,39:101,40:102},{9:$Vc,13:[1,103]},{8:[2,33]},{8:[2,34]},{8:[2,35]},{61:[1,105]},{1:[2,6]},{1:[2,7]},{1:[2,8]},{1:[2,9]},{22:[1,106]},{9:$Vc,13:[1,107]},{8:[2,30]},{8:[2,31]},{8:[2,32]},{35:[1,108]},{41:[1,110],49:[1,109],57:[1,111]},{11:[1,112]},{11:[1,113]},{35:[1,114]},{11:[1,115]},{11:[1,116]},{11:[1,117]},{11:[1,118]},{26:[1,119]},{8:[1,120]},{11:[1,121]},{8:[2,29]},{8:[1,123],50:122,51:124},{8:[1,126],42:125,43:127},{8:[1,129],58:128,59:130},{8:[1,131]},{9:[1,132]},{8:[2,28]},{8:[1,133],51:134},{9:$Vd,13:[1,135]},{8:[2,48]},{8:[1,137],43:138},{9:$Ve,13:[1,139]},{8:[2,39]},{8:[1,141],59:142},{9:$Vf,13:[1,143]},{8:[2,57]},{13:[1,145]},{24:[1,146]},{9:$Vd,13:[1,147]},{8:[2,47]},{49:[1,148]},{52:[1,149]},{9:$Ve,13:[1,150]},{8:[2,38]},{41:[1,151]},{25:[1,152]},{9:$Vf,13:[1,153]},{8:[2,56]},{57:[1,154]},{60:[1,155]},{61:[1,156]},{11:[1,157]},{49:[1,158]},{11:[1,159]},{11:[1,160]},{41:[1,161]},{11:[1,162]},{11:[1,163]},{57:[1,164]},{11:[1,165]},{11:[1,166]},{11:[1,167]},{23:[1,168]},{11:[1,169]},{8:[2,46]},{8:$Vb,36:170},{11:[1,171]},{8:[2,37]},{8:$Vb,36:172},{11:[1,173]},{8:[2,55]},{26:[1,174]},{8:[2,59]},{8:[1,175]},{8:[2,45]},{8:[1,177],53:176},{8:[2,36]},{8:[1,179],44:178},{8:[2,54]},{8:[1,180]},{13:[1,181]},{8:[1,182]},{9:[1,183]},{8:[1,184]},{9:[1,185]},{13:[1,186]},{24:[1,187]},{13:[1,188]},{54:[1,189]},{13:[1,190]},{45:[1,191]},{60:[1,192]},{11:[1,193]},{52:[1,194]},{11:[1,195]},{25:[1,196]},{11:[1,197]},{11:[1,198]},{8:[1,199]},{11:[1,200]},{8:[1,203],55:201,56:202},{11:[1,204]},{8:[1,207],46:205,47:206},{8:[2,58]},{9:[1,208]},{8:[2,49]},{8:[1,209],56:210},{8:[2,52]},{9:$Vg},{8:[2,40]},{8:[1,212],47:213},{8:[2,43]},{9:$Vh},{25:[1,215]},{9:$Vg,13:[1,216]},{8:[2,51]},{24:[1,217]},{9:$Vh,13:[1,218]},{8:[2,42]},{48:[1,219]},{11:[1,220]},{54:[1,221]},{11:[1,222]},{45:[1,223]},{11:[1,224]},{26:[1,225]},{11:[1,226]},{26:[1,227]},{11:[1,228]},{26:[1,229]},{8:[1,230]},{8:[2,50]},{8:[1,231]},{8:[2,41]},{8:[1,232]},{13:[1,233]},{13:[1,234]},{13:[1,235]},{25:[1,236]},{24:[1,237]},{48:[1,238]},{11:[1,239]},{11:[1,240]},{11:[1,241]},{8:[1,242]},{8:[2,53]},{8:[2,44]},{9:[1,243]},{27:[1,244]},{11:[1,245]},{23:$V5,26:$V6,28:246},{8:[1,247],23:$V7,26:$V8},{13:[1,248]},{27:[1,249]},{11:[1,250]},{8:[1,251]},{13:[1,252]},{21:[1,253]},{11:[1,254]},o($V0,[2,16])],
defaultActions: {2:[2,1],3:[2,2],4:[2,3],5:[2,4],39:[2,27],50:[2,26],90:[2,33],91:[2,34],92:[2,35],94:[2,6],95:[2,7],96:[2,8],97:[2,9],100:[2,30],101:[2,31],102:[2,32],115:[2,29],121:[2,28],124:[2,48],127:[2,39],130:[2,57],134:[2,47],138:[2,38],142:[2,56],159:[2,46],162:[2,37],165:[2,55],167:[2,59],169:[2,45],171:[2,36],173:[2,54],198:[2,58],200:[2,49],202:[2,52],204:[2,40],206:[2,43],210:[2,51],213:[2,42],226:[2,50],228:[2,41],240:[2,53],241:[2,44]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};


parser.arbol = {
    raiz: null
};/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:return 23
break;
case 2:return 8
break;
case 3:return 11
break;
case 4:return 9
break;
case 5:return 13 
break;
case 6:return 10
break;
case 7:return 15
break;
case 8:return 14
break;
case 9:return 12
break;
case 10:return 21
break;
case 11:return 22
break;
case 12:return 24
break;
case 13:return 25
break;
case 14:return 27
break;
case 15:return 29
break;
case 16:return 30
break;
case 17:return 32
break;
case 18:return 35
break;
case 19:return 61
break;
case 20:return 49
break;
case 21:return 52
break;
case 22:return 54
break;
case 23:return 24
break;
case 24:return 41
break;
case 25:return 25
break;
case 26:return 45
break;
case 27:return 48
break;
case 28:return 57
break;
case 29:return 60
break;
case 30:return 26
break;
case 31:
break;
case 32: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:[ \r\t\n]+)/i,/^(?:[0-9]+)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\+)/i,/^(?:-)/i,/^(?:LOGIN\b)/i,/^(?:LOGOUT\b)/i,/^(?:FAIL\b)/i,/^(?:SUCCESS\b)/i,/^(?:ERROR\b)/i,/^(?:LINE\b)/i,/^(?:COLUMN\b)/i,/^(?:TYPE\b)/i,/^(?:DESC\b)/i,/^(?:MESSAGE\b)/i,/^(?:DATA\b)/i,/^(?:DATABASES\b)/i,/^(?:DATABASE\b)/i,/^(?:NAME\b)/i,/^(?:TABLES\b)/i,/^(?:TABLE\b)/i,/^(?:COLUMNS\b)/i,/^(?:COLUMN\b)/i,/^(?:TYPES\b)/i,/^(?:TYPE\b)/i,/^(?:ATTRIBUTES\b)/i,/^(?:ATTRIBUTE\b)/i,/^(?:PROCEDURES\b)/i,/^(?:PROCEDURE\b)/i,/^(?:((?!(\[(\+|-))).+))/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = GramaticaLup;
exports.Parser = GramaticaLup.Parser;
exports.parse = function () { return GramaticaLup.parse.apply(GramaticaLup, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}