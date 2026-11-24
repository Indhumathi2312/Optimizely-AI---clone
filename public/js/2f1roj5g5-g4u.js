(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,442052,e=>{"use strict";var t=e.i(843476),l=e.i(546829),a=e.i(916893),n=e.i(772948),i=e.i(988640),o=e.i(812251),r=e.i(94411);e.i(32044);var d=e.i(760408);e.i(983989);var s=e.i(191219),c=e.i(666145);let m={containerWidth:"full",backgroundColor:"transparent",paddingTop:"xxl",paddingBottom:"extra_loose",paddingBottomLg:"xxl",paddingX:"compact",paddingXMd:"default",paddingXLg:"loose",roundedCorners:"none",marginTop:"none",marginBottom:"none",contentAlign:"start",minHeight:"px_600",height:"vh_80",backgroundMedia:"image",backgroundMediaFit:"cover",backgroundMediaOverlay:"none"},g={displayMode:"grid",gridColumns:"cols_12",justifyItems:"center",spacing:"default",background:"transparent"},u={contentAlign:"center",colStart:"start_2",colStartLg:"start_1",colSpan:"span_10",colSpanLg:"span_12"},p={displayMode:"grid",gridColumns:"cols_1",gridColumnsLg:"cols_12",spacing:"none",background:"transparent"},f={colSpanLg:"span_3"},x={colorScheme:"lfgreen",fontSizeMobile:"text_11xl",fontSizeMd:"md_text_11xl",fontSizeLg:"lg_text_14_5xl",fontFamily:"henrietta",animationMode:"mouse",curvedText:"true",arcAmount:"arc_10",extrusionCount:"layers_5"};function h(e){let t=e?.item&&"object"==typeof e.item?e.item:void 0,l=e?.url?.default??("string"==typeof t?.Url?t.Url:void 0);return l?{url:l,alt:"string"==typeof t?.AltText?t.AltText:""}:null}function y(e){let{_modified:y,HeadingText:v,BodyText:_,CallToAction:b,BackgroundImage:k,BackgroundImages:B,HeroAnimation:H}=(0,s.readFragment)(c.HeroHomeBlockFragment,e),S=b?.url?.default,j=b?.text??"Learn more",A=(B??[]).map(h).filter(e=>null!==e),T=A.length?A[function(e,t){if(t<=0)return 0;let l=0;for(let t=0;t<e.length;t++)l=31*l+e.charCodeAt(t)|0;return Math.abs(l)%t}(String(y??""),A.length)]:h(k),C=T?.url,M=T?.alt??"",L=H?.url?.default??void 0;return(0,t.jsxs)(l.default,{displaySettings:m,preview:e.preview,priority:e.priority,BackgroundMedia:C?{item:{__typename:"cmp_PublicImageAsset",Url:C,AltText:M}}:void 0,className:"relative",children:[L&&(0,t.jsx)("div",{className:"pointer-events-none absolute bottom-32 left-1/2 z-0 hidden h-[26vw] w-[50vw] -translate-x-1/2 lg:block",children:(0,t.jsx)(r.RivePlayer,{src:L,autoplay:!0,fit:"contain",alignment:"bottom"})}),(0,t.jsx)(a.default,{className:"relative z-10",displaySettings:g,children:(0,t.jsx)(n.default,{className:"w-full",displaySettings:u,children:(0,t.jsx)(i.default,{Text:{html:v?.html??"",json:null},HeadingLevel:"h1",DisplayAs:"h1",displaySettings:x})})}),(0,t.jsx)(a.default,{displaySettings:p,className:"relative z-10 container mx-auto mt-auto",children:(0,t.jsx)(n.default,{displaySettings:f,children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-8 text-center lg:items-start lg:text-left",children:[_?.html&&(0,t.jsx)(d.EditableHtml,{field:"BodyText",html:_.html,className:"prose font-body lg:text-body-base max-w-none text-2xl/tight font-(--font-weight-body-medium) text-(--color-primary-lfgreen)"}),S&&(0,t.jsx)(o.Button,{variant:"primary",size:"default",asChild:!0,children:(0,t.jsx)("a",{href:S,children:j})})]})})})]})}e.s(["default",0,y],249156),e.i(249156),e.s(["HeroHomeBlockFragment",()=>c.HeroHomeBlockFragment,"default",0,y],442052)},324205,function(e){e.n(e.i(442052))},666145,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment HeroHomeBlockFragment on HeroHomeBlock {
    _modified
    HeadingText {
      html
    }
    BodyText {
      html
    }
    CallToAction {
      url {
        default
      }
      text
      title
      target
    }
    BackgroundImage {
      url {
        default
      }
      item {
        ... on cmp_PublicImageAsset {
          Url
        }
      }
    }
    BackgroundImages {
      url {
        default
      }
      item {
        ... on cmp_PublicImageAsset {
          Url
          AltText
        }
      }
    }
    HeroAnimation {
      key
      url {
        default
      }
    }
  }
`);e.s(["HeroHomeBlockFragment",0,t])}]);