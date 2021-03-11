(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return t?o.a.createElement(m,s(s({ref:n},l),{},{components:t})):o.a.createElement(m,s({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},169:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/mac_double_space-f3df24d8ae40b834f3206222d1b171e6.png"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),i=(t(0),t(101)),a={id:"troubleshooting",title:"Troubleshooting"},s={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:'Error "\u2423 is undefined" when pressing SPC SPC',source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/troubleshooting.md",version:"current",sidebar:"docs",previous:{title:"Bonus",permalink:"/docs/bonus"},next:{title:"Suggested plugins",permalink:"/docs/suggested-plugins"}},c=[{value:"Error &quot;\u2423 is undefined&quot; when pressing SPC SPC",id:"error-\u2423-is-undefined-when-pressing-spc-spc",children:[]},{value:"Unresponsive menu activation",id:"unresponsive-menu-activation",children:[{value:"Conflicting vim binding",id:"conflicting-vim-binding",children:[]},{value:"Virtual Machine or slow hardware",id:"virtual-machine-or-slow-hardware",children:[]},{value:"Other conflicts",id:"other-conflicts",children:[]}]},{value:"Known Issues",id:"known-issues",children:[]}],l={toc:c};function d(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"error-\u2423-is-undefined-when-pressing-spc-spc"},'Error "\u2423 is undefined" when pressing SPC SPC'),Object(i.a)("p",null,"When pressing ",Object(i.a)("inlineCode",{parentName:"p"},"SPC SPC")," quickly on macOS, which-key doesn't recognize the second ",Object(i.a)("inlineCode",{parentName:"p"},"SPC"),' sometimes,\nand the error "\u2423 is undefined" is displayed on the status bar.'),Object(i.a)("p",null,"This problem is due to a keyboard settings on macOS that add a period with double-space."),Object(i.a)("p",null,Object(i.a)("img",{alt:"Mac keyboard preferences",src:t(169).default})),Object(i.a)("p",null,"If you don't use this feature, disabling it should fix this issue. Otherwise, add the following overrides to your ",Object(i.a)("inlineCode",{parentName:"p"},"settings.json")," as a workaround:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"vspacecode.bindingOverrides": [\n    {\n        "keys": ["."],\n        "name": "Commands...",\n        "type": "command",\n        "command": "workbench.action.showCommands"\n    }\n],\n')),Object(i.a)("h2",{id:"unresponsive-menu-activation"},"Unresponsive menu activation"),Object(i.a)("p",null,"If you press ",Object(i.a)("inlineCode",{parentName:"p"},"<spc>")," on a buffer and the which-key menu doesn't appear immediately, you might have one of the following problems."),Object(i.a)("h3",{id:"conflicting-vim-binding"},"Conflicting vim binding"),Object(i.a)("p",null,"If in your ",Object(i.a)("inlineCode",{parentName:"p"},"settings.json")," file you have a vim binding that starts with ",Object(i.a)("inlineCode",{parentName:"p"},"<spc>"),", vim will wait for the second input when ",Object(i.a)("inlineCode",{parentName:"p"},"<spc>")," is pressed."),Object(i.a)("p",null,"Example:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"vim.normalModeKeyBindingsNonRecursive": [\n  {\n    "before": [" ", "d"],\n    "after": ["d", "d"]\n  },\n  {\n    "before": ["<space>"],\n    "commands": ["vspacecode.space"]\n  }\n]\n')),Object(i.a)("p",null,"In order to solve it, remove the conflicting vim bindings from your ",Object(i.a)("inlineCode",{parentName:"p"},"settings.json")," completely,\nor use the VSpaceCode's ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"./menu-customization#addreplace"}),"overrides")," instead."),Object(i.a)("h3",{id:"virtual-machine-or-slow-hardware"},"Virtual Machine or slow hardware"),Object(i.a)("p",null,"If you are working on limiting resources consider using ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/remote/remote-overview"}),"VSCode remote")),Object(i.a)("h3",{id:"other-conflicts"},"Other conflicts"),Object(i.a)("p",null,"Try to remove all the extensions except the ones installed by VSpaceCode, and clean your ",Object(i.a)("inlineCode",{parentName:"p"},"settings.json"),"\nand ",Object(i.a)("inlineCode",{parentName:"p"},"keybindings.json")," files in order to spot some weird conflicts."),Object(i.a)("h2",{id:"known-issues"},"Known Issues"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"File browser (bound to ",Object(i.a)("inlineCode",{parentName:"li"},"<spc> f f"),") doesn't have a button to open local file with VSCode Remote")))}d.isMDXComponent=!0}}]);