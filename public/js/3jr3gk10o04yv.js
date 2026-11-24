(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81683,e=>{"use strict";var r=e.i(541873),t=e.i(78133);e.s(["CompanyBlockFragment",()=>t.CompanyBlockFragment,"default",()=>r.default])},358505,function(e){e.n(e.i(81683))},541873,e=>{"use strict";var r=e.i(843476),t=e.i(657688),a=e.i(717052),n=e.i(967268),s=e.i(647163);e.i(78133);let o={small:{containerClasses:"rounded-xs p-px",cardClasses:"rounded-[11px]",layoutClasses:"flex flex-row items-center gap-4 py-2 pl-2 pr-6",iconContainerSize:"size-10 rounded-5xs p-1",iconSize:24,textClasses:"font-body text-body-xs font-normal leading-[1.3]",hoverTranslate:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5",isInteractive:!0},medium:{containerClasses:"",cardClasses:"",layoutClasses:"flex flex-row items-center gap-3 pr-6",iconContainerSize:"size-12 rounded-5xs p-1",iconSize:24,textClasses:"font-body text-body-s font-normal leading-[1.25]",hoverTranslate:"",isInteractive:!1},large:{containerClasses:"rounded-xs p-px",cardClasses:"rounded-[11px]",layoutClasses:"flex flex-row items-center gap-5 py-1 pl-1 pr-10",iconContainerSize:"size-16 rounded-xxs",iconSize:32,textClasses:"font-body text-body-xs font-normal leading-[1.3]",hoverTranslate:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5",isInteractive:!0},xlarge:{containerClasses:"rounded-xs p-px",cardClasses:"rounded-[11px]",layoutClasses:"flex flex-row items-center gap-8 py-2 pl-2 pr-16",iconContainerSize:"size-24 rounded-xxs p-1",iconSize:48,textClasses:"font-body text-body-base font-normal leading-[1.25]",hoverTranslate:"group-hover:translate-x-1 group-hover:-translate-y-1",isInteractive:!0}};function i({initial:e,size:t,label:a}){return(0,r.jsxs)("svg",{width:t,height:t,viewBox:"0 0 64 64",role:"img","aria-label":a,xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{width:"64",height:"64",rx:"12",fill:"#e4f0da"}),(0,r.jsx)("text",{x:"32",y:"32",textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-sans-serif, system-ui, sans-serif",fontSize:"32",fontWeight:"600",fill:"#08251a",children:e})]})}e.s(["default",0,function({CompanyName:e,LogoMark:l,FullColorLogoContentLink:c,WebsiteUrl:d,opticonSponsorLevel:m,displaySettings:p}){let{variant:u="large",colorScheme:g="neutral",background:x="none",showSponsorLevel:f=!1}=p??{},y=o[u]||o.large,C="dark"===g,h="white"===g,b=l&&(0,s.isCmpPublicImageAsset)(l?.item)?(l?.item).Url??null:c&&(0,s.isCmpPublicImageAsset)(c?.item)?(c?.item).Url??null:null,v=(e?.trim()?.[0]??"O").toUpperCase(),k=()=>"medium"===u?"":C?"bg-(--color-tertiary-midfir)":"bg-(--color-tertiary-4)",z=m?.trim()??"",j=(0,n.parseBoolean)(f)&&"xlarge"===u&&""!==z,I=(0,r.jsx)("div",{className:(0,s.cn)(y.cardClasses,(()=>{if("medium"===u){let e={none:"",neutral:"bg-(--color-tertiary-2)",opal:"bg-(--color-primary-3)",green:"bg-(--color-primary-lfgreen)",pink:"bg-(--color-tertiary-ltpink)",blue:"bg-(--color-secondary-ltblue)"}[x]||"";return"none"!==x?(0,s.cn)(e,"rounded-xs px-3 py-2"):e}return C?"bg-(--color-tertiary-midfir)":h?"bg-(--color-primary-1)":"bg-(--color-tertiary-2)"})(),y.isInteractive&&"transition-all duration-200 ease-out group-active:translate-x-0 group-active:translate-y-0",y.isInteractive&&y.hoverTranslate),children:(0,r.jsxs)("div",{className:y.layoutClasses,children:[(0,r.jsx)("div",{className:(0,s.cn)(y.iconContainerSize,"medium"===u?"":"small"===u&&C?"bg-(--color-tertiary-midfir)":"bg-(--color-primary-3)","flex shrink-0 items-center justify-center"),children:b?(0,r.jsx)(t.default,{src:b,alt:e||"Company logo",width:y.iconSize,height:y.iconSize,className:"object-contain"}):(0,r.jsx)(i,{initial:v,size:y.iconSize,label:e||"Company logo"})}),e&&(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("span",{className:(0,s.cn)(y.textClasses,C&&"medium"!==u?"text-(--color-primary-1)":"text-(--color-secondary-darkfir)"),children:e}),j&&(0,r.jsx)(a.Badge,{label:z,color:C?"neutral":"darkgreen",filled:!1,size:"sm",className:"self-start"})]})]})}),S=d?.default;return y.isInteractive&&S?(0,r.jsx)("a",{href:S,className:(0,s.cn)("group inline-block",y.containerClasses,k()),target:"_blank",rel:"noopener noreferrer",children:I}):y.isInteractive?(0,r.jsx)("div",{className:(0,s.cn)("group inline-block",y.containerClasses,k()),children:I}):(0,r.jsx)("div",{className:(0,s.cn)("inline-block",y.containerClasses),children:I})}])},78133,e=>{"use strict";var r=e.i(983989);let t=(0,r.graphql)(`
  fragment CompanyLogoAssetFragment on cmp_PublicImageAsset {
    __typename
    Url
    AltText
    Width
    Height
  }
`),a=(0,r.graphql)(`
    fragment CompanyBlockFragment on CompanyBlock {
      __typename
      CompanyName
      CompanyColor
      ExternalId
      IsTechPartner
      Tier
      TechPartnerEmail
      TechPartnerDescription
      TechPartnerLocations
      VideoWistiaId
      YoutubeId
      opticonSponsorLevel
      WebsiteUrl {
        default
      }
      NavigationUrlOverride {
        default
      }
      LogoMark {
        url {
          default
        }
        item {
          ...CompanyLogoAssetFragment
        }
      }
      FullColorLogoContentLink {
        url {
          default
        }
        item {
          ...CompanyLogoAssetFragment
        }
      }
      DarkLogoContentLink {
        url {
          default
        }
      }
    }
  `,[t]);e.s(["CompanyBlockFragment",0,a])}]);