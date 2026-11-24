(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7543,e=>{"use strict";var t=e.i(205436),a=e.i(222012);e.s(["ImageDisplayBlockFragment",()=>a.ImageDisplayBlockFragment,"default",()=>t.default])},16607,function(e){e.n(e.i(7543))},205436,e=>{"use strict";var t=e.i(843476),a=e.i(647163),l=e.i(967268);function i(e){if("cmp_PublicImageAsset"===e.__typename)return e.Url??null;let t=e._metadata;return t?.url?.default??null}function n(e){return e?e.url?.default?e.url.default:e.item?i(e.item):null:null}e.i(222012);let d={none:"",mobile:"hidden md:block",tablet:"max-md:block md:hidden lg:block",desktop:"lg:hidden",mobile_tablet:"hidden lg:block",tablet_desktop:"md:hidden"},o={cover:"object-cover",contain:"object-contain"},s={none:"",px_40:"h-[40px]",px_100:"h-[100px]",px_200:"h-[200px]",px_300:"h-[300px]",px_400:"h-[400px]",px_500:"h-[500px]",px_600:"h-[600px]"},m={none:"",sm:"rounded-xxs",md:"rounded-xs",lg:"rounded-sm",xl:"rounded-default"},u={inherit:"",none:"md:rounded-none",sm:"md:rounded-xxs",md:"md:rounded-xs",lg:"md:rounded-sm",xl:"md:rounded-default"},c={inherit:"",none:"lg:rounded-none",sm:"lg:rounded-xxs",md:"lg:rounded-xs",lg:"lg:rounded-sm",xl:"lg:rounded-default"},r={none:"",aspect_16_9:"aspect-video",aspect_8_7:"aspect-[8/7]",aspect_5_4:"aspect-[5/4]",aspect_4_3:"aspect-[4/3]",aspect_1_1:"aspect-square",aspect_21_9:"aspect-[21/9]"};e.s(["default",0,function({ImageReference:e,AltText:h,Caption:g,TabletImage:p,DesktopImage:_,sources:x,displaySettings:f}){var b,v;let y,{hiddenOn:I,objectFit:k,borderRadius:w,borderRadiusMd:A,borderRadiusLg:j,fixedHeight:T,aspectRatio:B,fillVertically:M}=f??{},P=e?.item??void 0,D=e?.url?.default??(P?i(P):null),U=P?.__typename==="cmp_PublicImageAsset"?h??P.AltText??"":h??"",{width:F,height:S}=P?"cmp_PublicImageAsset"===P.__typename?{width:P.Width??null,height:P.Height??null}:{width:P._imageMetadata?.width??null,height:P._imageMetadata?.height??null}:{width:null,height:null};if(!D)return g?(0,t.jsx)(t.Fragment,{children:g}):null;let z=d[I??"none"]??"",H=(0,a.cn)(m[w??"none"]??"",u[A??"inherit"]??"",c[j??"inherit"]??""),N=o[k??""]??"",W=s[T??"none"]??"",C=r[B??"none"]??"",R=T&&"none"!==T,q=B&&"none"!==B,K=(0,l.parseBoolean)(M),O=x??(b=n(_),v=n(p),y=[],b&&y.push({media:"(min-width: 1024px)",srcSet:b}),v&&y.push({media:"(min-width: 768px)",srcSet:v}),y),E=O.length>0,G=null!==F&&null!==S,J=!!q&&!R,L=R||q||K,Q=(0,a.cn)(z||void 0,J&&"relative",R&&W,!R&&q&&C,!R&&K&&"h-full",L&&"overflow-hidden",L&&H),V=J?(0,a.cn)("absolute inset-0 size-full",N||"object-cover"):L?(0,a.cn)("size-full",N||"object-cover"):(0,a.cn)("h-auto w-full",N,H);return E?(0,t.jsxs)("figure",{className:(0,a.cn)("image-display-block",Q),children:[(0,t.jsxs)("picture",{children:[O.map(e=>(0,t.jsx)("source",{media:e.media,srcSet:e.srcSet},e.media)),(0,t.jsx)("img",{loading:"lazy",decoding:"async",src:D,alt:U,width:G?F??void 0:void 0,height:G?S??void 0:void 0,className:V})]}),g]}):(0,t.jsxs)("figure",{className:(0,a.cn)("image-display-block",Q),children:[(0,t.jsx)("img",{loading:"lazy",decoding:"async",src:D,alt:U,width:G?F??void 0:void 0,height:G?S??void 0:void 0,className:V}),g]})}])},222012,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment ImageDisplayBlockFragment on ImageDisplayBlock {
    __typename
    AltText
    Caption
    ImageReference {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
          AltText
          Width
          Height
        }
        ... on ImageMedia {
          _metadata {
            url {
              default
            }
          }
          _imageMetadata {
            width
            height
          }
        }
      }
    }
    TabletImage {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
          AltText
          Width
          Height
        }
        ... on ImageMedia {
          _metadata {
            url {
              default
            }
          }
          _imageMetadata {
            width
            height
          }
        }
      }
    }
    DesktopImage {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
          AltText
          Width
          Height
        }
        ... on ImageMedia {
          _metadata {
            url {
              default
            }
          }
          _imageMetadata {
            width
            height
          }
        }
      }
    }
  }
`);e.s(["ImageDisplayBlockFragment",0,t])}]);