"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[338],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6320:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={id:"getInitializationStatus",title:"getInitializationStatus",sidebar_label:"getInitializationStatus"},s=void 0,p={unversionedId:"api/misc/getInitializationStatus",id:"api/misc/getInitializationStatus",isDocsHomePage:!1,title:"getInitializationStatus",description:"Use this function to get each mediation adapter's initialization status.",source:"@site/docs/api/misc/getInitializationStatus.mdx",sourceDirName:"api/misc",slug:"/api/misc/getInitializationStatus",permalink:"/admob/docs/api/misc/getInitializationStatus",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/api/misc/getInitializationStatus.mdx",tags:[],version:"current",frontMatter:{id:"getInitializationStatus",title:"getInitializationStatus",sidebar_label:"getInitializationStatus"},sidebar:"docsSidebar",previous:{title:"GAMBannerAd",permalink:"/admob/docs/api/components/GAMBannerAd"},next:{title:"isTestDevice",permalink:"/admob/docs/api/misc/isTestDevice"}},c=[{value:"Usage example",id:"usage-example",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2}],u={toc:c};function m(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this function to get each mediation adapter's initialization status."),(0,r.kt)("h2",{id:"usage-example"},"Usage example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import AdMob from '@react-native-admob/admob';\n\nexport default function App() {\n  useEffect(() => {\n    const getStatus = async () => {\n      const initializationStatus = await AdMob.getInitializationStatus();\n      console.log(initializationStatus);\n    };\n\n    getStatus();\n  }, []);\n\n  return (/* Your App code */)\n")),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<InitializationStatus[]>")," which is Promise of each mediation adapter's initialization status."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Promise<",(0,r.kt)("a",{parentName:"td",href:"#"},"InitializationStatus"),"[]>")))),(0,r.kt)("p",null,"Properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"InitializationStatus"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the adapter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Description of the status.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isReady"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the adapter is ready.")))))}m.isMDXComponent=!0}}]);