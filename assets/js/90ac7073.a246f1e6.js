"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[453],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(f,p(p({ref:n},d),{},{components:t})):r.createElement(f,p({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8449:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),p=["components"],s={title:"Setup App Open Ad",sidebar_position:5},i=void 0,l={unversionedId:"usage/appopen",id:"usage/appopen",isDocsHomePage:!1,title:"Setup App Open Ad",description:"App Open Ad is slightly different from other Full Screen Ads.",source:"@site/docs/usage/appopen.mdx",sourceDirName:"usage",slug:"/usage/appopen",permalink:"/admob/docs/usage/appopen",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/usage/appopen.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Setup App Open Ad",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Creating Full Screen Ad with Class API",permalink:"/admob/docs/usage/fullscreen-class"},next:{title:"Non Personalized Ads",permalink:"/admob/docs/usage/npa"}},d=[],c={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"App Open Ad is slightly different from other Full Screen Ads.\nWhile other Full Screen Ads can be created multiple times and each ads have their own instance, only one AppOpenAd instance can be exist in a app."),(0,o.kt)("p",null,"So, ",(0,o.kt)("inlineCode",{parentName:"p"},"AppOpenAd")," class have static ",(0,o.kt)("inlineCode",{parentName:"p"},"sharedInstance")," internally and when you create App Open Ad using ",(0,o.kt)("inlineCode",{parentName:"p"},"AppOpenAd.createAd()")," method,\nit will replace existing ",(0,o.kt)("inlineCode",{parentName:"p"},"sharedInstance")," and app will always have signle ",(0,o.kt)("inlineCode",{parentName:"p"},"AppOpenAd")," instance."),(0,o.kt)("p",null,"Also, you have to wrap your app components with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/components/AppOpenAdProvider"},"AppOpenAdProvider")," to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useAppOpenAd")," hook.\n",(0,o.kt)("inlineCode",{parentName:"p"},"AppOpenAdProvider")," is needed beacuse it provides sigleton ",(0,o.kt)("inlineCode",{parentName:"p"},"AppOpenAd")," instance to hooks."),(0,o.kt)("p",null,"Example below uses external library ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zoontek/react-native-bootsplash"},"react-native-bootsplash")," to implement splash screen.\nThis is not necessary, but we recommend you to use this library with App Open Ad because App Open Ad must be showed before the app content showed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},"import { AppOpenAdProvider, TestIds } from '@react-native-admob/admob';\n\nexport default function App() {\n  const [splashDismissed, setSplashDismissed] = useState(false);\n\n  return (\n    <AppOpenAdProvider\n      unitId={TestIds.APP_OPEN}\n      options={{ showOnColdStart: true }}\n    >\n      {splashDismissed ? (\n        <MainScreen />\n      ) : (\n        <SplashScreen onSplashDismissed={() => setSplashDismissed(true)} />\n      )}\n    </AppOpenAdProvider>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=SplashScreen.tsx",title:"SplashScreen.tsx"},"import RNBootSplash from 'react-native-bootsplash';\nimport { useAppOpenAd } from '@react-native-admob/admob';\n\nexport default function SplashScreen({ onSplashDismissed }) {\n  const [loaded, setLoaded] = useState(false);\n  const { adDismissed, adLoadError } = useAppOpenAd();\n\n  useEffect(() => {\n    const load = async () => {\n      // Dummy Long Running Task\n      await new Promise((resolve) => setTimeout(resolve, 3000));\n      setLoaded(true);\n    };\n    load();\n  }, []);\n\n  useEffect(() => {\n    async function hide() {\n      await RNBootSplash.hide({ fade: true });\n      onSplashDismissed();\n    }\n    if (loaded && (adDismissed || adLoadError)) {\n      hide();\n    }\n  }, [loaded, adDismissed, adLoadError, onSplashDismissed]);\n\n  return <View />;\n}\n")))}u.isMDXComponent=!0}}]);