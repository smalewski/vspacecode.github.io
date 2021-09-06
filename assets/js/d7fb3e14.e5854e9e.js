"use strict";(self.webpackChunkvspacecode_github_io=self.webpackChunkvspacecode_github_io||[]).push([[882],{3905:function(e,n,t){t.d(n,{kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),h=a,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return t?i.createElement(u,o(o({ref:n},c),{},{components:t})):i.createElement(u,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},257:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],l={id:"reference",title:"Reference"},s=void 0,d={unversionedId:"whichkey/reference",id:"whichkey/reference",isDocsHomePage:!1,title:"Reference",description:"Which-key extension aims to provide a keybinding popup similar to",source:"@site/docs/whichkey/reference.md",sourceDirName:"whichkey",slug:"/whichkey/reference",permalink:"/docs/whichkey/reference",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/whichkey/reference.md",version:"current",frontMatter:{id:"reference",title:"Reference"},sidebar:"docs",previous:{title:"Extra",permalink:"/docs/whichkey/extra"}},p=[{value:"Commands",id:"commands",children:[{value:"Show",id:"show",children:[]},{value:"Register",id:"register",children:[]},{value:"Trigger Key",id:"trigger-key",children:[]},{value:"Search Bindings",id:"search-bindings",children:[]},{value:"Show Transient",id:"show-transient",children:[]},{value:"Repeat Recent",id:"repeat-recent",children:[]},{value:"Recent Most Recent",id:"recent-most-recent",children:[]},{value:"Toggle Zen Mode",id:"toggle-zen-mode",children:[]},{value:"Open File",id:"open-file",children:[]}]},{value:"Context",id:"context",children:[]},{value:"Config",id:"config",children:[{value:"Delay",id:"delay",children:[]},{value:"Show Icons",id:"show-icons",children:[]},{value:"Sort Order",id:"sort-order",children:[]},{value:"Which-key Default Bindings",id:"which-key-default-bindings",children:[]},{value:"Transient Bindings",id:"transient-bindings",children:[]}]},{value:"Shortcuts",id:"shortcuts",children:[]},{value:"Types",id:"types",children:[{value:"BindingType",id:"bindingtype",children:[]},{value:"BindingItem",id:"bindingitem",children:[]},{value:"TransientMenuConfig",id:"transientmenuconfig",children:[]},{value:"TransientBindingItem",id:"transientbindingitem",children:[]}]}],c={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Which-key extension aims to provide a keybinding popup similar to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/justbur/emacs-which-key"},"emacs-which-key"),"\nby using the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/references/vscode-api#QuickPick"},"QuickPick"),"\nAPI from vscode.\nThis extension was broken out of ",(0,r.kt)("a",{parentName:"p",href:"/docs/"},(0,r.kt)("inlineCode",{parentName:"a"},"VSpaceCode")),", which was created to emulate the keybinding of spacemacs in VSCode,\nto decouple the core and the definition of the bindings."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"Commands are the main way to interact with which-key."),(0,r.kt)("h3",{id:"show"},"Show"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.show")),(0,r.kt)("p",null,"Args: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<BindingItem>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Description:\nA command to show which-key menu."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")," is the key of the ",(0,r.kt)("a",{parentName:"li",href:"#register"},"registered")," bindings that will be used to display a which-key menu."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Array<BindingItem>")," is an array of ",(0,r.kt)("a",{parentName:"li",href:"#bindingitem"},(0,r.kt)("inlineCode",{parentName:"a"},"BindingItem"))," that will be used directly to display a which-key menu."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," means the default bindings defined at ",(0,r.kt)("inlineCode",{parentName:"li"},"whichkey.bindings")," in the configuration will be used to display a which-key menu.")),(0,r.kt)("h3",{id:"register"},"Register"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.register")),(0,r.kt)("p",null,"Args:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    bindings: string;\n    overrides?: string;\n    title?: string;\n}\n")),(0,r.kt)("p",null,"Description:\nA command to register config which-key so a canonical record of the bindings lives in memory."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bindings")," is the configuration location of the bindings. e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"vspacecode.bindings"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overrides")," is the configuration location of the overrides. e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"vspacecode.overrides"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title")," is the title of the which-key menu to display on the top-level.")),(0,r.kt)("h3",{id:"trigger-key"},"Trigger Key"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.triggerKey")),(0,r.kt)("p",null,"Args: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{ key: string, when?: string }")),(0,r.kt)("p",null,"Description:\nA command used primarily for accepting non-characters key in which-key menu and pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," clause via vscode shortcut."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h4",{parentName:"div",id:"non-character-key"},"Non-character key"),(0,r.kt)("p",{parentName:"div"},"The which-key menu relies on QuickPick's input. Because it is a text input, we cannot capture non-character keys like arrow keys, tab key, and keys with\nmodifier like ",(0,r.kt)("inlineCode",{parentName:"p"},"C-x"),". We can capture those keys using vscode shortcut with ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkeyVisible")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," clause of the shortcut.\nSee ",(0,r.kt)("a",{parentName:"p",href:"extra#use-non-character-keys"},"Extra")," page for more details on usage."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h4",{parentName:"div",id:"pass-in-when-clause"},"Pass-in when clause"),(0,r.kt)("p",{parentName:"div"},"Since vscode doesn't allow extension to read context key-value (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vscode/issues/10471"},"vscode#10471"),"),\nwe will have to relied on ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," clause evaluation in vscode shortcut to pass the context to which-key.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/whichkey/extra#when"},"conditional bindings")," for more details on the usage."))),(0,r.kt)("h3",{id:"search-bindings"},"Search Bindings"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.searchBindings")),(0,r.kt)("p",null,"Description:\nThis is similar to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/emacs-helm/helm-descbinds"},"helm-descbinds")," which can search and execute the binding (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VSpaceCode/vscode-which-key/issues/12"},"vscode-which-key#12"),").\nNote that you can only search bindings menu for the currently displayed which-key bindings and their sub-bindings."),(0,r.kt)("h3",{id:"show-transient"},"Show Transient"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.showTransient")),(0,r.kt)("p",null,"Args: ",(0,r.kt)("a",{parentName:"p",href:"#transientmenuconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"TransientMenuConfig"))," | ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Description:\nShow a transient menu with the definition in the argument."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an object of ",(0,r.kt)("a",{parentName:"li",href:"#transientmenuconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"TransientMenuConfig"))),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," referencing the location of in the configuration to get ",(0,r.kt)("inlineCode",{parentName:"li"},"TransientMenuConfig"))),(0,r.kt)("h3",{id:"repeat-recent"},"Repeat Recent"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.repeatRecent")),(0,r.kt)("p",null,"Description:\nA command to show a which-key menu with key 1 to 9 to repeat the most recently executed command bindings."),(0,r.kt)("h3",{id:"recent-most-recent"},"Recent Most Recent"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.repeatMostRecent")),(0,r.kt)("p",null,"Description:\nA command to repeat the command binding most recently executed on which-key."),(0,r.kt)("h3",{id:"toggle-zen-mode"},"Toggle Zen Mode"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.toggleZenMode")),(0,r.kt)("p",null,"Description:\nA command to toggle zen mode for transient menu, which will show/hide all the menu items to save screen real estate."),(0,r.kt)("h3",{id:"open-file"},"Open File"),(0,r.kt)("p",null,"Command: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.openFile")),(0,r.kt)("p",null,"Description:\nThis is a command to get around an issue where vscode doesn't provide a single cross platform command to open file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VSpaceCode/vscode-which-key/issues/26"},"vscode-which-key#26"),"."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"The extension will also set the following context when applicable so it can be used in ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," clause of vscode shortcuts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"whichkeyActive")," is a boolean that will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when whichkey is active which\nincludes the time during the command execution with the menu being hidden.\nThis is rarely used and in most of the use cases it can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"whichKeyVisible"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"whichkeyVisible")," is a boolean that will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when the whichkey menu is visible.\nNote that this will be ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when the transient menu is visible.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"transientVisible")," is a boolean that will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when the transient menu is visible."))),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,"The extension uses the following configurations."),(0,r.kt)("h3",{id:"delay"},"Delay"),(0,r.kt)("p",null,"Key: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.delay")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",null,"Description:\nDelay (in milliseconds) for the which-key menu items to be displayed.\nSetting this to positive value will just delay the display of the which-key menu items, while\nkey input remains functional."),(0,r.kt)("h3",{id:"show-icons"},"Show Icons"),(0,r.kt)("p",null,"Key: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.showIcons")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"Description:\nControls whether to show or hide icons in which-key menu."),(0,r.kt)("h3",{id:"sort-order"},"Sort Order"),(0,r.kt)("p",null,"Key: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.sortOrder")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},'"none"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"alphabetically"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"nonNumberFirst"')),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},'"none"')),(0,r.kt)("p",null,"Description:\nControls the sorting order of the which-key menu items."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"none"')," will not sort the bindings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"alphabetically"')," will sort the bindings alphabetically using ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"},(0,r.kt)("inlineCode",{parentName:"a"},"String.prototype.localeCompare()")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"nonNumberFirst"')," will sort the bindings alphabetically like ",(0,r.kt)("inlineCode",{parentName:"li"},'"alphabetically"')," but have the bindings with number as key last.")),(0,r.kt)("h3",{id:"which-key-default-bindings"},"Which-key Default Bindings"),(0,r.kt)("p",null,"Key: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.bindings")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<BindingItem>")),(0,r.kt)("p",null,"Description:\nThe configuration of the default which-key menu. This contains the array of ",(0,r.kt)("a",{parentName:"p",href:"#bindingitem"},(0,r.kt)("inlineCode",{parentName:"a"},"BindingItem")),"."),(0,r.kt)("h3",{id:"transient-bindings"},"Transient Bindings"),(0,r.kt)("p",null,"Key: ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.transient")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Description:\nA key-value pair to store default definitions of transient menu for command ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.showTransient")," to reference."),(0,r.kt)("h2",{id:"shortcuts"},"Shortcuts"),(0,r.kt)("p",null,"The whichkey extension contributes the following shortcuts, which means they will work without manually editing your user's ",(0,r.kt)("inlineCode",{parentName:"p"},"keybindings.json"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TAB")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"whichKeyVisible")," will execute ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.triggerKey")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"\\t")," as argument to which-key in order to capture of tab ",(0,r.kt)("inlineCode",{parentName:"p"},"TAB")," key."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C-h")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"whichKeyVisible")," will execute ",(0,r.kt)("inlineCode",{parentName:"p"},"whichkey.describeBindings"),", which will show the describe binding menu for the bindings\n(and its sub bindings) which-key currently displayed."),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("h3",{id:"bindingtype"},"BindingType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    Command = "command",\n    Commands = "commands",\n    Bindings = "bindings",\n    Transient = "transient",\n    Conditional = "conditional"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command type indicates a single command will be executed on selection."),(0,r.kt)("li",{parentName:"ul"},"Commands type indicates multiple commands will be executed on selection."),(0,r.kt)("li",{parentName:"ul"},"Bindings type indicates that another sub-menu with the supplied bindings will be displayed upon menu item selection."),(0,r.kt)("li",{parentName:"ul"},"Transient type is similar to bindings type except the menu will not disappear on selection.\nThe transient type is being deprecated in favor of the separate command ",(0,r.kt)("inlineCode",{parentName:"li"},"whichkey.showTransient"),".\nAll current definitions of transient type are converted internally at the moment."),(0,r.kt)("li",{parentName:"ul"},"Conditional type is an experimental feature which provides conditional binding behavior. See ",(0,r.kt)("a",{parentName:"li",href:"extra/#conditional-bindings-experimental"},"Extra"))),(0,r.kt)("h3",{id:"bindingitem"},"BindingItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    key: string;\n    name: string;\n    icon?: string;\n    type: BindingType;\n    bindings?: BindingItem[];\n    command?: string;\n    commands?: string[];\n    args?: any;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," is the key such as ",(0,r.kt)("inlineCode",{parentName:"li"},"k")," ot ",(0,r.kt)("inlineCode",{parentName:"li"},"\\t")," to trigger the binding."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," is the name of the binding such as ",(0,r.kt)("inlineCode",{parentName:"li"},"+buffer")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"start debug"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"icon")," is an optional string property (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"rocket"),") used for the display of vscode ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/api/references/icons-in-labels"},"product icons"),"\nas a prefix in the menu item"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," specifies the type of this binding. see ",(0,r.kt)("a",{parentName:"li",href:"#bindingtype"},(0,r.kt)("inlineCode",{parentName:"a"},"bindingtype"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bindings")," is an optional property that is used with binding, transient and conditional type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"command")," is an optional property used with command binding type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commands")," is an optional property used with commands binding type. An array of command string is expected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," is an optional property that is used to supply arguments to commands for ",(0,r.kt)("inlineCode",{parentName:"li"},'"command"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"commands"'),".\nWhen ",(0,r.kt)("inlineCode",{parentName:"li"},'"command"')," is used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"args")," will be passed directly to the command being executed.\nWhen ",(0,r.kt)("inlineCode",{parentName:"li"},'"commands"')," is used, an array of the arguments is expected if argument passing is needed.\n",(0,r.kt)("inlineCode",{parentName:"li"},"null")," can be used to indicate no arguments for a specific position if any subsequent command require an arg.")),(0,r.kt)("h3",{id:"transientmenuconfig"},"TransientMenuConfig"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    title?: string;\n    bindings: Array<TransientBindingItem>\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title")," is an optional property for the title of the transient menu."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bindings")," is the array of ",(0,r.kt)("a",{parentName:"li",href:"#transientbindingitem"},(0,r.kt)("inlineCode",{parentName:"a"},"TransientBindingItem")),".")),(0,r.kt)("h3",{id:"transientbindingitem"},"TransientBindingItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    key: string;\n    name: string;\n    exit?: boolean;\n    command?: string;\n    commands?: string[];\n    args?: any;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," is the key such as ",(0,r.kt)("inlineCode",{parentName:"li"},"k")," ot ",(0,r.kt)("inlineCode",{parentName:"li"},"\\t")," to trigger the binding."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," is the name of the binding such as ",(0,r.kt)("inlineCode",{parentName:"li"},"+buffer")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"start debug"),".\nas a prefix in the menu item"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exit")," is an optional boolean property. When it is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the transient menu will exit on selection of this item."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"command")," is an optional property used with command binding type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commands")," is an optional property used with commands binding type. An array of command string is expected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args")," is an optional property that is used to supply arguments to commands for ",(0,r.kt)("inlineCode",{parentName:"li"},'"command"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"commands"'),".\nWhen ",(0,r.kt)("inlineCode",{parentName:"li"},'"command"')," is used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"args")," will be passed directly to the command being executed.\nWhen ",(0,r.kt)("inlineCode",{parentName:"li"},'"commands"')," is used, an array of the arguments is expected if argument passing is needed.\n",(0,r.kt)("inlineCode",{parentName:"li"},"null")," can be used to indicate no arguments for a specific position if any subsequent command require an arg.")))}m.isMDXComponent=!0}}]);