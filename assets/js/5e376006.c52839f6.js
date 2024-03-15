"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8011],{1871:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var a=n(4848),s=n(8453);const i={id:"dicionario",title:"Dicion\xe1rios",tags:["tipos compostos","tipos de dados","dicionario","python"],sidebar_position:4},r="Dicion\xe1rios",c={id:"python-base/base/tipos/tipo-composto/dicionario",title:"Dicion\xe1rios",description:"Conhecidos tamb\xe9m como HashMaps ou Arrays Associativos os dicion\xe1rios",source:"@site/docs/python-base/base/tipos/tipo-composto/dicionarios.md",sourceDirName:"python-base/base/tipos/tipo-composto",slug:"/python-base/base/tipos/tipo-composto/dicionario",permalink:"/albertonoguchi/docs/python-base/base/tipos/tipo-composto/dicionario",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-base/base/tipos/tipo-composto/dicionarios.md",tags:[{label:"tipos compostos",permalink:"/albertonoguchi/docs/tags/tipos-compostos"},{label:"tipos de dados",permalink:"/albertonoguchi/docs/tags/tipos-de-dados"},{label:"dicionario",permalink:"/albertonoguchi/docs/tags/dicionario"},{label:"python",permalink:"/albertonoguchi/docs/tags/python"}],version:"current",sidebarPosition:4,frontMatter:{id:"dicionario",title:"Dicion\xe1rios",tags:["tipos compostos","tipos de dados","dicionario","python"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sets",permalink:"/albertonoguchi/docs/python-base/base/tipos/tipo-composto/sets"},next:{title:"Input e Output",permalink:"/albertonoguchi/docs/python-base/base/input-output"}},d={},t=[{value:"Sintaxe",id:"sintaxe",level:3},{value:"CRUD",id:"crud",level:3},{value:"Buscas",id:"buscas",level:3},{value:"M\xe9todos de Lookup",id:"m\xe9todos-de-lookup",level:3},{value:"Combinando 2 dicion\xe1rios",id:"combinando-2-dicion\xe1rios",level:3},{value:"Erros",id:"erros",level:3}];function l(e){const o={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h1,{id:"dicion\xe1rios",children:"Dicion\xe1rios"}),"\n",(0,a.jsxs)(o.p,{children:["Conhecidos tamb\xe9m como ",(0,a.jsx)(o.strong,{children:"HashMaps"})," ou ",(0,a.jsx)(o.strong,{children:"Arrays Associativos"})," os dicion\xe1rios\ns\xe3o um misto entre o ",(0,a.jsx)(o.code,{children:"set"})," e ",(0,a.jsx)(o.code,{children:"list"})," e com certeza a estrutura de dados mais\nimportante da linguagem."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Curiosidade"}),": Todos os tipos de dados do Python s\xe3o implementados usando\ndicion\xe1rios, os objetos possuem um m\xe9todo especial ",(0,a.jsx)(o.code,{children:"__dict__"}),", experimente no\nterminal imprimir ",(0,a.jsx)(o.code,{children:"int.__dict__"}),", at\xe9 mesmo a resolu\xe7\xe3o de nomes do Python \xe9\nfeita usando um dicion\xe1rio ",(0,a.jsx)(o.code,{children:"__builtins__.__dict__"})," quando digitamos ",(0,a.jsx)(o.code,{children:"print"})," o\nPython vai ali naquele dicion\xe1rio verificar se existe uma fun\xe7\xe3o\nchamada ",(0,a.jsx)(o.code,{children:"print"}),"\nl\xe1 dentro."]}),"\n",(0,a.jsx)(o.p,{children:"Vamos entender para que servem os dicion\xe1rios com este exemplo usando tipos\nprim\xe1rios."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'produto_nome = "Caneta"\nproduto_cor1 = "azul"\nproduto_cor2 = "branco"\nproduto_preco = 3.23\nproduto_dimensao_altura = 12.1\nproduto_dimensao_largura = 0.8\nproduto_em_estoque = True\nproduto_codigo = 45678\nproduto_codebar = None\n'})}),"\n",(0,a.jsx)(o.p,{children:"Acima representamos um \xfanico produto num programa de vendas, \xe9 uma\n\xfanica caneta, por\xe9m precisamos de 9 objetos de diferentes tipos."}),"\n",(0,a.jsxs)(o.p,{children:["E para resolver este problema que temos os tipos compostos, eles s\xe3o\n",(0,a.jsx)(o.code,{children:"containeres"}),", objetos que podem agrupar mais de um tipo e mais de uma unidade\nde informa\xe7\xe3o dentro deles."]}),"\n",(0,a.jsxs)(o.p,{children:["Dicion\xe1rios s\xe3o criados com ",(0,a.jsx)(o.code,{children:"{ }"})," ou atrav\xe9s da classe ",(0,a.jsx)(o.code,{children:"dict()"}),", \xe9 bom ter\ncuidado para n\xe3o os confundir com sets j\xe1 que sets tamb\xe9m usam ",(0,a.jsx)(o.code,{children:"{ }"})," e a\ndiferen\xe7a principal \xe9 que no set cada posi\xe7\xe3o armazena apenas um valor e nos\ndicion\xe1rios podemos colocar 2 valores em cada posi\xe7\xe3o."]}),"\n",(0,a.jsxs)(o.p,{children:["Um desses valores \xe9 chamado de chave ",(0,a.jsx)(o.code,{children:"key"})," e o outro valor ",(0,a.jsx)(o.code,{children:"val"})," e s\xe3o\nseparados\npor ",(0,a.jsx)(o.code,{children:":"}),", veja com um dicion\xe1rio a mesma informa\xe7\xe3o pode ser representada com:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'produto = {\n    "nome": "Caneta",\n    "cor1": "azul",\n    "cor2": "branco",\n    "preco": 3.23,\n    "dimensao_altura": 12.1,\n    "dimensao_largura": 0.8,\n    "em_estoque": True,\n    "codigo": 45678,\n    "codebar": None,\n}\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Agora temos um \xfanico objeto ",(0,a.jsx)(o.code,{children:"produto"})," do tipo ",(0,a.jsx)(o.code,{children:"dict"})," e isso torna o nosso\nprograma muito melhor organizado, facilita opera\xe7\xf5es e deixa a complexidade\nmenor tamb\xe9m, pois os dicion\xe1rios assim como os sets tamb\xe9m implementam a Hash\nTable, ou seja, as opera\xe7\xf5es de acesso s\xe3o ",(0,a.jsx)(o.code,{children:"O(1)"})," super-r\xe1pidas."]}),"\n",(0,a.jsx)(o.p,{children:"Assim como as listas os dicion\xe1rios podem receber subscri\xe7\xf5es a partir de uma\nchave, ou seja, usamos [] e dentro passamos a key que queremos acessar."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'produto["nome"]\n\'Caneta\'\nproduto["codigo"]\n45678\n'})}),"\n",(0,a.jsx)(o.p,{children:"Al\xe9m disso, podemos diminuir a redund\xe2ncia colocando objetos compostos dentro\ndo dicion\xe1rio, ao inv\xe9s de 2 chaves para representar cor podemos criar uma\nlista de cores e ao inv\xe9s de 2 chaves para dimens\xf5es podemos ter um\nsubdicion\xe1rio."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'produto = {\n    "nome": "Caneta",\n    "cores": ["azul", "branco"],\n    "preco": 3.23,\n    "dimensao": {\n        "altura": 12.1,\n        "largura": 0.8,\n    },\n    "em_estoque": True,\n    "codigo": 45678,\n    "codebar": None,\n}\n'})}),"\n",(0,a.jsx)(o.p,{children:"As chaves de um dicion\xe1rio podem ser de qualquer tipo de dados que seja\ncompat\xedvel com hash table, exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'d = {\n    10: "Bruno",\n    True: 45,\n    False: None,\n    None: True,\n    (4,5,6): "uma tupla",\n}\n\n>>> d[(4, 5, 6)]\n\'uma tupla\'\n'})}),"\n",(0,a.jsx)(o.p,{children:"Mas n\xe3o podemos usar tipos unhashable."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:"d = {[1, 2, 3]: \"uma lista\"}\n...\nTypeError: unhashable type: 'list'\n"})}),"\n",(0,a.jsx)(o.p,{children:"J\xe1 os valores podem ser de qualquer tipo sem restri\xe7\xf5es!"}),"\n",(0,a.jsx)(o.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,a.jsx)(o.p,{children:"Podemos iniciar um dicion\xe1rio vazio e depois ir adicionando elementos dentro\ndele."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:"cliente = {}\n# ou\ncliente = dict()\n"})}),"\n",(0,a.jsx)(o.h3,{id:"crud",children:"CRUD"}),"\n",(0,a.jsx)(o.p,{children:"E usar as opera\xe7\xf5es de CRUD (Create, Read, Update, Delete)"}),"\n",(0,a.jsx)(o.p,{children:"Criar - Adicionar chave+valor"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'cliente["nome"] = "Bruno"\n'})}),"\n",(0,a.jsx)(o.p,{children:"Ler valor a partir de uma chave"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:"cliente[\"nome\"]  # Output: 'Bruno'\n"})}),"\n",(0,a.jsx)(o.p,{children:"Update - Alterar valor a partir de uma chave"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'cliente["nome"] = "Bruno Rocha"\n'})}),"\n",(0,a.jsx)(o.p,{children:"Delete - Remover um valor e sua chave."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'del cliente["nome"]\n'})}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"A keyword del remove uma vari\xe1vel que foi atribu\xedda e pode ser usada com\nchaves de dicion\xe1rios."}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"buscas",children:"Buscas"}),"\n",(0,a.jsx)(o.p,{children:"O dicion\xe1rio implementa Hash Table, ele tamb\xe9m \xe9 conhecido como hash map,\nportanto, as buscas em dicion\xe1rio quando feitas por chave tem acesso constante\nO(1)."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'"nome" in cliente\nTrue\n'})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"in"})," invoca o protocolo ",(0,a.jsx)(o.code,{children:"Lookupable"})," atrav\xe9s do m\xe9todo ",(0,a.jsx)(o.code,{children:"__contains__"}),"\ne efetua a busca imediata sem necessidade de iterar todo o dicion\xe1rio para\nencontrar uma chave, e assim como os sets as chaves n\xe3o podem se repetir."]}),"\n",(0,a.jsx)(o.h3,{id:"m\xe9todos-de-lookup",children:"M\xe9todos de Lookup"}),"\n",(0,a.jsx)(o.p,{children:"Obter uma lista de chaves"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'cliente = {"nome": "Bruno", "cidade": "Viana"}\n\ncliente.keys()\ndict_keys(["nome", "cidade"])\n'})}),"\n",(0,a.jsx)(o.p,{children:"Obter uma lista de valores"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'cliente.values()\ndict_keys(["Bruno", "Viana"])\n'})}),"\n",(0,a.jsx)(o.p,{children:"Obter uma lista de tuplas contendo chave e valor"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'cliente.items()\ndict_items([("nome", "Bruno"), ("cidade", "Viana")])\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Iterando com ",(0,a.jsx)(o.code,{children:"for"})]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'# apenas chaves\nfor key in cliente:\n    print(key)\n\nnome\ncidade\n\n# Buscando os valores com subscri\xe7\xe3o\n\nfor key in cliente:\n    print(key, "--\x3e", cliente[key])\n\nnome--\x3eBruno\ncidade--\x3eViana\n\n# Com desenpacotamento de tuplas\n\nfor key, value in cliente.items():\n    print(key, "--\x3e", value)\n\nnome--\x3eBruno\ncidade--\x3eViana\n'})}),"\n",(0,a.jsx)(o.h3,{id:"combinando-2-dicion\xe1rios",children:"Combinando 2 dicion\xe1rios"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'# informacao original\ncliente = {"nome": "Bruno", "cidade": "Viana"}\n\n# informacao adicional\nextra = {"pais": "Portugal"}\n\n# Informa\xe7\xe3o final\nfinal = {**cliente, **extra}\nprint(final)\n{"nome": "Bruno", "cidade": "Viana", "pais": "Portugal"}\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Ou fazendo ",(0,a.jsx)(o.code,{children:"update"})," in place."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'# informacao original\ncliente = {"nome": "Bruno", "cidade": "Viana"}\n\n# informacao adicional\nextra = {"pais": "Portugal"}\n\n# Cliente atualizado\ncliente.update(extra)\nprint(cliente)\n{"nome": "Bruno", "cidade": "Viana", "pais": "Portugal"}\n'})}),"\n",(0,a.jsx)(o.h3,{id:"erros",children:"Erros"}),"\n",(0,a.jsxs)(o.p,{children:["Caso uma chave n\xe3o exista no dicion\xe1rio o Python estoura um erro chamado\n",(0,a.jsx)(o.code,{children:"KeyError"})]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:"print(cliente[\"telefone\"])\n...\nKeyError 'telefone'\n"})}),"\n",(0,a.jsxs)(o.p,{children:["Para evitar o erro podemos usar o m\xe9todo ",(0,a.jsx)(o.code,{children:"get"})," que busca a chave e caso n\xe3o\nexista retorna um valor padr\xe3o que inicialmente \xe9 ",(0,a.jsx)(o.code,{children:"None"})]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'print(cliente.get("telefone"))\n\'None\'\n\nprint(cliente.get("telefone", "191"))\n\'191\'\n'})})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>c});var a=n(6540);const s={},i=a.createContext(s);function r(e){const o=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:o},e.children)}}}]);