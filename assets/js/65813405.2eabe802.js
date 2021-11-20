"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[267],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Creating Full Screen Ad with Class API",sidebar_position:4},l=void 0,d={unversionedId:"usage/fullscreen-class",id:"usage/fullscreen-class",isDocsHomePage:!1,title:"Creating Full Screen Ad with Class API",description:"Creating Ad",source:"@site/docs/usage/fullscreen-class.mdx",sourceDirName:"usage",slug:"/usage/fullscreen-class",permalink:"/admob/docs/usage/fullscreen-class",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/usage/fullscreen-class.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Creating Full Screen Ad with Class API",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Creating Full Screen Ad with Hook API",permalink:"/admob/docs/usage/fullscreen-hook"},next:{title:"Setup App Open Ad",permalink:"/admob/docs/usage/appopen"}},u=[{value:"Creating Ad",id:"creating-ad",children:[],level:2},{value:"Listening to Ad Events",id:"listening-to-ad-events",children:[],level:2},{value:"Loading and showing ad",id:"loading-and-showing-ad",children:[],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creating-ad"},"Creating Ad"),(0,i.kt)("p",null,"You can create ad by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"createAd")," static method of corresponding ad type. ",(0,i.kt)("inlineCode",{parentName:"p"},"createAd")," returns an instance of corresponding ad class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{9}","{9}":!0},"import { InterstitialAd, TestIds } from '@react-native-admob/admob';\n\nexport default function App() {\n  const [interstitialAd, setInterstitialAd] = useState<InterstitialAd | null>(\n    null\n  );\n\n  useEffect(() => {\n    const interstitial = InterstitialAd.createAd(TestIds.INTERSTITIAL);\n    setInterstitialAd(interstitial);\n  }, []);\n\n  return <View>{/* ... */}</View>;\n}\n")),(0,i.kt)("p",null,"First parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"unitId")," parameter. Set this to the ad unit ID created in the AdMob console. You can use one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TestIds")," to test your ad implementation."),(0,i.kt)("p",null,"As second parameter, you can provide ",(0,i.kt)("inlineCode",{parentName:"p"},"FullScreenAdOptions")," object as a second parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),". About the options, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/FullScreenAdOptions"},"FullScreenAdOptions"),"."),(0,i.kt)("p",null,"After the ad is created, ad will be loaded automatically if you didn't specify ",(0,i.kt)("inlineCode",{parentName:"p"},"loadOnMounted")," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," since its default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h2",{id:"listening-to-ad-events"},"Listening to Ad Events"),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener")," method of the ad instance to listen to ad events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{14-23}","{14-23}":!0},"import { InterstitialAd, TestIds } from '@react-native-admob/admob';\n\nexport default function App() {\n  const [interstitialAd, setInterstitialAd] = useState<InterstitialAd | null>(\n    null\n  );\n  const [adLoaded, setAdLoaded] = useState(false);\n  const [adDismissed, setAdDismissed] = useState(false);\n\n  useEffect(() => {\n    const interstitial = InterstitialAd.createAd(TestIds.INTERSTITIAL);\n    setInterstitialAd(interstitial);\n\n    const subscriptions = [\n      interstitial.addEventListener('onAdLoaded', () => {\n        setAdLoaded(true);\n      }),\n      interstitial.addEventListener('onAdDismissed', () => {\n        setAdDismissed(true);\n      }),\n    ];\n\n    return () => subscriptions.forEach((sub) => sub.remove());\n  }, []);\n\n  return <View>{/* ... */}</View>;\n}\n")),(0,i.kt)("p",null,"Supported events:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adLoaded"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the ad has finished loading.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adFailedToLoad"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the ad has failed to load. The argument to the event handler is ",(0,i.kt)("inlineCode",{parentName:"td"},"Error")," object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adPresented"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the ad is presented to user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adFailedToPresent"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when an error occurred while presenting ad. The argument to the event handler is ",(0,i.kt)("inlineCode",{parentName:"td"},"Error")," object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adDismissed"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when the ad is dismissed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rewarded"),(0,i.kt)("td",{parentName:"tr",align:null},"Fires when user earned reward. The argument to the event handler is ",(0,i.kt)("inlineCode",{parentName:"td"},"Reward")," object.")))),(0,i.kt)("p",null,"Don't forget to remove event listeners in your clean up code. You can do this by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"remove()")," returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener"),"."),(0,i.kt)("h2",{id:"loading-and-showing-ad"},"Loading and showing ad"),(0,i.kt)("p",null,"Depending on your options, you may need to load or show ad manually."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{18}","{18}":!0},"import { InterstitialAd, TestIds } from '@react-native-admob/admob';\n\nexport default function App({ navigation }) {\n  const [interstitialAd, setInterstitialAd] = useState<InterstitialAd | null>(\n    null\n  );\n  const [adLoaded, setAdLoaded] = useState(false);\n  const [adDismissed, setAdDismissed] = useState(false);\n\n  // ...\n\n  return (\n    <View>\n      <Button\n        title=\"Navigate to next screen\"\n        onPress={() => {\n          if (adLoaded) {\n            interstitialAd?.show();\n          } else {\n            navigation.navigate('NextScreen');\n          }\n        }}\n      />\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0}}]);