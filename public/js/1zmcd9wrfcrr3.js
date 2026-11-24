(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,481232,e=>{"use strict";var t=e.i(983989),a=e.i(647163),r=e.i(279663),l=e.i(100517);let i=(0,t.graphql)(`
    fragment SliderZoomSlideBlockFragment on SliderZoomSlideBlock {
      __typename
      _metadata {
        key
      }
      Attribution
      CtaText
      CtaUrl {
        default
      }
      SlideDescription
      Title
      Media {
        key
        url {
          default
        }
        item {
          __typename
          ... on cmp_PublicImageAsset {
            ...CmpPublicImageAssetFragment
          }
          ... on cmp_PublicVideoAsset {
            ...CmpPublicVideoAssetFragment
          }
        }
      }
    }
  `,[r.CmpPublicImageAssetFragment,l.CmpPublicVideoAssetFragment]);function s(e){return null==e?null:"string"==typeof e?e:e.default??null}e.s(["SliderZoomSlideBlockFragment",0,i,"normalizeSlideData",0,function(e){let t=null!=e&&"object"==typeof e&&"item"in e&&!("Title"in e)?{Title:e.item?.Title??"",SlideDescription:e.item?.SlideDescription??null,Attribution:e.item?.Attribution??null,CtaText:e.item?.CtaText??null,CtaUrl:s(e.item?.CtaUrl),Media:e.item?.Media??null,MediaType:"image"}:{...e,CtaUrl:s(e.CtaUrl)},r=t.Media?.item,l=t.Media?.url?.default??void 0;return(0,a.isCmpPublicVideoAsset)(r)?(t.MediaUrl=r.Url??l??"",t.MediaType="video"):(0,a.isCmpPublicImageAsset)(r)?(t.MediaUrl=r.Url??l??"",t.MediaType="image"):l&&!t.MediaUrl&&(t.MediaUrl=l),t}])},110884,594315,620721,e=>{"use strict";var t=e.i(233065),a=e.i(245741);function r(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function l(e,a){if(!r(e))return e;let l={...e};for(let i of["_metadata","_itemMetadata"]){let s=e[i];r(s)&&"url"in s&&(l[i]={...s,url:function(e,a){if(!r(e))return e;let l={...e};for(let r of["default","hierarchical"]){let i=e[r];if("string"==typeof i&&i.startsWith("/")){let e=`/${t.DEFAULT_LOCALE}`,s=i;i===e?s="/":i.startsWith(`${e}/`)&&(s=i.slice(e.length)),l[r]="/"===s?`/${a}/`:`/${a}${s}`}}return l}(s.url,a)})}return l}function i(e){if(!r(e))return 0;let t=e._metadata,a=r(t)?t.published:void 0;if("string"==typeof a){let e=Date.parse(a);return Number.isNaN(e)?0:e}return 0}function s(e,t){let a=e;for(let e of t.split(".")){if(!r(a))return;a=a[e]}return a}function n(e,t="desc",a="date"){let r="asc"===t?1:-1;return(t,l)=>{let i=s(t,e),n=s(l,e);if("string"===a)return r*String(i??"").localeCompare(String(n??""));let o="string"==typeof i?Date.parse(i):NaN,c="string"==typeof n?Date.parse(n):NaN;return r*((Number.isNaN(o)?0:o)-(Number.isNaN(c)?0:c))}}e.s(["addLocalePrefix",0,function(e,a){if(!e||"/"===e||a===t.DEFAULT_LOCALE)return e;let r=`/${a}`;return e===r||e.startsWith(`${r}/`)?e:e.startsWith("/")?`${r}${e}`:e},"comparatorFromOrderBy",0,function(e){let t=function e(t,a=""){if(!r(t))return null;for(let l of Object.keys(t)){let i=t[l];if("string"==typeof i)return{path:a+l,dir:"asc"===i.toLowerCase()?"asc":"desc"};if(r(i)){let t=e(i,`${a}${l}.`);if(t)return t}}return null}(e);if(!t)return n("_metadata.published","desc","date");let a=/heading|title|name/i.test(t.path)?"string":"date";return n(t.path,t.dir,a)},"makeComparator",0,n,"mergeFullUnion",0,function(e,t,r,s){let n=new Map;for(let t of e){let e=(0,a.getItemKey)(t);e&&!n.has(e)&&n.set(e,t)}let o=new Map;for(let e of t){let t=(0,a.getItemKey)(e);t&&!o.has(t)&&o.set(t,e)}let c=[],u=new Set;for(let r of[e,t])for(let e of r){let t=(0,a.getItemKey)(e);t&&!u.has(t)&&(u.add(t),c.push(t))}let g=c.map(e=>o.get(e)??l(n.get(e),r));return g.sort(s??((e,t)=>i(t)-i(e))),g},"mergePageContent",0,function(e,t,r,i){let s=new Map;for(let e of t){let t=(0,a.getItemKey)(e);t&&!s.has(t)&&s.set(t,e)}let n=new Map;for(let e of r){let t=(0,a.getItemKey)(e);t&&!n.has(t)&&n.set(t,e)}let o=[];for(let t of e){let e=s.get(t);if(void 0!==e){o.push(e);continue}let a=n.get(t);void 0!==a&&o.push(l(a,i))}return o},"resolveTargetLocale",0,function(e){return Array.isArray(e)?e.find(e=>e!==t.DEFAULT_LOCALE)??e[0]??t.DEFAULT_LOCALE:e||t.DEFAULT_LOCALE},"shouldUnion",0,function(e){return!!e&&e!==t.DEFAULT_LOCALE&&t.LOCALES.includes(e)},"stripLocalePrefix",0,function(e,a){if(!e||a===t.DEFAULT_LOCALE)return e;let r=`/${a}`;return e===r?"/":e.startsWith(`${r}/`)?e.slice(r.length):e}],110884);let o=(0,e.i(983989).graphql)(`
  fragment VideoTranscriptFragment on VideoTranscript {
    __typename
    id
    external_id
    video_url
    language
    state
    transcript
  }
`);e.s(["VideoTranscriptFragment",0,o],594315),e.s([],620721)},580750,e=>{"use strict";var t=e.i(983989),a=e.i(564810),r=e.i(233065),l=e.i(245741),i=e.i(110884),s=e.i(22456),n=e.i(648853),o=e.i(515957),c=e.i(301306),u=e.i(610460),g=e.i(926640),m=e.i(229762),d=e.i(831617);e.i(787600);var p=e.i(279663);e.i(620721);var y=e.i(594315),h=e.i(812354),f=e.i(481232),E=e.i(749605),k=e.i(709486),S=e.i(170905),P=e.i(764926),F=e.i(143742),$=e.i(958173),x=e.i(48468);let B=e=>{let t=e??null;return"string"==typeof t?.Heading&&""!==t.Heading.trim()&&"string"==typeof t._metadata?.url?.default&&""!==t._metadata.url.default};function L(e,t,r){return(0,a.executeQuery)(e,t,r)}let _=(0,t.graphql)(`
    fragment CompanyFields on CompanyBlock {
      _metadata {
        key
        displayName
        version
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
      CompanyColor
      CompanyName
      ExternalId
      FullColorLogoContentLink {
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      LogoMark {
        key
        url {
          default
        }
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      DarkLogoContentLink {
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      IsTechPartner
      Partners {
        key
        url {
          default
        }
      }
      NavigationUrlOverride {
        default
      }
      TechPartnerDescription
      TechPartnerEmail
      TechPartnerLinks {
        target
        text
        title
        url {
          default
        }
      }
      TechPartnerLocations
      Tier
      YoutubeId
      WebsiteUrl {
        default
      }
      TechPartnerDownloads {
        key
        url {
          default
        }
      }
      TechPartnerImportContent {
        html
      }
      TechPartnerMainBodyContent {
        html
      }
      TechPartnerTermsAndConditions {
        html
      }
      VideoWistiaId
    }
  `,[p.CmpPublicImageAssetFragment]),v=(0,t.graphql)(`
    query GetCompaniesByKeys($keys: [String!]!, $locales: [Locales]) {
      CompanyBlock(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          ...CompanyFields
        }
      }
    }
  `,[_]),C=(0,t.graphql)(`
    fragment ContactFields on ContactBlock {
      FirstName
      LastName
      JobTitle
      Company
      CompanyContentLink {
        key
      }
      ProfilePhoto {
        url {
          default
        }
        item {
          ... on cmp_PublicImageAsset {
            ...CmpPublicImageAssetFragment
          }
          ... on ImageMedia {
            _metadata {
              url {
                default
              }
            }
          }
        }
      }
      _metadata {
        key
      }
    }
  `,[p.CmpPublicImageAssetFragment]),b=(0,t.graphql)(`
    query GetContactsByKey($keys: [String!]!, $locales: [Locales]) {
      ContactBlock(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          ...ContactFields
        }
      }
    }
  `,[C]),w=(0,t.graphql)(`
  fragment PartnerFields on _IContent {
    _metadata {
      key
      displayName
      version
      url {
        base
        internal
        hierarchical
        default
        type
      }
    }
  }
`),T=(0,t.graphql)(`
    query GetPartnersByKeys($keys: [String!]!, $locales: [Locales]) {
      _Content(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          ...PartnerFields
        }
      }
    }
  `,[w]),A=(0,t.graphql)(`
    query GetCustomerStoriesByKeys($keys: [String!]!, $locales: [Locales]) {
      CustomerStoryPageExperience(
        locale: $locales
        where: {
          _metadata: { key: { in: $keys } }
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
        limit: 100
      ) {
        items {
          ...CustomerStoryDetailFragment
        }
      }
    }
  `,[u.CustomerStoryDetailFragment]),I=(0,t.graphql)(`
    fragment AgentFields on AgentPageExperience {
      AgentTitle
      AgentLevel
      Heading
      Introduction
      MainBody {
        html
      }
      MetaTitle
      MetaDescription
      PromoImage {
        url {
          default
        }
        item {
          ...CmpPublicImageAssetFragment
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
      CardImage {
        url {
          default
        }
      }
      BuiltBy {
        key
        item {
          ... on CompanyBlock {
            CompanyName
            LogoMark {
              url {
                default
              }
            }
          }
        }
      }
      _metadata {
        key
        displayName
        version
        published
        created
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  `,[p.CmpPublicImageAssetFragment]),N=(0,t.graphql)(`
    query GetAgentSearchResults(
      $locales: [Locales]
      $count: Int = 9
      $skip: Int = 0
      $searchTerm: String
      $builtBy: [String]
      $urlPathPrefix: String
      $categories: [String]
    ) {
      AgentPageExperience(
        locale: $locales
        limit: $count
        skip: $skip
        orderBy: { AgentLevel: ASC, AgentTitle: ASC }
        where: {
          _not: [
            { _metadata: { url: { default: { like: "%/workbench/%" } } } }
            { _metadata: { url: { default: { like: "%/archive/%" } } } }
          ]
          _fulltext: { match: $searchTerm }
          BuiltBy: { key: { in: $builtBy } }
          _itemMetadata: { categories: { in: $categories } }
          _metadata: { url: { default: { startsWith: $urlPathPrefix } } }
          # Drop pages hidden from the sitemap (ExcludeFromSitemap); an unset
          # value counts as visible.
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
      ) {
        total
        items {
          ...AgentFields
        }
        facets {
          _itemMetadata {
            categories(limit: 100, orderBy: ASC, orderType: VALUE) {
              name
              count
            }
          }
          BuiltBy {
            key(limit: 100) {
              name
              count
            }
          }
        }
      }
    }
  `,[I]),K=(0,t.graphql)(`
    query GetAgentsByKeys($keys: [String!]!, $locales: [Locales]) {
      AgentPageExperience(
        locale: $locales
        where: {
          _metadata: { key: { in: $keys } }
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
        limit: 100
      ) {
        items {
          ...AgentFields
        }
      }
    }
  `,[I]),q=(0,t.graphql)(`
    query GetGlossaryPagesByKeys($keys: [String!]!, $locales: [Locales]) {
      GlossaryPageExperience(
        locale: $locales
        where: {
          _metadata: { key: { in: $keys } }
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
        limit: 100
      ) {
        items {
          ...GlossaryPageExperienceFragment
        }
      }
    }
  `,[m.GlossaryPageExperienceFragment]),M=(0,t.graphql)(`
  query GetGlossaryPages($skip: Int = 0, $locales: [Locales]) {
    GlossaryPageExperience(
      locale: $locales
      limit: 100
      skip: $skip
      orderBy: { _metadata: { displayName: ASC } }
      where: {
        _not: [
          { _metadata: { url: { default: { like: "%/workbench/%" } } } }
          { _metadata: { url: { default: { like: "%/archive/%" } } } }
        ]
        _or: [
          { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
          { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
        ]
      }
    ) {
      total
      items {
        Heading
        Introduction
        _metadata {
          key
          displayName
          url {
            default
          }
        }
      }
    }
  }
`),G=(0,t.graphql)(`
    query GetGlossarySearchResults(
      $locales: [Locales]
      $count: Int = 3
      $skip: Int = 0
      $searchTerm: String
      $urlPathPrefix: String
    ) {
      GlossaryPageExperience(
        locale: $locales
        limit: $count
        skip: $skip
        orderBy: { _metadata: { published: DESC } }
        where: {
          # Exclude content outside the public start-page tree (workbench/archive
          # containers); mirrors BLOCKED_PUBLIC_SEGMENTS in language.ts.
          _not: [
            { _metadata: { url: { default: { like: "%/workbench/%" } } } }
            { _metadata: { url: { default: { like: "%/archive/%" } } } }
          ]
          _fulltext: { match: $searchTerm }
          _metadata: { url: { default: { startsWith: $urlPathPrefix } } }
          # Drop pages hidden from the sitemap (ExcludeFromSitemap); an unset
          # value counts as visible.
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
      ) {
        total
        items {
          ...GlossaryPageExperienceFragment
        }
        facets {
          _itemMetadata {
            categories(limit: 100, orderBy: ASC, orderType: VALUE) {
              name
              count
            }
          }
        }
      }
    }
  `,[m.GlossaryPageExperienceFragment]),D=(0,t.graphql)(`
    fragment SitePageDataFields on SitePageData {
      __typename
      _modified
      Heading
      Introduction
      MainBody {
        html
      }
      ImportPageGuid
      ImportPageId
      MetaDescription
      MetaTitle
      Schemas
      _itemMetadata {
        displayName
        key
        categories
      }
      PromoImage {
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
    }
  `,[p.CmpPublicImageAssetFragment]),R=(0,t.graphql)(`
    query GetSitePageDataByKeys(
      $keys: [String!]!
      $skip: Int = 0
      $locales: [Locales]
    ) {
      SitePageData(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
        skip: $skip
      ) {
        total
        items {
          ...SitePageDataFields
        }
      }
    }
  `,[D]),U=(0,t.graphql)(`
    query GetBlogPostsByKeys(
      $keys: [String]
      $skip: Int
      $limit: Int = 100
      $locales: [Locales]
    ) {
      BlogPostExperience(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: $limit
        orderBy: { Date: DESC }
        skip: $skip
      ) {
        items {
          ...BlogPostExperienceFragment
        }
      }
    }
  `,[s.BlogPostExperienceFragment]),V=(0,t.graphql)(`
    query GetIntegrationsByKeys($keys: [String!]!, $locales: [Locales]) {
      IntegrationPageExperience(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          ...IntegrationPageExperienceFragment
        }
      }
    }
  `,[g.IntegrationPageExperienceFragment]),O=(0,t.graphql)(`
    query GetIntegrationSearchResults(
      $locales: [Locales]
      $count: Int = 24
      $skip: Int = 0
      $searchTerm: String
      $startPath: String
      $categories: [String]
    ) {
      IntegrationPageExperience(
        locale: $locales
        limit: $count
        skip: $skip
        where: {
          _not: [
            { _metadata: { url: { default: { like: "%/workbench/%" } } } }
            { _metadata: { url: { default: { like: "%/archive/%" } } } }
          ]
          _metadata: { url: { default: { startsWith: $startPath } } }
          _itemMetadata: { categories: { in: $categories } }
          _fulltext: { match: $searchTerm }
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
        orderBy: { _metadata: { published: DESC } }
      ) {
        total
        items {
          ...IntegrationPageExperienceFragment
        }
        facets {
          _itemMetadata {
            categories(limit: 100, orderBy: ASC, orderType: VALUE) {
              name
              count
            }
          }
        }
      }
    }
  `,[g.IntegrationPageExperienceFragment]),W=(0,t.graphql)(`
    query GetEventsByKeys($keys: [String!]!, $locales: [Locales]) {
      EventExperience(
        locale: $locales
        where: {
          _metadata: { key: { in: $keys } }
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
        limit: 100
      ) {
        items {
          ...EventExperienceFragment
        }
      }
    }
  `,[d.EventExperienceFragment]),Z=(0,t.graphql)(`
    query GetEventsByDate(
      $date: Date
      $take: Int = 6
      $skip: Int = 0
      $locales: [Locales]
      $startPath: String
    ) {
      EventExperience(
        locale: $locales
        limit: $take
        skip: $skip
        orderBy: { StartDate: ASC }
        where: {
          # Exclude content outside the public start-page tree (workbench/archive
          # containers); mirrors BLOCKED_PUBLIC_SEGMENTS in language.ts.
          _not: [
            { _metadata: { url: { default: { like: "%/workbench/%" } } } }
            { _metadata: { url: { default: { like: "%/archive/%" } } } }
          ]
          StartDate: { gt: $date }
          _metadata: { url: { default: { startsWith: $startPath } } }
          # Drop pages hidden from the sitemap (ExcludeFromSitemap); an unset
          # value counts as visible.
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
      ) {
        total
        items {
          ...EventExperienceFragment
        }
      }
    }
  `,[d.EventExperienceFragment]),j=(0,t.graphql)(`
    query GetEventSearchResults(
      $locales: [Locales]
      $count: Int = 24
      $skip: Int = 0
      $searchTerm: String
      $eventType: [String]
      $date: Date
      $startPath: String
      $categories: [String]
    ) {
      Event(
        locale: $locales
        limit: $count
        skip: $skip
        orderBy: { StartDate: ASC }
        where: {
          StartDate: { gte: $date }
          # Exclude content outside the public start-page tree (workbench/archive
          # containers); mirrors BLOCKED_PUBLIC_SEGMENTS in language.ts.
          _not: [
            { _metadata: { url: { default: { like: "%/workbench/%" } } } }
            { _metadata: { url: { default: { like: "%/archive/%" } } } }
          ]
          _fulltext: { match: $searchTerm }
          EventType: { in: $eventType }
          _itemMetadata: { categories: { in: $categories } }
          _metadata: { url: { default: { startsWith: $startPath } } }
          _and: [
            # Drop pages hidden from the sitemap (ExcludeFromSitemap); an unset
            # value counts as visible.
            {
              _or: [
                { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
                { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
              ]
            }
            # Multi-day events remain visible until they end: keep any event whose
            # EndDate is still upcoming, and those without an EndDate at all.
            {
              _or: [{ EndDate: { exist: false } }, { EndDate: { gte: $date } }]
            }
          ]
        }
      ) {
        total
        items {
          ...EventExperienceFragment
          ...EventPlusPlusExperienceFragment
        }
        facets {
          EventType(orderBy: ASC, orderType: VALUE, limit: 100) {
            name
            count
          }
          _itemMetadata {
            categories(limit: 100, orderBy: ASC, orderType: VALUE) {
              name
              count
            }
          }
        }
      }
    }
  `,[d.EventExperienceFragment,P.EventPlusPlusExperienceFragment]),z=(0,t.graphql)(`
    query GetResourcePageByKeys(
      $keys: [String]
      $skip: Int
      $limit: Int = 100
      $locales: [Locales]
    ) {
      ResourcePage(
        locale: $locales
        where: {
          _metadata: { key: { in: $keys } }
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
        limit: $limit
        skip: $skip
      ) {
        total
        items {
          __typename
          ... on BlogPostExperience {
            ...BlogPostExperienceFragment
          }
          ... on VideoPageExperience {
            ...VideoPageExperienceFragment
          }
          ... on ReportGuidePageExperience {
            ...ReportGuidePageExperienceFragment
          }
          ... on CustomerStoryPageExperience {
            ...CustomerStoryDetailFragment
          }
          ... on GatedReportGuidePageExperience {
            ...GatedReportGuidePageExperienceFragment
          }
        }
      }
    }
  `,[s.BlogPostExperienceFragment,n.VideoPageExperienceFragment,o.ReportGuidePageExperienceFragment,u.CustomerStoryDetailFragment,c.GatedReportGuidePageExperienceFragment]),H=(0,t.graphql)(`
    query FilteredResourcePages(
      $orderBy: ResourcePageOrderByInput
      $locales: [Locales]! = en
      $status: String! = "Published"
      $count: Int = 24
      $skip: Int = 0
      $ancestorPath: String = "/"
      $searchTerm: String
      $excludedKeys: [String]
      $contentTypes: [String]
      $categories: [String]
    ) {
      ResourcePage(
        locale: $locales
        where: {
          # Exclude content outside the public start-page tree (workbench/archive
          # containers); mirrors BLOCKED_PUBLIC_SEGMENTS in language.ts.
          _not: [
            { _metadata: { url: { default: { like: "%/workbench/%" } } } }
            { _metadata: { url: { default: { like: "%/archive/%" } } } }
            { _metadata: { url: { default: { like: "%/collections/%" } } } }
          ]
          Heading: { exist: true }
          _metadata: {
            status: { eq: $status }
            url: { default: { startsWith: $ancestorPath } }
            key: { notIn: $excludedKeys }
            types: { in: $contentTypes }
          }
          _fulltext: { match: $searchTerm }
          _itemMetadata: { categories: { in: $categories } }
          # Drop pages hidden from the sitemap (ExcludeFromSitemap); an unset
          # value counts as visible.
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
            { IgnoreFromListing: { exist: false } }
            { IgnoreFromListing: { eq: false } }
          ]
        }
        limit: $count
        skip: $skip
        orderBy: $orderBy
      ) {
        total
        items {
          __typename
          ... on BlogPostExperience {
            ...BlogPostExperienceFragment
          }
          ... on VideoPageExperience {
            ...VideoPageExperienceFragment
          }
          ... on ReportGuidePageExperience {
            ...ReportGuidePageExperienceFragment
          }
          ... on CustomerStoryPageExperience {
            ...CustomerStoryDetailFragment
          }
          ... on GatedReportGuidePageExperience {
            ...GatedReportGuidePageExperienceFragment
          }
        }
        facets {
          _itemMetadata {
            categories(limit: 100, orderBy: ASC, orderType: VALUE) {
              name
              count
            }
          }
          _metadata {
            types(orderBy: ASC, orderType: VALUE, limit: 100) {
              name
              count
            }
          }
        }
      }
    }
  `,[s.BlogPostExperienceFragment,n.VideoPageExperienceFragment,o.ReportGuidePageExperienceFragment,u.CustomerStoryDetailFragment,c.GatedReportGuidePageExperienceFragment]),J=(0,t.graphql)(`
  query FilteredResourcePageKeys(
    $orderBy: ResourcePageOrderByInput
    $locales: [Locales]! = en
    $status: String! = "Published"
    $count: Int = 24
    $skip: Int = 0
    $ancestorPath: String = "/"
    $searchTerm: String
    $excludedKeys: [String]
    $contentTypes: [String]
    $categories: [String]
  ) {
    ResourcePage(
      locale: $locales
      where: {
        # Exclude content outside the public start-page tree (workbench/archive
        # containers); mirrors BLOCKED_PUBLIC_SEGMENTS in language.ts.
        _not: [
          { _metadata: { url: { default: { like: "%/workbench/%" } } } }
          { _metadata: { url: { default: { like: "%/archive/%" } } } }
        ]
        Heading: { exist: true }
        _metadata: {
          status: { eq: $status }
          url: { default: { startsWith: $ancestorPath } }
          key: { notIn: $excludedKeys }
          types: { in: $contentTypes }
        }
        _fulltext: { match: $searchTerm }
        _itemMetadata: { categories: { in: $categories } }
        # Drop pages hidden from the sitemap (ExcludeFromSitemap); an unset
        # value counts as visible.
        _or: [
          { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
          { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
        ]
      }
      limit: $count
      skip: $skip
      orderBy: $orderBy
    ) {
      total
      items {
        _metadata {
          key
          published
        }
      }
      facets {
        _itemMetadata {
          categories(limit: 100, orderBy: ASC, orderType: VALUE) {
            name
            count
          }
        }
        _metadata {
          types {
            name
            count
          }
        }
      }
    }
  }
`),Q=(0,t.graphql)(`
    query GetVideoTranscriptsByKeys($keys: [String]) {
      VideoTranscript(limit: 100, where: { external_id: { in: $keys } }) {
        total
        items {
          ...VideoTranscriptFragment
        }
      }
    }
  `,[y.VideoTranscriptFragment]),X=(0,t.graphql)(`
    query GetPressReleasesByKeys($keys: [String!]!, $locales: [Locales]) {
      PressReleasePageExperience(
        locale: $locales
        where: {
          _metadata: { key: { in: $keys } }
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
        limit: 100
      ) {
        items {
          ...PressReleasePageExperienceFragment
        }
      }
    }
  `,[h.PressReleasePageExperienceFragment]),Y=(0,t.graphql)(`
    query GetSliderZoomSlideBlocksByKeys(
      $keys: [String!]!
      $locales: [Locales]
    ) {
      SliderZoomSlideBlock(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          ...SliderZoomSlideBlockFragment
        }
      }
    }
  `,[f.SliderZoomSlideBlockFragment]),ee=(0,t.graphql)(`
    query GetSliderZoomLogoSlideBlocksByKeys(
      $keys: [String!]!
      $locales: [Locales]
    ) {
      SliderZoomLogoSlideBlock(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          ...SliderZoomLogoSlideBlockFragment
        }
      }
    }
  `,[E.SliderZoomLogoSlideBlockFragment]),et=(0,t.graphql)(`
    query GetVideoPageExperiencesByKeys(
      $keys: [String!]!
      $locales: [Locales]
    ) {
      VideoPageExperience(
        locale: $locales
        where: {
          _metadata: { key: { in: $keys } }
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
        }
        limit: 100
      ) {
        items {
          ...VideoPageExperienceFragment
        }
      }
    }
  `,[n.VideoPageExperienceFragment]),ea=(0,t.graphql)(`
    query GetOptiFindOfferChildPages(
      $ancestorPath: String!
      $locales: [Locales]
    ) {
      OptiFindOfferPageExperience(
        where: {
          _or: [
            { SitemapSettings: { ExcludeFromSitemap: { exist: false } } }
            { SitemapSettings: { ExcludeFromSitemap: { eq: false } } }
          ]
          _metadata: { url: { default: { startsWith: $ancestorPath } } }
        }
        locale: $locales
        limit: 100
      ) {
        items {
          ...OptiFindOfferPageExperienceFragment
        }
      }
    }
  `,[S.OptiFindOfferPageExperienceFragment]),er=(0,t.graphql)(`
    query GetCalloutCtaBlocksByKeys($keys: [String!]!, $locales: [Locales]) {
      CalloutCtaBlock(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          ...CalloutCtaBlockFragment
        }
      }
    }
  `,[k.CalloutCtaBlockFragment]),el=(0,t.graphql)(`
    query GetOpticonEventByKey($keys: [String!]!) {
      Events(where: { code: { in: $keys } }) {
        items {
          ...OpticonEventsFragment
        }
      }
    }
  `,[F.OpticonEventsFragment]),ei=(0,t.graphql)(`
    query GetAccordionEntriesByKeys($keys: [String!]!, $locales: [Locales]) {
      AccordionEntryBlock(
        locale: $locales
        where: { _metadata: { key: { in: $keys } } }
        limit: 100
      ) {
        items {
          __typename
          _metadata {
            key
            locale
          }
          OpenedByDefault
          ...AccordionEntryBlockFragment
        }
      }
    }
  `,[$.AccordionEntryBlockFragment]);class es{static async loadSingle(e,t,a,l=r.LocaleEn){if(!e)return{success:!1,reason:`No ${t.singular} key provided`};try{let{data:i}=await t.fetchFn(!1===t.localized?{keys:[e]}:{keys:[e],locales:[l]},{cacheTag:a??`${t.singular}:${e}`}),s=i?.[t.typeName]?.items?.[0];if(!s&&t.fallbackToDefaultLocale&&!1!==t.localized&&l!==r.LocaleEn)try{let{data:a}=await t.fetchFn({keys:[e],locales:[r.LocaleEn]},{cacheTag:`${t.singular}:${e}:fallback-en`});s=a?.[t.typeName]?.items?.[0]}catch{}if(!s)return{success:!1,reason:`${t.singular} not found`};let[n]=await this.backfillMediaFromEn(t,[s],l,a??`${t.singular}:${e}`);return{success:!0,data:n??s}}catch(e){return{success:!1,reason:`Error loading ${t.singular}: ${e instanceof Error?e.message:"Unknown error"}`}}}static async loadMultiple(e,t,a,l=r.LocaleEn){if(!e||0===e.length)return{success:!1,reason:`No ${t.singular}s keys provided`};try{let i=`${t.singular}s:${e.join(",")}`,{data:s}=await t.fetchFn(!1===t.localized?{keys:e}:{keys:e,locales:[l]},{cacheTag:a??i.slice(0,255)}),n=(s?.[t.typeName]?.items??[]).filter(Boolean).slice();if(t.fallbackToDefaultLocale&&!1!==t.localized&&l!==r.LocaleEn){let a=new Set(n.map(e=>e?._metadata?.key).filter(Boolean)),l=e.filter(e=>!a.has(e));if(l.length>0)try{let{data:e}=await t.fetchFn({keys:l,locales:[r.LocaleEn]},{cacheTag:`${i}:fallback-en`.slice(0,255)}),a=(e?.[t.typeName]?.items??[]).filter(Boolean);a.length>0&&(n=[...n,...a])}catch{}}if(0===n.length)return{success:!1,reason:`No ${t.singular}s found`};let o=new Map(n.map(e=>{let t=e?._metadata?.key;return t?[t,e]:null}).filter(e=>null!=e)),c=o.size===n.length?e.map(e=>o.get(e)).filter(Boolean):n,u=await this.backfillMediaFromEn(t,c,l,a??i),g=s?.[t.typeName]?.total;return{success:!0,data:u,total:g}}catch(e){return{success:!1,reason:`Error loading ${t.singular}s: ${e instanceof Error?e.message:"Unknown error"}`}}}static async loadChildren(e,t,a,l=r.LocaleEn){if(!e)return{success:!1,reason:`No ${t.singular} key provided`};try{let{data:r}=await t.fetchFn(!1===t.localized?{parentKey:[e]}:{parentKey:[e],locales:[l]},{cacheTag:a??`${t.singular}:${e}`}),i=Object.keys(r||{})[0],s=r?.[i];if(!s?.item)return{success:!1,reason:`No parent item found for ${t.singular}`};let n=s.item._link?.[t.typeName],o=s.item._children?.[t.typeName],c=n?.items||o?.items||[];if(!c||0===c.length)return{success:!0,data:[]};return{success:!0,data:c}}catch(e){return{success:!1,reason:`Error loading ${t.singular} children: ${e instanceof Error?e.message:"Unknown error"}`}}}static makeFetcher(e){return async(t,a)=>({data:await L(e,t,{cache:"force-cache",...a})})}static async backfillMediaFromEn(e,t,a,i){if(a===r.LocaleEn||!1===e.localized)return t;let s=(0,l.collectKeysNeedingBackfill)(t);if(0===s.length)return t;try{let{data:a}=await e.fetchFn({keys:s,locales:[r.LocaleEn]},{cacheTag:i?`${i}:en`.slice(0,255):void 0}),n=(a?.[e.typeName]?.items??[]).filter(Boolean);return n.length?(0,l.mergeItemsFromEn)(t,n):t}catch{return t}}static async fullLocaleUnion(e,t,a,l,s,n,o={}){let{countVar:c,pathVar:u}=o,g=o.skipVar??"skip",m=async(r,l)=>{let i=async i=>{let s={...t,locales:[r],[g]:i};c&&(s[c]=100),u&&(s[u]=l);try{let t=await L(e,s);return t?.[a]??null}catch{return null}},s=await i(0),n=s?.items??[],o=n.filter(Boolean),m=s?.facets,d="number"==typeof s?.total?s.total:null,p=n.length;if(null!=d&&p>0){let e=[];for(let t=p;t<d;t+=p)e.push(t);for(let t of(await Promise.all(e.map(i))))o.push(...(t?.items??[]).filter(Boolean))}else if(null==d&&p>0){let e=p;for(let t=0;t<50;t++){let t=await i(e),a=t?.items??[];if(o.push(...a.filter(Boolean)),a.length<p)break;e+=a.length}}return{items:o,facets:m}},d=u?(0,i.stripLocalePrefix)(o.pathValue,l):void 0,[p,y]=await Promise.all([m(r.LocaleEn,d),m(l,u?(0,i.addLocalePrefix)(o.pathValue,l):o.pathValue)]),h=(0,i.mergeFullUnion)(p.items,y.items,l,o.compare??(0,i.comparatorFromOrderBy)(t.orderBy));return{items:h.slice(n,n+s),total:h.length,facets:p.facets}}static async unionByKeys(e,t,a,s,n,o,c,u={}){let{countVar:g,pathVar:m}=u,d=u.skipVar??"skip",p=async(r,l)=>{let i=async i=>{let s={...t,locales:[r],[d]:i};g&&(s[g]=100),m&&(s[m]=l);try{let t=await L(e,s);return t?.[a]??null}catch{return null}},s=await i(0),n=s?.items??[],o=n.filter(Boolean),c=s?.facets,u="number"==typeof s?.total?s.total:null,p=n.length;if(null!=u&&p>0){let e=[];for(let t=p;t<u;t+=p)e.push(t);for(let t of(await Promise.all(e.map(i))))o.push(...(t?.items??[]).filter(Boolean))}else if(null==u&&p>0){let e=p;for(let t=0;t<50;t++){let t=await i(e),a=t?.items??[];if(o.push(...a.filter(Boolean)),a.length<p)break;e+=a.length}}return{items:o,facets:c}},y=m?(0,i.stripLocalePrefix)(u.pathValue,s):void 0,[h,f]=await Promise.all([p(r.LocaleEn,y),p(s,u.pathValue)]),E=(0,i.mergeFullUnion)(h.items,f.items,s,u.compare??(0,i.comparatorFromOrderBy)(t.orderBy)),k=E.length,S=E.slice(o,o+n).map(e=>(0,l.getItemKey)(e)).filter(e=>!!e);if(0===S.length)return{items:[],total:k,facets:h.facets};let[P,F]=await Promise.all([c(S,s),c(S,r.LocaleEn)]);return{items:(0,i.mergePageContent)(S,P.success?P.data:[],F.success?F.data:[],s),total:k,facets:h.facets}}static async backfillResultFromEn(e,t,a){if(!e||0===e.length||(Array.isArray(t)?t.every(e=>e===r.LocaleEn):t===r.LocaleEn))return e;let i=(0,l.collectKeysNeedingBackfill)(e);if(0===i.length)return e;let s=await a(i);return s.success?(0,l.mergeItemsFromEn)(e,s.data):e}static async getCompanyByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"company",typeName:"CompanyBlock",fallbackToDefaultLocale:!0,fetchFn:es.makeFetcher(v)},t,a)}static async getCompaniesByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"company",typeName:"CompanyBlock",fallbackToDefaultLocale:!0,fetchFn:es.makeFetcher(v)},t,a)}static async getContactByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"contact",typeName:"ContactBlock",fallbackToDefaultLocale:!0,fetchFn:es.makeFetcher(b)},t,a)}static async getContactsByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"contact",typeName:"ContactBlock",fallbackToDefaultLocale:!0,fetchFn:es.makeFetcher(b)},t,a)}static async getPartnerByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"partner",typeName:"_Content",fetchFn:es.makeFetcher(T)},t,a)}static async getPartnersByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"partner",typeName:"_Content",fetchFn:es.makeFetcher(T)},t,a)}static async getCustomerStoryByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"customer story",typeName:"CustomerStoryPageExperience",fetchFn:es.makeFetcher(A)},t,a)}static async getCustomerStoriesByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"customer story",typeName:"CustomerStoryPageExperience",fetchFn:es.makeFetcher(A)},t,a)}static async getAgentByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"agent",typeName:"AgentPageExperience",fetchFn:es.makeFetcher(K)},t,a)}static async getAgentsByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"agent",typeName:"AgentPageExperience",fetchFn:es.makeFetcher(K)},t,a)}static async getAgentSearchResults(e=9,t=0,a=null,l=null,s=null,n=null,o=r.LocaleEn){try{let c,u,g=(0,i.resolveTargetLocale)(o),m=(0,i.shouldUnion)(g),d={locales:[m?r.LocaleEn:o],count:e,skip:t,searchTerm:s||void 0,categories:a&&a.length>0?a:void 0,builtBy:l&&l.length>0?l:void 0,urlPathPrefix:m?(0,i.stripLocalePrefix)(n,g)||void 0:n||void 0},p=await L(N,d),y=p?.AgentPageExperience?.facets,h={};y&&(y._itemMetadata?.categories&&(h.categories=y._itemMetadata.categories),y.BuiltBy?.key&&(h.BuiltBy=y.BuiltBy.key.map(e=>({__typename:"StringFacet",name:e.name,count:e.count}))));let f=p?.AgentPageExperience?.items??[];if(m){let a=await this.fullLocaleUnion(N,d,"AgentPageExperience",g,e,t,{pathVar:"urlPathPrefix",pathValue:n,countVar:"count"});c=await this.backfillResultFromEn(a.items,g,e=>this.getAgentsByKeys(e,void 0,r.LocaleEn)),u=a.total}else c=await this.backfillResultFromEn(f,o,e=>this.getAgentsByKeys(e,void 0,r.LocaleEn)),u=p?.AgentPageExperience?.total;return{success:!0,data:c,total:u,facets:Object.keys(h).length>0?h:null}}catch(e){return{success:!1,reason:"Failed to load agent pages"}}}static async getGlossaryByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"glossary",typeName:"GlossaryPageExperience",fetchFn:es.makeFetcher(q)},t,a)}static async getGlossariesByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"glossary",typeName:"GlossaryPageExperience",fetchFn:es.makeFetcher(q)},t,a)}static async getAllGlossary(e=r.LocaleEn){try{let t=(0,i.resolveTargetLocale)(e);if((0,i.shouldUnion)(t)){let e=await this.fullLocaleUnion(M,{},"GlossaryPageExperience",t,Number.MAX_SAFE_INTEGER,0);if(0===e.items.length)return{success:!1,reason:"No glossary pages found"};let a=await this.backfillResultFromEn(e.items,t,e=>this.getGlossariesByKeys(e,void 0,r.LocaleEn));return{success:!0,data:a}}let a=[],l=0,s=await L(M,{skip:l,locales:[e]}),n=s?.GlossaryPageExperience?.total??0;if(console.log(s),0===n)return{success:!1,reason:"No glossary pages found"};let o=s?.GlossaryPageExperience?.items;for(o&&o.length>0&&(a.push(...o.filter(Boolean)),l+=o.length);l<n;){let t=await L(M,{skip:l,locales:[e]}),r=t?.GlossaryPageExperience?.items;if(!r||0===r.length)break;a.push(...r.filter(Boolean)),l+=r.length}if(0===a.length)return{success:!1,reason:"No glossary pages found"};return{success:!0,data:a}}catch(e){return{success:!1,reason:`Error loading glossary pages: ${e instanceof Error?e.message:"Unknown error"}`}}}static async getGlossarySearchResults(e=3,t=0,a=null,l=null,s=null,n=r.LocaleEn){try{let o,c,u=(0,i.resolveTargetLocale)(n),g=(0,i.shouldUnion)(u),m={locales:[g?r.LocaleEn:n],count:e,skip:t,searchTerm:l||void 0,categories:a&&a.length>0?a:void 0,urlPathPrefix:g?(0,i.stripLocalePrefix)(s,u)||void 0:s||void 0},d=await L(G,m),p=d?.GlossaryPageExperience?.facets,y={};p?.categories&&(y.categories=p.categories);let h=d?.GlossaryPageExperience?.items??[];if(g){let a=await this.fullLocaleUnion(G,m,"GlossaryPageExperience",u,e,t,{pathVar:"urlPathPrefix",pathValue:s,countVar:"count"});o=await this.backfillResultFromEn(a.items,u,e=>this.getGlossariesByKeys(e,void 0,r.LocaleEn)),c=a.total}else o=h,c=d?.GlossaryPageExperience?.total;return{success:!0,data:o,total:c,facets:Object.keys(y).length>0?y:null}}catch(e){return{success:!1,reason:"Failed to load glossary pages"}}}static async getSitePageDataByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"site page data",typeName:"SitePageData",fetchFn:es.makeFetcher(R)},t,a)}static async getSitePageDatasByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"SitePageData",typeName:"SitePageData",fetchFn:es.makeFetcher(R)},t,a)}static async getBlogPostByKey(e,t,a=r.LocaleEn){if(!e)return{success:!1,reason:"No blog post key provided"};try{let r=await L(U,{keys:[e],skip:0,locales:[a]},{cacheTag:t??`blog-post:${e}`}),l=r?.BlogPostExperience?.items;if(!l||0===l.length)return{success:!1,reason:"blog post not found"};let i=l[0];if(!i)return{success:!1,reason:"blog post data is null"};return{success:!0,data:i}}catch(e){return{success:!1,reason:`Error loading blog post: ${e instanceof Error?e.message:"Unknown error"}`}}}static async getBlogPostsByKeys(e,t,a=r.LocaleEn){try{let r=await L(U,{keys:null,skip:0,locales:[a]},{cacheTag:t??`blog-posts:${e?.join(",")}`}),l=r?.BlogPostExperience?.items;if(!l||0===l.length)return{success:!1,reason:"No blog posts found"};let i=l.filter(Boolean);if(0===i.length)return{success:!1,reason:"All blog post data is null"};return{success:!0,data:i}}catch(e){return{success:!1,reason:`Error loading blog posts: ${e instanceof Error?e.message:"Unknown error"}`}}}static async getBlogPosts(e=0,t=r.LocaleEn){try{let a=(0,i.resolveTargetLocale)(t);if((0,i.shouldUnion)(a)){let t=await this.fullLocaleUnion(U,{keys:null},"BlogPostExperience",a,100,e,{countVar:"limit",compare:(0,i.makeComparator)("Date","desc")});if(0===t.items.length)return{success:!1,reason:"No blog posts found"};let l=await this.backfillResultFromEn(t.items,a,e=>this.getResourcePagesByKeys(e,void 0,r.LocaleEn));return{success:!0,data:l}}let l=await L(U,{keys:null,skip:e,locales:[t]}),s=l?.BlogPostExperience?.items;if(!s||0===s.length)return{success:!1,reason:"No blog posts found"};let n=s.filter(Boolean);if(0===n.length)return{success:!1,reason:"All blog post data is null"};return{success:!0,data:n}}catch(e){return{success:!1,reason:`Error loading blog posts: ${e instanceof Error?e.message:"Unknown error"}`}}}static async getIntegrationByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"integration",typeName:"IntegrationPageExperience",fetchFn:es.makeFetcher(V)},t,a)}static async getIntegrationsByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"integration",typeName:"IntegrationPageExperience",fetchFn:es.makeFetcher(V)},t,a)}static async getIntegrationSearchResults(e=8,t=0,a=null,l=null,s=null,n=r.LocaleEn,o=null){try{let c,u,g=(0,i.resolveTargetLocale)(n),m=(0,i.shouldUnion)(g),d={locales:[m?r.LocaleEn:n],count:e,skip:t,searchTerm:s||void 0,categories:a&&a.length>0?a:void 0,compatibility:l&&l.length>0?l:void 0,startPath:m?(0,i.stripLocalePrefix)(o,g)||void 0:o||void 0},p=await L(O,d),y=p?.IntegrationPageExperience?.facets,h={};y?._itemMetadata?.categories&&(h.categories=y._itemMetadata.categories);let f=p?.IntegrationPageExperience?.items??[];if(m){let a=await this.fullLocaleUnion(O,d,"IntegrationPageExperience",g,e,t,{countVar:"count",pathVar:"startPath",pathValue:o});c=await this.backfillResultFromEn(a.items,g,e=>this.getIntegrationsByKeys(e,void 0,r.LocaleEn)),u=a.total}else c=await this.backfillResultFromEn(f,n,e=>this.getIntegrationsByKeys(e,void 0,r.LocaleEn)),u=p?.IntegrationPageExperience?.total;return{success:!0,data:c,total:u,facets:Object.keys(h).length>0?h:null}}catch(e){return{success:!1,reason:"Failed to load integration pages"}}}static async getEventByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"event",typeName:"EventExperience",fetchFn:es.makeFetcher(W)},t,a)}static async getEventsByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"event",typeName:"EventExperience",fetchFn:es.makeFetcher(W)},t,a)}static async getEventsByDate(e,t,a,l=r.LocaleEn,s=null){try{let n=(0,i.resolveTargetLocale)(l);if((0,i.shouldUnion)(n)){let l=await this.fullLocaleUnion(Z,{date:e},"EventExperience",n,t,a,{pathVar:"startPath",pathValue:s,countVar:"take",compare:(0,i.makeComparator)("StartDate","asc")});if(0===l.items.length)return{success:!1,reason:"No events found"};let o=await this.backfillResultFromEn(l.items,n,e=>this.getEventsByKeys(e,void 0,r.LocaleEn));return{success:!0,data:o,total:l.total}}let o=await L(Z,{date:e,take:t,skip:a,locales:[l],startPath:s}),c=o?.EventExperience?.items;if(!c||0===c.length)return{success:!1,reason:"No events found"};let u=c.filter(Boolean);if(0===u.length)return{success:!1,reason:"All event pages data is null"};let g=await this.backfillResultFromEn(u,l,e=>this.getEventsByKeys(e,void 0,r.LocaleEn));return{success:!0,data:g,total:o?.EventExperience?.total}}catch(e){return{success:!1,reason:`Error loading event pages: ${e instanceof Error?e.message:"Unknown error"}`}}}static async getEventSearchResults(e=6,t=0,a=null,l=null,s=null,n=r.LocaleEn,o=null,c=null){try{let u,g,m=(0,i.resolveTargetLocale)(n),d=(0,i.shouldUnion)(m),p={locales:[d?r.LocaleEn:n],count:e,skip:t,searchTerm:l||void 0,eventType:a&&a.length>0?a:void 0,categories:c&&c.length>0?c:void 0,date:s||void 0,startPath:d?(0,i.stripLocalePrefix)(o,m)||void 0:o||void 0},y=await L(j,p),h=y?.Event?.facets,f={};if(h){if(h?._itemMetadata?.categories){let e=await (0,x.graphFacetToSiteFacet)(h._itemMetadata?.categories);e.length>0&&(f.Categories=e);let t=await (0,x.categoryFacetsByParent)(h._itemMetadata?.categories,x.TOPIC_PARENT,{locale:n});t.length>0&&(f.Topic=t)}h.EventType&&(f.EventType=h.EventType)}let E=y?.Event?.items??[];if(d){let a=await this.fullLocaleUnion(j,p,"Event",m,e,t,{pathVar:"startPath",pathValue:o,countVar:"count",compare:(0,i.makeComparator)("StartDate","asc")});u=await this.backfillResultFromEn(a.items,m,e=>this.getEventsByKeys(e,void 0,r.LocaleEn)),g=a.total}else u=await this.backfillResultFromEn(E,n,e=>this.getEventsByKeys(e,void 0,r.LocaleEn)),g=y?.Event?.total;return{success:!0,data:u,total:g,facets:Object.keys(f).length>0?f:null}}catch(e){return{success:!1,reason:"Failed to load event pages"}}}static async getResourcePageByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"ResourcePage",typeName:"ResourcePage",fetchFn:es.makeFetcher(z)},t,a)}static async getResourcePagesByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"resourcepage",typeName:"ResourcePage",fetchFn:es.makeFetcher(z)},t,a)}static async getResources(e=8,t=0,a="/",l=r.LocaleEn,s=null,n=null,o=null,c=null){try{let n=(0,i.resolveTargetLocale)(l),u=(0,i.shouldUnion)(n),g={locales:l,count:e,skip:t,status:"Published",ancestorPath:a,orderBy:o?{_ranking:"SEMANTIC",_semanticWeight:.5}:{_metadata:{published:"DESC"}},searchTerm:o};s&&(g.contentTypes=s),c&&(g.categories=c);let m=async e=>{let t={};if(e){if(e._itemMetadata?.categories){let a=e._itemMetadata.categories,r=await (0,x.graphFacetToSiteFacet)(a);r.length>0&&(t.Categories=r);let l=await (0,x.categoryFacetsByParent)(a,x.TOPIC_PARENT,{locale:n});l.length>0&&(t.Topic=l);let i=await (0,x.categoryFacetsByParent)(a,"Region",{locale:n});i.length>0&&(t.Region=i);let s=await (0,x.categoryFacetsByParent)(a,"Product",{locale:n});s.length>0&&(t.Product=s);let o=await (0,x.categoryFacetsByParent)(a,"Industry",{locale:n});o.length>0&&(t.Industry=o)}e._metadata?.types&&(t.Types=e._metadata.types)}return Object.keys(t).length>0?t:null};if(u){let r=await this.unionByKeys(J,g,"ResourcePage",n,e,t,(e,t)=>this.getResourcePagesByKeys(e,void 0,t),{pathVar:"ancestorPath",pathValue:a,countVar:"count"});return{success:!0,data:r.items.filter(B),total:r.total,facets:await m(r.facets)}}let d=await L(H,g),p=d?.ResourcePage?.items??[],y=await this.backfillResultFromEn(p,l,e=>this.getResourcePagesByKeys(e,void 0,r.LocaleEn));return{success:!0,data:y.filter(B),total:d?.ResourcePage?.total,facets:await m(d?.ResourcePage?.facets)}}catch(e){return{success:!1,reason:"Failed to load resource pages"}}}static async getVideoTranscriptsByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"VideoTranscript",typeName:"VideoTranscript",localized:!1,fetchFn:es.makeFetcher(Q)},t,a)}static async getPressReleaseByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"press release",typeName:"PressReleasePageExperience",fetchFn:es.makeFetcher(X)},t,a)}static async getPressReleasesByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"press release",typeName:"PressReleasePageExperience",fetchFn:es.makeFetcher(X)},t,a)}static async getSliderZoomSlideBlocksByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"sliderzoomslideblock",typeName:"SliderZoomSlideBlock",fetchFn:es.makeFetcher(Y)},t,a)}static async getSliderZoomLogoSlideBlocksByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"sliderzoomlogoslideblock",typeName:"SliderZoomLogoSlideBlock",fetchFn:es.makeFetcher(ee)},t,a)}static async getVideoPagesByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"videopageexperience",typeName:"VideoPageExperience",fetchFn:es.makeFetcher(et)},t,a)}static async getCalloutCtaBlocksByKeys(e,t,a=r.LocaleEn){return this.loadMultiple(e,{singular:"calloutctablock",typeName:"CalloutCtaBlock",fetchFn:es.makeFetcher(er)},t,a)}static async getOptiFindOfferChildPages(e,t=r.LocaleEn,a){try{let r=e.endsWith("/")?e:`${e}/`,l=await L(ea,{ancestorPath:r,locales:[t]},{cacheTag:a||"optifind-children"}),i=(l?.OptiFindOfferPageExperience?.items??[]).filter(e=>!!e&&!!e._metadata?.url?.default&&e._metadata.url.default!==r.replace(/\/$/,""));return{success:!0,data:i,total:i.length}}catch(e){return console.error("Error fetching OptiFindOffer child pages:",e),{success:!1,reason:e instanceof Error?e.message:"Unknown error occurred"}}}static async getOpticonEventByKey(e,t,a=r.LocaleEn){return this.loadSingle(e,{singular:"OpticonEvent",typeName:"Events",fetchFn:es.makeFetcher(el)},t,a)}static async getAccordionEntriesByKeys(e,t,a=r.LocaleEn){if(!e||0===e.length)return{success:!1,reason:"No accordionentryblocks keys provided"};let l=Array.isArray(a)?a:(0,r.LocaleFallbackMaster)(a);try{let a=await L(ei,{keys:e,locales:l},{cache:"force-cache",cacheTag:t??`accordionentryblocks:${e.join(",")}:${l.join(",")}`.slice(0,255)}),r=(a?.AccordionEntryBlock?.items??[]).filter(Boolean);if(0===r.length)return{success:!1,reason:"No accordionentryblocks found"};let i=e=>{let t=l.indexOf(e._metadata?.locale??"");return -1===t?l.length:t},s=new Map;for(let e of r){let t=e._metadata?.key;if(!t)continue;let a=s.get(t);(!a||i(e)<i(a))&&s.set(t,e)}let n=e.map(e=>s.get(e)).filter(e=>null!=e);return{success:!0,data:n.length>0?n:r}}catch(e){return{success:!1,reason:`Error loading accordionentryblocks: ${e instanceof Error?e.message:"Unknown error"}`}}}}e.s(["DataLoader",0,es])}]);