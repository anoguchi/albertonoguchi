"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8459],{9890:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var s=a(4848),n=a(8453);const t={id:"tuplas",title:"Tuplas",tags:["tipos compostos","tipos de dados","tuplas","python"],sidebar_position:1},r="Tuplas",i={id:"python-base/base/tipos/tipo-composto/tuplas",title:"Tuplas",description:"As tuplas s\xe3o o tipo composto mais simples de todos e bastante comum de serem",source:"@site/docs/python-base/base/tipos/tipo-composto/tuplas.md",sourceDirName:"python-base/base/tipos/tipo-composto",slug:"/python-base/base/tipos/tipo-composto/tuplas",permalink:"/albertonoguchi/docs/python-base/base/tipos/tipo-composto/tuplas",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-base/base/tipos/tipo-composto/tuplas.md",tags:[{label:"tipos compostos",permalink:"/albertonoguchi/docs/tags/tipos-compostos"},{label:"tipos de dados",permalink:"/albertonoguchi/docs/tags/tipos-de-dados"},{label:"tuplas",permalink:"/albertonoguchi/docs/tags/tuplas"},{label:"python",permalink:"/albertonoguchi/docs/tags/python"}],version:"current",sidebarPosition:1,frontMatter:{id:"tuplas",title:"Tuplas",tags:["tipos compostos","tipos de dados","tuplas","python"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Compostos",permalink:"/albertonoguchi/docs/category/compostos"},next:{title:"Lista",permalink:"/albertonoguchi/docs/python-base/base/tipos/tipo-composto/lista"}},c={},d=[{value:"Desempacotamento",id:"desempacotamento",level:3},{value:"Imutabilidade",id:"imutabilidade",level:3},{value:"Algumas coisas que podemos fazer com as tuplas:",id:"algumas-coisas-que-podemos-fazer-com-as-tuplas",level:3}];function p(e){const o={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"tuplas",children:"Tuplas"}),"\n",(0,s.jsx)(o.p,{children:'As tuplas s\xe3o o tipo composto mais simples de todos e bastante comum de serem\nusadas em Python, da mesma forma que anteriormente vimos que a string "ABC" \xe9\numa sequ\xeancia de carecteres, com as tuplas conseguimos fazer uma sequ\xeancia de\nvalores que podem ser de qualquer tipo.'}),"\n",(0,s.jsx)(o.p,{children:"Exemplo de um sistema que armazena coordenadas sem o uso de tuplas:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"coord_x = 140\ncoord_y = 200\ncoord_z = 9\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Coordenadas desta forma s\xe3o muito \xfateis em softwares de desenho gr\xe1fico ou\nmapas, temos a reta ",(0,s.jsx)(o.code,{children:"x"})," e a reta ",(0,s.jsx)(o.code,{children:"y"})," de um plano cartesiano, e ainda\nadicionamos a coordenada ",(0,s.jsx)(o.code,{children:"z"})," que \xe9 a profundidade, usada em sistemas 3d."]}),"\n",(0,s.jsx)(o.p,{children:"Cada uma das coordenadas se refere a um ponto nessa reta e para definir um\n\xfanico ponto n\xf3s usamos 3 vari\xe1veis e isso fica muito dif\xedcil de manter caso\no nosso sistema tenha muitas dessas coordenadas, e a\xed que entram as tuplas."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"coord = 140, 200, 9\n\n# ou\n\ncoord = (140, 200, 9)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Em Python, sempre que um ou mais objetos forem encadeados com ",(0,s.jsx)(o.code,{children:","})," isso ser\xe1\ninterpretado como um objeto do tipo ",(0,s.jsx)(o.code,{children:"tupla"})," e a tupla pode opcionalmente ter\npar\xeanteses."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'"Ol\xe1 %s voc\xea \xe9 o %03d da fila" % (nome, senha)\n'})}),"\n",(0,s.jsx)(o.p,{children:"No exemplo acima de interpola\xe7\xe3o, os par\xeanteses s\xe3o obrigat\xf3rios, mas no caso\ndas nossas coordenadas, o jeito mais comum de declarar \xe9 mesmo usando a sintaxe\nsem os par\xeanteses e usar os par\xeanteses apenas quando for necess\xe1rio para\ndesambiguar."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"coord = 140, 200, 9\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Portanto, com este tipo de objeto n\xe3o temos mais as vari\xe1veis ",(0,s.jsx)(o.code,{children:"x"}),", ",(0,s.jsx)(o.code,{children:"y"})," e ",(0,s.jsx)(o.code,{children:"z"}),",\nagora temos uma \xfanica ",(0,s.jsx)(o.code,{children:"coord"})," e para acessar os objetos que est\xe3o dentro da\ntupla usamos o protocolo de subscri\xe7\xe3o, os objetos que possuem um m\xe9todo\nchamado ",(0,s.jsx)(o.code,{children:"__getitem__"})," permitem que a gente acesse os seus elementos usando\nfatiamento ",(0,s.jsx)(o.code,{children:"[ ]"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Ent\xe3o, digamos que precisamos no nosso jogo posicionar um objeto na tela\nnaquela exata coordenada como fazemos?"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"coord = 140, 200, 9\n\nmover_x_para_coordenada(coord[0])\nmover_y_para_coordenada(coord[1])\nmover_z_para_coordenada(coord[2])\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Repare que podemos acessar ",(0,s.jsx)(o.code,{children:"coord[0]"})," e assim por diante usando ",(0,s.jsx)(o.code,{children:"[numero]"})," e\neste n\xfamero se refere a posi\xe7\xe3o do valor que queremos dentro da tupla."]}),"\n",(0,s.jsx)(o.p,{children:"Nestes casos, assumimos que seu software na hora de criar a vari\xe1vel coord se\nencarrega de colocar cada coisa em seu devido lugar :)"}),"\n",(0,s.jsx)(o.p,{children:"Existe uma infinidade de usos pr\xe1ticos para as tuplas, faremos os principais\nusos como em retorno de fun\xe7\xf5es e leitura de banco de dados."}),"\n",(0,s.jsx)(o.h3,{id:"desempacotamento",children:"Desempacotamento"}),"\n",(0,s.jsx)(o.p,{children:"A caracter\xedstica mais interessante das tuplas se chama unpacking ou\ndesempacotamento em portugu\xeas (algumas linguagens chamam isso de spread,\nespalhamento, explode)."}),"\n",(0,s.jsx)(o.p,{children:"O desempacotamento permite fazer a opera\xe7\xe3o contr\xe1ria da atribui\xe7\xe3o."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"# Empacotamento (atribui\xe7\xe3o)\ncoord = 140, 200, 9\n\n# Desempacotamento (atribui\xe7\xe3o multipla)\nx, y, z = coord\n"})}),"\n",(0,s.jsxs)(o.p,{children:["No desempacotamento, o Python automaticamente vai pegar cada um dos elementos\nda tupla e usar para definir as vari\xe1veis que separarmos por ",(0,s.jsx)(o.code,{children:","}),"."]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Ali\xe1s, est\xe1 a\xed uma dica que ainda n\xe3o falamos, \xe9 poss\xedvel atribuir mais de\numa vari\xe1vel simultaneamente, em Python ",(0,s.jsx)(o.code,{children:"a = b = c = d = None"})," faz com que\ntodas sejam refer\xeancias para ",(0,s.jsx)(o.code,{children:"None"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"imutabilidade",children:"Imutabilidade"}),"\n",(0,s.jsx)(o.p,{children:"Outra caracter\xedstica importante e que talvez seja decisiva na hora de escolher\nusar tuplas \xe9 que elas s\xe3o imut\xe1veis, uma vez criada a tupla, n\xe3o \xe9\nposs\xedvel alterar, n\xe3o d\xe1 para mudar os valores ou adicionar novos. (este t\xf3pico\ncont\xe9m algumas exce\xe7\xf5es como escopos)."}),"\n",(0,s.jsx)(o.h3,{id:"algumas-coisas-que-podemos-fazer-com-as-tuplas",children:"Algumas coisas que podemos fazer com as tuplas:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"# Atribuir sem parenteses\ncoord = 140, 200, 9\n\n# Atribuir com parenteses\ncoord = (140, 200, 9)\n\n# Desempacotar\nx, y, z = coord\n\n# Ignorar elementos (ser\xe1 atribu\xeddo apenas o x)\nx, *_ = coord\n\n# Pegar apenas o primeiro e o \xfaltimo elemento\nx, *_, y = coord\n\n# Verificar o tamanho\nlen(coord)\n3\n\n# Acessar via subscri\xe7\xe3o pelo \xedndice\ncoord[0]\n140\n\n# Fatiar\ncoord[1:]\n(200, 9)\n"})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>r,x:()=>i});var s=a(6540);const n={},t=s.createContext(n);function r(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);