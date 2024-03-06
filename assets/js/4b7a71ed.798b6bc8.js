"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9574],{4753:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>t});var n=a(4848),s=a(8453);const i={id:"blocos-de-codigo",title:"Blocos de c\xf3digo",tags:["identa\xe7\xe3o","blocos de c\xf3digo"],sidebar_position:5},d="Blocos de C\xf3digo",r={id:"python-base/base/blocos-de-codigo",title:"Blocos de c\xf3digo",description:"Para entender o funcionamento de blocos de c\xf3digo em Python, vamos analisar as",source:"@site/docs/python-base/base/blocos-de-codigo.md",sourceDirName:"python-base/base",slug:"/python-base/base/blocos-de-codigo",permalink:"/albertonoguchi/docs/python-base/base/blocos-de-codigo",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-base/base/blocos-de-codigo.md",tags:[{label:"identa\xe7\xe3o",permalink:"/albertonoguchi/docs/tags/identacao"},{label:"blocos de c\xf3digo",permalink:"/albertonoguchi/docs/tags/blocos-de-codigo"}],version:"current",sidebarPosition:5,frontMatter:{id:"blocos-de-codigo",title:"Blocos de c\xf3digo",tags:["identa\xe7\xe3o","blocos de c\xf3digo"],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tipos de instru\xe7\xf5es",permalink:"/albertonoguchi/docs/python-base/base/tipos-de-instrucoes"},next:{title:"Ambientes virtuais e pacotes",permalink:"/albertonoguchi/docs/python-base/base/ambiente-virtual-pacotes"}},c={},t=[{value:"Lista de compras",id:"lista-de-compras",level:2},{value:"Identa\xe7\xe3o",id:"identa\xe7\xe3o",level:2},{value:"Blocos",id:"blocos",level:2}];function l(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"blocos-de-c\xf3digo",children:"Blocos de C\xf3digo"}),"\n",(0,n.jsx)(o.p,{children:"Para entender o funcionamento de blocos de c\xf3digo em Python, vamos analisar as\nmotiva\xe7\xf5es do criador da linguagem."}),"\n",(0,n.jsx)(o.p,{children:"Antes de criar o Python, Guido Van Rossum trabalhou no desenvolvimento de outra\nlinguagem chamada ABC e o objetivo dessa linguagem era ser uma linguagem de\nf\xe1cil leitura por pessoas de outras \xe1reas acad\xeamicas."}),"\n",(0,n.jsx)(o.p,{children:"Ele partiu do princ\xedpio de que passamos muito mais horas lendo c\xf3digo do que\nescrevendo e concluiu que a maneira tradicional que as linguagens adotavam para\ndelimitar c\xf3digo n\xe3o seria t\xe3o natural para quem n\xe3o est\xe1 acostumado."}),"\n",(0,n.jsxs)(o.p,{children:["Uma grande parte das linguagens utiliza chaves "," para delimitar os blocos de\nc\xf3digo, ficando mais ou menos assim:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"statement (condicao) {\n    primeira linha do bloco;\n    segunda linha do bloco;\n    terceira linha (condicao) {\n        primeira linha do sub bloco;\n    }\n}\n"})}),"\n",(0,n.jsx)(o.p,{children:"E para o Guido, essa forma de organizar c\xf3digo n\xe3o seria muito f\xe1cil de\nentender e manter e principalmente n\xe3o seria t\xe3o agrad\xe1vel de ler em c\xf3digos\ngrandes."}),"\n",(0,n.jsx)(o.h2,{id:"lista-de-compras",children:"Lista de compras"}),"\n",(0,n.jsx)(o.p,{children:"Ao fazer compras no supermercado, geralmente criamos uma lista de compras:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"- Feij\xe3o\n- Sab\xe3o\n- Arroz\n- Batata\n- Laranja\n- Shampoo\n- Alface\n- Caf\xe9\n"})}),"\n",(0,n.jsx)(o.p,{children:"Para tornar essa lista mais f\xe1cil podemos organizar utilizando as se\xe7\xf5es do\nmercado como separado."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"Mercearia:\n    - Feij\xe3o\n    - Arroz\n    - Caf\xe9\nLimpeza:\n    - Sab\xe3o\n    - Shampoo\nFeira:\n    - Batata\n    - Laranja\n    - Alface\n"})}),"\n",(0,n.jsx)(o.p,{children:"A lista acima est\xe1 muito mais organizada do que a primeira vers\xe3o e permite que\nnossa experi\xeancia ao fazer compras seja mais produtiva, pois agora podemos\npercorrer os corredores um a um sem a necessidade de passar duas vezes no mesmo\ncorredor."}),"\n",(0,n.jsx)(o.h2,{id:"identa\xe7\xe3o",children:"Identa\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"Identa\xe7\xe3o \xe9 o termo usado para a formata\xe7\xe3o da lista de compras acima. Ap\xf3s\ncada categoria ou se\xe7\xe3o, colocamos um recuo antes de come\xe7ar o conte\xfado."}),"\n",(0,n.jsx)(o.p,{children:"E pensando neste exemplo natural, o Python foi projetado, de forma que n\xf3s\npassamos muito mais tempo lendo c\xf3digo do que escrevendo."}),"\n",(0,n.jsx)(o.h2,{id:"blocos",children:"Blocos"}),"\n",(0,n.jsxs)(o.p,{children:["Em Python, um bloco de c\xf3digo inicia sempre que existe a presen\xe7a de ",(0,n.jsx)(o.code,{children:":"})," no\nfinal de uma linha."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"if 1 > 2:  # in\xedcio de bloco\n"})}),"\n",(0,n.jsx)(o.p,{children:"A linha que vem logo ap\xf3s o in\xedcio do bloco deve obrigatoriamente ter um\nrecuo (ou dente), e por isso chamamos de identa\xe7\xe3o."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"if 1 > 2:\n    # aqui come\xe7a o c\xf3digo do bloco\n    # o bloco pode ter muitas linhas\n    # desde que mantenha o mesmo recuo\n    # o recuo padr\xe3o \xe9 de 4 espa\xe7os\n"})}),"\n",(0,n.jsx)(o.p,{children:"Dentro de um bloco de c\xf3digo podem existir muitos subblocos, n\xedveis internos de\nrecuo, mas a recomenda\xe7\xe3o \xe9 que no m\xe1ximo existam 4."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"if 1 > 2:\n    # aqui inicia o bloco\n    # recuo de 4 espa\xe7os\n\n    while x < 10:\n        # aqui inicia outro subbloco\n        # recuo de 8 espa\xe7os\n\n        if x == 3:\n            # ainda mais um bloco\n            # recuo de 12 espa\xe7os\n\n        # voltamos ao bloco anterior\n\n    # agora voltamos para o bloco inicial\n\n# e aqui continuamos o bloco principal (main)\n"})}),"\n",(0,n.jsx)(o.p,{children:"A maior parte dos editores de c\xf3digo possui ferramentas que ajudam a visualizar\nas linhas de identa\xe7\xe3o."})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>d,x:()=>r});var n=a(6540);const s={},i=n.createContext(s);function d(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);