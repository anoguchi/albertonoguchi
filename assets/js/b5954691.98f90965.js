"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7398],{2161:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(4848),s=n(8453);const r={id:"textos",title:"Textos",tags:["textos","caracteres","encoding","strings","tipos prim\xe1rios","tipos de dados","python"],sidebar_position:3},t="Textos",c={id:"python-base/base/tipos/tipo-primario/textos",title:"Textos",description:"Caracteres",source:"@site/docs/python-base/base/tipos/tipo-primario/textos-char-encoding-strings.md",sourceDirName:"python-base/base/tipos/tipo-primario",slug:"/python-base/base/tipos/tipo-primario/textos",permalink:"/albertonoguchi/docs/python-base/base/tipos/tipo-primario/textos",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-base/base/tipos/tipo-primario/textos-char-encoding-strings.md",tags:[{label:"textos",permalink:"/albertonoguchi/docs/tags/textos"},{label:"caracteres",permalink:"/albertonoguchi/docs/tags/caracteres"},{label:"encoding",permalink:"/albertonoguchi/docs/tags/encoding"},{label:"strings",permalink:"/albertonoguchi/docs/tags/strings"},{label:"tipos prim\xe1rios",permalink:"/albertonoguchi/docs/tags/tipos-primarios"},{label:"tipos de dados",permalink:"/albertonoguchi/docs/tags/tipos-de-dados"},{label:"python",permalink:"/albertonoguchi/docs/tags/python"}],version:"current",sidebarPosition:3,frontMatter:{id:"textos",title:"Textos",tags:["textos","caracteres","encoding","strings","tipos prim\xe1rios","tipos de dados","python"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tipos Float, Bool e NoteType",permalink:"/albertonoguchi/docs/python-base/base/tipos/tipo-primario/tipo-float-bool-notetype"},next:{title:"Java",permalink:"/albertonoguchi/docs/category/java"}},i={},d=[{value:"Caracteres",id:"caracteres",level:3},{value:"Strings, ou cadeia de caracteres",id:"strings-ou-cadeia-de-caracteres",level:3}];function l(e){const o={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h1,{id:"textos",children:"Textos"}),"\n",(0,a.jsx)(o.h3,{id:"caracteres",children:"Caracteres"}),"\n",(0,a.jsx)(o.p,{children:"Agora sim, vamos falar do \xfaltimo dos 4 tipos prim\xe1rios que abordaremos que\n\xe9 o tipo usado para armazenar texto."}),"\n",(0,a.jsx)(o.p,{children:"Tudo o que voc\xea aprendeu at\xe9 agora sobre protocolos e m\xe9todos especiais tamb\xe9m\nse aplica aos textos, mas os textos tem uma pequena particularidade, eles s\xe3o\nformados por caracteres."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:">>> chr(65)\nA\n>>> chr(66)\nB\n>>> chr(67)\nC\n"})}),"\n",(0,a.jsxs)(o.p,{children:["Portanto, o texto ",(0,a.jsx)(o.code,{children:'"ABC"'})," internamente cont\xe9m um conjunto de 3 caracteres nas\nsuas respectivas posi\xe7\xf5es na tabela de caracteres."]}),"\n",(0,a.jsxs)(o.p,{children:["Existem v\xe1rias tabelas de caracteres usadas na computa\xe7\xe3o, as mais importantes\ns\xe3o a ",(0,a.jsx)(o.code,{children:"ascii"})," e ",(0,a.jsx)(o.code,{children:"utf8"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["A tabela ",(0,a.jsx)(o.code,{children:"ASCII"})," possui 128 posi\xe7\xf5es, ou seja, vai do 0 ao 127 e em cada\nposi\xe7\xe3o armazena apenas um caracter. Ela tem os carecteres b\xe1sicos da lingua\ninglesa e como pode perceber ela n\xe3o considera acentua\xe7\xe3o ou carecteres\nespeciais de outros idiomas como Russo ou Mandarim."]}),"\n",(0,a.jsxs)(o.p,{children:["Quando a computa\xe7\xe3o globalizou foi preciso mudar de tabela e adotar uma maior\nque pudesse comportar uma quantidade universal de caracteres e tamb\xe9m os\n",(0,a.jsx)(o.code,{children:"emojis"})," que se tornaram parte da comunica\xe7\xe3o moderna."]}),"\n",(0,a.jsxs)(o.p,{children:["A tabela ",(0,a.jsx)(o.code,{children:"unicode"})," de ",(0,a.jsx)(o.code,{children:"8 bits"})," - utf8 atualmente tem 120 mil caracteres."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"https://unicode-table.com/en/",children:"Unicode Table"})}),"\n",(0,a.jsxs)(o.p,{children:["Nesta tabela al\xe9m da tabela ASCII padr\xe3o, apartir da posi\xe7\xe3o ",(0,a.jsx)(o.code,{children:"128"})," temos\nacentua\xe7\xe3o e subtabelas para s\xedmbolos e emojis."]}),"\n",(0,a.jsxs)(o.p,{children:["Na tabela ",(0,a.jsx)(o.code,{children:"ASCII"})," cada caracter ocupava menos de 1 byte (7 bits) e por isso que\n",(0,a.jsx)(o.code,{children:"A"})," \xe9 ",(0,a.jsx)(o.code,{children:"65"})," que na tabela \xe9 ",(0,a.jsx)(o.code,{children:"1000001"})," (7 digitos)."]}),"\n",(0,a.jsxs)(o.p,{children:["J\xe1 na tabela unicode cada caractere pode ser formado por mais de um byte, por\nexemplo, uma letra com acento \xc3 ocupa 2 bytes ",(0,a.jsx)(o.code,{children:"11000011 10000011"})," na tabela."]}),"\n",(0,a.jsxs)(o.p,{children:["E alguns emojis como o \ud83c\udf49 ocupam 4 bytes ",(0,a.jsx)(o.code,{children:"11110000 10011111 10001101 10001001"})]}),"\n",(0,a.jsxs)(o.p,{children:["Durante a programa\xe7\xe3o com Python n\xf3s iremos considerar que os nossos textos\nutilizam os caracteres dispon\xedveis na tabela ",(0,a.jsx)(o.code,{children:"utf8"})," e em alguns raros casos no\nPython3 teremos que explicitamente fazer opera\xe7\xf5es de ",(0,a.jsx)(o.code,{children:"encode"})," e ",(0,a.jsx)(o.code,{children:"decode"}),"\na partir de um texto ",(0,a.jsx)(o.code,{children:"ascii"})," para ",(0,a.jsx)(o.code,{children:"utf-8"}),"."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'# vari\xe1vel\n\nfruit = "\ud83c\udf49"\n\n# para transmitir este texto ou gravar em um arquvivo\n# ou banco de dados pode ser necess\xe1rio encodificar ele.\n>>> fruit.encode("utf-8")\nb\'\\xf0\\x9f\\x8d\\x89\'\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Esse valor ",(0,a.jsx)(o.code,{children:"b'\\xf0\\x9f\\x8d\\x89'"})," \xe9 um objeto do tipo ",(0,a.jsx)(o.code,{children:"bytes"})," e repare que ele\ntem 4 elementos separados por ",(0,a.jsx)(o.code,{children:"\\"})," cada um deles \xe9 um dos bytes que formam a \ud83c\udf49."]}),"\n",(0,a.jsxs)(o.p,{children:["A opera\xe7\xe3o contr\xe1ria, por exemplo, quando lermos de um arquivo ou banco de\ndados que n\xe3o suporta ",(0,a.jsx)(o.code,{children:"utf8"})," ser\xe1 com o ",(0,a.jsx)(o.code,{children:"decode"}),"."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:"melancia_em_bytes = b'\\xf0\\x9f\\x8d\\x89'\n>>> melancia_em_bytes.decode(\"utf-8\")\n'\ud83c\udf49'\n"})}),"\n",(0,a.jsxs)(o.p,{children:["O objeto ali iniciado por ",(0,a.jsx)(o.code,{children:"b''"})," \xe9 uma sequ\xeancia de bytes em formato\nhexadecimal. A t\xedtulo de curiosidade"]}),"\n",(0,a.jsx)(o.p,{children:"f0 = 11110000\n9f = 10011111\n8d = 10001101\n89 = 10001001"}),"\n",(0,a.jsx)(o.p,{children:"Que s\xe3o os 4 bytes que formam o carecte \ud83c\udf49 e voc\xea pode verificar isso no Python\ncom cada um dos valores da lista:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:">>> hex(0b11110000)\n'0xf0'\n"})}),"\n",(0,a.jsxs)(o.p,{children:["Em Python n\xfameros come\xe7ados com ",(0,a.jsx)(o.code,{children:"0b"})," s\xe3o bin\xe1rios e ",(0,a.jsx)(o.code,{children:"0x"})," s\xe3o hexadecimais."]}),"\n",(0,a.jsx)(o.h3,{id:"strings-ou-cadeia-de-caracteres",children:"Strings, ou cadeia de caracteres"}),"\n",(0,a.jsxs)(o.p,{children:["At\xe9 aqui falamos de caracteres isolados como ",(0,a.jsx)(o.code,{children:"A"}),", ",(0,a.jsx)(o.code,{children:"B"}),", ",(0,a.jsx)(o.code,{children:"\ud83c\udf49"}),", mas ao programar\ntamb\xe9m precisaremos juntar esses caracteres para formar palavras e frases,\nquando criamos uma vari\xe1vel do tipo texto em Python ele atrav\xe9s da presen\xe7a de\naspas sejam elas simples ",(0,a.jsx)(o.code,{children:"'"})," ou duplas ",(0,a.jsx)(o.code,{children:'"'})," armazena esse valor numa classe do\ntipo ",(0,a.jsx)(o.code,{children:"str"})," e este tipo de dado pode armazenar um ou mais caracteres."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'>>> nome = "Bruno"  \ntype(nome)\n'})}),"\n",(0,a.jsxs)(o.p,{children:["E como voc\xea j\xe1 deve ter imaginado aqui armazenamos cada uma das letras\n",(0,a.jsx)(o.code,{children:"B"}),", ",(0,a.jsx)(o.code,{children:"r"}),", ",(0,a.jsx)(o.code,{children:"u"}),", ",(0,a.jsx)(o.code,{children:"n"}),", ",(0,a.jsx)(o.code,{children:"o"})," com seus respectivos bytes e sequ\xeancia posicional\nnum \xfanico\nobjeto. (a palavra \u201cstring\u201d significa corda, cadeia ou corrente),"]}),"\n",(0,a.jsxs)(o.p,{children:["A palavra ",(0,a.jsx)(o.code,{children:'"Bruno"'})," \xe9 uma lista contendo em cada posi\xe7\xe3o um caractere da tabela\n",(0,a.jsx)(o.code,{children:"utf8"}),"."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:">>> list(bytes(nome, \"utf-8\"))  \n[66, 114, 117, 110, 111]\n\n>>> chr(66)  \n'B'\n\n>>> chr(114)  \n'r'\n\n>>> chr(117)  \n'u'\n\n>>> chr(110)  \n'n'\n\n>>> chr(111)  \n'o'\n"})}),"\n",(0,a.jsx)(o.p,{children:'Bem, para guardar o nome "Bruno" voc\xea mais uma vez n\xe3o precisa se preocupar com\nesses detalhes todos, basta fazer nome = "Bruno" e usar este texto para efetuar\nas opera\xe7\xf5es que voc\xea desejar, por\xe9m, \xe9 muito \xfatil saber como o objeto est\xe1\nimplementado.'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'current_language = os.getenv("LANG", "en_US")[:5]\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Sabendo que ",(0,a.jsx)(o.code,{children:"current_language"})," poderia ter o valor ",(0,a.jsx)(o.code,{children:"en_US.utf8"})," n\xf3s usamos o\nprotocolo ",(0,a.jsx)(o.code,{children:"Sliceable"})," do objeto ",(0,a.jsx)(o.code,{children:"str"})," para fatiar o texto e pegar somente os\nprimeiros 5 caracteres."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:">>> \"en_US.utf8\"[:5]  \n'en_US'\n\n>>> \"Bruno\"[2]  \n'u'\n\n>>> \"Python\"[0]  \n'P'\n"})}),"\n",(0,a.jsxs)(o.p,{children:["O tipo ",(0,a.jsx)(o.code,{children:"str"})," possui a maioria das caracter\xedsticas que j\xe1 abordamos nos outros\ntipos de dados e uma abund\xe2ncia de protocolos implementados, vamos ver\nalguns."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'# Sliceable (pode ser fatiado)\n>>> "Bruno"[1]\n\'r\'\n\n# que internamente invoca o m\xe9todo `__getitem__`\n>>> "Bruno".__getitem__(1)\n\'r\'\n\n# Addible (pode ser adicionado a outro texto)\n# Essa opera\xe7\xe3o se chama "Concatena\xe7\xe3o"\n>>> nome = "Bruno" \n>>> sobrenome = "Rocha"\n>>> nome + " " + sobrenome\n\'Bruno Rocha\'\n\n# que internamente invoca o m\xe9todo `__add__`\n>>> nome.__add__(" ".__add__(sobrenome))\n\'Bruno Rocha\'\n\n# Multipliable (que pode ser multiplicado)\n>>> "Bruno" * 5\n\'BrunoBrunoBrunoBrunoBruno\'\n\n# Iterable (que pode ser iterado/percorrido)\n>>> for letra in "Bruno":\n...     print("--\x3e" + letra.upper())\n--\x3eB\n--\x3eR\n--\x3eU\n--\x3eN\n--\x3eO\n\n# Internamente o statement `for` invoca o m\xe9todo `__iter__`\n>>> iterador = "Bruno".__iter__()\n>>> next(iterador)\n\'B\'\n>>> next(iterador)\n\'r\'\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Al\xe9m disso, o tipo ",(0,a.jsx)(o.code,{children:"str"})," tamb\xe9m oferece muitos m\xe9todos p\xfablicos, que n\xf3s\npodemos usar explicitamente e que s\xe3o muito \xfateis."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'>>> "Bruno".upper()\n\'BRUNO\'\n\n>>> "BRUNO".lower()\n\'bruno\'\n\n>>> "bruno rocha".capitalize()\n\'Bruno rocha\'\n\n>>> "bruno rocha".title()\n\'Bruno Rocha\'\n\n>>> "bruno rocha".split(" ")\n[\'bruno\', \'rocha\']\n\n>>> "bruno".startswith("b")\nTrue\n\n>>> "bruno".endswith("b")\nFalse\n\n>>> "bruno rocha".count("o")\n2\n\n>>> "bruno rocha".index("c")\n8\n>>> "bruno rocha"[8]\n\'c\'\n'})}),"\n",(0,a.jsx)(o.p,{children:"E tamb\xe9m algumas coisas que podemos fazer com qualquer objeto sequencial do\nPython:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:">>> len(\"Bruno Rocha\")\n11\n\n>>> sorted(\"Bruno Rocha\")\n[' ', 'B', 'R', 'a', 'c', 'h', 'n', 'o', 'o', 'r', 'u']\n\n>>> list(reversed(\"Bruno Rocha\"))\n['a', 'h', 'c', 'o', 'R', ' ', 'o', 'n', 'u', 'r', 'B']\n"})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>c});var a=n(6540);const s={},r=a.createContext(s);function t(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);