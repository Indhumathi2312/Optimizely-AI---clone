(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,121070,t=>{"use strict";var e=t.i(843476),i=t.i(812251),l=t.i(828074);t.i(983989);var a=t.i(191219),n=t.i(967268),r=t.i(647163),s=t.i(842189);function u(t){let{Link:u}=(0,a.readFragment)(s.ButtonBlockFragment,t),{displaySettings:c}=t,{displayType:o,buttonVariant:d,buttonSize:f,fullWidth:h}=c??{};if(!u?.url?.default)return null;let B=u.text??"Update Link Text",m=u.url.default,g=u.title??"",k=u.target??"",p=(0,n.parseBoolean)(h),x=p?"flex w-full":"inline-flex w-fit",j=p?"w-full":void 0;if("link"===o)return(0,e.jsx)("div",{className:x,children:(0,e.jsx)(i.Button,{variant:"link",asChild:!0,className:(0,r.cn)(p&&"w-full justify-start"),children:(0,e.jsx)("a",{href:m,title:g,target:k,"data-epi-edit":"Link",children:B})})});let v=(0,e.jsx)(i.Button,{variant:d,size:f,asChild:!0,className:j,children:(0,e.jsx)("a",{href:m,title:g,target:k,"data-epi-edit":"Link",children:B})});return(0,e.jsx)("div",{className:x,children:(0,l.withStrokeWrapper)(v,d,f,{className:j})})}t.s(["default",0,u],161432),t.i(161432),t.s(["ButtonBlockFragment",()=>s.ButtonBlockFragment,"default",0,u],121070)},136877,function(t){t.n(t.i(121070))},842189,t=>{"use strict";let e=(0,t.i(983989).graphql)(`
  fragment ButtonBlockFragment on ButtonBlock {
    Link {
      __typename
      url {
        __typename
        default
        internal
        hierarchical
        type
      }
      title
      text
      target
    }
  }
`);t.s(["ButtonBlockFragment",0,e])}]);