(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,958173,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment AccordionEntryBlockFragment on AccordionEntryBlock {
    Heading
    MainContent {
      html
    }
    OpenedByDefault
  }
`);e.s(["AccordionEntryBlockFragment",0,t])},248118,e=>{"use strict";var t=e.i(843476),a=e.i(647163),r=e.i(179261),n=e.i(967268),o=e.i(424557),l=e.i(470367);let i={neutral:{outer:"bg-(--color-tertiary-4)",inner:"bg-(--color-tertiary-2)",innerActive:"group-active:bg-(--color-tertiary-4)",text:"text-(--color-secondary-darkfir)",attribution:"text-(--color-secondary-darkfir)",logoTint:"bg-(--color-secondary-darkfir)"},dark:{outer:"bg-(--color-fir-800)",inner:"bg-(--color-tertiary-midfir)",innerActive:"group-active:bg-(--color-fir-800)",text:"text-(--color-primary-1)",attribution:"text-(--color-primary-1)",logoTint:"bg-(--color-primary-1)"},white:{outer:"bg-(--color-tertiary-4)",inner:"bg-(--color-primary-1)",innerActive:"group-active:bg-(--color-tertiary-4)",text:"text-(--color-secondary-darkfir)",attribution:"text-(--color-secondary-darkfir)",logoTint:"bg-(--color-secondary-darkfir)"}};async function s({Headline:e,CardHighlightAttribution:l,CompanyRef:c,ImageUrl:u,ImageAlt:p,ResourceUrl:m,displaySettings:y}){let{colorScheme:d="neutral"}=y??{},g=!(0,n.parseBoolean)(y?.disableFullHeight),f=u?.url?.default??u?.item?.Url??null,x=p??u?.item?.AltText??"",h=l?.html??null,k=i[d],T="dark"===d,{companyName:b,companyLogoUrl:v}=await (0,o.resolveCompanyBranding)(c?.key,{preferLight:T,preferFull:!0}),w=m?.url?.default,C=w?"a":"div",L=w?{href:w}:{};return(0,t.jsx)("div",{className:(0,a.cn)("@container flex",g?"size-full":"w-full"),"data-colorscheme":d,children:(0,t.jsx)(C,{...L,className:(0,a.cn)("group flex flex-1 rounded-[16px] p-px @[600px]:rounded-[26px]",k.outer,g&&"h-full",w&&(0,a.cn)("focus-visible:outline-2 focus-visible:outline-offset-2",T?"focus-visible:outline-(--color-primary-1)":"focus-visible:outline-(--color-secondary-darkfir)")),children:(0,t.jsx)("div",{className:(0,a.cn)("w-full overflow-clip rounded-[15px] @[600px]:rounded-[25px]",g&&"h-full",w&&"transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0"),children:(0,t.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-2 rounded-[12px] p-1 transition-colors duration-150 ease-out @[600px]:flex-row @[600px]:items-stretch @[600px]:gap-1.5 @[600px]:rounded-[20px] @[600px]:p-2",k.inner,g&&"h-full",w&&k.innerActive),children:[(0,t.jsxs)("div",{className:(0,a.cn)("order-last flex flex-col gap-12 px-4 pt-2 pb-4 @[600px]:order-first @[600px]:flex-1 @[600px]:justify-between @[600px]:gap-8 @[600px]:p-6",f&&"@[600px]:pr-10"),children:[v&&(0,t.jsx)("span",{role:"img","aria-label":b??"Company logo",className:(0,a.cn)("h-10 w-32 self-start",k.logoTint),style:{maskImage:`url(${v})`,WebkitMaskImage:`url(${v})`,maskRepeat:"no-repeat",WebkitMaskRepeat:"no-repeat",maskPosition:"left center",WebkitMaskPosition:"left center",maskSize:"contain",WebkitMaskSize:"contain"}}),(0,t.jsx)("div",{className:"flex flex-1 flex-col justify-center",children:e&&(0,t.jsx)("h3",{className:(0,a.cn)("font-headline text-headline-xxs @[600px]:text-headline-xl line-clamp-4 pb-1 leading-[1.1] font-(--font-weight-headline-extrabold)",k.text),children:(0,a.decodeText)(e)})}),h&&(0,t.jsx)("div",{className:(0,a.cn)("font-body text-body-3xs @[600px]:text-body-xs leading-[1.35] whitespace-pre-line @[600px]:leading-[1.3]",k.attribution),dangerouslySetInnerHTML:{__html:h}})]}),(0,t.jsx)("div",{className:"order-first @[600px]:order-last @[600px]:w-1/2 @[600px]:shrink-0",children:(0,t.jsx)("div",{className:"relative flex aspect-8/7 items-center justify-center overflow-hidden rounded-xl @[600px]:size-full @[600px]:rounded-2xl",children:(0,t.jsx)("img",{loading:"lazy",decoding:"async",src:f?(0,r.cmpImageUrl)(f,800):(0,r.placeholderImageUrl)(800),alt:x,className:"absolute inset-0 size-full object-cover"})})})]})})})})}e.s(["default",0,s],951472),e.i(951472),e.s(["CardHighlightBlockFragment",()=>l.CardHighlightBlockFragment,"default",0,s],248118)},364444,function(e){e.n(e.i(248118))},339992,e=>{"use strict";function t(e){return e?.item?.Url??""}e.s(["getFullColorImage",0,function(e){return t(e.FullColorLogoContentLink)},"getLogoMark",0,function(e){return t(e.LogoMark)}])},48468,e=>{"use strict";var t=e.i(564810),a=e.i(983989),r=e.i(233065),n=e.i(66799);(0,a.graphql)(`
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
`),l=e=>[e];async function i(e,a,r){let n=a??"any",i=[];for(let s=0;s<50;s++){let c=100*s,u=await (0,t.executeQuery)(o,{taxonomy:e,locales:a?l(a):void 0,limit:100,skip:c},{preview:r.preview,cacheTag:(r.cacheTag??`taxonomy:${n}:${e}:${c}`).slice(0,255)}),p=(u?._TaxonomyTerm?.items??[]).flatMap(e=>{let t=e?._metadata;return t?.key?[{key:t.key,displayName:t.displayName??null,description:t.description??null,taxonomy:t.taxonomy??null,types:(t.types??[]).filter(e=>"string"==typeof e),usage:t.usage??null,status:t.status??null,parent:t.parent??null,locale:t.locale??null}]:[]});i.push(...p);let m=u?._TaxonomyTerm?.total??0;if(p.length<100||i.length>=m)return i}return((...e)=>{})("[category-loader] taxonomy sweep hit the page cap:",{taxonomy:e,locale:a,pages:50}),i}async function s(e,t={}){if(!e)return[];let a=t.locale||r.DEFAULT_LOCALE;try{if(a===r.DEFAULT_LOCALE)return await i(e,a,t);var n=await i(e,null,t);let o=new Map;for(let e of n)o.set(e.key,[...o.get(e.key)??[],e]);return Array.from(o.values()).flatMap(e=>{let t=e.find(e=>e.locale===a)??e.find(e=>e.locale===r.DEFAULT_LOCALE)??e[0];return t?[t]:[]})}catch(t){return((...e)=>{console.error(...e)})("[category-loader] taxonomy sweep failed:",{error:t,taxonomy:e,locale:a}),[]}}async function c(e,t={}){return function(e){let t=new Map;for(let a of e)a.key&&!t.has(a.key)&&t.set(a.key,{...a,children:[]});let a=e=>{let a=e.parent?(0,n.taxonomyTermKey)(e.parent):"";return a&&a!==e.key&&t.has(a)?a:""},r=[];for(let e of t.values()){let n=a(e);n?t.get(n)?.children.push(e):r.push(e)}let o=new Set,l=e=>{let t=[e];for(;t.length>0;){let e=t.pop();!e||o.has(e.key)||(o.add(e.key),t.push(...e.children))}};for(let e of(r.forEach(l),t.values())){if(o.has(e.key))continue;let n=t.get(a(e))?.children,i=n?.indexOf(e)??-1;n&&i>=0&&n.splice(i,1),r.push(e),l(e)}return r}(await s(e,t))}let u="Topic";async function p(e){return new Map((await s(n.CATEGORY_TAXONOMY,e)).map(e=>[e.key,e]))}function m(e){let t="string"==typeof e?e:e?.key;return t?(0,n.taxonomyTermKey)(t):""}function y(e){return(e??[]).filter(e=>"string"==typeof e&&""!==(0,n.taxonomyTermKey)(e))}function d(e,t){return!!e?.parent&&(0,n.taxonomyTermKey)(e.parent)===t}async function g(e,t,a={}){let r=m(t),o=y(e);if(!r||0===o.length)return[];let l=await p(a);return o.filter(e=>d(l.get((0,n.taxonomyTermKey)(e)),r))}function f(e,t,a){let r=new Set,o=[];for(let l of y(e)){let e=(0,n.taxonomyTermKey)(l),i=a.get(e);!r.has(e)&&d(i,t)&&(r.add(e),o.push(i?.displayName||e))}return o}async function x(e,t=u,a={}){let r=m(t),n=y(e);return r&&0!==n.length?f(n,r,await p(a)):[]}async function h(e,t=u,a={}){let r=m(t),o=y(e);return r&&0!==o.length?function(e,t,a){let r=new Set,o=[];for(let l of y(e)){let e=(0,n.taxonomyTermKey)(l),i=a.get(e);!r.has(e)&&d(i,t)&&(r.add(e),o.push(e))}return o}(o,r,await p(a)):[]}async function k(e,t=u,a={}){let r=m(t),o=(e??[]).filter(e=>"string"==typeof e?.name&&""!==(0,n.taxonomyTermKey)(e.name));if(!r||0===o.length)return[];let l=await p(a),i=new Set,s=[];for(let e of o){let t=(0,n.taxonomyTermKey)(e.name),a=l.get(t);!i.has(t)&&d(a,r)&&(i.add(t),s.push({__typename:"StringFacet",name:t,count:e.count??0,label:a?.displayName||t}))}return s}async function T(e,t,a={}){let r=await b(e,y(t),e=>e,a),n={};for(let[e,t]of r)n[e]=t.map(({key:e,term:t})=>t?.displayName||e);return n}async function b(e,t,a,r){let o=new Map;for(let t of e??[]){let e=m(t);e&&!o.has(e)&&o.set(e,[])}if(0===o.size||0===t.length)return o;let l=await p(r),i=new Map;for(let e of t){let t=(0,n.taxonomyTermKey)(a(e)),r=l.get(t),s=r?.parent?(0,n.taxonomyTermKey)(r.parent):"",c=s?o.get(s):void 0;if(!t||!c)continue;let u=i.get(s)??new Set;u.has(t)||(u.add(t),i.set(s,u),c.push({key:t,term:r,entry:e}))}return o}async function v(e){return e?.flatMap(e=>{let t=e?.name?(0,n.taxonomyTermKey)(e.name):"";return t?[{__typename:"StringFacet",name:t,count:e?.count??0}]:[]})}async function w(e,t={}){let{parent:a=u,...r}=t,n=m(a);if(!n||0===e.length)return[...e];let o=await p(r);return e.map(e=>{let t=e.tags;return Array.isArray(t)&&t.length>0?e:{...e,tags:f(e._itemMetadata?.categories,n,o)}})}async function C(e,t){let a=(e??[]).flatMap(e=>{let t="string"==typeof e?(0,n.taxonomyTermKey)(e):"";return t?[t]:[]});if(0===a.length)return[];let r=await c(n.CATEGORY_TAXONOMY,{locale:t}),o=new Set,l=[];for(let e of a){if(o.has(e))continue;o.add(e);let t=function(e,t){let a=t?(0,n.taxonomyTermKey)(t):"";if(!a)return null;let r=[...e];for(;r.length>0;){let e=r.pop();if(e){if(e.key===a)return e;r.push(...e.children)}}return null}(r,e),a=t?.children??[],i=a.length>0?a:t?[t]:[];l.push({param:e,label:t?.displayName||e,type:"checkbox",value:e,childFacets:i.map(e=>({param:e.key,label:e.displayName||e.key,type:"checkbox",value:e.key}))})}return l}e.s(["TOPIC_PARENT",0,u,"attachCategoryTags",0,w,"categoriesToFacets",0,C,"categoryFacetsByParent",0,k,"categoryKeysByParent",0,h,"categoryLabelsByParent",0,x,"filterCategoriesByParent",0,g,"graphFacetToSiteFacet",0,v,"groupCategoryLabelsByParent",0,T],48468)},424557,e=>{"use strict";var t=e.i(339992),a=e.i(580750),r=e.i(233065);let n={companyName:null,companyLogoUrl:null};async function o(e,l,i=r.DEFAULT_LOCALE){if(!e)return n;let s=await a.DataLoader.getCompanyByKey(e,void 0,i);if(!s.success)return n;let c=s.data,u=l?.preferFull?(l?.preferLight,(0,t.getFullColorImage)(c)||(0,t.getLogoMark)(c)):(l?.preferLight,(0,t.getLogoMark)(c)||(0,t.getFullColorImage)(c));return{companyName:c.CompanyName??null,companyLogoUrl:u||null}}e.s(["resolveCompanyBranding",0,o])},812354,e=>{"use strict";var t=e.i(983989),a=e.i(804300);e.i(787600);var r=e.i(279663);let n=(0,t.graphql)(`
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
  `,[a.VBCompositionFragment,r.CmpPublicImageAssetFragment]);e.s(["PressReleasePageExperienceFragment",0,n])}]);