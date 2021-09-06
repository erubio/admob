"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},872:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={id:"installation",title:"Installation",sidebar_label:"Installation"},s=void 0,u={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"If you are using react-native >= 0.60 you just need to do a simple:",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/admob/docs/installation",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/installation.md",version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"sideBar",next:{title:"Usage",permalink:"/admob/docs/usage"}},c=[{value:"Android Setup",id:"android-setup",children:[]},{value:"iOS Setup",id:"ios-setup",children:[{value:"Allow iOS Static Frameworks",id:"allow-ios-static-frameworks",children:[]}]},{value:"Requesting IDFA on iOS 14",id:"requesting-idfa-on-ios-14",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native >= 0.60")," you just need to do a simple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @react-native-admob/admob --save\n")),(0,a.kt)("p",null,"or if you use yarn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add @react-native-admob/admob\n")),(0,a.kt)("h2",{id:"android-setup"},"Android Setup"),(0,a.kt)("p",null,"Add your AdMob App ID to ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),", as described in the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/android/quick-start#configure_your_app"},"Google Mobile Ads SDK documentation"),"."),(0,a.kt)("h2",{id:"ios-setup"},"iOS Setup"),(0,a.kt)("p",null,"From the command line run (inside the ios folder):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pod install\n")),(0,a.kt)("p",null,"Then, update your Info.plist as described in the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/ios/quick-start#update_your_infoplist"},"Google Mobile Ads SDK documentation"),"."),(0,a.kt)("h3",{id:"allow-ios-static-frameworks"},"Allow iOS Static Frameworks"),(0,a.kt)("p",null,"If you are using Static Frameworks on iOS, you need to manually enable this for the project. To enable Static Framework support, add the following global to the top of your /ios/Podfile file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"$RNAdMobAsStaticFramework = true\n")),(0,a.kt)("h2",{id:"requesting-idfa-on-ios-14"},"Requesting IDFA on iOS 14"),(0,a.kt)("p",null,"On iOS 14 onwards, you need to request IDFA access through App Tracking Transparency Dialog to show targeted ads to the user. For that you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-tracking-transparency"},"react-native-tracking-transparency"),"."))}d.isMDXComponent=!0}}]);