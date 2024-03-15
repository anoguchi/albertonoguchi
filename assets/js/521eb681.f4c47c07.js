"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7681],{3475:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=o(4848),t=o(8453);const a={id:"gravando-logs",title:"Logs",tags:["logs","python"],sidebar_position:11},r=void 0,l={id:"python-base/base/gravando-logs",title:"Logs",description:"Gravando logs",source:"@site/docs/python-base/base/gravando-logs.md",sourceDirName:"python-base/base",slug:"/python-base/base/gravando-logs",permalink:"/albertonoguchi/docs/python-base/base/gravando-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-base/base/gravando-logs.md",tags:[{label:"logs",permalink:"/albertonoguchi/docs/tags/logs"},{label:"python",permalink:"/albertonoguchi/docs/tags/python"}],version:"current",sidebarPosition:11,frontMatter:{id:"gravando-logs",title:"Logs",tags:["logs","python"],sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Exception",permalink:"/albertonoguchi/docs/python-base/base/exception"},next:{title:"Condicionais inline",permalink:"/albertonoguchi/docs/python-base/base/condicionais-inline"}},i={},c=[];function g(e){const n={code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Gravando logs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'#!/usr/bin/env python3\n\nimport os\nimport logging\nfrom logging import handlers\n\n# BOILERPLATE\nlog_level = os.getenv("LOG_LEVEL", "WARNING").upper()\nlog = logging.Logger("bruno", log_level)\n#ch = logging.StreamHandler()  # Console/terminal/stderr\n#ch.setLevel(log_level)\nfh = handlers.RotatingFileHandler(\n   "meulog.log", \n   maxBytes=300, # 10**6\n   backupCount=10,\n)\nfh.setLevel(log_level)\nfmt = logging.Formatter(\n    \'%(asctime)s  %(name)s  %(levelname)s \'\n    \'l:%(lineno)d f:%(filename)s: %(message)s\'\n)\n# ch.setFormatter(fmt)\nfh.setFormatter(fmt)\n#log.addHandler(ch)\nlog.addHandler(fh)\n\n\n"""\nlog.debug("Mensagem pro dev, qe, sysadmin")\nlog.info("Mensagem geral para usuarios")\nlog.warning("Aviso que nao causa erro")\nlog.error("Erro que afeta uma unica execucao")\nlog.critical("Erro geral ex: banco de dados sumiu")\n"""\n\ntry:\n    1 / 0\nexcept ZeroDivisionError as e:\n    log.error("Deu erro %s", str(e))\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var s=o(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);