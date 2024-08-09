"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3943],{23943:function(e,a,m){m.r(a),m.d(a,{default:function(){return n}});var n=[Object.freeze({displayName:"Mermaid",fileTypes:[],injectionSelector:"L:text.html.markdown",name:"mermaid",patterns:[{include:"#mermaid-code-block"},{include:"#mermaid-code-block-with-attributes"},{include:"#mermaid-ado-code-block"}],repository:{mermaid:{patterns:[{begin:"^\\s*(classDiagram)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"Class Diagram",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"\\%%.*",name:"comment"},{captures:{1:{name:"entity.name.type.class.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"keyword.control.mermaid"},4:{name:"keyword.control.mermaid"},5:{name:"entity.name.type.class.mermaid"},6:{name:"keyword.control.mermaid"},7:{name:"string"}},comment:'(class name) ("multiplicity relationship")? (relationship) ("multiplicity relationship")? (class name) :? (labelText)?',match:'([\\w-]+)\\s("(?:\\d+|\\*|0..\\d+|1..\\d+|1..\\*)")?\\s?(--o|--\\*|\\<--|--\\>|<\\.\\.|\\.\\.\\>|\\<\\|\\.\\.|\\.\\.\\|\\>|\\<\\|--|--\\|>|--\\*|--|\\.\\.|\\*--|o--)\\s("(?:\\d+|\\*|0..\\d+|1..\\d+|1..\\*)")?\\s?([\\w-]+)\\s?(:)?\\s(.*)$'},{captures:{1:{name:"entity.name.type.class.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"keyword.control.mermaid"},4:{name:"entity.name.function.mermaid"},5:{name:"punctuation.parenthesis.open.mermaid"},6:{name:"storage.type.mermaid"},7:{name:"punctuation.definition.typeparameters.begin.mermaid"},8:{name:"storage.type.mermaid"},9:{name:"punctuation.definition.typeparameters.end.mermaid"},10:{name:"entity.name.variable.parameter.mermaid"},11:{name:"punctuation.parenthesis.closed.mermaid"},12:{name:"keyword.control.mermaid"},13:{name:"storage.type.mermaid"},14:{name:"punctuation.definition.typeparameters.begin.mermaid"},15:{name:"storage.type.mermaid"},16:{name:"punctuation.definition.typeparameters.end.mermaid"}},comment:"(class name) : (visibility)?(function)( (function param/generic param)? )(classifier)? (return/generic return)?$",match:"([\\w-]+)\\s?(:)\\s([\\+~#-])?([\\w-]+)(\\()([\\w-]+)?(~)?([\\w-]+)?(~)?\\s?([\\w-]+)?(\\))([*\\$]{0,2})\\s?([\\w-]+)?(~)?([\\w-]+)?(~)?$"},{captures:{1:{name:"entity.name.type.class.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"keyword.control.mermaid"},4:{name:"storage.type.mermaid"},5:{name:"punctuation.definition.typeparameters.begin.mermaid"},6:{name:"storage.type.mermaid"},7:{name:"punctuation.definition.typeparameters.end.mermaid"},8:{name:"entity.name.variable.field.mermaid"}},comment:"(class name) : (visibility)?(datatype/generic data type) (attribute name)$",match:"([\\w-]+)\\s?(:)\\s([\\+~#-])?([\\w-]+)(~)?([\\w-]+)?(~)?\\s([\\w-]+)?$"},{captures:{1:{name:"punctuation.definition.typeparameters.begin.mermaid"},2:{name:"storage.type.mermaid"},3:{name:"punctuation.definition.typeparameters.end.mermaid"},4:{name:"entity.name.type.class.mermaid"}},comment:"<<(Annotation)>> (class name)",match:"(<<)([\\w-]+)(>>)\\s?([\\w-]+)?"},{begin:"(class)\\s+([\\w-]+)(~)?([\\w-]+)?(~)?\\s?({)",beginCaptures:{1:{name:"keyword.control.mermaid"},2:{name:"entity.name.type.class.mermaid"},3:{name:"punctuation.definition.typeparameters.begin.mermaid"},4:{name:"storage.type.mermaid"},5:{name:"punctuation.definition.typeparameters.end.mermaid"},6:{name:"keyword.control.mermaid"}},comment:"class (class name) ~?(generic type)?~? ({)",end:"(})",endCaptures:{1:{name:"keyword.control.mermaid"}},patterns:[{match:"\\%%.*",name:"comment"},{begin:"\\s([\\+~#-])?([\\w-]+)(\\()",beginCaptures:{1:{name:"keyword.control.mermaid"},2:{name:"entity.name.function.mermaid"},3:{name:"punctuation.parenthesis.open.mermaid"}},comment:"(visibility)?(function)( (function param/generic param)? )(classifier)? (return/generic return)?$",end:"(\\))([*\\$]{0,2})\\s?([\\w-]+)?(~)?([\\w-]+)?(~)?$",endCaptures:{1:{name:"punctuation.parenthesis.closed.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"storage.type.mermaid"},4:{name:"punctuation.definition.typeparameters.begin.mermaid"},5:{name:"storage.type.mermaid"},6:{name:"punctuation.definition.typeparameters.end.mermaid"}},patterns:[{captures:{1:{name:"storage.type.mermaid"},2:{name:"punctuation.definition.typeparameters.begin.mermaid"},3:{name:"storage.type.mermaid"},4:{name:"punctuation.definition.typeparameters.end.mermaid"},5:{name:"entity.name.variable.parameter.mermaid"}},comment:"(TBD)",match:"\\s*,?\\s*([\\w-]+)?(~)?([\\w-]+)?(~)?\\s?([\\w-]+)?"}]},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"storage.type.mermaid"},3:{name:"punctuation.definition.typeparameters.begin.mermaid"},4:{name:"storage.type.mermaid"},5:{name:"punctuation.definition.typeparameters.end.mermaid"},6:{name:"entity.name.variable.field.mermaid"}},comment:"(visibility)?(datatype/generic data type) (attribute name)$",match:"\\s([\\+~#-])?([\\w-]+)(~)?([\\w-]+)?(~)?\\s([\\w-]+)?$"},{captures:{1:{name:"punctuation.definition.typeparameters.begin.mermaid"},2:{name:"storage.type.mermaid"},3:{name:"punctuation.definition.typeparameters.end.mermaid"},4:{name:"entity.name.type.class.mermaid"}},comment:"<<(Annotation)>> (class name)",match:"(<<)([\\w-]+)(>>)\\s?([\\w-]+)?"}]},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"entity.name.type.class.mermaid"},3:{name:"punctuation.definition.typeparameters.begin.mermaid"},4:{name:"storage.type.mermaid"},5:{name:"punctuation.definition.typeparameters.end.mermaid"}},comment:"class (class name) ~?(generic type)?~?",match:"(class)\\s+([\\w-]+)(~)?([\\w-]+)?(~)?"}]},{begin:"^\\s*(erDiagram)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"Entity Relationship Diagram",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"\\%%.*",name:"comment"},{comment:"(entity)",match:"^\\s*([\\w-]+)$",name:"variable"},{begin:"\\s+([\\w-]+)\\s*({)",beginCaptures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"}},comment:"(entity) {",end:"(})",endCaptures:{1:{name:"keyword.control.mermaid"}},patterns:[{captures:{1:{name:"storage.type.mermaid"},2:{name:"variable"},3:{name:"keyword.control.mermaid"},4:{name:"string"}},comment:'(type) (name) (PK|FK)? ("comment")?',match:'\\s*([\\w-]+)\\s+([\\w-]+)\\s+(PK|FK)?\\s*("["\\($&%\\^/#.,?!;:*+=<>\\\'\\\\\\-\\w\\s]*")?\\s*'},{match:"\\%%.*",name:"comment"}]},{captures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"},3:{name:"variable"},4:{name:"keyword.control.mermaid"},5:{name:"string"}},comment:"(entity) (relationship) (entity) : (label)",match:'\\s*([\\w-]+)\\s*((?:\\|o|\\|\\||}o|}\\||one or (?:zero|more|many)|zero or (?:one|more|many)|many\\((?:0|1)\\)|only one|0\\+|1\\+?)(?:..|--)(?:o\\||\\|\\||o{|\\|{|one or (?:zero|more|many)|zero or (?:one|more|many)|many\\((?:0|1)\\)|only one|0\\+|1\\+?))\\s*([\\w-]+)\\s*(:)\\s*((?:"[\\w\\s]*")|(?:[\\w-]+))'}]},{begin:"^\\s*(gantt)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"Gantt Diagram",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"\\%%.*",name:"comment"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"entity.name.function.mermaid"}},match:"(dateFormat)\\s+([\\w\\-\\.]+)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"entity.name.function.mermaid"}},match:"(axisFormat)\\s+([\\w\\%\\/\\\\\\-\\.]+)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"}},match:"(title)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"}},match:"(excludes)\\s+((?:[\\d\\-,\\s]+|monday|tuesday|wednesday|thursday|friday|saturday|sunday|weekends)+)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"}},match:"^\\s+(todayMarker)\\s+(.*)$"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"}},match:"(section)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"},{begin:"^\\s(.*)(:)",beginCaptures:{1:{name:"string"},2:{name:"keyword.control.mermaid"}},end:"$",patterns:[{match:"(crit|done|active|after)",name:"entity.name.function.mermaid"},{match:"\\%%.*",name:"comment"}]}]},{begin:"^\\s*(gitGraph)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"Git Graph",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"\\%%.*",name:"comment"},{begin:"\\s*(commit)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"commit",end:"$",patterns:[{captures:{1:{name:"keyword.control.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"string"}},comment:'(id)(:) ("id")',match:'\\s*(id)(:)\\s?("[^"\\n]*")'},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"entity.name.function.mermaid"}},comment:"(type)(:) (COMMIT_TYPE)",match:"\\s*(type)(:)\\s?(NORMAL|REVERSE|HIGHLIGHT)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"string"}},comment:'(tag)(:) ("tag")',match:'\\s*(tag)(:)\\s?("[\\($&%\\^/#.,?!;:*+=<>\\\'\\\\\\-\\w\\s]*")'}]},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"}},comment:"(checkout) (branch-name)",match:'\\s*(checkout)\\s*([^\\s"]*)'},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"},3:{name:"keyword.control.mermaid"},4:{name:"keyword.control.mermaid"},5:{name:"constant.numeric.decimal.mermaid"}},comment:"(branch) (branch-name) (order)?(:) (number)",match:'\\s*(branch)\\s*([^\\s"]*)\\s*(?:(order)(:)\\s?(\\d+))?'},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"},3:{name:"keyword.control.mermaid"},4:{name:"keyword.control.mermaid"},5:{name:"string"}},comment:'(merge) (branch-name) (tag: "tag-name")?',match:'\\s*(merge)\\s*([^\\s"]*)\\s*(?:(tag)(:)\\s?("[^"\\n]*"))?'},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"keyword.control.mermaid"},4:{name:"string"}},comment:'(cherry-pick) (id)(:)("commit-id")',match:'\\s*(cherry-pick)\\s+(id)(:)\\s*("[^"\\n]*")'}]},{begin:"^\\s*(graph|flowchart)\\s+([\\p{Letter}\\ 0-9]+)",beginCaptures:{1:{name:"keyword.control.mermaid"},2:{name:"entity.name.function.mermaid"}},comment:"Graph",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"\\%%.*",name:"comment"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"entity.name.function.mermaid"}},match:"\\b(subgraph)\\s+([\\p{Letter}\\ 0-9]+)",name:"meta.function.mermaid"},{match:"\\b(end|RB|BT|RL|TD|LR)\\b",name:"keyword.control.mermaid"},{begin:"(\\b(?:(?!--|==)[-\\w])+\\b\\s*)(\\(\\[|\\[\\[|\\[\\(|\\[|\\(+|\\>|\\{|\\(\\()",beginCaptures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"},3:{name:"string"}},comment:"(Entity)(Edge/Shape)(Text)(Edge/Shape)",end:"(\\]\\)|\\]\\]|\\)\\]|\\]|\\)+|\\}|\\)\\))",endCaptures:{1:{name:"keyword.control.mermaid"}},patterns:[{begin:'\\s*(")',beginCaptures:{1:{name:"string"}},comment:'("multi-line text")',end:'(")',endCaptures:{1:{name:"string"}},patterns:[{begin:'([^"]*)',beginCaptures:{1:{name:"string"}},comment:"capture inner text between quotes",end:'(?=")',patterns:[{captures:{1:{name:"comment"}},match:'([^"]*)'}]}]},{captures:{1:{name:"string"}},comment:"(single line text)",match:"\\s*([$&%\\^/#.,?!;:*+<>_\\'\\\\\\w\\s]+)"}]},{begin:"\\s*((?:-{2,5}|={2,5})[xo>]?\\|)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:'(Graph Link)("Multiline text")(Graph Link)',end:"(\\|)",endCaptures:{1:{name:"keyword.control.mermaid"}},patterns:[{begin:'\\s*(")',beginCaptures:{1:{name:"string"}},comment:'("multi-line text")',end:'(")',endCaptures:{1:{name:"string"}},patterns:[{begin:'([^"]*)',beginCaptures:{1:{name:"string"}},comment:"capture inner text between quotes",end:'(?=")',patterns:[{captures:{1:{name:"comment"}},match:'([^"]*)'}]}]},{captures:{1:{name:"string"}},comment:"(single line text)",match:"\\s*([$&%\\^/#.,?!;:*+<>_\\'\\\\\\w\\s]+)"}]},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"},3:{name:"keyword.control.mermaid"}},comment:"(Graph Link Start Arrow)(Text)(Graph Link End Arrow)",match:"\\s*([xo<]?(?:-{2,5}|={2,5}|-\\.{1,3}|-\\.))((?:(?!--|==)[\\w\\s*+%=\\\\/:\\.\\-'`,\"&^#$!?])*)((?:-{2,5}|={2,5}|\\.{1,3}-|\\.-)[xo>]?)"},{captures:{1:{name:"keyword.control.mermaid"}},comment:"(Graph Link)",match:"\\s*([ox<]?(?:-.{1,3}-|-{1,3}|={1,3})[ox>]?)"},{comment:"Entity",match:"(\\b(?:(?!--|==)[-\\w])+\\b\\s*)",name:"variable"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"},3:{name:"string"}},comment:"(Class)(Node(s))(ClassName)",match:"\\s*(class)\\s+(\\b[-,\\w]+)\\s+(\\b\\w+\\b)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"},3:{name:"string"}},comment:"(ClassDef)(ClassName)(Styles)",match:"\\s*(classDef)\\s+(\\b\\w+\\b)\\s+(\\b[-,:;#\\w]+)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"},3:{name:"variable"},4:{name:"string"}},comment:"(Click)(Entity)(Link)?(Tooltip)",match:'\\s*(click)\\s+(\\b[-\\w]+\\b\\s*)(\\b\\w+\\b)?\\s("*.*")'}]},{begin:"^\\s*(pie)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"Pie Chart",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"\\%%.*",name:"comment"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"}},match:"(title)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"},{begin:"\\s(.*)(:)",beginCaptures:{1:{name:"string"},2:{name:"keyword.control.mermaid"}},end:"$",patterns:[{match:"\\%%.*",name:"comment"}]}]},{begin:"^\\s*(sequenceDiagram)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"Sequence Diagram",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"(\\%%|#).*",name:"comment"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"string"}},comment:"(title)(title text)",match:"(title)\\s*(:)?\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!:*+=<>\\'\\\\\\-\\w\\s]*)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"},3:{name:"keyword.control.mermaid"},4:{name:"string"}},comment:"(participant)(Actor)(as)?(Label)?",match:"\\s*(participant|actor)\\s+((?:(?! as )[\"\\(\\)$&%\\^/#.?!*=<>\\'\\\\\\w\\s])+)\\s*(as)?\\s([\"\\(\\)$&%\\^/#.,?!*=<>\\'\\\\\\w\\s]+)?"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"}},comment:"(activate/deactivate)(Actor)",match:"\\s*((?:de)?activate)\\s+(\\b[\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?\\s*)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"entity.name.function.mermaid"},3:{name:"variable"},4:{name:"keyword.control.mermaid"},5:{name:"variable"},6:{name:"keyword.control.mermaid"},7:{name:"string"}},comment:"(Note)(direction)(Actor)(,)?(Actor)?(:)(Message)",match:"\\s*(Note)\\s+((?:left|right)\\sof|over)\\s+(\\b[\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?\\s*)(,)?(\\b[\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?\\s*)?(:)(?:\\s+([^;#]*))?"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"}},comment:"(loop)(loop text)",match:"\\s*(loop)(?:\\s+([^;#]*))?"},{captures:{1:{name:"keyword.control.mermaid"}},comment:"(end)",match:"\\s*(end)"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"}},comment:"(alt/else/option/par/and/autonumber/critical/opt)(text)",match:"\\s*(alt|else|option|par|and|rect|autonumber|critical|opt)(?:\\s+([^#;]*))?"},{captures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"},3:{name:"variable"},4:{name:"keyword.control.mermaid"},5:{name:"string"}},comment:"(Actor)(Arrow)(Actor)(:)(Message)",match:"\\s*(\\b[\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?)\\s*(-?-(?:\\>|x|\\))\\>?[+-]?)\\s*([\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?)\\s*(:)\\s*([^;#]*)"}]},{begin:"^\\s*(stateDiagram(?:-v2)?)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"State Diagram",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"\\%%.*",name:"comment"},{captures:{1:{name:"keyword.control.mermaid"}},comment:"}",match:"\\s+(})\\s+"},{captures:{1:{name:"keyword.control.mermaid"}},comment:"--",match:"\\s+(--)\\s+"},{comment:"(state)",match:"^\\s*([\\w-]+)$",name:"variable"},{captures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"},3:{name:"string"}},comment:"(state) : (description)",match:"([\\w-]+)\\s+(:)\\s+(\\s*[-\\w\\s]+\\b)"},{begin:"(state)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"state",end:"$",patterns:[{captures:{1:{name:"string"},2:{name:"keyword.control.mermaid"},3:{name:"variable"}},comment:'"(description)" as (state)',match:'\\s+("[-\\w\\s]+\\b")\\s+(as)\\s+([\\w-]+)'},{captures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"}},comment:"(state name) {",match:"\\s+([\\w-]+)\\s+({)"},{captures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"}},comment:"(state name) <<fork|join>>",match:"\\s+([\\w-]+)\\s+(<<(?:fork|join)>>)"}]},{begin:"([\\w-]+)\\s+(-->)",beginCaptures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"}},comment:"(state) -->",end:"$",patterns:[{captures:{1:{name:"variable"},2:{name:"keyword.control.mermaid"},3:{name:"string"}},comment:"(state) (:)? (transition text)?",match:"\\s+([\\w-]+)\\s*(:)?\\s*([^\\n:]+)?"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"string"}},comment:"[*] (:)? (transition text)?",match:"(\\[\\*\\])\\s*(:)?\\s*([^\\n:]+)?"}]},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"keyword.control.mermaid"},3:{name:"variable"},4:{name:"keyword.control.mermaid"},5:{name:"string"}},comment:"[*] --> (state) (:)? (transition text)?",match:"(\\[\\*\\])\\s+(-->)\\s+([\\w-]+)\\s*(:)?\\s*([^\\n:]+)?"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"},3:{name:"keyword.control.mermaid"},4:{name:"string"}},comment:"note left|right of (state name)",match:"(note (?:left|right) of)\\s+([\\w-]+)\\s+(:)\\s*([^\\n:]+)"},{begin:"(note (?:left|right) of)\\s+([\\w-]+)(.|\\n)",beginCaptures:{1:{name:"keyword.control.mermaid"},2:{name:"variable"}},comment:"note left|right of (state name) (note text) end note",contentName:"string",end:"(end note)",endCaptures:{1:{name:"keyword.control.mermaid"}}}]},{begin:"^\\s*(journey)",beginCaptures:{1:{name:"keyword.control.mermaid"}},comment:"User Journey",end:"(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",patterns:[{match:"\\%%.*",name:"comment"},{captures:{1:{name:"keyword.control.mermaid"},2:{name:"string"}},match:"(title|section)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"},{begin:"\\s*([\"\\(\\)$&%\\^/.,?!*+=<>\\'\\\\\\-\\w\\s]*)\\s*(:)\\s*(\\d+)\\s*(:)",beginCaptures:{1:{name:"string"},2:{name:"keyword.control.mermaid"},3:{name:"constant.numeric.decimal.mermaid"},4:{name:"keyword.control.mermaid"}},end:"$",patterns:[{captures:{1:{name:"variable"}},comment:"(taskName)",match:"\\s*,?\\s*([^,#\\n]+)"}]}]}]},"mermaid-ado-code-block":{begin:"\\s*:::\\s*mermaid\\s*$",end:"\\s*:::\\s*",patterns:[{include:"#mermaid"}]},"mermaid-code-block":{begin:"(?<=[`~])mermaid(\\s+[^`~]*)?$",end:"(^|\\G)(?=\\s*[`~]{3,}\\s*$)",patterns:[{include:"#mermaid"}]},"mermaid-code-block-with-attributes":{begin:"(?<=[`~])\\{\\s*\\.?mermaid(\\s+[^`~]*)?$",end:"(^|\\G)(?=\\s*[`~]{3,}\\s*$)",patterns:[{include:"#mermaid"}]}},scopeName:"markdown.mermaid.codeblock"})]}}]);