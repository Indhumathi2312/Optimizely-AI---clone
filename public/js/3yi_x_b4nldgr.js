(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,771277,e=>{"use strict";var t=e.i(843476),i=e.i(988640),n=e.i(967268),a=e.i(647163);e.i(132913),e.s(["default",0,function({StatValue:e,StatDescription:r,displaySettings:o}){if(!e)return null;let{alignment:l,heightSpan:s,animationMode:u,extrusionCount:c}=o??{},m="horizontal"===l,d=(0,n.parseBoolean)(s),p=c?parseInt(c.replace("layers_",""),10):5;return(0,t.jsx)("div",{className:(0,a.cn)("@container",d&&"h-full",m&&"w-full"),children:(0,t.jsxs)("div",{className:(0,a.cn)("rounded-3xl bg-(--color-neutral-2)",d&&"h-full",m?"flex items-end gap-6 p-8 @[400px]:gap-12":"flex flex-col items-start px-5 py-6 @[400px]:p-8"),children:[(0,t.jsx)(i.StackedHeading,{text:`##${e}##`,as:"span",animationMode:u||"none",extrusionCount:p,className:(0,a.cn)("leading-[0.9]","pt-4 pr-4 @[400px]:pt-6 @[400px]:pr-6",m?"@[400px]:text-extruded-sm w-auto shrink-0 text-[44px]":"@[400px]:text-11xl text-[44px]")}),r&&(0,t.jsx)("p",{className:(0,a.cn)("font-body font-medium text-(--color-secondary-darkfir)",m?"text-body-xs/snug @[400px]:text-body-med/snug min-w-0 flex-1 text-right wrap-break-word":"text-body-xs/snug @[400px]:text-body-base/tight mt-6 @[400px]:mt-12"),children:r})]})})}])},787600,e=>{"use strict";e.i(279663),e.s([])},384394,694062,e=>{"use strict";let t=(0,e.i(983989).graphql)(`
  fragment CmpPublicRawFileAssetFragment on cmp_PublicRawFileAsset {
    __typename
    Description
    Id
    MimeType
    ParentFolderGuid
    Title
    Url
    DateModified
  }
`);e.s(["CmpPublicRawFileAssetFragment",0,t],694062),e.s([],384394)},664160,e=>{"use strict";e.i(100517),e.s([])},100517,e=>{"use strict";var t=e.i(983989);let i=(0,t.graphql)(`
  fragment CmpPublicVideoAssetFragment on cmp_PublicVideoAsset {
    __typename
    Id
    Url
    AltText
    Description
    Title
    MimeType
    DateModified
    Tags {
      Name
      Guid
    }
  }
`);(0,t.graphql)(`
  fragment VideoTranscriptFragment on VideoTranscript {
    __typename
    id
    external_id
    video_url
    language
    state
    transcript
  }
`),e.s(["CmpPublicVideoAssetFragment",0,i])},564810,e=>{"use strict";var t=e.i(412168),i=e.i(247167);let n=e=>!!("object"==typeof e&&null!==e&&!Array.isArray(e))&&(e instanceof Error||function e(t){if("[object Error]"===Object.prototype.toString.call(t))return!0;let i=Object.getPrototypeOf(t);return null!==i&&e(i)}(e)),a=async({query:e,variables:t,headers:a,cache:r,preview:o,cacheTag:l})=>{let s,u,c=a??{};o&&(c.Authorization=`Basic ${i.default.env.OPTIMIZELY_PREVIEW_SECRET}`);let m=`${i.default.env.OPTIMIZELY_API_URL}?auth=${i.default.env.OPTIMIZELY_SINGLE_KEY}`,d={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...c},body:JSON.stringify({...e&&{query:e},...t&&{variables:t}})};o?d.cache="no-store":r&&(d.cache=r),l&&(d.next={tags:["optimizely-content",l]});let p=Number(i.default.env.OPTIMIZELY_FETCH_TIMEOUT_MS)||1e4,g=e=>new Promise(t=>setTimeout(t,300*2**(e-1)));for(let t=1;;t++)try{if(s=await fetch(m,{...d,signal:AbortSignal.timeout(p)}),u=await s.json(),(s.status>=500||429===s.status)&&t<4){await g(t);continue}break}catch(i){if(t>=4){if(n(i))throw{status:i.status||500,message:i.message,query:e};throw{error:i,query:e}}await g(t)}return{data:u.data,errors:u.errors??[],headers:s.headers}};var r=e.i(95187);let o=(0,r.createServerReference)("f89adb4005c19b5159e771ec12d2509ef7771de75b",r.callServer,void 0,r.findSourceMapURL,"cachedGraphQuery");async function l(e,i,n){let r=(0,t.print)(e),l=i??void 0;return n?.preview||n?.cache==="no-store"?(await a({query:r,variables:l,...n})).data:o(r,l,n?.cacheTag,n?.pageScoped)}e.s(["executeQuery",0,l],564810)},245741,e=>{"use strict";var t=e.i(647163);let i=new Set(["_metadata","_itemMetadata","composition","blocks"]),n=["text","title","target"],a=/(image|logo|photo|media|poster|thumbnail|avatar|promo|hero|series|icon|video|asset)/i;function r(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function o(e){if(!r(e))return!1;if((0,t.isCmpPublicImageAsset)(e)||(0,t.isCmpPublicVideoAsset)(e))return!0;let i=e.__typename;if("string"==typeof i&&(i.startsWith("cmp_Public")||"_IVideo"===i))return!0;let n=e.Url;return"string"==typeof n&&n.length>0}function l(e){return n.some(t=>t in e)}function s(e){let t=e.url;return r(t)&&"string"==typeof t.default&&t.default.length>0}function u(e){return null==e||(Array.isArray(e)?0===e.length||e.every(u):!!r(e)&&!(o(e.item)||o(e))&&!s(e))}function c(e,t,n=0){if(!r(e)||!r(t)||n>4)return e;let m=null,d=()=>(m||(m={...e}),m);for(let m of Object.keys(t)){if(i.has(m))continue;let p=t[m],g=e[m];if(function e(t,i){return Array.isArray(t)?t.some(t=>e(t,i)):!!r(t)&&!!(o(t.item)||o(t)||i&&a.test(i)&&!l(t)&&s(t))}(p,m)){u(g)&&(d()[m]=p);continue}if(r(p)&&r(g)){let e=c(g,p,n+1);e!==g&&(d()[m]=e)}}return m??e}function m(e){if(!r(e))return null;let t=e._metadata;if(r(t)&&"string"==typeof t.key)return t.key;let i=e._itemMetadata;return r(i)&&"string"==typeof i.key?i.key:null}e.s(["backfillEmptyMedia",0,c,"collectKeysNeedingBackfill",0,function(e){let t=new Set;for(let n of e){if(!r(n))continue;let e=m(n);e&&function e(t,n=0){if(!r(t)||n>4)return!1;for(let o of Object.keys(t)){if(i.has(o))continue;let s=t[o];if(null==s){if(a.test(o))return!0;continue}if(r(s)&&(!l(s)&&("item"in s||a.test(o))&&u(s)||e(s,n+1)))return!0}return!1}(n)&&t.add(e)}return[...t]},"getItemKey",0,m,"mergeItemsFromEn",0,function(e,t){let i=new Map;for(let e of t){if(!r(e))continue;let t=m(e);t&&i.set(t,e)}return e.map(e=>{if(!r(e))return e;let t=m(e),n=t?i.get(t):void 0;return n?c(e,n):e})}])},805650,(e,t,i)=>{"use strict";function n(e){return e>=48&&e<=57}function a(e){return e>=97&&e<=122||e>=65&&e<=90}Object.defineProperty(i,"__esModule",{value:!0}),i.isDigit=n,i.isLetter=a,i.isNameContinue=function(e){return a(e)||n(e)||95===e},i.isNameStart=function(e){return a(e)||95===e},i.isWhiteSpace=function(e){return 9===e||32===e}},95116,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.dedentBlockStringLines=function(e){var t,i;let a=Number.MAX_SAFE_INTEGER,r=null,o=-1;for(let t=0;t<e.length;++t){let l=e[t],s=function(e){let t=0;for(;t<e.length&&(0,n.isWhiteSpace)(e.charCodeAt(t));)++t;return t}(l);s!==l.length&&(r=null!=(i=r)?i:t,o=t,0!==t&&s<a&&(a=s))}return e.map((e,t)=>0===t?e:e.slice(a)).slice(null!=(t=r)?t:0,o+1)},i.isPrintableAsBlockString=function(e){if(""===e)return!0;let t=!0,i=!1,n=!0,a=!1;for(let r=0;r<e.length;++r)switch(e.codePointAt(r)){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 11:case 12:case 14:case 15:case 13:return!1;case 10:if(t&&!a)return!1;a=!0,t=!0,i=!1;break;case 9:case 32:i||(i=t);break;default:n&&(n=i),t=!1}return!t&&(!n||!a)},i.printBlockString=function(e,t){let i=e.replace(/"""/g,'\\"""'),a=i.split(/\r\n|[\n\r]/g),r=1===a.length,o=a.length>1&&a.slice(1).every(e=>0===e.length||(0,n.isWhiteSpace)(e.charCodeAt(0))),l=i.endsWith('\\"""'),s=e.endsWith('"')&&!l,u=e.endsWith("\\"),c=s||u,m=!(null!=t&&t.minimize)&&(!r||e.length>70||c||o||l),d="",p=r&&(0,n.isWhiteSpace)(e.charCodeAt(0));return(m&&!p||o)&&(d+="\n"),d+=i,(m||c)&&(d+="\n"),'"""'+d+'"""'};var n=e.r(805650)},870811,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.printString=function(e){return`"${e.replace(n,a)}"`};let n=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function a(e){return r[e.charCodeAt(0)]}let r=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"]},202328,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.devAssert=function(e,t){if(!e)throw Error(t)}},981420,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.inspect=function(e){return function e(t,i){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return function(t,i){let n;if(null===t)return"null";if(i.includes(t))return"[Circular]";let a=[...i,t];if("function"==typeof t.toJSON){let i=t.toJSON();if(i!==t)return"string"==typeof i?i:e(i,a)}else if(Array.isArray(t)){var r,o,l=t,s=a;if(0===l.length)return"[]";if(s.length>2)return"[Array]";let i=Math.min(10,l.length),n=l.length-i,u=[];for(let t=0;t<i;++t)u.push(e(l[t],s));return 1===n?u.push("... 1 more item"):n>1&&u.push(`... ${n} more items`),"["+u.join(", ")+"]"}return r=t,o=a,0===(n=Object.entries(r)).length?"{}":o.length>2?"["+function(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){let t=e.constructor.name;if("string"==typeof t&&""!==t)return t}return t}(r)+"]":"{ "+n.map(([t,i])=>t+": "+e(i,o)).join(", ")+" }"}(t,i);default:return String(t)}}(e,[])}},447474,(e,t,i)=>{"use strict";var n,a;Object.defineProperty(i,"__esModule",{value:!0}),i.Token=i.QueryDocumentKeys=i.OperationTypeNode=i.Location=void 0,i.isNode=function(e){let t=null==e?void 0:e.kind;return"string"==typeof t&&s.has(t)};class r{constructor(e,t,i){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=i}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}i.Location=r;class o{constructor(e,t,i,n,a,r){this.kind=e,this.start=t,this.end=i,this.line=n,this.column=a,this.value=r,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}i.Token=o;let l={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]};i.QueryDocumentKeys=l;let s=new Set(Object.keys(l));i.OperationTypeNode=n,(a=n||(i.OperationTypeNode=n={})).QUERY="query",a.MUTATION="mutation",a.SUBSCRIPTION="subscription"},729936,(e,t,i)=>{"use strict";var n,a;Object.defineProperty(i,"__esModule",{value:!0}),i.Kind=void 0,i.Kind=n,(a=n||(i.Kind=n={})).NAME="Name",a.DOCUMENT="Document",a.OPERATION_DEFINITION="OperationDefinition",a.VARIABLE_DEFINITION="VariableDefinition",a.SELECTION_SET="SelectionSet",a.FIELD="Field",a.ARGUMENT="Argument",a.FRAGMENT_SPREAD="FragmentSpread",a.INLINE_FRAGMENT="InlineFragment",a.FRAGMENT_DEFINITION="FragmentDefinition",a.VARIABLE="Variable",a.INT="IntValue",a.FLOAT="FloatValue",a.STRING="StringValue",a.BOOLEAN="BooleanValue",a.NULL="NullValue",a.ENUM="EnumValue",a.LIST="ListValue",a.OBJECT="ObjectValue",a.OBJECT_FIELD="ObjectField",a.DIRECTIVE="Directive",a.NAMED_TYPE="NamedType",a.LIST_TYPE="ListType",a.NON_NULL_TYPE="NonNullType",a.SCHEMA_DEFINITION="SchemaDefinition",a.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",a.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",a.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",a.FIELD_DEFINITION="FieldDefinition",a.INPUT_VALUE_DEFINITION="InputValueDefinition",a.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",a.UNION_TYPE_DEFINITION="UnionTypeDefinition",a.ENUM_TYPE_DEFINITION="EnumTypeDefinition",a.ENUM_VALUE_DEFINITION="EnumValueDefinition",a.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",a.DIRECTIVE_DEFINITION="DirectiveDefinition",a.SCHEMA_EXTENSION="SchemaExtension",a.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",a.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",a.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",a.UNION_TYPE_EXTENSION="UnionTypeExtension",a.ENUM_TYPE_EXTENSION="EnumTypeExtension",a.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"},646904,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.BREAK=void 0,i.getEnterLeaveForKind=s,i.getVisitFn=function(e,t,i){let{enter:n,leave:a}=s(e,t);return i?a:n},i.visit=function(e,t,i=r.QueryDocumentKeys){let u,c,m,d=new Map;for(let e of Object.values(o.Kind))d.set(e,s(t,e));let p=Array.isArray(e),g=[e],f=-1,y=[],F=e,h=[],v=[];do{var E,T,I;let e,o=++f===g.length,s=o&&0!==y.length;if(o){if(c=0===v.length?void 0:h[h.length-1],F=m,m=v.pop(),s)if(p){F=F.slice();let e=0;for(let[t,i]of y){let n=t-e;null===i?(F.splice(n,1),e++):F[n]=i}}else for(let[e,t]of(F={...F},y))F[e]=t;f=u.index,g=u.keys,y=u.edits,p=u.inArray,u=u.prev}else if(m){if(null==(F=m[c=p?f:g[f]]))continue;h.push(c)}if(!Array.isArray(F)){(0,r.isNode)(F)||(0,n.devAssert)(!1,`Invalid AST Node: ${(0,a.inspect)(F)}.`);let i=o?null==(E=d.get(F.kind))?void 0:E.leave:null==(T=d.get(F.kind))?void 0:T.enter;if((e=null==i?void 0:i.call(t,F,c,m,h,v))===l)break;if(!1===e){if(!o){h.pop();continue}}else if(void 0!==e&&(y.push([c,e]),!o))if((0,r.isNode)(e))F=e;else{h.pop();continue}}void 0===e&&s&&y.push([c,F]),o?h.pop():(u={inArray:p,index:f,keys:g,edits:y,prev:u},g=(p=Array.isArray(F))?F:null!=(I=i[F.kind])?I:[],f=-1,y=[],m&&v.push(m),m=F)}while(void 0!==u)return 0!==y.length?y[y.length-1][1]:e},i.visitInParallel=function(e){let t=Array(e.length).fill(null),i=Object.create(null);for(let n of Object.values(o.Kind)){let a=!1,r=Array(e.length).fill(void 0),o=Array(e.length).fill(void 0);for(let t=0;t<e.length;++t){let{enter:i,leave:l}=s(e[t],n);a||(a=null!=i||null!=l),r[t]=i,o[t]=l}if(!a)continue;let u={enter(...i){let n=i[0];for(let o=0;o<e.length;o++)if(null===t[o]){var a;let s=null==(a=r[o])?void 0:a.apply(e[o],i);if(!1===s)t[o]=n;else if(s===l)t[o]=l;else if(void 0!==s)return s}},leave(...i){let n=i[0];for(let r=0;r<e.length;r++)if(null===t[r]){var a;let n=null==(a=o[r])?void 0:a.apply(e[r],i);if(n===l)t[r]=l;else if(void 0!==n&&!1!==n)return n}else t[r]===n&&(t[r]=null)}};i[n]=u}return i};var n=e.r(202328),a=e.r(981420),r=e.r(447474),o=e.r(729936);let l=Object.freeze({});function s(e,t){let i=e[t];return"object"==typeof i?i:"function"==typeof i?{enter:i,leave:void 0}:{enter:e.enter,leave:e.leave}}i.BREAK=l},412168,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.print=function(e){return(0,r.visit)(e,o)};var n=e.r(95116),a=e.r(870811),r=e.r(646904);let o={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>l(e.definitions,"\n\n")},OperationDefinition:{leave(e){let t=u("(",l(e.variableDefinitions,", "),")"),i=l([e.operation,l([e.name,t]),l(e.directives," ")]," ");return("query"===i?"":i+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:i,directives:n})=>e+": "+t+u(" = ",i)+u(" ",l(n," "))},SelectionSet:{leave:({selections:e})=>s(e)},Field:{leave({alias:e,name:t,arguments:i,directives:n,selectionSet:a}){let r=u("",e,": ")+t,o=r+u("(",l(i,", "),")");return o.length>80&&(o=r+u("(\n",c(l(i,"\n")),"\n)")),l([o,l(n," "),a]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+u(" ",l(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:i})=>l(["...",u("on ",e),l(t," "),i]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:i,directives:n,selectionSet:a})=>`fragment ${e}${u("(",l(i,", "),")")} on ${t} ${u("",l(n," ")," ")}`+a},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?(0,n.printBlockString)(e):(0,a.printString)(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+l(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+l(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+u("(",l(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:i})=>u("",e,"\n")+l(["schema",l(t," "),s(i)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:i})=>u("",e,"\n")+l(["scalar",t,l(i," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:i,directives:n,fields:a})=>u("",e,"\n")+l(["type",t,u("implements ",l(i," & ")),l(n," "),s(a)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:i,type:n,directives:a})=>u("",e,"\n")+t+(m(i)?u("(\n",c(l(i,"\n")),"\n)"):u("(",l(i,", "),")"))+": "+n+u(" ",l(a," "))},InputValueDefinition:{leave:({description:e,name:t,type:i,defaultValue:n,directives:a})=>u("",e,"\n")+l([t+": "+i,u("= ",n),l(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:i,directives:n,fields:a})=>u("",e,"\n")+l(["interface",t,u("implements ",l(i," & ")),l(n," "),s(a)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:i,types:n})=>u("",e,"\n")+l(["union",t,l(i," "),u("= ",l(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:i,values:n})=>u("",e,"\n")+l(["enum",t,l(i," "),s(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:i})=>u("",e,"\n")+l([t,l(i," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:i,fields:n})=>u("",e,"\n")+l(["input",t,l(i," "),s(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:i,repeatable:n,locations:a})=>u("",e,"\n")+"directive @"+t+(m(i)?u("(\n",c(l(i,"\n")),"\n)"):u("(",l(i,", "),")"))+(n?" repeatable":"")+" on "+l(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>l(["extend schema",l(e," "),s(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>l(["extend scalar",e,l(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:i,fields:n})=>l(["extend type",e,u("implements ",l(t," & ")),l(i," "),s(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:i,fields:n})=>l(["extend interface",e,u("implements ",l(t," & ")),l(i," "),s(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:i})=>l(["extend union",e,l(t," "),u("= ",l(i," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:i})=>l(["extend enum",e,l(t," "),s(i)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:i})=>l(["extend input",e,l(t," "),s(i)]," ")}};function l(e,t=""){var i;return null!=(i=null==e?void 0:e.filter(e=>e).join(t))?i:""}function s(e){return u("{\n",c(l(e,"\n")),"\n}")}function u(e,t,i=""){return null!=t&&""!==t?e+t+i:""}function c(e){return u("  ",e.replace(/\n/g,"\n  "))}function m(e){var t;return null!=(t=null==e?void 0:e.some(e=>e.includes("\n")))&&t}},22456,e=>{"use strict";e.i(787600);var t=e.i(279663),i=e.i(983989),n=e.i(804300);let a=(0,i.graphql)(`
    fragment BlogPostExperienceFragment on BlogPostExperience {
      __typename
      Heading
      Introduction
      MainBody {
        html
      }
      _modified
      MetaDescription
      MetaTitle
      Schemas
      Date
      AuthorList {
        key
        url {
          default
          hierarchical
        }
      }
      PromoImage {
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
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
      SitemapSettings {
        ExcludeFromSitemap
      }
      composition {
        ...VBCompositionFragment
      }
    }
  `,[n.VBCompositionFragment,t.CmpPublicImageAssetFragment]);e.s(["BlogPostExperienceFragment",0,a])},831617,e=>{"use strict";var t=e.i(983989),i=e.i(804300);e.i(787600);var n=e.i(279663);let a=(0,t.graphql)(`
    fragment EventExperienceFragment on EventExperience {
      __typename
      Heading
      Introduction
      MainBody {
        html
      }
      InformationHeading
      SidebarTags
      InformationSidebar {
        html
      }
      Latitude
      Longitude
      MetaDescription
      MetaTitle
      Schemas
      EventType
      FacilityName
      StartDate
      EndDate
      EventTimezone
      HideDate
      Location
      Address
      City
      StateProvince
      PostalCode
      Country
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
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      Speakers {
        key
      }
      Sponsors {
        key
      }
      HeroImage {
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      GatedContentForm {
        key
      }
      FormThankyouContent {
        key
      }
      FormCTA
      FormHeading
      HideThankYouButton
      MapsLink {
        default
      }
      SitemapSettings {
        ExcludeFromSitemap
      }
      composition {
        ...VBCompositionFragment
      }
    }
  `,[i.VBCompositionFragment,n.CmpPublicImageAssetFragment]);e.s(["EventExperienceFragment",0,a])},764926,e=>{"use strict";var t=e.i(983989),i=e.i(804300);e.i(787600);var n=e.i(279663);let a=(0,t.graphql)(`
    fragment EventPlusPlusExperienceFragment on EventPlusPlusExperience {
      __typename
      Heading
      Introduction
      MetaDescription
      MetaTitle
      Schemas
      StartDate
      EndDate
      EventType
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
      SitemapSettings {
        ExcludeFromSitemap
      }
      composition {
        ...VBCompositionFragment
      }
    }
  `,[i.VBCompositionFragment,n.CmpPublicImageAssetFragment]);e.s(["EventPlusPlusExperienceFragment",0,a])},301306,e=>{"use strict";var t=e.i(983989),i=e.i(804300);e.i(787600);var n=e.i(279663);e.i(384394);var a=e.i(694062);let r=(0,t.graphql)(`
    fragment GatedReportGuidePageExperienceFragment on GatedReportGuidePageExperience {
      __typename
      Heading
      Introduction
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
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      MetaDescription
      MetaTitle
      Schemas
      Date
      GatedContentForm {
        key
      }
      FormThankyouContent {
        key
      }
      ExternalAssetUrl {
        default
      }
      GatedAsset {
        key
        item {
          ...CmpPublicRawFileAssetFragment
        }
      }
      AssetButtonText
      FormCTA
      FormHeading
      composition {
        ...VBCompositionFragment
      }
    }
  `,[i.VBCompositionFragment,n.CmpPublicImageAssetFragment,a.CmpPublicRawFileAssetFragment]);e.s(["GatedReportGuidePageExperienceFragment",0,r])},229762,e=>{"use strict";var t=e.i(983989),i=e.i(804300);e.i(787600);var n=e.i(279663),a=e.i(834764),r=e.i(842189),o=e.i(278708),l=e.i(615804),s=e.i(682063),u=e.i(831899),c=e.i(78133),m=e.i(756933),d=e.i(703518),p=e.i(758749),g=e.i(222012),f=e.i(283693),y=e.i(535989),F=e.i(203244),h=e.i(371512),v=e.i(754610),E=e.i(791224),T=e.i(340886),I=e.i(357834),k=e.i(132913),C=e.i(431545),S=e.i(983773),_=e.i(766099),A=e.i(289283),P=e.i(581296),B=e.i(610460),b=e.i(999930),N=e.i(612841),x=e.i(863692),D=e.i(865714),O=e.i(79745),M=e.i(709486),V=e.i(470367),L=e.i(965407),j=e.i(97773),R=e.i(478996),U=e.i(356237),w=e.i(963578),H=e.i(848741),G=e.i(803239),Y=e.i(534188),q=e.i(5524),K=e.i(394403);let $=(0,t.graphql)(`
    fragment GlossaryPageExperienceFragment on GlossaryPageExperience {
      __typename
      Heading
      Schemas
      Introduction
      MainBody {
        html
      }
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
        url {
          default
        }
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      SitemapSettings {
        ExcludeFromSitemap
      }
      Sidebar {
        __typename
        ...AccordionBlockFragment
        ...ButtonBlockFragment
        ...CardCustomerBlockFragment
        ...CardCustomerHighlightBlockFragment
        ...CardAgentBlockFragment
        ...CardCustomerQuoteBlockFragment
        ...CompanyBlockFragment
        ...ContactBlockFragment
        ...FeatureTickerBlockFragment
        ...LeadGenerationBlockFragment
        ...ImageDisplayBlockFragment
        ...LinkListBlockFragment
        ...TextContentElementFragment
        ...VideoDisplayBlockFragment
        ...StackedHeadingElementFragment
        ...NameTagElementFragment
        ...IconElementFragment
        ...SpacerBlockFragment
        ...CalloutBlockFragment
        ...StatBlockFragment
        ...CountdownTickerBlockFragment
        ...BlockquoteBlockFragment
        ...CardAgentDirectoryBlockFragment
        ...CardAuthorBlockFragment
        ...CardPressBlockFragment
        ...CardCustomerStoryBlockFragment
        ...CardResourceInlineBlockFragment
        ...CalloutQuoteBlockFragment
        ...QuoteBlockFragment
        ...HtmlListBlockFragment
        ...OverlineElementFragment
        ...CalloutCtaBlockFragment
        ...CardHighlightBlockFragment
        ...SummaryBlockFragment
        ...SeparatorBlockFragment
        ...CardArrowBlockFragment
        ...CardConnectorBlockFragment
        ...CardImageContentBlockFragment
        ...CardLocationBlockFragment
        ...CardPartnerBlockFragment
        ...CardRoadmapBetaBlockFragment
        ...CardSessionBlockFragment
        ...ZigZagBlockFragment
      }
      composition {
        ...VBCompositionFragment
      }
    }
  `,[i.VBCompositionFragment,n.CmpPublicImageAssetFragment,a.AccordionBlockFragment,r.ButtonBlockFragment,o.CardCustomerBlockFragment,l.CardCustomerHighlightBlockFragment,s.CardAgentBlockFragment,u.CardCustomerQuoteBlockFragment,c.CompanyBlockFragment,m.ContactBlockFragment,d.FeatureTickerBlockFragment,p.LeadGenerationBlockFragment,g.ImageDisplayBlockFragment,f.LinkListBlockFragment,y.TextContentElementFragment,F.VideoDisplayBlockFragment,h.StackedHeadingElementFragment,v.NameTagElementFragment,E.IconElementFragment,T.SpacerBlockFragment,I.CalloutBlockFragment,k.StatBlockFragment,C.CountdownTickerBlockFragment,S.BlockquoteBlockFragment,_.CardAgentDirectoryBlockFragment,A.CardAuthorBlockFragment,P.CardPressBlockFragment,B.CardCustomerStoryBlockFragment,b.CardResourceInlineBlockFragment,N.CalloutQuoteBlockFragment,x.QuoteBlockFragment,D.HtmlListBlockFragment,O.OverlineElementFragment,M.CalloutCtaBlockFragment,V.CardHighlightBlockFragment,L.SummaryBlockFragment,j.SeparatorBlockFragment,R.CardArrowBlockFragment,U.CardConnectorBlockFragment,w.CardImageContentBlockFragment,H.CardLocationBlockFragment,G.CardPartnerBlockFragment,Y.CardRoadmapBetaBlockFragment,q.CardSessionBlockFragment,K.ZigZagBlockFragment]);e.s(["GlossaryPageExperienceFragment",0,$])},926640,e=>{"use strict";var t=e.i(983989),i=e.i(804300);e.i(787600);var n=e.i(279663);let a=(0,t.graphql)(`
    fragment IntegrationPageExperienceFragment on IntegrationPageExperience {
      __typename
      Heading
      Introduction
      MainBody {
        html
      }
      MetaDescription
      MetaTitle
      Schemas
      AppCategory
      AppColor
      PriceTypes
      RemoteAppId
      OptimizelyVerified
      ContactEmail
      _modified
      _metadata {
        published
        lastModified
        key
        version
        displayName
        variation
        # Read by the connector card to resolve its Product category tags in the
        # item's own locale (see buildConnectorCardProps).
        locale
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
      ConnectorDetailMedia {
        key
        item {
          __typename
          ... on cmp_PublicImageAsset {
            Url
            AltText
            Title
            Width
            Height
          }
          ... on cmp_PublicVideoAsset {
            Url
            AltText
            Title
            MimeType
          }
        }
      }
      AuthorList {
        key
        url {
          default
          hierarchical
        }
      }
      CompanyContentLink {
        key
      }
      Downloads {
        target
        text
        url {
          default
        }
        title
      }
      IntegrationUrl {
        default
        type
        internal
        hierarchical
        base
      }
      RequestConnectorLink {
        url {
          default
        }
        text
        title
        target
      }
      SimilarIntegrations {
        key
      }
      SitemapSettings {
        ExcludeFromSitemap
      }
      composition {
        ...VBCompositionFragment
      }
    }
  `,[i.VBCompositionFragment,n.CmpPublicImageAssetFragment]);e.s(["IntegrationPageExperienceFragment",0,a])},170905,e=>{"use strict";var t=e.i(983989),i=e.i(804300);e.i(787600);var n=e.i(279663);let a=(0,t.graphql)(`
    fragment OptiFindOfferPageExperienceFragment on OptiFindOfferPageExperience {
      __typename
      SitemapSettings {
        ChangeFrequency
        ExcludeFromSitemap
        Priority
      }
      TagLine
      SekTermsAndConditionsPdf {
        default
      }
      SekSla {
        default
      }
      SekMonthlyFee
      PromoImage {
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      PoundTermsAndConditionsPdf {
        default
      }
      PoundSla {
        default
      }
      PoundMonthlyFee
      OrderedServiceDescription
      OrderForm {
        key
      }
      NokTermsAndConditionsPdf {
        default
      }
      NokSla {
        default
      }
      NokMonthlyFee
      MetaTitle
      Schemas
      MetaDescription
      MainBody {
        html
      }
      Lines
      IsAdditionalIndexesOffer
      Introduction
      Heading
      EuroTermsAndConditionsPdf {
        default
      }
      EuroSla {
        default
      }
      EuroMonthlyFee
      DollarTermsAndConditionsPdf {
        default
      }
      DollarSla {
        default
      }
      DollarMonthlyFee
      DkkTermsAndConditionsPdf {
        default
      }
      DkkSla {
        default
      }
      DkkMonthlyFee
      CompanyContentLink {
        key
      }
      AudTermsAndConditionsPdf {
        default
      }
      AudSla {
        default
      }
      AudMonthlyFee
      AdditionalIndexesOfferPage {
        key
      }
      _metadata {
        published
        lastModified
        key
        displayName
        url {
          default
        }
        ... on InstanceMetadata {
          key
          locale
          container
          sortOrder
        }
      }
      _itemMetadata {
        type
        categories
      }
      composition {
        ...VBCompositionFragment
      }
    }
  `,[i.VBCompositionFragment,n.CmpPublicImageAssetFragment]);e.s(["OptiFindOfferPageExperienceFragment",0,a])},648853,515957,e=>{"use strict";var t=e.i(983989),i=e.i(804300);e.i(787600);var n=e.i(279663);e.i(664160);var a=e.i(100517);let r=(0,t.graphql)(`
    fragment VideoPageExperienceFragment on VideoPageExperience {
      __typename
      Heading
      Introduction
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
        key
        url {
          default
        }
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      Video {
        key
        item {
          ...CmpPublicVideoAssetFragment
        }
      }
      MetaDescription
      MetaTitle
      Schemas
      DisplayShowHideCopy
      Series
      SeriesLogo {
        url {
          default
        }
      }
      Video {
        key
      }
      Highlights
      AuthorList {
        key
      }
      composition {
        ...VBCompositionFragment
      }
    }
  `,[i.VBCompositionFragment,n.CmpPublicImageAssetFragment,a.CmpPublicVideoAssetFragment]);e.s(["VideoPageExperienceFragment",0,r],648853),e.i(771277);var o=e.i(132913);let l=(0,t.graphql)(`
    fragment ReportGuidePageExperienceFragment on ReportGuidePageExperience {
      __typename
      Heading
      Introduction
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
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      MetaDescription
      MetaTitle
      Schemas
      Topic
      Industry
      Product
      Region
      AuthorList {
        key
      }
      Date
      GatedContentForm {
        key
      }
      FormThankyouContent {
        key
      }
      GatedAsset {
        key
      }
      HeroBackgroundImage {
        key
        item {
          ...CmpPublicImageAssetFragment
        }
      }
      StatsContentArea {
        ...StatBlockFragment
      }
      composition {
        ...VBCompositionFragment
      }
    }
  `,[i.VBCompositionFragment,n.CmpPublicImageAssetFragment,o.StatBlockFragment]);(0,t.graphql)(`
    fragment ReportGuideFragment on ReportGuide {
      __typename
      Heading
      Introduction
      MainBody {
        html
      }
      MetaDescription
      MetaTitle
      _modified
      _metadata {
        published
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
        lastModified
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
    }
  `,[n.CmpPublicImageAssetFragment]),e.s(["ReportGuidePageExperienceFragment",0,l],515957)}]);