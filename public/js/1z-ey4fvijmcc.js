(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,718499,e=>{"use strict";var a=e.i(843476),c=e.i(340886);function l({SpaceDefault:e,SpaceMd:c,SpaceLg:p,SpaceXl:t,Space2Xl:s}){let r={"--space-default":`${e??0}px`,"--space-md":`${c??e??0}px`,"--space-lg":`${p??c??e??0}px`,"--space-xl":`${t??p??c??e??0}px`,"--space-2xl":`${s??t??p??c??e??0}px`};return(0,a.jsx)("div",{style:r,className:"h-(--space-default) md:h-(--space-md) lg:h-(--space-lg) xl:h-(--space-xl) 2xl:h-(--space-2xl)","aria-hidden":"true"})}e.s(["default",0,l],139777),e.i(139777),e.s(["SpacerBlockFragment",()=>c.SpacerBlockFragment,"default",0,l],718499)},107433,function(e){e.n(e.i(718499))},340886,e=>{"use strict";let a=(0,e.i(983989).graphql)(`
  fragment SpacerBlockFragment on SpacerBlock {
    __typename
    SpaceDefault
    SpaceMd
    SpaceLg
    SpaceXl
    Space2Xl
  }
`);e.s(["SpacerBlockFragment",0,a])}]);