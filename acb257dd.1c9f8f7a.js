(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return r}));var i=t(2),o=t(6),a=(t(0),t(88)),c={id:"menu-customization",title:"Menu Customization",sidebar_label:"Menu Customization",slug:"/"},l={unversionedId:"menu-customization",id:"menu-customization",isDocsHomePage:!1,title:"Menu Customization",description:"There are two ways to customize the menu: incrementally, and from scratch. Incrementally is great for when you only need to modify a few bindings from the default. Customizing from scratch is great for total control of the customization.",source:"@site/docs/menu-customization.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/menu-customization.md",version:"current",sidebar_label:"Menu Customization",sidebar:"someSidebar",next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},d=[{value:"Default bindings",id:"default-bindings",children:[]},{value:"Incrementally",id:"incrementally",children:[{value:"Add/Replace",id:"addreplace",children:[]},{value:"Removal",id:"removal",children:[]}]},{value:"From Scratch",id:"from-scratch",children:[]}],s={rightToc:d};function r(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are two ways to customize the menu: incrementally, and from scratch. Incrementally is great for when you only need to modify a few bindings from the default. Customizing from scratch is great for total control of the customization."),Object(a.b)("h2",{id:"default-bindings"},"Default bindings"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/VSpaceCode/VSpaceCode/blob/gh-pages/KEYBINDINGS.md"}),"KEYBINDINGS.md")," for default bindings."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The default menu bindings are subject to change before ",Object(a.b)("inlineCode",{parentName:"p"},"1.0.0"),". If you find something that you think it should bind to a particular key by default, or you want a particular command, please open an issue as a feature request.")),Object(a.b)("h2",{id:"incrementally"},"Incrementally"),Object(a.b)("p",null,"Using this option will allow to you surgically update the default bindings (",Object(a.b)("inlineCode",{parentName:"p"},"vspacecode.bindings"),"). The extension will override bindings sequentially base on ",Object(a.b)("inlineCode",{parentName:"p"},"vspacecode.bindingOverrides"),"."),Object(a.b)("h3",{id:"addreplace"},"Add/Replace"),Object(a.b)("p",null,"The following json will replace ",Object(a.b)("inlineCode",{parentName:"p"},"<SPC> g s")," in the same position if the binding exists in ",Object(a.b)("inlineCode",{parentName:"p"},"vspacecode.bindings"),", and append ",Object(a.b)("inlineCode",{parentName:"p"},"s")," to menu ",Object(a.b)("inlineCode",{parentName:"p"},"<SPC> g")," if it doesn't exists. This override will only execute if ",Object(a.b)("inlineCode",{parentName:"p"},"<SPC> g")," menu exists. An optional ",Object(a.b)("inlineCode",{parentName:"p"},"position")," key can be used to specified index of where the item should be inserted/moved to."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g.s",\n      "name": "Go to line",\n      "type": "command",\n      "command":"workbench.action.gotoLine",\n    }\n  ]\n}\n')),Object(a.b)("p",null,"The following example will replace/append the whole ",Object(a.b)("inlineCode",{parentName:"p"},"<SPC> g")," menu with one binding ",Object(a.b)("inlineCode",{parentName:"p"},"s")," in it."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g",\n      "name": "Go...",\n      "type": "bindings",\n      "bindings": [\n        {\n          "key": "s",\n          "name": "Go to",\n          "type": "command",\n          "command": "workbench.action.gotoLine",\n        }\n      ]\n    }\n  ]\n}\n')),Object(a.b)("p",null,"If the key binding's key uses character ",Object(a.b)("inlineCode",{parentName:"p"},".")," like ",Object(a.b)("inlineCode",{parentName:"p"},"<SPC> e ."),", you can target that by using an array in the keys like ",Object(a.b)("inlineCode",{parentName:"p"},'"keys": ["e", "."]'),"."),Object(a.b)("h3",{id:"removal"},"Removal"),Object(a.b)("p",null,"Any negative number in position is denoting a removal operation.\nIn the following example, any item bound to ",Object(a.b)("inlineCode",{parentName:"p"},"<SPC> g s")," will be remove."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g.s",\n      "position": -1,\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"from-scratch"},"From Scratch"),Object(a.b)("p",null,"To customize the menu items from scratch, you can override the menu completely by putting your own ",Object(a.b)("inlineCode",{parentName:"p"},"vspacecode.bindings")," into your ",Object(a.b)("inlineCode",{parentName:"p"},"settings.json"),". Using this option will prevent any update to your own bindings."),Object(a.b)("p",null,"An example of a ",Object(a.b)("inlineCode",{parentName:"p"},"settings.json")," file that overrides space menu is as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "vspacecode.bindings": [\n    {\n      "key": "f",\n      "name": "File...",\n      "type": "bindings",\n      "bindings": [\n        {\n          "key": "f",\n          "name": "Open file",\n          "type": "command",\n          "command": "workbench.action.files.openFileFolder"\n        },\n        {\n          "key": "i",\n          "name": "Indentation...",\n          "type": "bindings",\n          "bindings": [\n            {\n              "key": "i",\n              "name": "Change indentation",\n              "type": "command",\n              "command": "changeEditorIndentation"\n            },\n            {\n              "key": "d",\n              "name": "Detect indentation",\n              "type": "command",\n              "command": "editor.action.detectIndentation"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(a.b)("p",null,"The default value can be found in the ",Object(a.b)("inlineCode",{parentName:"p"},"contributes.configuration.vspacecode.bindings.default")," section of the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," in this repo. You can use the default value as an example to craft your own custom menu."))}r.isMDXComponent=!0}}]);