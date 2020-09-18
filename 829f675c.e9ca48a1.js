(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return s}));var i=t(2),a=t(6),o=(t(0),t(80)),l={id:"extra",title:"Extra"},c={unversionedId:"extra",id:"extra",isDocsHomePage:!1,title:"Extra",description:"This section config extra settings that pertain to both Standalone or With extension.",source:"@site/docs/extra.md",slug:"/extra",permalink:"/docs/extra",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/extra.md",version:"current",sidebar:"someSidebar",previous:{title:"Usage",permalink:"/docs/usage"}},r=[{value:"Use non-character keys",id:"use-non-character-keys",children:[]},{value:"Display menu with a delay",id:"display-menu-with-a-delay",children:[]},{value:"Display menu items alphabetically",id:"display-menu-items-alphabetically",children:[]},{value:"Unclear selection",id:"unclear-selection",children:[]},{value:"Conditional bindings (experimental)",id:"conditional-bindings-experimental",children:[]}],b={rightToc:r};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section config extra settings that pertain to both Standalone or With extension."),Object(o.b)("h3",{id:"use-non-character-keys"},"Use non-character keys"),Object(o.b)("p",null,"This section describes a way to use non-character keys in which-key menu like ",Object(o.b)("inlineCode",{parentName:"p"},"<tab>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Control+D"),". ",Object(o.b)("inlineCode",{parentName:"p"},"<tab>")," is supported out of the box. Follow the following instruction to add support for keys other than ",Object(o.b)("inlineCode",{parentName:"p"},"<tab>"),"."),Object(o.b)("p",null,"Merge the following json to your ",Object(o.b)("inlineCode",{parentName:"p"},"keybindings.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "ctrl+x",\n  "command": "whichkey.triggerKey",\n  "args": "C-x",\n  "when": "whichkeyActive"\n}\n')),Object(o.b)("p",null,"Once you've done that, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"C-x")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," value of the which-key config. Effectively, the above keybinding will enter ",Object(o.b)("inlineCode",{parentName:"p"},"C-x")," in the QuickPick input box when ",Object(o.b)("inlineCode",{parentName:"p"},"ctrl+x")," is pressed when the which key is focused."),Object(o.b)("h3",{id:"display-menu-with-a-delay"},"Display menu with a delay"),Object(o.b)("p",null,"You can set ",Object(o.b)("inlineCode",{parentName:"p"},"whichkey.delay")," in ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json")," to value in millisecond to delay the display of the menu."),Object(o.b)("h3",{id:"display-menu-items-alphabetically"},"Display menu items alphabetically"),Object(o.b)("p",null,"You can set ",Object(o.b)("inlineCode",{parentName:"p"},"whichkey.sortOrder")," in ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json")," to ",Object(o.b)("inlineCode",{parentName:"p"},"alphabetically")," to always display the menu items alphabetically."),Object(o.b)("h3",{id:"unclear-selection"},"Unclear selection"),Object(o.b)("p",null,"Selected text can be hard to see when which-key menu is active. This could be due to the ",Object(o.b)("inlineCode",{parentName:"p"},"inactiveSelectionBackground")," config of your current theme. You can selectively override that color in your ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json")," like the following example."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'"workbench.colorCustomizations": {\n    "editor.inactiveSelectionBackground": "color that works better",\n},\n')),Object(o.b)("h3",{id:"conditional-bindings-experimental"},"Conditional bindings (experimental)"),Object(o.b)("details",null,Object(o.b)("summary",null,"Click to expand!"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This is marked as experimental and the config is subject to change.")),Object(o.b)("p",null,"This allows conditional execution of bindings. Currently, it only supports conditions on the ",Object(o.b)("inlineCode",{parentName:"p"},"when")," passed from shortcut and ",Object(o.b)("inlineCode",{parentName:"p"},"languageId")," of the active editor."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It reuses the similar structure to the ",Object(o.b)("inlineCode",{parentName:"li"},"bindings")," type."),Object(o.b)("li",{parentName:"ul"},"The property ",Object(o.b)("inlineCode",{parentName:"li"},"key")," in a binding item is reused to represent the condition."),Object(o.b)("li",{parentName:"ul"},"The condition can be thought of as a key-value pair serialized into a string.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"languageId:javascript;when:sideBarVisible")," is an example condition serialized into a string for the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," that checks if the language id of the currently active editor is javascript and if the side bar is visible (see the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#when"}),"when")," section for more details)."),Object(o.b)("p",null,"A concrete example of a binding with that condition is as follow:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "whichkey.bindings": [\n    {\n      "key": "m",\n      "name": "Major...",\n      "type": "conditional",\n      "bindings": [\n        {\n          "key": "languageId:javascript;when:sideBarVisible",\n          "name": "Open file",\n          "type": "command",\n          "command": "workbench.action.files.openFileFolder"\n        },\n        {\n          "key": "",\n          "name": "Buffers",\n          "type": "bindings",\n          "bindings": [\n            {\n              "key": "b",\n              "name": "Show all buffers/editors",\n              "type": "command",\n              "command": "workbench.action.showAllEditors"\n            }\n          ]\n        },\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"In this example, when ",Object(o.b)("inlineCode",{parentName:"p"},"m")," is pressed, it will find the first binding that matches the current condition.\nIf no configured key matches the current condition, a default item showing a buffer menu will be used.\nAny item that has an invalid key will be used as default item."),Object(o.b)("p",null,"Therefore, in this example, if the language is javascript and the sidebar is visible, ",Object(o.b)("inlineCode",{parentName:"p"},"m"),' will open\nthe file browser, otherwise it will show the "buffers" menu.'),Object(o.b)("h4",{id:"overrides"},"Overrides"),Object(o.b)("p",null,"This is again similar with the ",Object(o.b)("inlineCode",{parentName:"p"},"bindings")," type."),Object(o.b)("p",null,"For example, the following config will override the ",Object(o.b)("inlineCode",{parentName:"p"},"m")," binding completely:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "whichkey.bindingOverrides": [\n    {\n      "keys": "m",\n      "name": "Major",\n      "type": "conditional",\n      "bindings": [\n        {\n          "key": "languageId:javascript",\n          "name": "Go to",\n          "type": "command",\n          "command": "workbench.action.gotoLine",\n        }\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"You can also choose to add or remove conditions to existing conditional bindings.\nFor example, the following will add a key of ",Object(o.b)("inlineCode",{parentName:"p"},"languageId:javascript")," to the conditional binding if ",Object(o.b)("inlineCode",{parentName:"p"},"languageId:javascript")," doesn't already exist."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "whichkey.bindingOverrides": [\n    {\n      "keys": ["m", "languageId:javascript"],\n      "name": "Go to",\n      "type": "command",\n      "command": "workbench.action.gotoLine",\n    }\n  ]\n}\n')),Object(o.b)("p",null,"Negative ",Object(o.b)("inlineCode",{parentName:"p"},"position")," property can also be used to remove conditional bindings."),Object(o.b)("h4",{id:"when"},"when"),Object(o.b)("p",null,"Since VSCode doesn't allow reading of the context of a json field, we cannot read the condition used in the ",Object(o.b)("inlineCode",{parentName:"p"},"when")," in shortcuts.\nFor this reason, you will need to repeat every ",Object(o.b)("inlineCode",{parentName:"p"},"when")," condition used in conditional bindings, at least until ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/microsoft/vscode/issues/10471"}),"vscode/#10471")," is implemented."),Object(o.b)("p",null,"For example, the following shortcut in ",Object(o.b)("inlineCode",{parentName:"p"},"keybindings.json")," will pass both ",Object(o.b)("inlineCode",{parentName:"p"},"key")," and ",Object(o.b)("inlineCode",{parentName:"p"},"when")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"args")," to ",Object(o.b)("inlineCode",{parentName:"p"},"which-key"),". The outer ",Object(o.b)("inlineCode",{parentName:"p"},"when")," is the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/getstarted/keybindings#_when-clause-contexts"}),"condition clause")," for vscode to execute this key, and must contain ",Object(o.b)("inlineCode",{parentName:"p"},"whichKeyVisible")," which limits this shortcut to be only applicable when the which-key menu is visible. In this case, if a user presses key ",Object(o.b)("inlineCode",{parentName:"p"},"t")," when which-key, sidebar and explorer viewlet are visible, it will execute ",Object(o.b)("inlineCode",{parentName:"p"},"whichkey.triggerKey")," command and send the ",Object(o.b)("inlineCode",{parentName:"p"},"args")," (",Object(o.b)("inlineCode",{parentName:"p"},"key")," and ",Object(o.b)("inlineCode",{parentName:"p"},"when"),") to  ",Object(o.b)("inlineCode",{parentName:"p"},"which-key")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "t",\n  "command": "whichkey.triggerKey",\n  "args": {\n    "key": "t",\n    "when": "sideBarVisible && explorerViewletVisible"\n  },\n  "when": "whichkeyVisible && sideBarVisible && explorerViewletVisible"\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"args.key")," and ",Object(o.b)("inlineCode",{parentName:"p"},"args.when")," that were sent to ",Object(o.b)("inlineCode",{parentName:"p"},"which-key")," are then used to find the a binding that matches the key ",Object(o.b)("inlineCode",{parentName:"p"},"t")," and any conditional binding that matches that condition. The following binding is an example that contains a conditional binding that matches the ",Object(o.b)("inlineCode",{parentName:"p"},"args"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "t",\n  "name": "Show tree/explorer view",\n  "type": "conditional",\n  "bindings": [\n    {\n      "key": "",\n      "name": "default",\n      "type": "command",\n      "command": "workbench.view.explorer"\n    },\n    {\n      "key": "when:sideBarVisible && explorerViewletVisible",\n      "name": "Hide explorer",\n      "type": "command",\n      "command": "workbench.action.toggleSidebarVisibility"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"Unfortunately, if you have another condition binding with a different ",Object(o.b)("inlineCode",{parentName:"p"},"key")," that want to match the same ",Object(o.b)("inlineCode",{parentName:"p"},"when")," condition as the ",Object(o.b)("inlineCode",{parentName:"p"},"t")," in the above example, you will need to setup another shortcut with that different ",Object(o.b)("inlineCode",{parentName:"p"},"key"),"."),Object(o.b)("h4",{id:"languageid"},"languageId"),Object(o.b)("p",null,"This is language id of the active editor. The language id can be found in language selection menu inside the parenthesis next to the language name.")))}s.isMDXComponent=!0}}]);