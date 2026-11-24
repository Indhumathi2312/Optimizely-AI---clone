(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,529255,e=>{"use strict";var t=e.i(843476),l=e.i(770703),n=e.i(271645),a=e.i(647163);let r=(0,l.default)(()=>e.A(439515).then(e=>e.ContactProfileModal),{loadableGenerated:{modules:[668210]}});e.s(["CardAuthorModalTrigger",0,function({contact:e,className:l,children:i,deepLinkParam:o,deepLinkId:s}){let[m,c]=(0,n.useState)(!1),[d,x]=(0,n.useState)(!1),p=!!o&&!!s,u=e=>{c(e),(e=>{if(!p)return;let t=new URL(window.location.href);if(e)t.searchParams.set(o,s);else{if(t.searchParams.get(o)!==s)return;t.searchParams.delete(o)}window.history.replaceState(window.history.state,"",t)})(e)};return(0,n.useEffect)(()=>{if(!p)return;let e=()=>{new URLSearchParams(window.location.search).get(o)===s?(x(!0),c(!0)):c(!1)};return e(),window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[p,o,s]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{type:"button",onClick:()=>{x(!0),u(!0)},className:(0,a.cn)("group block w-full cursor-pointer text-left",l),children:i}),d&&(0,t.jsx)(r,{contact:e,open:m,onOpenChange:u})]})}])},356237,e=>{"use strict";var t=e.i(983989);let l=(0,t.graphql)(`
  fragment CardConnectorBlockFragment on CardConnectorBlock {
    __typename
    Heading: Headline
    Introduction: Description
    CompanyContentLink: Company {
      key
    }
    Product: WorksWithTags
    Badge
    ResourceUrl {
      url {
        default
      }
      text
      title
      target
    }
    Integration {
      key
    }
  }
`);(0,t.graphql)(`
  fragment CardConnectorIntegrationFragment on IntegrationPageExperience {
    Heading
    Introduction
    OptimizelyVerified
    CompanyContentLink {
      key
    }
    _itemMetadata {
      categories
    }
    _metadata {
      locale
      displayName
      url {
        default
      }
    }
  }
`),e.s(["BADGE_CONFIG",0,{certified:{icon:"award_star",label:"Optimizely certified"},verified:{icon:"check_circle",label:"Optimizely verified"},partner:{icon:"handshake",label:"Developed by partner"}},"CardConnectorBlockFragment",0,l])},431545,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CountdownTickerBlockFragment on CountdownTickerBlock {
    Heading
    TargetDateTime
    Timezone
    IsOnline
    Link {
      url {
        default
      }
      title
      text
      target
    }
  }
`);e.s(["CountdownTickerBlockFragment",0,t])},703518,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment FeatureTickerBlockFragment on FeatureTickerBlock {
    BadgeText
    TickerText
    Link {
      target
      text
      title
      url {
        default
      }
    }
  }
`);e.s(["FeatureTickerBlockFragment",0,t])},513803,e=>{"use strict";var t=e.i(983989);let l={topic:"Topic",industry:"Industry",product:"Product",region:"Region",goal:"Goals"},n=(0,t.graphql)(`
  fragment FilterListingBlockFragment on FilterListingBlock {
    __typename
    Heading
    Introduction
    PageType
    ItemsPerPage
    Sort
    SortDescending
    DisableAutoList
    Filters
    HidePagination
    StartPage {
      url {
        default
      }
    }
    ManualReferences {
      key
    }
    hideListingImage
    hideListingDate
  }
`);e.s(["FilterListingBlockFragment",0,n,"blockFilterTerms",0,function(e){if(!e)return[];let t=new Set,n=[];for(let a of e){if("string"!=typeof a)continue;let e=l[a.trim().toLowerCase()];!e||t.has(e)||(t.add(e),n.push(e))}return n}])},758749,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment LeadGenerationBlockFragment on LeadGenerationBlock {
    Title
    Form {
      key
      __typename
    }
    Products
    LeadGenAPIUrl
  }
`);e.s(["LeadGenerationBlockFragment",0,t])},143742,e=>{"use strict";var t=e.i(983989);let l=(0,t.graphql)(`
  fragment OpticonAgendaDisplayBlockFragment on OpticonAgendaDisplayBlock {
    __typename
    Code
    FiltersHeading
    GroupTitle
    GroupDescription {
      html
    }
  }
`),n=(0,t.graphql)(`
  fragment OpticonEventsFragment on Events {
    id
    title
    type
    venues {
      address1
      address2
      address3
      city
      country
      country_code
      latitude
      longitude
      name
      postal_code
      region
      region_code
    }
    virtual
    timezone
    test_mode
    summary_url
    status
    start
    show_venue_location
    show_point_of_contact
    registration_url
    registration_security_level
    planning_status
    phone
    note
    meeting_request_id
    launch_after
    last_modified_by
    languages
    invitation_url
    event_status
    end
    description
    default_locale
    currency
    created_by
    created
    close_after
    code
    category {
      code
      id
      name
    }
    capacity
    agenda_url
    archive_after
    format
    speakers {
      id
      biography
      category_id
      category_name
      code
      company
      contact_id
      created
      created_by
      designation
      email
      event_id
      facebook_url
      featured
      first_name
      internal_note
      last_modified
      last_modified_by
      last_name
      linkedin_url
      order
      prefix
      profile_picture_url
      relevance
      title
      twitter_url
      visibility
    }
    sessions {
      admission_items
      automatically_closes_on
      automatically_opens_on
      capacity
      capacity_unlimited
      capacity_virtual
      category_id
      category_name
      code
      created
      created_by
      data_tag_code
      description
      display_on_agenda
      enable_waitlist
      enable_waitlist_virtual
      end
      event_id
      featured
      group
      id
      included_session
      last_modified
      last_modified_by
      location_code
      location_id
      location_name
      open_for_attendee_hub
      open_for_registration
      order
      presentation_type
      registration_types
      relevance
      segments
      start
      status
      timezone
      title
      virtual
      virtual_capacity_unlimited
      waitlist_capacity
      waitlist_capacity_virtual
      custom_fields {
        id
        order
        name
        type
        value
      }
      speakers {
        id
        order
        session_id
        session_speaker_category_id
        session_speaker_category_name
      }
    }
  }
`);e.s(["FILTER_DESIGNED_FOR_CUSTOM_FIELD_ID",0,"f3327aca-5f73-4024-ac0b-3d2a079c71a2","FILTER_TOPICS_CUSTOM_FIELD_ID",0,"e46eb888-4149-49d5-a3cd-c722f9cfd3b2","OpticonAgendaDisplayBlockFragment",0,l,"OpticonEventsFragment",0,n,"SHORT_DESCRIPTION_CUSTOM_FIELD_ID",0,"93d794d1-ed3c-4677-b408-76bc683537c8","TRACK_CUSTOM_FIELD_ID",0,"1719ca07-6db4-4733-bef9-12d00e9c239e"])},212550,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment SampleSizeCalculatorBlockFragment on SampleSizeCalculatorBlock {
    ConversionRateTitle
    ConversionRateDescription
    ConversionRateHelpLink {
      title
      text
      target
      url {
        default
        type
      }
    }
    DetectableEffectTitle
    DetectableEffectDescription
    MinimumEffectHelpLink {
      title
      text
      target
      url {
        default
        type
      }
    }
    StatisticalSignificanceTitle
    StatisticalSignificanceDescription
    SignificanceHelpLink {
      title
      text
      target
      url {
        default
        type
      }
    }
    SampleSizeVariationTitle
  }
`);e.s(["SampleSizeCalculatorBlockFragment",0,t])},965407,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment SummaryBlockFragment on SummaryBlock {
    __typename
    Title
    Content {
      html
    }
  }
`);e.s(["SummaryBlockFragment",0,t])},955847,44784,980310,e=>{"use strict";var t=e.i(843476),l=e.i(271645),n=e.i(618566),a=e.i(647163),r=e.i(95187);let i=(0,r.createServerReference)("400d7faa1f05523ce3e7fd8529c3bf6855516823fb",r.callServer,void 0,r.findSourceMapURL,"getBreadcrumbs");e.s(["getBreadcrumbs",0,i],44784);var o=e.i(522016);function s(){return(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0 text-(--color-tertiary-4)","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M4.5 2.5L7.5 6L4.5 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function m({item:e,isActive:l,maxLength:n,colorScheme:r="default"}){var i;let s=(i=e.label,i?.replace(/^(\s*\[[^\]]*\]\s*)+/,"").trim()||i),c=s?.length<=n?s:s?.slice(0,n).trimEnd()+"...",d=c!==s,x=(0,a.cn)("inline-flex items-center justify-center rounded-3xs border border-solid border-(--color-tertiary-4) px-2.5 py-2 backdrop-blur-[15px] transition-all",l?"bg-(--color-tertiary-4)":["bg-[#EFF6E9D9] cursor-pointer","hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[-2px_2px_0_0_var(--color-tertiary-4)]","active:translate-x-0 active:translate-y-0 active:shadow-none"],"dark"===r?"bg-white":"bg-(--color-tertiary-4)"),p=(0,t.jsx)("span",{className:"font-overline text-xs font-normal uppercase leading-[1.2] tracking-[0.3px] text-(--color-secondary-darkfir)",children:c});return l?(0,t.jsx)("span",{className:x,title:d?s:void 0,"aria-current":"page",children:p}):(0,t.jsx)(o.default,{href:e.href,className:x,title:d?s:void 0,children:p})}function c({items:e,maxLength:l=25,hideActive:n=!1,colorScheme:a="default"}){return 0===e.length?null:(0,t.jsx)("nav",{"aria-label":"Breadcrumb",className:"relative z-10",children:(0,t.jsx)("ol",{className:"flex flex-wrap items-center gap-1 text-(--color-secondary-darkfir)",children:e.map((r,i)=>n&&i===e.length-1?null:(0,t.jsxs)("li",{className:"flex items-center gap-1",children:[i>0&&(0,t.jsx)(s,{}),(0,t.jsx)(m,{item:r,isActive:i===e.length-1,maxLength:l,colorScheme:a})]},r.href))})})}e.s(["ChevronSeparator",0,s,"DEFAULT_MAX_LENGTH",0,25,"default",0,c],980310);let d=["w-16","w-24","w-20"];function x({count:e=3}){return(0,t.jsx)("nav",{"aria-label":"Breadcrumb","aria-busy":"true",children:(0,t.jsx)("ol",{className:"flex flex-wrap items-center gap-1",children:Array.from({length:e}).map((e,l)=>(0,t.jsxs)("li",{className:"flex items-center gap-1",children:[l>0&&(0,t.jsx)(s,{}),(0,t.jsx)("span",{className:(0,a.cn)("rounded-3xs inline-flex h-[33px] items-center border border-solid border-(--color-tertiary-4)/40 px-2.5 py-2","animate-pulse bg-(--color-tertiary-4)/20",d[l%d.length]),"aria-hidden":"true"})]},l))})})}e.s(["default",0,function({items:e,maxLength:a=25,hideActive:r=!1,colorScheme:o="default"}){let s=(0,n.usePathname)(),[m,d]=(0,l.useState)([]),[p,u]=(0,l.useState)(!e);(0,l.useEffect)(()=>{e||i(s).then(d).finally(()=>u(!1))},[s,e]);let g=e??m;if(p&&0===g.length){let e=Math.min(Math.max(s.replace(/^\//,"").split("/").filter(Boolean).length,1),4);return(0,t.jsx)(x,{count:e})}return(0,t.jsx)(c,{items:g,maxLength:a,hideActive:r,colorScheme:o})}],955847)},279663,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CmpPublicImageAssetFragment on cmp_PublicImageAsset {
    __typename
    Url
    AltText
    Description
    Title
    FocalPoint {
      X
      Y
    }
    Width
    Height
    DateModified
  }
`);e.s(["CmpPublicImageAssetFragment",0,t])},486676,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment DateTimeElementFragment on DateTimeElement {
    __typename
    StartTime
    EndTime
    EventTimezone
    IsOnline
  }
`);e.s(["DateTimeElementFragment",0,t])},636946,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsCheckboxCardElementFragment on OptiFormsCheckboxCardElement {
    __typename
    FieldName
    Label
    CardDescription: Description
    Icon
    Value
    DefaultChecked
  }
`);e.s(["OptiFormsCheckboxCardElementFragment",0,t])},752966,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsCheckboxGroupElementFragment on OptiFormsCheckboxGroupElement {
    __typename
    FieldName
    Label
    Tooltip
    Options
    AllowMultiSelect
    Validators
  }
`);e.s(["OptiFormsCheckboxGroupElementFragment",0,t])},905950,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsChoiceElementFragment on OptiFormsChoiceElement {
    __typename
    FieldName
    Label
    Tooltip
    Options
    AllowMultiSelect
    Validators
  }
`);e.s(["OptiFormsChoiceElementFragment",0,t])},487736,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsHiddenValueElementFragment on OptiFormsHiddenValueElement {
    __typename
    FieldName
    PredefinedValue
    CustomAttributeFields
    QueryFieldName
  }
`);e.s(["OptiFormsHiddenValueElementFragment",0,t])},658113,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsNumberElementFragment on OptiFormsNumberElement {
    __typename
    FieldName
    Label
    Placeholder
    Tooltip
    PredefinedValue
    Validators
    AutoComplete
  }
`);e.s(["OptiFormsNumberElementFragment",0,t])},308772,e=>{"use strict";var t=e.i(983989);let l=(0,t.graphql)(`
  fragment OptiFormsRadioCardGroupElementFragment on OptiFormsRadioCardGroupElement {
    __typename
    FieldName
    Label
    Items {
      key
    }
  }
`);(0,t.graphql)(`
  fragment OptiFormsRadioCardItemFragment on OptiFormsRadioCardItem {
    __typename
    Label
    Description
    Icon
    Value
    _metadata {
      key
    }
  }
`),e.s(["OptiFormsRadioCardGroupElementFragment",0,l])},987102,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsRadioGroupElementFragment on OptiFormsRadioGroupElement {
    __typename
    FieldName
    Label
    Tooltip
    Options
    AllowMultiSelect
    Validators
  }
`);e.s(["OptiFormsRadioGroupElementFragment",0,t])},995871,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsRangeElementFragment on OptiFormsRangeElement {
    __typename
    FieldName
    Label
    Tooltip
    PredefinedValue
    Min
    Max
    Increment
  }
`);e.s(["OptiFormsRangeElementFragment",0,t])},408037,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsResetElementFragment on OptiFormsResetElement {
    __typename
    Label
    Tooltip
  }
`);e.s(["OptiFormsResetElementFragment",0,t])},937982,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsRichtextElementFragment on OptiFormsRichtextElement {
    __typename
    MainContent {
      html
    }
  }
`);e.s(["OptiFormsRichtextElementFragment",0,t])},766785,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsSelectionElementFragment on OptiFormsSelectionElement {
    __typename
    FieldName
    Label
    Placeholder
    Tooltip
    Options
    AllowMultiSelect
    Validators
    AutoComplete
  }
`);e.s(["OptiFormsSelectionElementFragment",0,t])},585164,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsSubmitElementFragment on OptiFormsSubmitElement {
    __typename
    Label
    Tooltip
  }
`);e.s(["OptiFormsSubmitElementFragment",0,t])},871459,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsSwitchElementFragment on OptiFormsSwitchElement {
    __typename
    FieldName
    Label
    Tooltip
    Options
    AllowMultiSelect
    Validators
  }
`);e.s(["OptiFormsSwitchElementFragment",0,t])},303885,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsTextareaElementFragment on OptiFormsTextareaElement {
    __typename
    FieldName
    Label
    Placeholder
    Tooltip
    PredefinedValue
    Validators
    AutoComplete
    CharacterLimit
  }
`);e.s(["OptiFormsTextareaElementFragment",0,t])},270419,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsTextboxElementFragment on OptiFormsTextboxElement {
    __typename
    FieldName
    Label
    Placeholder
    Tooltip
    PredefinedValue
    Validators
    AutoComplete
    QueryFieldName
  }
`);e.s(["OptiFormsTextboxElementFragment",0,t])},694709,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsUrlElementFragment on OptiFormsUrlElement {
    __typename
    FieldName
    Label
    Placeholder
    Tooltip
    PredefinedValue
    Validators
  }
`);e.s(["OptiFormsUrlElementFragment",0,t])},79745,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OverlineElementFragment on OverlineElement {
    __typename
    Icon
    OverlineText
  }
`);e.s(["OverlineElementFragment",0,t])},911942,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment SelectionWithTextElementFragment on SelectionWithTextElement {
    __typename
    FieldName
    Label
    Tooltip
    QuerystringName
    Options
    AllowMultiSelect
    Validators
    AboveElementText {
      html
    }
    BelowElementText {
      html
    }
  }
`);e.s(["SelectionWithTextElementFragment",0,t])},494798,e=>{"use strict";var t=e.i(843476),l=e.i(271645);let n=(0,l.lazy)(()=>e.A(76901).then(e=>({default:e.CurvedLine})));e.s(["CurvedLineIsland",0,function({parts:e,animationMode:a,arcAmount:r,extrusionCount:i,children:o}){return(0,t.jsx)(l.Suspense,{fallback:o,children:(0,t.jsx)(n,{parts:e,animationMode:a,arcAmount:r,extrusionCount:i})})}])},988640,e=>{"use strict";var t=e.i(843476),l=e.i(647163),n=e.i(967268),a=e.i(724308),r=e.i(494798),i=e.i(524091);e.i(371512);let o={left:"text-left",center:"text-center",right:"text-right"},s={none:"",xs:"mb-1",sm:"mb-2",md:"mb-4",lg:"mb-6",xl:"mb-8",xxl:"mb-12"},m={inherit:"text-(--prose-type-color)",default:"text-(--prose-type-color)",dark:"text-(--color-secondary-darkfir)",white:"text-white",lfgreen:"text-(--color-primary-lfgreen)"},c={h1:"text-5xl md:text-7xl lg:text-12xl",h2:"text-4xlh md:text-6xl lg:text-10xl",h3:"text-3xl md:text-5xl lg:text-8xl",h4:"text-2xl md:text-4xlh lg:text-7xl",h5:"text-xl md:text-3xl lg:text-5xl",h6:"text-lg md:text-2xl lg:text-4xlh"},d={nudge:"font-nudge",henrietta:"font-henrietta"},x={text_4xl:"text-4xlh",text_5xl:"text-5xl",text_6xl:"text-6xl",text_7xl:"text-7xl",text_8xl:"text-8xl",text_9xl:"text-9xl",text_10xl:"text-10xl",text_11xl:"text-11xl",text_12xl:"text-12xl",text_13xl:"text-13xl",text_14xl:"text-14xl",text_14_5xl:"text-[140px]",text_15xl:"text-15xl",md_text_4xl:"md:text-4xlh",md_text_5xl:"md:text-5xl",md_text_6xl:"md:text-6xl",md_text_7xl:"md:text-7xl",md_text_8xl:"md:text-8xl",md_text_9xl:"md:text-9xl",md_text_10xl:"md:text-10xl",md_text_11xl:"md:text-11xl",md_text_12xl:"md:text-12xl",md_text_13xl:"md:text-13xl",md_text_14xl:"md:text-14xl",md_text_14_5xl:"md:text-[140px]",md_text_15xl:"md:text-15xl",lg_text_4xl:"lg:text-4xlh",lg_text_5xl:"lg:text-5xl",lg_text_6xl:"lg:text-6xl",lg_text_7xl:"lg:text-7xl",lg_text_8xl:"lg:text-8xl",lg_text_9xl:"lg:text-9xl",lg_text_10xl:"lg:text-10xl",lg_text_11xl:"lg:text-11xl",lg_text_12xl:"lg:text-12xl",lg_text_13xl:"lg:text-13xl",lg_text_14xl:"lg:text-14xl",lg_text_14_5xl:"lg:text-[117px]",lg_text_15xl:"lg:text-15xl",xxl_text_4xl:"2xl:text-4xlh",xxl_text_5xl:"2xl:text-5xl",xxl_text_6xl:"2xl:text-6xl",xxl_text_7xl:"2xl:text-7xl",xxl_text_8xl:"2xl:text-8xl",xxl_text_9xl:"2xl:text-9xl",xxl_text_10xl:"2xl:text-10xl",xxl_text_11xl:"2xl:text-11xl",xxl_text_12xl:"2xl:text-12xl",xxl_text_13xl:"2xl:text-13xl",xxl_text_14xl:"2xl:text-14xl",xxl_text_14_5xl:"2xl:text-[140px]",xxl_text_15xl:"2xl:text-15xl"},p=(e,t,l)=>{if(!e||"default"===e)return null;let n=e&&/_(1[345]xl|14_5xl)$/.test(e)?1.5:.9;return`${t}leading-[${(n+ +!!l).toFixed(1)}]`},u={none:"pt-0",sm:"pt-2",md:"pt-4",lg:"pt-6",xl:"pt-8",xxl:"pt-12"},g={none:"lg:pt-0",sm:"lg:pt-2",md:"lg:pt-4",lg:"lg:pt-6",xl:"lg:pt-8",xxl:"lg:pt-12"},_={none:"pr-0",sm:"pr-2",md:"pr-4",lg:"pr-6",xl:"pr-8",xxl:"pr-12"},h={none:"lg:pr-0",sm:"lg:pr-2",md:"lg:pr-4",lg:"lg:pr-6",xl:"lg:pr-8",xxl:"lg:pr-12"},f={none:"pb-0",sm:"pb-2",md:"pb-4",lg:"pb-6",xl:"pb-8",xxl:"pb-12"},F={none:"lg:pb-0",sm:"lg:pb-2",md:"lg:pb-4",lg:"lg:pb-6",xl:"lg:pb-8",xxl:"lg:pb-12"},y={none:"pl-0",sm:"pl-2",md:"pl-4",lg:"pl-6",xl:"pl-8",xxl:"pl-12"},b={none:"lg:pl-0",sm:"lg:pl-2",md:"lg:pl-4",lg:"lg:pl-6",xl:"lg:pl-8",xxl:"lg:pl-12"},k=/##.+?##/;function v({text:e,as:n="h1",displayAs:s,className:x,animationMode:p="mouse",alignment:u="left",colorScheme:g="inherit",curved:_=!1,arcAmount:h=.3,extrusionCount:f=5,fontFamily:F="nudge",fontSizeOverrides:y,leadingOverrides:b,id:T}){let E=(0,l.decodeText)(e),C=E.split("\n").filter(e=>""!==e.trim()),S=k.test(E),O=y||(s?c[s]:c.h1);return(0,t.jsx)(n,{id:T,"data-display-level":y?void 0:s??"h1",className:(0,l.cn)("w-full font-extrabold tracking-[-0.01em]",d[F],O,_?"leading-[1.9]":"leading-none",b,o[u],x,"z-1",m[g]),children:C.map((e,l)=>{if(!S)return(0,t.jsx)("span",{className:"block",children:e},l);let n=function(e){let t,l=/##(.+?)##/g,n=[],a=0;for(;null!==(t=l.exec(e));)t.index>a&&n.push({type:"text",content:e.slice(a,t.index)}),n.push({type:"stacked",content:t[1]}),a=l.lastIndex;return a<e.length&&n.push({type:"text",content:e.slice(a)}),n}(e);return _?(0,t.jsx)("span",{className:"block",children:(0,t.jsx)(r.CurvedLineIsland,{parts:n,animationMode:p,arcAmount:h,extrusionCount:f,children:(0,t.jsx)("span",{className:"block w-full text-center",children:(0,t.jsx)(i.StaticStackedText,{text:n.map(e=>e.content).join(""),extrusionCount:f,className:"z-10"})})})},l):(0,t.jsx)("span",{className:"block",children:n.map((e,l)=>"stacked"===e.type?(0,t.jsx)("span",{className:"inline-block origin-bottom-left",children:(0,t.jsx)(a.StackedTextIsland,{text:e.content,animationMode:p,extrusionCount:f,children:(0,t.jsx)(i.StaticStackedText,{text:e.content,extrusionCount:f})})},l):(0,t.jsx)("span",{className:"relative z-10",children:e.content},l))},l)})})}e.s(["StackedHeading",0,v,"default",0,function({Text:e,HeadingLevel:a,DisplayAs:r,Anchor:i,displaySettings:o}){var m;let c,d,k,T,{colorScheme:E,marginBottom:C,animationMode:S,curvedText:O,arcAmount:w,extrusionCount:L,fontFamily:j,fontSizeMobile:N,fontSizeMd:I,fontSizeLg:A,fontSize2xl:D,alignment:B,paddingTop:M,paddingTopLg:R,paddingRight:P,paddingRightLg:q,paddingBottom:H,paddingBottomLg:V,paddingLeft:G,paddingLeftLg:U}=o??{},z=e?.html?(m=e.html,c="left",d=m.match(/text-align:\s*center/i)||m.match(/class="[^"]*text-center[^"]*"/i),k=m.match(/text-align:\s*right/i)||m.match(/class="[^"]*text-right[^"]*"/i),d?c="center":k&&(c="right"),T=m.replace(/<br\s*\/?>/gi,"\n").replace(/<\/p>/gi,"\n").replace(/<\/div>/gi,"\n").replace(/<\/h[1-6]>/gi,"\n"),{text:T=(T=(0,l.decodeText)(T.replace(/<[^>]*>/g,"")).trim()).replace(/\n{3,}/g,"\n\n"),alignment:c}):null;if(!z?.text)return null;let $=(0,n.parseBoolean)(O),W=w?parseInt(w.replace("arc_",""),10)/100:.3,Y=L?parseInt(L.replace("layers_",""),10):5,K=s[C||"none"]??"",Q=z.alignment;B&&(Q=B||"left");let X=[N&&"default"!==N?x[N]:null,I&&"default"!==I?x[I]:null,A&&"default"!==A?x[A]:null,D&&"default"!==D?x[D]:null].filter(Boolean).join(" "),J=[p(N,"",$),p(I,"md:",$),p(A,"lg:",$),p(D,"2xl:",$)].filter(Boolean).join(" "),Z=i?(0,l.slugify)(i):void 0,ee=(0,l.cn)(M&&u[M],R&&"inherit"!==R&&g[R],P&&_[P],q&&"inherit"!==q&&h[q],H&&f[H],V&&"inherit"!==V&&F[V],G&&y[G],U&&"inherit"!==U&&b[U]),et=(0,t.jsx)(v,{text:z.text,as:a||"h1",displayAs:r||void 0,colorScheme:E||"inherit",className:K||void 0,animationMode:S||"mouse",alignment:Q,curved:$,arcAmount:W,extrusionCount:Y,fontFamily:j||"nudge",fontSizeOverrides:X||void 0,leadingOverrides:J||void 0,id:Z});return ee?(0,t.jsx)("div",{className:ee,children:et}):et}])},724308,e=>{"use strict";var t=e.i(843476),l=e.i(271645);let n=(0,l.lazy)(()=>e.A(407315).then(e=>({default:e.StackedText})));e.s(["StackedTextIsland",0,function({text:e,animationMode:a,extrusionCount:r,children:i}){return(0,t.jsx)(l.Suspense,{fallback:i,children:(0,t.jsx)(n,{text:e,animationMode:a,extrusionCount:r})})}])},524091,e=>{"use strict";var t=e.i(843476),l=e.i(647163);let n=["var(--color-extrusion-9)","var(--color-extrusion-8)","var(--color-extrusion-7)","var(--color-extrusion-6)","var(--color-extrusion-5)","var(--color-extrusion-4)","var(--color-extrusion-3)","var(--color-extrusion-2)","var(--color-extrusion-1)"],a={WebkitTextStroke:"0.025em var(--color-fir-darkfir)",paintOrder:"stroke fill"};e.s(["StaticStackedText",0,function({text:e,extrusionCount:r,className:i}){let o,s=(o=Math.min(9,Math.max(5,r)),n.slice(-o)),m=s.length-1;return(0,t.jsx)("span",{className:(0,l.cn)("relative inline-block",i),children:s.map((n,r)=>{let i=0===r,o=r===m,s=Math.tanh(1)*r*10/120;return(0,t.jsx)("span",{"aria-hidden":!o,className:(0,l.cn)("inline-block whitespace-pre-wrap",i?"relative":"absolute inset-0",!o&&"pointer-events-none select-none"),style:{...a,color:n,zIndex:10+r,...i?{}:{transform:`translate(${s.toFixed(3)}em, ${(-s).toFixed(3)}em)`}},children:e},r)})})}])},371512,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment StackedHeadingElementFragment on StackedHeadingElement {
    __typename
    Text {
      html
      json
    }
    HeadingLevel
    DisplayAs
    Anchor
  }
`);e.s(["StackedHeadingElementFragment",0,t])},577132,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment OptiFormsContainerDataFragment on OptiFormsContainerData {
    __typename
    Title
    Description
    ShowSummaryMessageAfterSubmission
    SubmitConfirmationMessage
    ResetConfirmationMessage
    AllowFormResubmit
    QualifiedExperienceId
    MarketoEnabled
    FormAnchorName
    SendEmail
    EmailTo
    EmailSubject
    EmailTemplate {
      html
    }
    FormThankyouContent {
      key
    }
    _metadata {
      key
    }
    DependencyRules {
      ConditionCombination
      Conditions {
        ComparisonOperator
        ComparisonValue
        DependsOnField
      }
      SatisfiedAction
      TargetElement
      AfterStep
      TargetStep
      JumpToStep
    }
    FormThankyouContent {
      key
    }
    Webhooks
    OptiFormsImage: Image {
      key
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
          AltText
        }
        ... on cmp_PublicVideoAsset {
          Url
          MimeType
        }
      }
    }
  }
`);e.s(["OptiFormsContainerDataFragment",0,t])},162738,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment TabbedSectionFragment on TabbedSection {
    __typename
    TabLabels
  }
`);e.s(["TabbedSectionFragment",0,t])},34941,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment TableOfContentsSectionFragment on TableOfContentsSection {
    __typename
  }
`);e.s(["TableOfContentsSectionFragment",0,t])},152781,e=>{"use strict";var t=e.i(843476),l=e.i(967268),n=e.i(172765);e.i(32044);var a=e.i(132221);e.s(["default",0,function({blocks:e,locale:r,preview:i=!1,isVisualBuilder:o=!1,experienceElements:s,profile:m,pageKey:c,route:d,sectionDisplaySettings:x}){if(o){let o=s||e;return o&&0!==o.length?(0,t.jsx)(t.Fragment,{children:o.map((e,o)=>{let s,p,u;switch("displaySettings"in e?"experience":"component"in e||"section"in e?"visualBuilder":"__typename"in e?"block":"unknown"){case"experience":s=e.displaySettings,p=e.component,u=e.key;break;case"visualBuilder":{let t=e.component,l="section"in e?e.section:void 0;p=t||l,u=e.key;break}case"block":p=e,u=`block-${o}`;break;default:return null}let g=p?.__typename;return(0,t.jsx)(a.EditableBlock,{blockId:u,children:(0,t.jsx)(n.default,{typeName:g,props:{...p,displaySettings:s?(0,l.displaySettingsToObject)(s):void 0,isFirst:0===o,locale:r,preview:i,profile:m,pageKey:c,route:d,sectionDisplaySettings:x}})},`${g||"unknown"}--${o}`)})}):null}return e&&0!==e.length?(0,t.jsx)(t.Fragment,{children:e.map(({__typename:e,...l},a)=>(0,t.jsx)(n.default,{typeName:e,props:{...l,isFirst:0===a,locale:r,preview:i,profile:m,pageKey:c,route:d,sectionDisplaySettings:x}},`${e||"unknown"}--${a}`))}):null}])},66799,e=>{"use strict";function t(e){let t=e.trim().replace(/\/+$/,"");return t.includes("/")?t.slice(t.lastIndexOf("/")+1):t}let l="categories";e.s(["CATEGORY_TAXONOMY",0,l,"categoryUri",0,function(e,n=l){let a=e.trim();return""===a?"":a.includes("://")?a:`cms://taxonomy/${n}/${t(a)}`},"taxonomyTermKey",0,t])},941014,e=>{"use strict";var t=e.i(843476),l=e.i(271645),n=e.i(198120),a=e.i(233065),r=e.i(136516),i=e.i(315515),o=e.i(812251);e.s(["EventFormThankYou",0,function({pageThankYouKey:e,formThankYouKey:s,submitConfirmationMessage:m,gatedAssetContent:c,eventKey:d,hideThankYouButton:x,locale:p}){let u,[g,_]=(0,l.useState)(null),[h,f]=(0,l.useState)(!1),{downloadICalFile:F}={downloadUrl:u=function(e,t){if(!e)return null;let l=`/api/events/${e}/ical`;return t?`${l}?locale=${encodeURIComponent(t)}`:l}(d,p),downloadICalFile:()=>{if(!u)return void console.warn("No event key provided for iCal download");let e=document.createElement("a");e.href=u,e.download="",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},{t:y}=(0,r.useTranslation)(p||a.DEFAULT_LOCALE),b=e||s;return(0,l.useEffect)(()=>{b&&(f(!0),(0,n.GetThankYouBlock)(b,p||a.DEFAULT_LOCALE).then(e=>{e.success&&_(e.data)}).finally(()=>{f(!1)}))},[b,p]),(0,t.jsxs)("div",{className:"mb-4 space-y-6",children:[h?(0,t.jsx)("div",{className:"rounded-lg bg-gray-100 p-6 text-gray-600",children:"Loading..."}):g?(0,t.jsxs)("div",{className:"prose max-w-none",children:[g.Heading&&(0,t.jsx)("h2",{children:g.Heading}),g.ThankYouBody?.html&&(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:g.ThankYouBody.html}})]}):m?(0,t.jsx)("div",{className:"form-confirmation rounded-lg bg-green-50 p-6 text-gray-600",dangerouslySetInnerHTML:{__html:m}}):(0,t.jsx)("div",{className:"rounded-lg bg-green-50 p-6 text-gray-600",children:(0,t.jsx)("p",{children:"Thank you for your submission!"})}),c,d&&!x&&(0,t.jsx)("div",{className:"flex justify-center pt-6",children:(0,t.jsxs)(o.Button,{variant:"dark",onClick:F,children:[(0,t.jsx)(i.MaterialIcon,{name:"calendar_add_on",size:"24"}),y("events.addtocalendar")]})})]})}],941014)},388624,e=>{"use strict";var t=e.i(843476);e.i(32044);var l=e.i(279121),l=l,n=e.i(132221),a=e.i(252595);e.s(["PageBlocksShell",0,function({children:e}){let r=(0,a.useDraftMode)(),{version:i,currentRoute:o}=(0,a.useEditMode)();return(0,t.jsxs)(n.EditableContentArea,{field:"blocks",className:r?"container py-10":"default-page",children:[r&&i&&o&&(0,t.jsx)(l.default,{version:i,currentRoute:o}),e]})}],388624)}]);