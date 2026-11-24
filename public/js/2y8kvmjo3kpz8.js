(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,958173,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment AccordionEntryBlockFragment on AccordionEntryBlock {
    Heading
    MainContent {
      html
    }
    OpenedByDefault
  }
`);e.s(["AccordionEntryBlockFragment",0,t])},18755,e=>{"use strict";var t=e.i(843476),a=e.i(179261),l=e.i(647163),r=e.i(529255),o=e.i(96684);e.s(["CardAuthorCard",0,function({contact:e,href:n,colorScheme:i="dark",showCompany:s=!0,fullHeight:c=!0,useModal:m=!1,contactProfile:d,deepLinkParam:u,deepLinkId:y,_metadata:f=null}){let p=`${e?.FirstName??""} ${e?.LastName??""}`.trim();if(!p&&!e?.ProfilePhoto)return null;let g="light"===i,h=p.split(/\s+/).map(e=>e[0]).join("").toUpperCase().slice(0,2),x=e?.ProfilePhoto,k=x?.item?.Url,w=x?.item?.AltText,C=x?.url?.default??k??null,v=C?(0,a.cmpImageUrl)(C,640):null,T=w??p,b=e?.JobTitle,N=s?e?.Company:null,F=m&&!!d,j=!!n||!!f?.url?.default||F,_=n??f?.url?.default??"",B=(0,l.cn)("relative aspect-8/7 w-full overflow-clip rounded-xs",j&&"group-focus-visible:ring-2 group-focus-visible:ring-(--color-secondary-ltblue)"),A=g?"text-(--color-secondary-darkfir)":"text-(--color-primary-1)",L=(0,t.jsx)("div",{className:(0,l.cn)("@container w-full",c&&"h-full"),children:(0,t.jsxs)("div",{className:(0,l.cn)("flex w-full flex-col gap-3 @[15rem]:gap-6",j&&"group cursor-pointer",c&&"h-full"),children:[v?(0,t.jsx)("div",{className:B,children:(0,t.jsx)("img",{loading:"lazy",decoding:"async",src:v,alt:T,width:316,height:276,className:(0,l.cn)("absolute inset-0 size-full object-cover",j&&"transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-100")})}):(0,t.jsx)("div",{className:(0,l.cn)(B,"flex items-center justify-center p-1 @[15rem]:p-2",g?"bg-(--color-tertiary-midfir)":"bg-(--color-tertiary-4)"),children:(0,t.jsx)("div",{className:(0,l.cn)("rounded-xxs flex grow items-center justify-center self-stretch",g?"bg-(--color-secondary-darkfir)":"bg-(--color-tertiary-5)"),children:(0,t.jsx)("span",{className:(0,l.cn)("font-headline text-headline-l @[15rem]:text-headline-3xl leading-none font-(--font-weight-headline-extrabold)",g?"text-(--color-tertiary-4)":"text-(--color-tertiary-2)"),children:h})})}),(0,t.jsxs)("div",{className:(0,l.cn)("flex flex-col gap-2.5 pr-4 @[15rem]:gap-2 @[15rem]:pr-8",c&&"mb-auto"),children:[p&&(0,t.jsx)("h3",{className:(0,l.cn)("font-headline text-headline-4xs @[15rem]:text-headline-xs leading-[1.04] font-(--font-weight-headline-extrabold) wrap-break-word",A),children:(0,l.decodeText)(p)}),(b||N)&&(0,t.jsxs)("p",{className:"text-body-xs leading-[1.3] wrap-break-word",children:[b&&(0,t.jsx)("span",{className:(0,l.cn)("font-body-bold",A),children:(0,l.decodeText)(b)}),b&&N&&(0,t.jsx)("span",{"aria-hidden":"true",className:(0,l.cn)("font-body-medium px-2",g?"text-(--color-tertiary-4)":"text-(--color-primary-3)"),children:"|"}),N&&(0,t.jsx)("span",{className:(0,l.cn)("font-body-medium",g?"text-(--color-tertiary-7)":"text-(--color-tertiary-5)"),children:(0,l.decodeText)(N)})]})]})]})});return F&&d?(0,t.jsx)(r.CardAuthorModalTrigger,{contact:d,className:(0,l.cn)(c&&"h-full"),deepLinkParam:u,deepLinkId:y,children:L}):_?(0,t.jsx)("a",{href:_,...(0,o.getExternalLinkProps)(_),className:(0,l.cn)("block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary-ltblue)",c&&"h-full"),children:L}):L}])},222022,e=>{"use strict";var t=e.i(843476),a=e.i(179261),l=e.i(647163),r=e.i(96684);function o({authorName:e,initials:a,imageUrl:r,imageAlt:n,authorTitle:i,companyName:s,isDark:c}){return(0,t.jsxs)("div",{className:"group flex items-start gap-4",children:[r?(0,t.jsx)("div",{className:"rounded-3xs size-[50px] shrink-0 overflow-clip",children:(0,t.jsx)("img",{loading:"lazy",decoding:"async",src:r,alt:n,width:50,height:50,className:"size-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"})}):(0,t.jsx)("div",{className:`rounded-3xs flex size-[50px] shrink-0 items-center justify-center ${c?"bg-(--color-tertiary-midfir)":"bg-(--color-tertiary-4)"}`,children:(0,t.jsx)("span",{className:`font-headline text-body-base block leading-none font-(--font-weight-headline-extrabold) ${c?"text-(--color-tertiary-5)":"text-(--color-tertiary-7)"}`,children:a})}),(0,t.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col items-start leading-[1.35]",children:[(0,t.jsx)("span",{className:`font-body-bold text-body-xxs ${c?"text-(--color-primary-1)":"text-(--color-secondary-darkfir)"}`,children:(0,l.decodeText)(e)}),(i||s)&&(0,t.jsxs)("div",{className:`text-body-3xs flex w-full flex-col items-start ${c?"text-(--color-tertiary-5)":"text-(--color-tertiary-7)"}`,children:[i&&(0,t.jsx)("span",{className:"font-body-medium",children:(0,l.decodeText)(i)}),s&&(0,t.jsx)("span",{className:"font-(--font-weight-body-normal)",children:(0,l.decodeText)(s)})]})]})]})}function n({authorName:e,initials:a,imageUrl:r,imageAlt:o,authorTitle:i,companyName:s,isDark:c,isInteractive:m,orientation:d}){let u="landscape"===d,y=c?"text-(--color-primary-1)":"text-(--color-secondary-darkfir)",f=(0,l.cn)("relative aspect-8/7 w-[165px] max-w-full shrink-0 overflow-clip rounded-xs",m&&"group-focus-visible:ring-2 group-focus-visible:ring-(--color-secondary-ltblue)");return(0,t.jsx)("div",{className:"@container w-full",children:(0,t.jsxs)("div",{className:(0,l.cn)("flex flex-col items-start gap-3",u&&"@[19rem]:flex-row @[19rem]:items-end",m&&"group cursor-pointer"),children:[r?(0,t.jsx)("div",{className:f,children:(0,t.jsx)("img",{loading:"lazy",decoding:"async",src:r,alt:o,width:165,height:144,className:(0,l.cn)("absolute inset-0 size-full object-cover",m&&"transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-100")})}):(0,t.jsx)("div",{className:(0,l.cn)(f,"flex items-center justify-center p-1",c?"bg-(--color-tertiary-midfir)":"bg-(--color-tertiary-4)"),children:(0,t.jsx)("div",{className:(0,l.cn)("rounded-xxs flex grow items-center justify-center self-stretch",c?"bg-(--color-secondary-darkfir)":"bg-(--color-tertiary-5)"),children:(0,t.jsx)("span",{className:(0,l.cn)("font-headline text-headline-l leading-[1.04] font-(--font-weight-headline-extrabold)",c?"text-(--color-tertiary-4)":"text-(--color-tertiary-2)"),children:a})})}),(0,t.jsxs)("div",{className:(0,l.cn)("flex w-full min-w-0 flex-col gap-2 pr-4",u&&"@[19rem]:flex-1"),children:[(0,t.jsx)("span",{className:(0,l.cn)("font-headline text-headline-4xs leading-[1.04] font-(--font-weight-headline-extrabold) wrap-break-word",y),children:(0,l.decodeText)(e)}),(i||s)&&(0,t.jsxs)("div",{className:(0,l.cn)("text-body-3xs flex w-full flex-col items-start leading-[1.35] wrap-break-word",u&&"@[19rem]:gap-1"),children:[i&&(0,t.jsx)("span",{className:(0,l.cn)("font-body-medium",y),children:(0,l.decodeText)(i)}),s&&(0,t.jsx)("span",{className:(0,l.cn)("font-(--font-weight-body-normal)",c?"text-(--color-tertiary-5)":"text-(--color-tertiary-7)"),children:(0,l.decodeText)(s)})]})]})]})})}e.s(["CardAuthorMd",0,function({contact:e,href:l,colorScheme:i="light",showCompany:s=!0,layout:c="compact"}){let m=`${e.FirstName??""} ${e.LastName??""}`.trim();if(!m)return null;let d="compact"===c,u=e.ProfilePhoto,y=u?.item?.Url,f=u?.url?.default??y??null,p=f?(0,a.cmpImageUrl)(f,d?100:340):null,g={authorName:m,initials:m.split(/\s+/).map(e=>e[0]).join("").toUpperCase().slice(0,2),imageUrl:p,imageAlt:u?.item?.AltText??m,authorTitle:e.JobTitle,companyName:s?e.Company:null,isDark:"dark"===i,isInteractive:!!l},h="compact"===c?(0,t.jsx)(o,{...g}):(0,t.jsx)(n,{...g,orientation:c});return l?(0,t.jsx)("a",{href:l,...(0,r.getExternalLinkProps)(l),className:"block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary-ltblue)",children:h}):h}])},591852,e=>{"use strict";var t=e.i(843476),a=e.i(580750),l=e.i(967268),r=e.i(233065),o=e.i(13240),n=e.i(18755),i=e.i(222022),s=e.i(999788);e.i(289283);let c={md:"portrait",mdLandscape:"landscape",mdCompact:"compact"};async function m(e){let m=e.locale||r.DEFAULT_LOCALE,d=e.fullHeight??!(0,l.parseBoolean)(e.displaySettings?.disableFullHeight);if("contact"in e&&e.contact)return(0,t.jsx)(n.CardAuthorCard,{...e,fullHeight:d});let u=e.Author?.key;if(!u)return null;let y=e.ResourceUrl?.url?.default,{colorScheme:f="dark",cardSize:p="default",showCompany:g="true"}=e.displaySettings??{},h=c[p],x="sm"!==p&&!h&&(e.useModal??!(0,l.parseBoolean)(e.displaySettings?.disableModal)),k=null,w=null;if(x&&(w=(await (0,o.loadContactProfilesByKeys)([u],m)).get(u)??null),w)k=w;else{let e=await a.DataLoader.getContactByKey(u,void 0,m);if(!e.success)return null;k=e.data}if(!k?.FirstName)return null;let C={contact:k,href:y,colorScheme:"light"===f||"neutral2"===f?"light":"dark",showCompany:void 0===g||(0,l.parseBoolean)(g)};return"sm"===p?(0,t.jsx)(s.CardAuthorSm,{...C,colorScheme:function(e){switch(e){case"dark":case"neutral2":case"none":return e;default:return"neutral1"}}(f)}):h?(0,t.jsx)(i.CardAuthorMd,{...C,layout:h}):(0,t.jsx)(n.CardAuthorCard,{...C,_metadata:null,fullHeight:d,useModal:x,contactProfile:w})}e.s(["default",0,m])},616406,e=>{"use strict";var t=e.i(843476),a=e.i(271645),l=e.i(983989),r=e.i(191219),o=e.i(833219),n=e.i(233065),i=e.i(490234),s=e.i(470367),c=e.i(78133),m=e.i(203244),d=e.i(72814),u=e.i(610460),y=e.i(831899),f=e.i(222012),p=e.i(863692),g=e.i(612841),h=e.i(422207),x=e.i(114347),k=e.i(591852),w=e.i(292597);let C=(0,l.graphql)(`
    query GetCarouselCardItemsByKeys($keys: [String!]!, $locales: [Locales]) {
      _Content(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          __typename
          _metadata {
            key
            types
          }
          ...CardHighlightBlockFragment
          ...CompanyBlockFragment
          ...VideoDisplayBlockFragment
          ...CardCustomerStoryBlockFragment
          ...CardCustomerQuoteBlockFragment
          ...ImageDisplayBlockFragment
          ...QuoteBlockFragment
          ...CalloutQuoteBlockFragment
          ...ImageTextContainerBlockFragment
        }
      }
    }
  `,[s.CardHighlightBlockFragment,c.CompanyBlockFragment,m.VideoDisplayBlockFragment,u.CardCustomerStoryBlockFragment,y.CardCustomerQuoteBlockFragment,f.ImageDisplayBlockFragment,p.QuoteBlockFragment,g.CalloutQuoteBlockFragment,h.ImageTextContainerBlockFragment]);async function v(l){let s,{Items:c,ShowArrows:m,AutoScroll:u}=(0,r.readFragment)(w.CarouselCardsBlockShallowFragment,l),{displaySettings:y,preview:f,children:p}=l,g=l.locale||n.DEFAULT_LOCALE,h=c?.map(e=>e?.key).filter(Boolean)??[],v=p,T=p?a.default.Children.count(p):0;if(h.length>0&&!p){let{default:a}=await e.A(348400),l=await (0,o.fetchByKeysWithEnFallback)(C,"_Content",h,g,{cacheTag:"carousel-cards-items"}),{gap:r,colorScheme:n}=y??{},i="dark"===n?"dark":"light",c=l.map(e=>{if("CompanyBlock"===e.__typename&&"compact"===r){let t=(e.displaySettings??[]).filter(e=>"variant"!==e.key);return{...e,displaySettings:[...t,{key:"variant",value:"small"}]}}return e});if(c.length>0){let e=c.map((e,l)=>{let r=e._metadata?.types?.includes("ContactBlock")??!1,o=r?w.AUTHOR_CARD_WIDTH:void 0,n=null;if(r){let a=e._metadata?.key;n=a?(0,t.jsx)(k.default,{__typename:"CardAuthorBlock",Author:{key:a},ResourceUrl:null,locale:g,displaySettings:{colorScheme:i,cardSize:"default",showCompany:"true"},useModal:!0,fullHeight:!1,preview:f},`author-${l}`):null}else if("VideoDisplayBlock"===e.__typename){let a=(0,d.getVideoSourceData)(e.VideoReference);n=a?(0,t.jsx)(x.default,{url:a.primary.src,poster:a.poster,mimeType:a.primary.type,aspectRatio:a.aspectRatio??"16/9"},`video-${l}`):null}else n="CompanyBlock"===e.__typename?(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(a,{blocks:[e],locale:g,preview:f})},`company-${l}`):(0,t.jsx)(a,{blocks:[e],locale:g,preview:f},`${e.__typename??"block"}-${l}`);return null===n?null:{node:n,width:o}}).filter(e=>null!==e);v=e.map(e=>e.node),s=e.map(e=>e.width),T=e.length}}if(1===T){let{itemWidth:e}=y??{},a=s?.[0]??("large"===e?"min(892px, calc(100vw - 32px))":void 0);return(0,t.jsx)("div",{className:"flex w-full justify-center",children:(0,t.jsx)("div",{className:"shrink-0",style:a?{width:a}:void 0,children:v})})}return(0,t.jsx)("div",{className:"-my-2 w-full min-w-0 overflow-hidden py-2 contain-[inline-size]",children:(0,t.jsx)(i.default,{ShowArrows:m,AutoScroll:u,displaySettings:y,preview:f,itemWidths:s,children:v})})}e.s(["default",0,v],855525),e.i(855525),e.s(["CarouselCardsBlockShallowFragment",()=>w.CarouselCardsBlockShallowFragment,"default",0,v],616406)},267001,function(e){e.n(e.i(616406))},13240,e=>{"use strict";var t=e.i(983989),a=e.i(191219),l=e.i(564810),r=e.i(233065),o=e.i(756933);let n=(0,t.graphql)(`
    query GetContactProfilesByKeys($keys: [String!]!, $locales: [Locales]) {
      ContactBlock(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          ...ContactProfileFragment
        }
      }
    }
  `,[o.ContactProfileFragment]);async function i(e,t=r.DEFAULT_LOCALE){let s=new Map,c=[...new Set(e.filter(e=>!!e))];if(!c.length)return s;let m=await (0,l.executeQuery)(n,{keys:c,locales:[t]},{cacheTag:"contact-profiles"});for(let e of m?.ContactBlock?.items??[]){if(!e)continue;let t=(0,a.readFragment)(o.ContactProfileFragment,e);t._metadata?.key&&s.set(t._metadata.key,t)}return s}let s=(0,t.graphql)(`
    query GetCurrentEmployeeProfiles($limit: Int = 100, $locales: [Locales]) {
      ContactBlock(
        locale: $locales
        where: { CurrentOptimizelyEmployee: { eq: true } }
        limit: $limit
      ) {
        items {
          ...ContactProfileFragment
        }
      }
    }
  `,[o.ContactProfileFragment]);async function c({excludeKeys:e=[],limit:t=100,locale:n=r.DEFAULT_LOCALE}={}){let i=new Set(e.filter(e=>!!e)),m=await (0,l.executeQuery)(s,{limit:t,locales:[n]},{cacheTag:"contact-profiles"}),d=[];for(let e of m?.ContactBlock?.items??[]){if(!e)continue;let t=(0,a.readFragment)(o.ContactProfileFragment,e),l=t._metadata?.key;!(!l||i.has(l))&&(t.FirstName||t.LastName)&&d.push(t)}return d.sort((e,t)=>{let a=(e.LastName??"").toLowerCase(),l=(t.LastName??"").toLowerCase();return a!==l?a.localeCompare(l):(e.FirstName??"").toLowerCase().localeCompare((t.FirstName??"").toLowerCase())}),d}e.s(["loadContactProfilesByKeys",0,i,"loadCurrentEmployeeProfiles",0,c])},833219,e=>{"use strict";var t=e.i(564810),a=e.i(233065),l=e.i(245741);function r(e,t){let a=new Map;for(let t of e){let e=(0,l.getItemKey)(t);e&&!a.has(e)&&a.set(e,t)}return t.map(e=>a.get(e)).filter(e=>void 0!==e)}async function o(e,n,i,s,c={}){if(!i.length)return[];let m=async(a,l)=>{let r=await (0,t.executeQuery)(e,{keys:i,locales:[a]},{preview:c.preview,cacheTag:l});return(r?.[n]?.items??[]).filter(e=>null!=e)},d=await m(s,c.cacheTag);if(s===a.DEFAULT_LOCALE)return r(d,i);try{let e=c.cacheTag?`${c.cacheTag}:fallback-en`:void 0,t=await m(a.DEFAULT_LOCALE,e);if(t.length){let e=new Set(d.map(e=>(0,l.getItemKey)(e)).filter(Boolean)),a=t.filter(t=>{let a=(0,l.getItemKey)(t);return null!==a&&!e.has(a)}),o=[...(0,l.mergeItemsFromEn)(d,t),...a];return r(o,i)}}catch(e){console.error(`fetchByKeysWithEnFallback(${n}) en fallback:`,e)}return r(d,i)}e.s(["fetchByKeysWithEnFallback",0,o])},48468,e=>{"use strict";var t=e.i(564810),a=e.i(983989),l=e.i(233065),r=e.i(66799);(0,a.graphql)(`
  query GetTaxonomyTerms($ids: [String], $locales: [Locales]) {
    _TaxonomyTerm(ids: $ids, locale: $locales, limit: 100) {
      items {
        _metadata {
          key
          displayName
          description
          taxonomy
          types
          usage
          status
          parent
          locale
        }
      }
    }
  }
`),(0,a.graphql)(`
  query GetChildTaxonomyTerms($parent: String, $locales: [Locales]) {
    _TaxonomyTerm(
      where: { _metadata: { parent: { eq: $parent } } }
      locale: $locales
      limit: 100
    ) {
      items {
        _metadata {
          key
          displayName
          description
          taxonomy
          types
          usage
          status
          parent
          locale
        }
      }
    }
  }
`);let o=(0,a.graphql)(`
  query GetTaxonomyTermsByTaxonomy(
    $taxonomy: String
    $locales: [Locales]
    $limit: Int = 100
    $skip: Int = 0
  ) {
    _TaxonomyTerm(
      where: { _metadata: { taxonomy: { eq: $taxonomy } } }
      locale: $locales
      orderBy: { _metadata: { key: ASC } }
      limit: $limit
      skip: $skip
    ) {
      total
      items {
        _metadata {
          key
          displayName
          description
          taxonomy
          types
          usage
          status
          parent
          locale
        }
      }
    }
  }
`),n=e=>[e];async function i(e,a,l){let r=a??"any",i=[];for(let s=0;s<50;s++){let c=100*s,m=await (0,t.executeQuery)(o,{taxonomy:e,locales:a?n(a):void 0,limit:100,skip:c},{preview:l.preview,cacheTag:(l.cacheTag??`taxonomy:${r}:${e}:${c}`).slice(0,255)}),d=(m?._TaxonomyTerm?.items??[]).flatMap(e=>{let t=e?._metadata;return t?.key?[{key:t.key,displayName:t.displayName??null,description:t.description??null,taxonomy:t.taxonomy??null,types:(t.types??[]).filter(e=>"string"==typeof e),usage:t.usage??null,status:t.status??null,parent:t.parent??null,locale:t.locale??null}]:[]});i.push(...d);let u=m?._TaxonomyTerm?.total??0;if(d.length<100||i.length>=u)return i}return((...e)=>{})("[category-loader] taxonomy sweep hit the page cap:",{taxonomy:e,locale:a,pages:50}),i}async function s(e,t={}){if(!e)return[];let a=t.locale||l.DEFAULT_LOCALE;try{if(a===l.DEFAULT_LOCALE)return await i(e,a,t);var r=await i(e,null,t);let o=new Map;for(let e of r)o.set(e.key,[...o.get(e.key)??[],e]);return Array.from(o.values()).flatMap(e=>{let t=e.find(e=>e.locale===a)??e.find(e=>e.locale===l.DEFAULT_LOCALE)??e[0];return t?[t]:[]})}catch(t){return((...e)=>{console.error(...e)})("[category-loader] taxonomy sweep failed:",{error:t,taxonomy:e,locale:a}),[]}}async function c(e,t={}){return function(e){let t=new Map;for(let a of e)a.key&&!t.has(a.key)&&t.set(a.key,{...a,children:[]});let a=e=>{let a=e.parent?(0,r.taxonomyTermKey)(e.parent):"";return a&&a!==e.key&&t.has(a)?a:""},l=[];for(let e of t.values()){let r=a(e);r?t.get(r)?.children.push(e):l.push(e)}let o=new Set,n=e=>{let t=[e];for(;t.length>0;){let e=t.pop();!e||o.has(e.key)||(o.add(e.key),t.push(...e.children))}};for(let e of(l.forEach(n),t.values())){if(o.has(e.key))continue;let r=t.get(a(e))?.children,i=r?.indexOf(e)??-1;r&&i>=0&&r.splice(i,1),l.push(e),n(e)}return l}(await s(e,t))}let m="Topic";async function d(e){return new Map((await s(r.CATEGORY_TAXONOMY,e)).map(e=>[e.key,e]))}function u(e){let t="string"==typeof e?e:e?.key;return t?(0,r.taxonomyTermKey)(t):""}function y(e){return(e??[]).filter(e=>"string"==typeof e&&""!==(0,r.taxonomyTermKey)(e))}function f(e,t){return!!e?.parent&&(0,r.taxonomyTermKey)(e.parent)===t}async function p(e,t,a={}){let l=u(t),o=y(e);if(!l||0===o.length)return[];let n=await d(a);return o.filter(e=>f(n.get((0,r.taxonomyTermKey)(e)),l))}function g(e,t,a){let l=new Set,o=[];for(let n of y(e)){let e=(0,r.taxonomyTermKey)(n),i=a.get(e);!l.has(e)&&f(i,t)&&(l.add(e),o.push(i?.displayName||e))}return o}async function h(e,t=m,a={}){let l=u(t),r=y(e);return l&&0!==r.length?g(r,l,await d(a)):[]}async function x(e,t=m,a={}){let l=u(t),o=y(e);return l&&0!==o.length?function(e,t,a){let l=new Set,o=[];for(let n of y(e)){let e=(0,r.taxonomyTermKey)(n),i=a.get(e);!l.has(e)&&f(i,t)&&(l.add(e),o.push(e))}return o}(o,l,await d(a)):[]}async function k(e,t=m,a={}){let l=u(t),o=(e??[]).filter(e=>"string"==typeof e?.name&&""!==(0,r.taxonomyTermKey)(e.name));if(!l||0===o.length)return[];let n=await d(a),i=new Set,s=[];for(let e of o){let t=(0,r.taxonomyTermKey)(e.name),a=n.get(t);!i.has(t)&&f(a,l)&&(i.add(t),s.push({__typename:"StringFacet",name:t,count:e.count??0,label:a?.displayName||t}))}return s}async function w(e,t,a={}){let l=await C(e,y(t),e=>e,a),r={};for(let[e,t]of l)r[e]=t.map(({key:e,term:t})=>t?.displayName||e);return r}async function C(e,t,a,l){let o=new Map;for(let t of e??[]){let e=u(t);e&&!o.has(e)&&o.set(e,[])}if(0===o.size||0===t.length)return o;let n=await d(l),i=new Map;for(let e of t){let t=(0,r.taxonomyTermKey)(a(e)),l=n.get(t),s=l?.parent?(0,r.taxonomyTermKey)(l.parent):"",c=s?o.get(s):void 0;if(!t||!c)continue;let m=i.get(s)??new Set;m.has(t)||(m.add(t),i.set(s,m),c.push({key:t,term:l,entry:e}))}return o}async function v(e){return e?.flatMap(e=>{let t=e?.name?(0,r.taxonomyTermKey)(e.name):"";return t?[{__typename:"StringFacet",name:t,count:e?.count??0}]:[]})}async function T(e,t={}){let{parent:a=m,...l}=t,r=u(a);if(!r||0===e.length)return[...e];let o=await d(l);return e.map(e=>{let t=e.tags;return Array.isArray(t)&&t.length>0?e:{...e,tags:g(e._itemMetadata?.categories,r,o)}})}async function b(e,t){let a=(e??[]).flatMap(e=>{let t="string"==typeof e?(0,r.taxonomyTermKey)(e):"";return t?[t]:[]});if(0===a.length)return[];let l=await c(r.CATEGORY_TAXONOMY,{locale:t}),o=new Set,n=[];for(let e of a){if(o.has(e))continue;o.add(e);let t=function(e,t){let a=t?(0,r.taxonomyTermKey)(t):"";if(!a)return null;let l=[...e];for(;l.length>0;){let e=l.pop();if(e){if(e.key===a)return e;l.push(...e.children)}}return null}(l,e),a=t?.children??[],i=a.length>0?a:t?[t]:[];n.push({param:e,label:t?.displayName||e,type:"checkbox",value:e,childFacets:i.map(e=>({param:e.key,label:e.displayName||e.key,type:"checkbox",value:e.key}))})}return n}e.s(["TOPIC_PARENT",0,m,"attachCategoryTags",0,T,"categoriesToFacets",0,b,"categoryFacetsByParent",0,k,"categoryKeysByParent",0,x,"categoryLabelsByParent",0,h,"filterCategoriesByParent",0,p,"graphFacetToSiteFacet",0,v,"groupCategoryLabelsByParent",0,w],48468)},812354,e=>{"use strict";var t=e.i(983989),a=e.i(804300);e.i(787600);var l=e.i(279663);let r=(0,t.graphql)(`
    fragment PressReleasePageExperienceFragment on PressReleasePageExperience {
      __typename
      Heading
      Introduction
      CompanyContentLink {
        key
      }
      MainBody {
        html
      }
      SitemapSettings {
        ExcludeFromSitemap
        Priority
        ChangeFrequency
      }
      _modified
      _metadata {
        published
        lastModified
        key
        version
        displayName
        variation
        url {
          default
          type
          hierarchical
          graph
        }
      }
      _itemMetadata {
        type
        categories
      }
      PromoImage {
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      ParentPage: _link(type: PATH) {
        PressReleaseListingExperience {
          item {
            AboutOptimizelyText {
              html
            }
            MediaContactDetails {
              html
            }
          }
        }
      }
      MetaDescription
      MetaTitle
      Schemas
      composition {
        ...VBCompositionFragment
      }
    }
  `,[a.VBCompositionFragment,l.CmpPublicImageAssetFragment]);e.s(["PressReleasePageExperienceFragment",0,r])}]);