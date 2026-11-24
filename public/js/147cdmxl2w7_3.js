(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,958173,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment AccordionEntryBlockFragment on AccordionEntryBlock {
    Heading
    MainContent {
      html
    }
    OpenedByDefault
  }
`);e.s(["AccordionEntryBlockFragment",0,t])},210728,e=>{"use strict";var t=e.i(506667),a=e.i(203244),n=e.i(493184);e.s(["VideoDisplayBlock",()=>n.default,"VideoDisplayBlockFragment",()=>a.VideoDisplayBlockFragment,"default",()=>t.default])},529033,function(e){e.n(e.i(210728))},506667,e=>{"use strict";var t=e.i(843476),a=e.i(770703),n=e.i(647163),r=e.i(967268),o=e.i(72814);e.i(203244);var l=e.i(580750);e.i(493184);let i=(0,a.default)(()=>e.A(619889),{loadableGenerated:{modules:[584879]}});async function s(e){let{VideoReference:a,className:s,displaySettings:c,poster:y,hideDescription:u}=e,m=(0,o.getVideoSourceData)(a);if(!m)return null;let p=await l.DataLoader.getVideoTranscriptsByKeys([a?.key]);p.success&&p.data;let{autoplay:d,aspectRatio:f,disableRoundedCorners:g}=c??{},h=(0,r.parseBoolean)(d),T=y??m.poster??void 0;if(h)return(0,t.jsxs)("figure",{className:(0,n.cn)("video-display-block",s),"data-testid":"video-display-block",children:[(0,t.jsx)("video",{src:m.primary.src,poster:T,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:(0,n.cn)("h-auto w-full",!(0,r.parseBoolean)(g)&&"rounded-(--radius-module-xs) lg:rounded-3xl"),style:"auto"===f?{aspectRatio:"auto"}:void 0}),(0,t.jsx)("div",{children:u}),m.description&&!u&&(0,t.jsx)("figcaption",{className:"font-body text-body-s mt-3 text-(--color-secondary-darkfir)",children:m.description})]});let x=y?{...c,disableOverlayBlur:!0}:c;return(0,t.jsx)(i,{...e,className:(0,n.cn)("video-display-block",s),displaySettings:x,poster:T})}e.s(["default",0,s])},48468,e=>{"use strict";var t=e.i(564810),a=e.i(983989),n=e.i(233065),r=e.i(66799);(0,a.graphql)(`
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
`),l=e=>[e];async function i(e,a,n){let r=a??"any",i=[];for(let s=0;s<50;s++){let c=100*s,y=await (0,t.executeQuery)(o,{taxonomy:e,locales:a?l(a):void 0,limit:100,skip:c},{preview:n.preview,cacheTag:(n.cacheTag??`taxonomy:${r}:${e}:${c}`).slice(0,255)}),u=(y?._TaxonomyTerm?.items??[]).flatMap(e=>{let t=e?._metadata;return t?.key?[{key:t.key,displayName:t.displayName??null,description:t.description??null,taxonomy:t.taxonomy??null,types:(t.types??[]).filter(e=>"string"==typeof e),usage:t.usage??null,status:t.status??null,parent:t.parent??null,locale:t.locale??null}]:[]});i.push(...u);let m=y?._TaxonomyTerm?.total??0;if(u.length<100||i.length>=m)return i}return((...e)=>{})("[category-loader] taxonomy sweep hit the page cap:",{taxonomy:e,locale:a,pages:50}),i}async function s(e,t={}){if(!e)return[];let a=t.locale||n.DEFAULT_LOCALE;try{if(a===n.DEFAULT_LOCALE)return await i(e,a,t);var r=await i(e,null,t);let o=new Map;for(let e of r)o.set(e.key,[...o.get(e.key)??[],e]);return Array.from(o.values()).flatMap(e=>{let t=e.find(e=>e.locale===a)??e.find(e=>e.locale===n.DEFAULT_LOCALE)??e[0];return t?[t]:[]})}catch(t){return((...e)=>{console.error(...e)})("[category-loader] taxonomy sweep failed:",{error:t,taxonomy:e,locale:a}),[]}}async function c(e,t={}){return function(e){let t=new Map;for(let a of e)a.key&&!t.has(a.key)&&t.set(a.key,{...a,children:[]});let a=e=>{let a=e.parent?(0,r.taxonomyTermKey)(e.parent):"";return a&&a!==e.key&&t.has(a)?a:""},n=[];for(let e of t.values()){let r=a(e);r?t.get(r)?.children.push(e):n.push(e)}let o=new Set,l=e=>{let t=[e];for(;t.length>0;){let e=t.pop();!e||o.has(e.key)||(o.add(e.key),t.push(...e.children))}};for(let e of(n.forEach(l),t.values())){if(o.has(e.key))continue;let r=t.get(a(e))?.children,i=r?.indexOf(e)??-1;r&&i>=0&&r.splice(i,1),n.push(e),l(e)}return n}(await s(e,t))}let y="Topic";async function u(e){return new Map((await s(r.CATEGORY_TAXONOMY,e)).map(e=>[e.key,e]))}function m(e){let t="string"==typeof e?e:e?.key;return t?(0,r.taxonomyTermKey)(t):""}function p(e){return(e??[]).filter(e=>"string"==typeof e&&""!==(0,r.taxonomyTermKey)(e))}function d(e,t){return!!e?.parent&&(0,r.taxonomyTermKey)(e.parent)===t}async function f(e,t,a={}){let n=m(t),o=p(e);if(!n||0===o.length)return[];let l=await u(a);return o.filter(e=>d(l.get((0,r.taxonomyTermKey)(e)),n))}function g(e,t,a){let n=new Set,o=[];for(let l of p(e)){let e=(0,r.taxonomyTermKey)(l),i=a.get(e);!n.has(e)&&d(i,t)&&(n.add(e),o.push(i?.displayName||e))}return o}async function h(e,t=y,a={}){let n=m(t),r=p(e);return n&&0!==r.length?g(r,n,await u(a)):[]}async function T(e,t=y,a={}){let n=m(t),o=p(e);return n&&0!==o.length?function(e,t,a){let n=new Set,o=[];for(let l of p(e)){let e=(0,r.taxonomyTermKey)(l),i=a.get(e);!n.has(e)&&d(i,t)&&(n.add(e),o.push(e))}return o}(o,n,await u(a)):[]}async function x(e,t=y,a={}){let n=m(t),o=(e??[]).filter(e=>"string"==typeof e?.name&&""!==(0,r.taxonomyTermKey)(e.name));if(!n||0===o.length)return[];let l=await u(a),i=new Set,s=[];for(let e of o){let t=(0,r.taxonomyTermKey)(e.name),a=l.get(t);!i.has(t)&&d(a,n)&&(i.add(t),s.push({__typename:"StringFacet",name:t,count:e.count??0,label:a?.displayName||t}))}return s}async function k(e,t,a={}){let n=await w(e,p(t),e=>e,a),r={};for(let[e,t]of n)r[e]=t.map(({key:e,term:t})=>t?.displayName||e);return r}async function w(e,t,a,n){let o=new Map;for(let t of e??[]){let e=m(t);e&&!o.has(e)&&o.set(e,[])}if(0===o.size||0===t.length)return o;let l=await u(n),i=new Map;for(let e of t){let t=(0,r.taxonomyTermKey)(a(e)),n=l.get(t),s=n?.parent?(0,r.taxonomyTermKey)(n.parent):"",c=s?o.get(s):void 0;if(!t||!c)continue;let y=i.get(s)??new Set;y.has(t)||(y.add(t),i.set(s,y),c.push({key:t,term:n,entry:e}))}return o}async function _(e){return e?.flatMap(e=>{let t=e?.name?(0,r.taxonomyTermKey)(e.name):"";return t?[{__typename:"StringFacet",name:t,count:e?.count??0}]:[]})}async function v(e,t={}){let{parent:a=y,...n}=t,r=m(a);if(!r||0===e.length)return[...e];let o=await u(n);return e.map(e=>{let t=e.tags;return Array.isArray(t)&&t.length>0?e:{...e,tags:g(e._itemMetadata?.categories,r,o)}})}async function A(e,t){let a=(e??[]).flatMap(e=>{let t="string"==typeof e?(0,r.taxonomyTermKey)(e):"";return t?[t]:[]});if(0===a.length)return[];let n=await c(r.CATEGORY_TAXONOMY,{locale:t}),o=new Set,l=[];for(let e of a){if(o.has(e))continue;o.add(e);let t=function(e,t){let a=t?(0,r.taxonomyTermKey)(t):"";if(!a)return null;let n=[...e];for(;n.length>0;){let e=n.pop();if(e){if(e.key===a)return e;n.push(...e.children)}}return null}(n,e),a=t?.children??[],i=a.length>0?a:t?[t]:[];l.push({param:e,label:t?.displayName||e,type:"checkbox",value:e,childFacets:i.map(e=>({param:e.key,label:e.displayName||e.key,type:"checkbox",value:e.key}))})}return l}e.s(["TOPIC_PARENT",0,y,"attachCategoryTags",0,v,"categoriesToFacets",0,A,"categoryFacetsByParent",0,x,"categoryKeysByParent",0,T,"categoryLabelsByParent",0,h,"filterCategoriesByParent",0,f,"graphFacetToSiteFacet",0,_,"groupCategoryLabelsByParent",0,k],48468)},812354,e=>{"use strict";var t=e.i(983989),a=e.i(804300);e.i(787600);var n=e.i(279663);let r=(0,t.graphql)(`
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
  `,[a.VBCompositionFragment,n.CmpPublicImageAssetFragment]);e.s(["PressReleasePageExperienceFragment",0,r])}]);