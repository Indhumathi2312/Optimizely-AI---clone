(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,834764,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment AccordionBlockFragment on AccordionBlock {
    Heading
    Items {
      key
    }
  }
`);e.s(["AccordionBlockFragment",0,t])},896028,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment AgendaItemBlockFragment on AgendaItemBlock {
    __typename
    Tag
    Title
    AgendaItemDescription
    SpeakerContacts {
      key
    }
  }
`);e.s(["AgendaItemBlockFragment",0,t])},144752,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment AgentDirectoryPreviewBlockFragment on AgentDirectoryPreviewBlock {
    __typename
    Heading
    Introduction
    CTAButton {
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
    Agents {
      key
    }
  }
`);e.s(["AgentDirectoryPreviewBlockFragment",0,t])},983987,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment AppDownloadEntryBlockFragment on AppDownloadEntryBlock {
    __typename
    OperatingSystem
    Label
    Links {
      url {
        default
      }
      title
      text
      target
    }
    UnavailableMessage
  }
`),r=(0,t.graphql)(`
  fragment AppDownloadBlockFragment on AppDownloadBlock {
    Items {
      key
    }
    FallbackMessage
  }
`);e.s(["AppDownloadBlockFragment",0,r,"AppDownloadEntryBlockFragment",0,a])},736694,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment AreaChartBlockFragment on AreaChartBlock {
    Title
    ChartDescription {
      html
    }
    Data {
      html
    }
    ColorPalette
    ValueFormat
    CurveType
    StackType
    Fill
    ConnectNulls
    ShowLegend
    ShowGridLines
    ShowXAxis
    ShowYAxis
    XAxisLabel
    YAxisLabel
  }
`);e.s(["AreaChartBlockFragment",0,t])},310630,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment BarChartBlockFragment on BarChartBlock {
    Title
    ChartDescription {
      html
    }
    Data {
      html
    }
    ColorPalette
    ValueFormat
    Layout
    StackType
    ShowLegend
    ShowGridLines
    ShowXAxis
    ShowYAxis
    XAxisLabel
    YAxisLabel
  }
`);e.s(["BarChartBlockFragment",0,t])},983773,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment BlockquoteBlockFragment on BlockquoteBlock {
    Quote {
      html
    }
    AuthorName
    AuthorTitle
  }
`);e.s(["BlockquoteBlockFragment",0,t])},842189,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
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
`);e.s(["ButtonBlockFragment",0,t])},357834,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CalloutBlockFragment on CalloutBlock {
    CalloutType
    CalloutText {
      html
    }
  }
`);e.s(["CalloutBlockFragment",0,t])},709486,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CalloutCtaBlockFragment on CalloutCtaBlock {
    Heading
    CalloutCtaDescription: Description {
      html
      json
    }
    Link {
      url {
        default
      }
      text
      title
      target
    }
  }
`);e.s(["CalloutCtaBlockFragment",0,t])},612841,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CalloutQuoteBlockFragment on CalloutQuoteBlock {
    Overline
    Quote {
      html
    }
    Contact {
      key
    }
    Spokesperson
    JobTitle
    Company
    ButtonText
    ResourceUrl {
      url {
        default
      }
    }
  }
`);e.s(["CalloutQuoteBlockFragment",0,t])},682063,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment CardAgentBlockFragment on CardAgentBlock {
    __typename
    Agent {
      key
    }
  }
`);(0,t.graphql)(`
  fragment CardAgentAgentFragment on AgentPageExperience {
    Heading
    Introduction
    PromoImage {
      url {
        default
      }
    }
    CardImage {
      url {
        default
      }
    }
    BuiltBy {
      key
    }
    _metadata {
      key
      published
      created
      url {
        default
        hierarchical
      }
    }
  }
`),(0,t.graphql)(`
  fragment CardAgentCompanyFragment on CompanyBlock {
    CompanyName
    LogoMark {
      url {
        default
      }
    }
  }
`),e.s(["CardAgentBlockFragment",0,a])},766099,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment CardAgentDirectoryBlockFragment on CardAgentDirectoryBlock {
    __typename
    Agent {
      key
    }
  }
`);(0,t.graphql)(`
  fragment CardAgentDirectoryAgentFragment on AgentPageExperience {
    Heading
    Introduction
    PromoImage {
      url {
        default
      }
    }
    CardImage {
      url {
        default
      }
    }
    _metadata {
      key
      url {
        default
        hierarchical
      }
    }
  }
`),e.s(["CardAgentDirectoryBlockFragment",0,a])},478996,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardArrowBlockFragment on CardArrowBlock {
    Headline
    CardArrowDescription: Description
    ResourceUrl {
      url {
        default
      }
      text
      title
      target
    }
  }
`);e.s(["CardArrowBlockFragment",0,t])},289283,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment CardAuthorBlockFragment on CardAuthorBlock {
    __typename
    Author {
      key
    }
    ResourceUrl {
      url {
        default
      }
    }
  }
`),r=(0,t.graphql)(`
  fragment ContactDetailFragment on ContactBlock {
    __typename
    FirstName
    LastName
    JobTitle
    Company
    ProfilePhoto {
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
    _metadata {
      key
    }
  }
`);e.s(["CardAuthorBlockFragment",0,a,"ContactDetailFragment",0,r])},278708,615804,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment CardCustomerBlockFragment on CardCustomerBlock {
    CustomerContentLink {
      key
    }
  }
`);e.s(["CardCustomerBlockFragment",0,a],278708);let r=(0,t.graphql)(`
  fragment CardCustomerHighlightBlockFragment on CardCustomerHighlightBlock {
    Headline
    ResourceType
    Duration
    CompanyRef: Company {
      key
    }
    ResourceUrl {
      url {
        default
      }
    }
  }
`);e.s(["CardCustomerHighlightBlockFragment",0,r],615804)},831899,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardCustomerQuoteBlockFragment on CardCustomerQuoteBlock {
    Quote {
      html
    }
    Attribution
    ResourceType
    Duration
    CompanyRef: Company {
      key
    }
    ResourceUrl {
      url {
        default
      }
    }
  }
`);e.s(["CardCustomerQuoteBlockFragment",0,t])},610460,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment CardCustomerStoryBlockFragment on CardCustomerStoryBlock {
    __typename
    CustomerStory {
      key
    }
    Title
  }
`),r=(0,t.graphql)(`
  fragment CustomerStoryDetailFragment on CustomerStoryPageExperience {
    __typename
    Heading
    Introduction
    ReadTime
    Topic
    CompanyContentLink {
      key
    }
    MainBody {
      html
    }
    PromoImage {
      key
      item {
        ... on cmp_PublicImageAsset {
          Url
          AltText
        }
      }
    }
    _metadata {
      key
      url {
        default
        hierarchical
      }
    }
    _itemMetadata {
      type
    }
  }
`);e.s(["CardCustomerStoryBlockFragment",0,a,"CustomerStoryDetailFragment",0,r])},276710,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardGlossaryTermBlockFragment on CardGlossaryTermBlock {
    Term
    Definition
    ResourceUrl {
      url {
        default
      }
      text
      title
      target
    }
  }
`);e.s(["CardGlossaryTermBlockFragment",0,t])},470367,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardHighlightBlockFragment on CardHighlightBlock {
    Headline
    CardHighlightAttribution: Attribution {
      html
    }
    CompanyRef: Company {
      key
    }
    ImageUrl {
      url {
        default
      }
      item {
        Url
        AltText
      }
    }
    ImageAlt
    ResourceUrl {
      url {
        default
      }
    }
  }
`);e.s(["CardHighlightBlockFragment",0,t])},963578,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardImageContentBlockFragment on CardImageContentBlock {
    Image {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
          AltText
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
    Overline
    Headline
    CardImageContentDescription: Description
    Tags
    ResourceUrl {
      url {
        default
      }
      text
      title
      target
    }
  }
`);e.s(["CardImageContentBlockFragment",0,t])},848741,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardLocationBlockFragment on CardLocationBlock {
    Image {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
          AltText
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
    LocationName
    EventDate
    Country
    ComingSoon
    ResourceUrl {
      url {
        default
      }
      text
      title
      target
    }
  }
`);e.s(["CardLocationBlockFragment",0,t])},803239,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardPartnerBlockFragment on CardPartnerBlock {
    Partner {
      key
    }
  }
`);e.s(["CardPartnerBlockFragment",0,t])},581296,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment CardPressBlockFragment on CardPressBlock {
    __typename
    PressRelease {
      key
    }
  }
`),r=(0,t.graphql)(`
  fragment PressCompanyLogoFragment on CompanyBlock {
    _metadata {
      key
    }
    CompanyName
    DarkLogoContentLink {
      item {
        ... on cmp_PublicImageAsset {
          Url
          AltText
        }
      }
    }
    FullColorLogoContentLink {
      item {
        ... on cmp_PublicImageAsset {
          Url
          AltText
        }
      }
    }
  }
`);e.s(["CardPressBlockFragment",0,a,"PressCompanyLogoFragment",0,r])},999930,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardResourceInlineBlockFragment on CardResourceInlineBlock {
    Resource {
      key
    }
    ButtonText
    Duration
  }
`);e.s(["CardResourceInlineBlockFragment",0,t])},534188,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardRoadmapBetaBlockFragment on CardRoadmapBetaBlock {
    Image {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
          AltText
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
    VideoUrl {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicVideoAsset {
          Url
        }
        ... on VideoMedia {
          _metadata {
            url {
              default
            }
          }
        }
      }
    }
    IsBeta
    StatusLabel
    Headline
    CardRoadmapBetaDescription: Description
    WorksWithTags
    ResourceUrl {
      url {
        default
      }
      text
      title
      target
    }
  }
`);e.s(["CardRoadmapBetaBlockFragment",0,t])},5524,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardSessionBlockFragment on CardSessionBlock {
    Image {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
          AltText
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
    SessionType
    SessionTypeIcon
    Headline
    CardSessionDescription: Description
    SpeakersJson: Speakers
    ResourceUrl {
      url {
        default
      }
      text
      title
      target
    }
  }
`);e.s(["CardSessionBlockFragment",0,t])},903035,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CardVideoBlockFragment on CardVideoBlock {
    __typename
    Video {
      key
    }
  }
`);e.s(["CardVideoBlockFragment",0,t])},292597,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CarouselCardsBlockShallowFragment on CarouselCardsBlock {
    ShowArrows
    AutoScroll
    Items {
      key
    }
  }
`);e.s(["AUTHOR_CARD_WIDTH",0,"316px","CarouselCardsBlockShallowFragment",0,t])},170986,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CarouselLogosFragment on CarouselLogos {
    Items {
      key
    }
  }
`);e.s(["CarouselLogosFragment",0,t])},735254,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CarouselMediaBlockShallowFragment on CarouselMediaBlock {
    Title
    ShowArrows
    AutoScroll
    Items {
      key
    }
  }
`);e.s(["CarouselMediaBlockShallowFragment",0,t])},78133,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment CompanyLogoAssetFragment on cmp_PublicImageAsset {
    __typename
    Url
    AltText
    Width
    Height
  }
`),r=(0,t.graphql)(`
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
  `,[a]);e.s(["CompanyBlockFragment",0,r])},756933,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment ContactBlockFragment on ContactBlock {
    FirstName
    LastName
    Email
    ProfilePhoto {
      url {
        default
      }
    }
    CurrentOptimizelyEmployee
    RouteSegment
    JobTitle
    ContactDescription: Description {
      html
    }
    Bio {
      html
    }
    Company
    CompanyContentLink {
      key
    }
    OpticonProfileImage {
      url {
        default
      }
    }
  }
`),r=(0,t.graphql)(`
  fragment ContactProfileFragment on ContactBlock {
    __typename
    _metadata {
      key
    }
    RouteSegment
    FirstName
    LastName
    JobTitle
    Company
    Bio {
      html
    }
    ProfilePhoto {
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
  }
`);e.s(["ContactBlockFragment",0,a,"ContactProfileFragment",0,r])},529644,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment FeaturedInsightsBlockFragment on FeaturedInsightsBlock {
    __typename
    FeaturedHeading
    FeaturedDescription
    AdditionalFeaturedResources {
      key
    }
    FeaturedResource {
      key
    }
  }
`);e.s(["FeaturedInsightsBlockFragment",0,t])},338996,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment FormDisplayBlockFragment on FormDisplayBlock {
    Form {
      key
    }
    CTAOverrideText
    FormThankyouContent {
      key
    }
  }
`);e.s(["FormDisplayBlockFragment",0,t])},666145,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
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
`);e.s(["HeroHomeBlockFragment",0,t])},865714,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment HtmlListBlockFragment on HtmlListBlock {
    __typename
    ListItems {
      html
    }
  }
`);e.s(["HtmlListBlockFragment",0,t])},222012,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
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
`);e.s(["ImageDisplayBlockFragment",0,t])},422207,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment ImageTextContainerBlockFragment on ImageTextContainerBlock {
    ImageTextContainerImage: Image {
      url {
        default
      }
    }
    ImageAlt
    Overline
    OverlineIcon
    Heading
    ImageTextContainerDescription: Description {
      html
    }
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
`);e.s(["ImageTextContainerBlockFragment",0,t])},304483,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment LineChartBlockFragment on LineChartBlock {
    Title
    ChartDescription {
      html
    }
    Data {
      html
    }
    ColorPalette
    ValueFormat
    CurveType
    ConnectNulls
    ShowLegend
    ShowGridLines
    ShowXAxis
    ShowYAxis
    XAxisLabel
    YAxisLabel
  }
`);e.s(["LineChartBlockFragment",0,t])},283693,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment LinkListBlockFragment on LinkListBlock {
    Links {
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
`);e.s(["LinkListBlockFragment",0,t])},124097,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment LocationBlockFragment on LocationBlock {
    __typename
    Address
    City
    FacilityName
    Country
    Location
    MapsLink {
      default
    }
    PostalCode
    StateProvince
    Latitude
    Longitude
  }
`);e.s(["LocationBlockFragment",0,t])},466828,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment MercatorBlockFragment on MercatorBlock {
    AgentId
    Theme
  }
`);e.s(["MercatorBlockFragment",0,t])},639383,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment PieChartBlockFragment on PieChartBlock {
    Title
    ChartDescription {
      html
    }
    Data {
      html
    }
    ColorPalette
    ValueFormat
    Variant
    ShowLabel
    CenterLabel
    ShowLegend
  }
`);e.s(["PieChartBlockFragment",0,t])},863692,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment QuoteBlockFragment on QuoteBlock {
    Quote {
      html
    }
    Attribution
    AttributionReference {
      key
    }
    AttributionCompany {
      key
    }
  }
`);e.s(["QuoteBlockFragment",0,t])},454210,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment RssResourceListingBlockFragment on RssResourceListingBlock {
    ItemsPerPage
    FeedUrl {
      default
    }
  }
`);e.s(["RssResourceListingBlockFragment",0,t])},97773,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment SeparatorBlockFragment on SeparatorBlock {
    _metadata {
      key
      types
    }
  }
`);e.s(["SeparatorBlockFragment",0,t])},244830,e=>{"use strict";var t=e.i(983989);let a=(0,t.graphql)(`
  fragment SliderZoomBlockFragment on SliderZoomBlock {
    __typename
    ColorScheme
    Slides {
      key
    }
  }
`),r=(0,t.graphql)(`
  fragment SliderZoomBlockPropertyFragment on SliderZoomBlockProperty {
    ColorScheme
    Slides {
      key
    }
  }
`);e.s(["SliderZoomBlockFragment",0,a,"SliderZoomBlockPropertyFragment",0,r])},749605,e=>{"use strict";var t=e.i(983989),a=e.i(751315);let r=(0,t.graphql)(`
  fragment SliderZoomLogoSlideBlockFragment on SliderZoomLogoSlideBlock {
    __typename
    _metadata {
      key
    }
    LogoUrl {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
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
    BrandImageUrl {
      url {
        default
      }
      item {
        __typename
        ... on cmp_PublicImageAsset {
          Url
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
    Title
    SlideDescription
    CtaText
    LogoSlideCtaUrl: CtaUrl
  }
`),o=(0,t.graphql)(`
  fragment SliderZoomLogoBlockFragment on SliderZoomLogoBlock {
    __typename
    Slides {
      key
    }
  }
`);e.s(["SliderZoomLogoBlockFragment",0,o,"SliderZoomLogoSlideBlockFragment",0,r,"normalizeLogoSlideData",0,function(e){if(!(null!=e&&"object"==typeof e&&"item"in e&&!("Title"in e)))return e;let t=e.item;return{LogoUrl:(0,a.resolveImageSrc)(t?.LogoUrl)??"",BrandImageUrl:(0,a.resolveImageSrc)(t?.BrandImageUrl)??"",Title:t?.Title??"",Description:t?.SlideDescription??null,CtaText:t?.CtaText??null,CtaUrl:t?.LogoSlideCtaUrl??null}}])},340886,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment SpacerBlockFragment on SpacerBlock {
    __typename
    SpaceDefault
    SpaceMd
    SpaceLg
    SpaceXl
    Space2Xl
  }
`);e.s(["SpacerBlockFragment",0,t])},132913,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment StatBlockFragment on StatBlock {
    __typename
    StatValue
    StatDescription: Description
  }
`);e.s(["StatBlockFragment",0,t])},503887,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment TableBlockFragment on TableBlock {
    TableContent {
      html
    }
  }
`);e.s(["TableBlockFragment",0,t])},203244,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment VideoDisplayBlockFragment on VideoDisplayBlock {
    __typename
    AutoPlay
    VideoReference {
      __typename
      key
      url {
        __typename
        default
        base
        graph
        hierarchical
        internal
        type
      }
      item {
        __typename
        ... on _IVideo {
          _assetMetadata {
            Url: url
            FileSize: fileSize
            MimeType: mimeType
          }
        }
        ... on cmp_PublicVideoAsset {
          Url
          MimeType
          Description
          Renditions {
            Id
            Name
            Url
            Width
            Height
          }
        }
      }
    }
  }
`);e.s(["VideoDisplayBlockFragment",0,t])},394403,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment ZigZagBlockFragment on ZigZagBlock {
    Items {
      key
    }
  }
`);e.s(["ZigZagBlockFragment",0,t])},370327,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment BreadcrumbsElementFragment on BreadcrumbsElement {
    __typename
    _metadata {
      key
    }
    maxLength
    hideActive
  }
`);e.s(["BreadcrumbsElementFragment",0,t])},121253,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment MarketoVisitorDataHiddenElementFragment on MarketoVisitorDataHiddenElement {
    FieldName
    MarketoVisitorDataFieldId
  }
`);e.s(["MarketoVisitorDataHiddenElementFragment",0,t])},754610,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment NameTagElementFragment on NameTagElement {
    Person {
      key
    }
  }
`);e.s(["NameTagElementFragment",0,t])},93311,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment PagePropertyHiddenElementFragment on PagePropertyHiddenElement {
    FieldName
    PagePropertyValue
  }
`);e.s(["PagePropertyHiddenElementFragment",0,t])},315956,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment SolutionPartnerListingElementFragment on SolutionPartnerListingElement {
    ItemsPerPage
    VisibleFacets
    SolutionPartnerHeading {
      DisplayAs
      HeadingLevel
      Text {
        html
        json
      }
    }
    SolutionPartnerOverline {
      Icon
      OverlineText
    }
  }
`);e.s(["SolutionPartnerListingElementFragment",0,t])},535989,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment TextContentElementFragment on TextContentElement {
    __typename
    MainBody {
      html
      json
    }
  }
`);e.s(["TextContentElementFragment",0,t])},79640,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment AgendaSectionFragment on AgendaSection {
    __typename
    Heading
    StartTime
    EndTime
    EventTimezone
    IsOnline
    AgendaDescription: Description
    SpeakerContacts {
      key
    }
    Items {
      key
    }
  }
`);e.s(["AgendaSectionFragment",0,t])},265751,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CarouselPortraitTextSectionFragment on CarouselPortraitTextSection {
    __typename
    Heading
    Description
    Cta {
      url {
        default
      }
      title
      text
      target
    }
    Autoplay
    Items {
      key
    }
  }
`);e.s(["CarouselPortraitTextSectionFragment",0,t])},340001,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment VisualComparisonSectionFragment on VisualComparisonSection {
    __typename
  }
`);e.s(["VisualComparisonSectionFragment",0,t])},751315,e=>{"use strict";e.s(["resolveImageAlt",0,function(e){let t=e?.item;return t?.__typename==="cmp_PublicImageAsset"?t.AltText??null:null},"resolveImageSrc",0,function(e){if(!e)return null;if(e.url?.default)return e.url.default;let t=e.item;return t?"cmp_PublicImageAsset"===t.__typename?t.Url??null:t._metadata?.url?.default??t.Url??null:null},"resolveVideoSrc",0,function(e){if(!e)return null;if(e.url?.default)return e.url.default;let t=e.item;return t?"cmp_PublicVideoAsset"===t.__typename?t.Url??null:t._metadata?.url?.default??t.Url??null:null}])},804300,658722,e=>{"use strict";var t=e.i(983989),a=e.i(834764),r=e.i(896028),o=e.i(144752),n=e.i(983987),l=e.i(983773),m=e.i(842189),i=e.i(357834),g=e.i(709486),c=e.i(612841),s=e.i(682063),u=e.i(766099),d=e.i(478996),F=e.i(289283),k=e.i(356237),p=e.i(278708),C=e.i(615804),B=e.i(831899),y=e.i(610460),h=e.i(276710),S=e.i(470367),f=e.i(963578),_=e.i(848741),A=e.i(803239),T=e.i(581296),I=e.i(999930),L=e.i(534188),P=e.i(5524),E=e.i(903035),D=e.i(292597),x=e.i(735254),b=e.i(170986),q=e.i(736694),H=e.i(310630),R=e.i(304483),O=e.i(639383),v=e.i(78133),U=e.i(756933),w=e.i(431545),N=e.i(703518),V=e.i(529644),M=e.i(513803),Z=e.i(666145),Q=e.i(865714),G=e.i(222012),W=e.i(422207),X=e.i(758749),z=e.i(283693),Y=e.i(466828),j=e.i(863692),J=e.i(212550),K=e.i(97773),$=e.i(244830),ee=e.i(749605),et=e.i(340886),ea=e.i(132913),er=e.i(965407),eo=e.i(503887),en=e.i(203244),el=e.i(394403),em=e.i(338996),ei=e.i(124097),eg=e.i(454210),ec=e.i(143742),es=e.i(370327),eu=e.i(791224),ed=e.i(121253),eF=e.i(754610),ek=e.i(636946),ep=e.i(752966),eC=e.i(905950),eB=e.i(487736),ey=e.i(658113),eh=e.i(308772),eS=e.i(987102),ef=e.i(995871),e_=e.i(408037),eA=e.i(937982),eT=e.i(766785),eI=e.i(585164),eL=e.i(871459),eP=e.i(303885),eE=e.i(270419),eD=e.i(694709),ex=e.i(79745),eb=e.i(911942),eq=e.i(93311),eH=e.i(371512),eR=e.i(535989),eO=e.i(315956),ev=e.i(486676),eU=e.i(79640),ew=e.i(10574),eN=e.i(265751),eV=e.i(577132);let eM=(0,t.graphql)(`
  fragment TabbedPageSectionFragment on TabbedPageSection {
    __typename
    TabsTitle
    Pages {
      key
    }
  }
`);e.s(["TabbedPageSectionFragment",0,eM],658722);var eZ=e.i(162738),eQ=e.i(34941),eG=e.i(340001);let eW=(0,t.graphql)(`
    fragment VBComponentSpread on _IComponent {
      __typename
      ...AccordionBlockFragment
      ...AgendaItemBlockFragment
      ...AgentDirectoryPreviewBlockFragment
      ...AppDownloadBlockFragment
      ...BlockquoteBlockFragment
      ...ButtonBlockFragment
      ...CalloutBlockFragment
      ...CalloutCtaBlockFragment
      ...CalloutQuoteBlockFragment
      ...CardAgentBlockFragment
      ...CardAgentDirectoryBlockFragment
      ...CardArrowBlockFragment
      ...CardAuthorBlockFragment
      ...CardConnectorBlockFragment
      ...CardCustomerBlockFragment
      ...CardCustomerHighlightBlockFragment
      ...CardCustomerQuoteBlockFragment
      ...CardCustomerStoryBlockFragment
      ...CardGlossaryTermBlockFragment
      ...CardHighlightBlockFragment
      ...CardImageContentBlockFragment
      ...CardLocationBlockFragment
      ...CardPartnerBlockFragment
      ...CardPressBlockFragment
      ...CardResourceInlineBlockFragment
      ...CardRoadmapBetaBlockFragment
      ...CardSessionBlockFragment
      ...CardVideoBlockFragment
      ...CarouselCardsBlockShallowFragment
      ...CarouselMediaBlockShallowFragment
      ...CarouselLogosFragment
      ...AreaChartBlockFragment
      ...BarChartBlockFragment
      ...LineChartBlockFragment
      ...PieChartBlockFragment
      ...CompanyBlockFragment
      ...ContactBlockFragment
      ...CountdownTickerBlockFragment
      ...FeatureTickerBlockFragment
      ...FeaturedInsightsBlockFragment
      ...FilterListingBlockFragment
      ...HeroHomeBlockFragment
      ...HtmlListBlockFragment
      ...ImageDisplayBlockFragment
      ...ImageTextContainerBlockFragment
      ...LeadGenerationBlockFragment
      ...LinkListBlockFragment
      ...MercatorBlockFragment
      ...QuoteBlockFragment
      ...SampleSizeCalculatorBlockFragment
      ...SeparatorBlockFragment
      ...SliderZoomBlockFragment
      ...SliderZoomLogoBlockFragment
      ...SpacerBlockFragment
      ...StatBlockFragment
      ...SummaryBlockFragment
      ...TableBlockFragment
      ...VideoDisplayBlockFragment
      ...ZigZagBlockFragment
      ...IconElementFragment
      ...NameTagElementFragment
      ...OptiFormsCheckboxCardElementFragment
      ...OptiFormsRadioCardGroupElementFragment
      ...SelectionWithTextElementFragment
      ...OverlineElementFragment
      ...StackedHeadingElementFragment
      ...TextContentElementFragment
      ...SolutionPartnerListingElementFragment
      ...DateTimeElementFragment
      ...FormDisplayBlockFragment
      ...LocationBlockFragment
      ...RssResourceListingBlockFragment
      ...OpticonAgendaDisplayBlockFragment
    }
  `,[a.AccordionBlockFragment,r.AgendaItemBlockFragment,o.AgentDirectoryPreviewBlockFragment,n.AppDownloadBlockFragment,l.BlockquoteBlockFragment,m.ButtonBlockFragment,i.CalloutBlockFragment,g.CalloutCtaBlockFragment,c.CalloutQuoteBlockFragment,s.CardAgentBlockFragment,u.CardAgentDirectoryBlockFragment,d.CardArrowBlockFragment,F.CardAuthorBlockFragment,k.CardConnectorBlockFragment,p.CardCustomerBlockFragment,C.CardCustomerHighlightBlockFragment,B.CardCustomerQuoteBlockFragment,y.CardCustomerStoryBlockFragment,h.CardGlossaryTermBlockFragment,S.CardHighlightBlockFragment,f.CardImageContentBlockFragment,_.CardLocationBlockFragment,A.CardPartnerBlockFragment,T.CardPressBlockFragment,I.CardResourceInlineBlockFragment,L.CardRoadmapBetaBlockFragment,P.CardSessionBlockFragment,E.CardVideoBlockFragment,D.CarouselCardsBlockShallowFragment,x.CarouselMediaBlockShallowFragment,b.CarouselLogosFragment,q.AreaChartBlockFragment,H.BarChartBlockFragment,R.LineChartBlockFragment,O.PieChartBlockFragment,v.CompanyBlockFragment,U.ContactBlockFragment,w.CountdownTickerBlockFragment,N.FeatureTickerBlockFragment,V.FeaturedInsightsBlockFragment,M.FilterListingBlockFragment,Z.HeroHomeBlockFragment,Q.HtmlListBlockFragment,G.ImageDisplayBlockFragment,W.ImageTextContainerBlockFragment,X.LeadGenerationBlockFragment,z.LinkListBlockFragment,Y.MercatorBlockFragment,j.QuoteBlockFragment,J.SampleSizeCalculatorBlockFragment,K.SeparatorBlockFragment,$.SliderZoomBlockFragment,ee.SliderZoomLogoBlockFragment,et.SpacerBlockFragment,ea.StatBlockFragment,er.SummaryBlockFragment,eo.TableBlockFragment,en.VideoDisplayBlockFragment,el.ZigZagBlockFragment,eu.IconElementFragment,eF.NameTagElementFragment,ek.OptiFormsCheckboxCardElementFragment,eh.OptiFormsRadioCardGroupElementFragment,eb.SelectionWithTextElementFragment,ex.OverlineElementFragment,eH.StackedHeadingElementFragment,eR.TextContentElementFragment,eO.SolutionPartnerListingElementFragment,ev.DateTimeElementFragment,em.FormDisplayBlockFragment,ei.LocationBlockFragment,eg.RssResourceListingBlockFragment,ec.OpticonAgendaDisplayBlockFragment]),eX=(0,t.graphql)(`
    fragment VBSectionSpread on _ISection {
      __typename
      ...BlankSectionFragment
      ...CarouselPortraitTextSectionFragment
      ...FeatureTickerBlockFragment
      ...TabbedPageSectionFragment
      ...TabbedSectionFragment
      ...TableOfContentsSectionFragment
      ...VisualComparisonSectionFragment
    }
  `,[ew.BlankSectionFragment,eN.CarouselPortraitTextSectionFragment,N.FeatureTickerBlockFragment,eM,eZ.TabbedSectionFragment,eQ.TableOfContentsSectionFragment,eG.VisualComparisonSectionFragment]),ez=(0,t.graphql)(`
    fragment VBFormElementSpread on _IComponent {
      __typename
      ...AccordionBlockFragment
      ...BlockquoteBlockFragment
      ...BreadcrumbsElementFragment
      ...CalloutBlockFragment
      ...CalloutCtaBlockFragment
      ...CalloutQuoteBlockFragment
      ...CardAgentDirectoryBlockFragment
      ...CardAuthorBlockFragment
      ...CardCustomerStoryBlockFragment
      ...CardPressBlockFragment
      ...CardResourceInlineBlockFragment
      ...HtmlListBlockFragment
      ...IconElementFragment
      ...MarketoVisitorDataHiddenElementFragment
      ...OptiFormsCheckboxCardElementFragment
      ...OptiFormsCheckboxGroupElementFragment
      ...OptiFormsChoiceElementFragment
      ...OptiFormsHiddenValueElementFragment
      ...OptiFormsNumberElementFragment
      ...OptiFormsRadioCardGroupElementFragment
      ...OptiFormsRadioGroupElementFragment
      ...OptiFormsRangeElementFragment
      ...OptiFormsResetElementFragment
      ...OptiFormsRichtextElementFragment
      ...OptiFormsSelectionElementFragment
      ...OptiFormsSubmitElementFragment
      ...OptiFormsSwitchElementFragment
      ...OptiFormsTextareaElementFragment
      ...OptiFormsTextboxElementFragment
      ...OptiFormsUrlElementFragment
      ...SelectionWithTextElementFragment
      ...OverlineElementFragment
      ...PagePropertyHiddenElementFragment
      ...QuoteBlockFragment
      ...SpacerBlockFragment
      ...StackedHeadingElementFragment
      ...StatBlockFragment
      ...TableBlockFragment
      ...TextContentElementFragment
      ...SolutionPartnerListingElementFragment
    }
  `,[a.AccordionBlockFragment,l.BlockquoteBlockFragment,es.BreadcrumbsElementFragment,i.CalloutBlockFragment,g.CalloutCtaBlockFragment,c.CalloutQuoteBlockFragment,u.CardAgentDirectoryBlockFragment,F.CardAuthorBlockFragment,y.CardCustomerStoryBlockFragment,T.CardPressBlockFragment,I.CardResourceInlineBlockFragment,Q.HtmlListBlockFragment,eu.IconElementFragment,ed.MarketoVisitorDataHiddenElementFragment,ek.OptiFormsCheckboxCardElementFragment,ep.OptiFormsCheckboxGroupElementFragment,eC.OptiFormsChoiceElementFragment,eB.OptiFormsHiddenValueElementFragment,ey.OptiFormsNumberElementFragment,eh.OptiFormsRadioCardGroupElementFragment,eS.OptiFormsRadioGroupElementFragment,ef.OptiFormsRangeElementFragment,e_.OptiFormsResetElementFragment,eA.OptiFormsRichtextElementFragment,eT.OptiFormsSelectionElementFragment,eI.OptiFormsSubmitElementFragment,eL.OptiFormsSwitchElementFragment,eP.OptiFormsTextareaElementFragment,eE.OptiFormsTextboxElementFragment,eD.OptiFormsUrlElementFragment,ex.OverlineElementFragment,eq.PagePropertyHiddenElementFragment,j.QuoteBlockFragment,et.SpacerBlockFragment,eH.StackedHeadingElementFragment,ea.StatBlockFragment,eo.TableBlockFragment,eR.TextContentElementFragment,eO.SolutionPartnerListingElementFragment,eb.SelectionWithTextElementFragment]),eY=(0,t.graphql)(`
    fragment VBCompositionFragment on CompositionStructureNode {
      key
      displayTemplateKey
      displaySettings {
        value
        key
      }
      nodes {
        nodeType
        key
        displaySettings {
          value
          key
        }
        ... on CompositionComponentNode {
          component {
            ...VBComponentSpread
          }
        }
        ... on CompositionStructureNode {
          key
          displayName
          displaySettings {
            value
            key
          }
          section: component {
            __typename
            ...VBSectionSpread
            ...OptiFormsContainerDataFragment
            ...AgendaSectionFragment
          }
          rows: nodes {
            ... on CompositionStructureNode {
              key
              displayName
              displaySettings {
                value
                key
              }
              columns: nodes {
                ... on CompositionStructureNode {
                  key
                  displayName
                  displaySettings {
                    value
                    key
                  }
                  elements: nodes {
                    nodeType
                    key
                    displayName
                    displaySettings {
                      value
                      key
                    }
                    ... on CompositionComponentNode {
                      component {
                        ...VBComponentSpread
                      }
                    }
                    ... on CompositionStructureNode {
                      section: component {
                        __typename
                        ...VBSectionSpread
                        ...OptiFormsContainerDataFragment
                        ...AgendaSectionFragment
                      }
                    }
                  }
                }
              }
            }
          }
          steps: nodes {
            ... on CompositionStructureNode {
              nodeType
              key
              displayName
              displaySettings {
                value
                key
              }
              formRows: nodes {
                ... on CompositionStructureNode {
                  nodeType
                  key
                  displayName
                  displaySettings {
                    value
                    key
                  }
                  formColumns: nodes {
                    ... on CompositionStructureNode {
                      nodeType
                      key
                      displayName
                      displaySettings {
                        value
                        key
                      }
                      formElements: nodes {
                        nodeType
                        key
                        displayName
                        displaySettings {
                          value
                          key
                        }
                        ... on CompositionComponentNode {
                          component {
                            ...VBFormElementSpread
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,[eW,eX,ez,eV.OptiFormsContainerDataFragment,eU.AgendaSectionFragment]),ej=(0,t.graphql)(`
    fragment OptiFormsStandaloneCompositionFragment on CompositionStructureNode {
      key
      displaySettings {
        value
        key
      }
      nodes {
        nodeType
        key
        displaySettings {
          value
          key
        }
        ... on CompositionStructureNode {
          formRows: nodes {
            nodeType
            key
            displayName
            displaySettings {
              value
              key
            }
            ... on CompositionStructureNode {
              formColumns: nodes {
                nodeType
                key
                displayName
                displaySettings {
                  value
                  key
                }
                ... on CompositionStructureNode {
                  formElements: nodes {
                    nodeType
                    key
                    displayName
                    displaySettings {
                      value
                      key
                    }
                    ... on CompositionComponentNode {
                      component {
                        ...VBFormElementSpread
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,[ez]);e.s(["OptiFormsStandaloneCompositionFragment",0,ej,"VBCompositionFragment",0,eY],804300)}]);