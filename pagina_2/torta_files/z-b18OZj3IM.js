;/*FB_PKG_DELIM*/

__d("BaseMiddot.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("span",babelHelpers["extends"]({},a,{children:[i.jsx("span",{className:"xzpqnlu xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",children:"\xa0"}),i.jsx("span",{"aria-hidden":"true",children:" \xb7 "})]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EmojiFormat.bs",[],(function(a,b,c,d,e,f){"use strict";function g(a){return a.split("_").map(function(a){return parseInt(a,16)})}function a(a){return a.map(function(a){return a.toString(16)}).join("_")}function h(a){return a.map(function(a){return String.fromCodePoint(a)}).join("")}function b(a){return h(g(a))}f.codeStringToCodeArray=g;f.codeArrayToCodeString=a;f.codeArrayToUnicode=h;f.codeStringToUnicode=b}),66);
__d("EmojiRendererData",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){}a.isEmoji=function(a){return a>983041||a<35?!1:a===35||a===42||a>=48&&a<=57||a===169||a===174||a===8205||a===8252||a===8265||a===8419||a===8482||a===8505||a>=8596&&a<=8601||a>=8617&&a<=8618||a>=8986&&a<=8987||a===9e3||a===9167||a>=9193&&a<=9203||a>=9208&&a<=9210||a===9410||a>=9642&&a<=9643||a===9654||a===9664||a>=9723&&a<=9726||a>=9728&&a<=9732||a===9742||a===9745||a>=9748&&a<=9749||a===9752||a===9760||a>=9762&&a<=9763||a===9766||a===9770||a>=9774&&a<=9775||a>=9784&&a<=9786||a===9792||a===9794||a>=9800&&a<=9811||a>=9823&&a<=9824||a===9827||a>=9829&&a<=9830||a===9832||a===9851||a>=9854&&a<=9855||a>=9874&&a<=9879||a===9881||a>=9883&&a<=9884||a>=9888&&a<=9889||a===9895||a>=9898&&a<=9899||a>=9904&&a<=9905||a>=9917&&a<=9918||a>=9924&&a<=9925||a===9928||a>=9934&&a<=9935||a===9937||a>=9939&&a<=9940||a>=9961&&a<=9962||a>=9968&&a<=9973||a>=9975&&a<=9976||a===9978||a===9981||a===9986||a===9989||a>=9992&&a<=9993||a===9999||a===10002||a===10004||a===10006||a===10013||a===10017||a===10024||a>=10035&&a<=10036||a===10052||a===10055||a===10060||a===10062||a>=10067&&a<=10069||a===10071||a>=10083&&a<=10084||a>=10133&&a<=10135||a===10145||a===10160||a===10175||a>=10548&&a<=10549||a>=11013&&a<=11015||a>=11035&&a<=11036||a===11088||a===11093||a===12336||a===12349||a===12951||a===12953||a===126980||a===127183||a>=127344&&a<=127345||a>=127358&&a<=127359||a===127374||a>=127377&&a<=127386||a>=127462&&a<=127487||a>=127489&&a<=127490||a===127514||a===127535||a>=127538&&a<=127546||a>=127568&&a<=127569||a>=127744&&a<=127777||a>=127780&&a<=127876||a>=127878&&a<=127891||a>=127894&&a<=127895||a>=127897&&a<=127899||a>=127902&&a<=127937||a>=127941&&a<=127942||a>=127944&&a<=127945||a>=127949&&a<=127984||a>=127987&&a<=127989||a>=127991&&a<=127994||a>=128e3&&a<=128065||a>=128068&&a<=128069||a>=128081&&a<=128101||a>=128121&&a<=128123||a>=128125&&a<=128128||a===128132||a>=128136&&a<=128142||a===128144||a>=128146&&a<=128169||a>=128171&&a<=128253||a>=128255&&a<=128317||a>=128329&&a<=128334||a>=128336&&a<=128359||a>=128367&&a<=128368||a===128371||a>=128374&&a<=128377||a===128391||a>=128394&&a<=128397||a>=128420&&a<=128421||a===128424||a>=128433&&a<=128434||a===128444||a>=128450&&a<=128452||a>=128465&&a<=128467||a>=128476&&a<=128478||a===128481||a===128483||a===128488||a===128495||a===128499||a>=128506&&a<=128580||a>=128584&&a<=128586||a>=128640&&a<=128674||a>=128676&&a<=128691||a>=128695&&a<=128703||a>=128705&&a<=128709||a===128715||a>=128717&&a<=128722||a>=128725&&a<=128727||a>=128732&&a<=128741||a===128745||a>=128747&&a<=128748||a===128752||a>=128755&&a<=128764||a>=128992&&a<=129003||a===129008||a>=129293&&a<=129294||a>=129296&&a<=129303||a>=129312&&a<=129317||a>=129319&&a<=129327||a===129338||a>=129343&&a<=129349||a>=129351&&a<=129398||a>=129400&&a<=129460||a===129463||a===129466||a>=129468&&a<=129484||a===129488||a>=129502&&a<=129535||a>=129648&&a<=129660||a>=129664&&a<=129672||a>=129680&&a<=129725||a>=129727&&a<=129730||a>=129742&&a<=129755||a>=129760&&a<=129768||a>=917536&&a<=917631||a>=983040&&a<=983041};a.isEmojiModifier=function(a){return a>127999||a<127995?!1:a>=127995&&a<=127999};a.isEmojiModifierBase=function(a){return a>129784||a<9757?!1:a===9757||a===9977||a>=9994&&a<=9997||a===127877||a>=127938&&a<=127940||a===127943||a>=127946&&a<=127948||a>=128066&&a<=128067||a>=128070&&a<=128080||a>=128102&&a<=128120||a===128124||a>=128129&&a<=128131||a>=128133&&a<=128135||a===128143||a===128145||a===128170||a>=128372&&a<=128373||a===128378||a===128400||a>=128405&&a<=128406||a>=128581&&a<=128583||a>=128587&&a<=128591||a===128675||a>=128692&&a<=128694||a===128704||a===128716||a===129292||a===129295||a>=129304&&a<=129311||a===129318||a>=129328&&a<=129337||a>=129340&&a<=129342||a===129399||a>=129461&&a<=129462||a>=129464&&a<=129465||a===129467||a>=129485&&a<=129487||a>=129489&&a<=129501||a>=129731&&a<=129733||a>=129776&&a<=129784};a.isEmojiVariationSelector=function(a){return a===65039};a.isNonSpacingCombiningMark=function(a){return a>8419||a<8416?!1:a===8416||a===8419};a.isRegionalIndicator=function(a){return a>127487||a<127462?!1:a>=127462&&a<=127487};a.isTagSpec=function(a){return a>917630||a<917536?!1:a>=917536&&a<=917568||a>=917595&&a<=917630};a.isTagTerm=function(a){return a===917631};a.isText=function(a){return a>8419||a<35?!1:a===35||a===42||a>=48&&a<=57||a===8419};a.isTextVariationSelector=function(a){return a===65038};a.isDefaultTextPresentation=function(a){return a>917631||a<35?!1:a===35||a===42||a>=48&&a<=57||a===169||a===174||a===8205||a===8252||a===8265||a===8419||a===8482||a===8505||a>=8596&&a<=8597||a>=8617&&a<=8618||a===9e3||a===9167||a>=9197&&a<=9199||a>=9201&&a<=9202||a>=9208&&a<=9210||a===9410||a===9654||a===9664||a>=9730&&a<=9732||a===9745||a===9752||a===9760||a>=9762&&a<=9763||a===9766||a===9770||a>=9774&&a<=9775||a>=9784&&a<=9785||a===9792||a===9794||a===9823||a===9851||a===9854||a===9874||a>=9876&&a<=9879||a===9881||a>=9883&&a<=9884||a===9895||a>=9904&&a<=9905||a===9928||a===9935||a===9937||a===9939||a===9961||a>=9968&&a<=9969||a===9972||a>=9975&&a<=9977||a===9997||a===9999||a===10002||a===10004||a===10013||a===10017||a===10052||a===10055||a===10083||a===12336||a>=127344&&a<=127345||a>=127358&&a<=127359||a===127777||a>=127780&&a<=127788||a===127798||a===127869||a>=127894&&a<=127895||a>=127897&&a<=127899||a>=127902&&a<=127903||a>=127947&&a<=127950||a>=127956&&a<=127967||a===127987||a===127989||a===127991||a===128063||a===128065||a===128253||a>=128329&&a<=128330||a>=128367&&a<=128368||a>=128371&&a<=128377||a===128391||a>=128394&&a<=128397||a===128400||a===128421||a===128424||a>=128433&&a<=128434||a===128444||a>=128450&&a<=128452||a>=128465&&a<=128467||a>=128476&&a<=128478||a===128481||a===128483||a===128488||a===128495||a===128499||a===128506||a===128715||a>=128717&&a<=128719||a>=128736&&a<=128741||a===128745||a===128752||a===128755||a>=917536&&a<=917631};a.isSymbol=function(a){return a>8482||a<169?!1:a===169||a===174||a===8482};a.isZWJ=function(a){return a===8205};return a}();e.exports=a}),null);
__d("UnicodeUtils",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";var i=55296,j=56319,k=56320,l=57343,m=/[\uD800-\uDFFF]/;function n(a){return i<=a&&a<=l}function a(a,b){0<=b&&b<a.length||h(0,1346,b,a.length);if(b+1===a.length)return!1;var c=a.charCodeAt(b);a=a.charCodeAt(b+1);return i<=c&&c<=j&&k<=a&&a<=l}function o(a){return m.test(a)}function p(a,b){a=n(a.charCodeAt(b));return a?2:1}function b(a){if(!o(a))return a.length;var b=0;for(var c=0;c<a.length;c+=p(a,c))b++;return b}function c(a,b){return r(a,b,b+1)}function q(a,b,c){var d=b||0;c=c===void 0?Infinity:c||0;if(!o(a))return a.substr(d,c);var e=a.length;if(e<=0||d>e||c<=0)return"";var f=0;if(d>0){for(;d>0&&f<e;d--)f+=p(a,f);if(f>=e)return""}else if(b<0){for(f=e;d<0&&0<f;d++)f-=p(a,f-1);f<0&&(f=0)}b=e;if(c<e)for(b=f;c>0&&b<e;c--)b+=p(a,b);return a.substring(f,b)}function r(a,b,c){b=b||0;c=c===void 0?Infinity:c||0;b<0&&(b=0);c<0&&(c=0);var d=Math.abs(c-b);b=b<c?b:c;return q(a,b,d)}function d(a){var b=[];for(var c=0;c<a.length;c+=p(a,c))b.push(a.codePointAt(c));return b}g.isCodeUnitInSurrogateRange=n;g.isSurrogatePair=a;g.hasSurrogateUnit=o;g.getUTF16Length=p;g.strlen=b;g.charAt=c;g.substr=q;g.substring=r;g.getCodePoints=d}),98);
__d("EmojiRenderer",["EmojiRendererData","UnicodeUtils"],(function(a,b,c,d,e,f,g){var h,i,j=0,k=1,l=2,m=3,n=4,o=5,p=6,q=7,r=8,s=9,t=10,u=11;function v(a){var b=a[0];if(b===void 0)return!1;var d=a.length,e=a[d-1];if(e){e=e.charCodeAt(0);if((i||(i=c("EmojiRendererData"))).isTagSpec(e))return!1}b=b.charCodeAt(0);if((i||(i=c("EmojiRendererData"))).isSymbol(b)&&d<2)return!1;if((i||(i=c("EmojiRendererData"))).isText(b))if(d===1)return!1;else if(a.length==2)return(i||(i=c("EmojiRendererData"))).isNonSpacingCombiningMark(a[1].charCodeAt(0));else{e=1;(i||(i=c("EmojiRendererData"))).isEmojiVariationSelector(a[e].charCodeAt(0))&&e++;while(e<a.length){if(!(i||(i=c("EmojiRendererData"))).isNonSpacingCombiningMark(a[e].charCodeAt(0)))return!1;e++}return!0}return!0}function w(a,b){var e=null,f=[],g=r,w=0,x=a.length;while(w<x){var y=a.codePointAt(w),z=(h||(h=d("UnicodeUtils"))).getUTF16Length(a,w),A=a.substr(w,z);switch(g){case s:(i||(i=c("EmojiRendererData"))).isRegionalIndicator(y)?g=m:g=r;break;case n:if((i||(i=c("EmojiRendererData"))).isEmojiModifier(y)){g=o;break}case j:(i||(i=c("EmojiRendererData"))).isZWJ(y)?g=q:(i||(i=c("EmojiRendererData"))).isEmojiVariationSelector(y)?g=l:(i||(i=c("EmojiRendererData"))).isTextVariationSelector(y)?g=u:(i||(i=c("EmojiRendererData"))).isNonSpacingCombiningMark(y)?g=k:(i||(i=c("EmojiRendererData"))).isTagSpec(y)?g=p:g=r;break;case k:case l:if((i||(i=c("EmojiRendererData"))).isNonSpacingCombiningMark(y))break;case m:case o:(i||(i=c("EmojiRendererData"))).isZWJ(y)?g=q:(i||(i=c("EmojiRendererData"))).isTagSpec(y)?g=p:g=r;break;case p:(i||(i=c("EmojiRendererData"))).isTagSpec(y)||(i||(i=c("EmojiRendererData"))).isTagTerm(y)?g=p:g=r;break;case q:(i||(i=c("EmojiRendererData"))).isRegionalIndicator(y)?g=s:(i||(i=c("EmojiRendererData"))).isEmojiModifierBase(y)?g=n:(i||(i=c("EmojiRendererData"))).isEmoji(y)?g=j:g=r;break;case t:(i||(i=c("EmojiRendererData"))).isNonSpacingCombiningMark(y)?g=k:(i||(i=c("EmojiRendererData"))).isEmojiVariationSelector(y)?g=l:g=r;break;default:g=r;break}if(g===r){(i||(i=c("EmojiRendererData"))).isRegionalIndicator(y)?g=s:(i||(i=c("EmojiRendererData"))).isEmojiModifierBase(y)?g=n:(i||(i=c("EmojiRendererData"))).isText(y)?g=t:(i||(i=c("EmojiRendererData"))).isEmoji(y)&&(g=j);if(g!==r){e!==null&&v(e.emoji)&&f.push(e);if(b!==null&&b===f.length){e=null;break}e={emoji:[A],length:z,offset:w}}}else e!==null&&(e.emoji.push(A),e.length+=z);w+=z}e!==null&&v(e.emoji)&&f.push(e);return f}function a(a,b,c){c=w(a);var d=[],e=0;c.forEach(function(c){var f=c.offset;f>e&&d.push(a.substr(e,f-e));var g=b(c.emoji);g!=null&&d.push(g);e=f+c.length});d.push(a.substr(e,a.length-e));return d}function b(a){return w(a,1).length===1}function e(a){return w(a).length}g.parse=w;g.render=a;g.containsEmoji=b;g.countEmoji=e}),98);
__d("IGDEntryPoints",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({ACTIVITY_OPTION_MENU:"activity_option_menu",CHAT_TABS:"chat_tabs",DOWNLOAD_YOUR_INFORMATION:"download_your_information",IGD_INBOX:"igd_inbox",IGD_THREAD_LIST:"igd_thread_list",INBOX:"inbox",MESSAGES_TAB:"messages_tab",OMNIPICKER:"omnipicker",PRIMARY_FOLDER_NULL_STATE:"primary_folder_null_state",SECURE_STORAGE_SETTINGS:"secure_storage_settings",SECURITY_ALERTS_LINK:"security_alerts_link",SETTINGS:"settings"});f.IGDEntryPoints=a}),66);
__d("IGDSEmoji.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(6),c=a.emoji;a=a.fontSize;var d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d="x15yrdiy",b[0]=d):d=b[0];var e;b[1]!==a?(e=a!=null?{fontSize:a}:void 0,b[1]=a,b[2]=e):e=b[2];b[3]!==e||b[4]!==c?(a=j.jsx("span",{className:d,style:e,children:c}),b[3]=e,b[4]=c,b[5]=a):a=b[5];return a}g["default"]=a}),98);
__d("IGDSErrorPanoOutlineIcon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("path",{d:"M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Zm0-6.594a1.279 1.279 0 1 0 1.278 1.279A1.28 1.28 0 0 0 12 14.91Zm0-8.443a1.326 1.326 0 0 0-.97.412 1.154 1.154 0 0 0-.313.872l.362 5.057a.928.928 0 0 0 1.84 0l.363-5.057a1.152 1.152 0 0 0-.313-.871 1.323 1.323 0 0 0-.97-.413Z"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("IGDThreadListNewMessageLoggingDataContext",["react","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;f=e.createContext;var j=e.useContext;e.useMemo;var k=e.c,l=f("");function a(a){var b=k(4);a=a.children;var d=j(l);bb0:{if(Boolean(d)){d=d;break bb0}var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=c("uuidv4")(),b[0]=e):e=b[0];d=e}e=d;b[1]!==e||b[2]!==a?(d=i.jsx(l.Provider,{value:e,children:a}),b[1]=e,b[2]=a,b[3]=d):d=b[3];return d}function b(){var a=k(1),b=j(l);if(Boolean(b))return b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=c("uuidv4")(),a[0]=b):b=a[0];return b}g.IGDThreadListNewMessageLoggingContextProvider=a;g.useFlowInstanceIdContext=b}),98);
__d("LSCommunityBitOffset",["I64","LSBitFlag"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){if(a>=128)return d("LSBitFlag").has((h||(h=d("I64"))).lsl_(h.one,a-128),b.capabilities3);return a>=64?d("LSBitFlag").has((h||(h=d("I64"))).lsl_(h.one,a-64),b.capabilities2):d("LSBitFlag").has((h||(h=d("I64"))).lsl_(h.one,a),b.capabilities)}g.has=a}),98);
__d("LSFeatureLimitsType",[],(function(a,b,c,d,e,f){a=Object.freeze({READ_ONLY:1,GENERIC_READ_ONLY_BLOCK:2,MESSAGE_SEND:4,MESSENGER_ONLY_ACCOUNTS_READ_ONLY_BLOCK:8,MESSAGE_SEND_PRIVATE:16,MESSAGE_SEND_PUBLIC:32,MESSAGE_SEND_FROM_PAGE:64,COMMERCE_MESSAGE_SEND:128,PAGE_MESSAGING:256});f["default"]=a}),66);
__d("MWCMThreadTypes.react",["I64","LSCommunityBitOffset","LSIntEnum","MessagingThreadSubtype","MetaConfig","isUnjoinedCMThread"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a){return(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(18))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(23))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(21))}function j(a){return(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(18))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(19))}function b(a){return(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(23))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(24))}function e(a){return a==null?!1:(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").MARKETPLACE_THREAD))}function f(a){return a==null?!1:(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").IG_CREATOR_SUBSCRIBER_BROADCAST_CHAT))}function k(a){return(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(21))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(22))}function l(a,b){var e=d("LSCommunityBitOffset").has(1,b),f=(h||(h=d("I64"))).equal(a.threadType,(i||(i=d("LSIntEnum"))).ofNumber(21)),g=k(a.threadType)&&c("MetaConfig")._("35");b=b.takedownState!=null&&(h||(h=d("I64"))).equal(b.takedownState,(i||(i=d("LSIntEnum"))).ofNumber(1));return!b&&(j(a.threadType)||g||e||f||a.hasPendingInvitation===!0)}g.isJoinedCMThread=a;g.isUnjoinedCMThread=d("isUnjoinedCMThread").isUnjoinedCMThread;g.isStandardCMThread=j;g.isBroadcastThread=b;g.isMarketplaceThread=e;g.isIGBroadcastChannelThread=f;g.isPrivateThread=k;g.isThreadEnabled=l}),98);
__d("MWPContactContext.react",["react","shallowEqualI64"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useContext,k=e.useMemo,l=e.useRef,m=i.createContext({authorName:void 0,contact:void 0,nickname:void 0}),n=i.createContext({authorName:void 0,contact:void 0,nickname:void 0});function a(){return j(m)}function b(){return j(n)}function c(a){var b=a.children,c=a.contact,d=a.nickname,e=function(){var a;if(d!=null)a=d;else if(c!=null){var b=c.firstName;a=b!=null?b:c.name}else a=void 0;return a}();a=k(function(){return{authorName:e,contact:c,nickname:d}},[d,e,c]);var f=o(c),g=k(function(){return{authorName:e,contact:f,nickname:d}},[d,e,f]);return i.jsx(m.Provider,{value:a,children:i.jsx(n.Provider,{value:g,children:b})})}c.displayName=c.name+" [from "+f.id+"]";function o(a){var b=l();a=a?{blockedByViewerStatus:a.blockedByViewerStatus,capabilities:a.capabilities,capabilities2:a.capabilities2,contactTypeExact:a.contactTypeExact,name:a.name,profilePictureFallbackUrl:a.profilePictureFallbackUrl,profilePictureUrl:a.profilePictureUrl,profilePictureUrlExpirationTimestampMs:a.profilePictureUrlExpirationTimestampMs,secondaryName:a.secondaryName}:void 0;d("shallowEqualI64").shallowEqualI64(b.current,a)||(b.current=a);return b.current}g.useMWPContactFullContext=a;g.useMWPContactStableContext=b;g.MWPContactContextProvider=c}),98);
__d("useServerTime",["JSScheduler","ServerTime","clearInterval","react","setInterval"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b=i||d("react");var j=b.useEffect,k=b.useState,l=6e4,m=new Set(),n=null,o=!1;function p(){m.forEach(function(a){return a()}),o=!1}function q(a){a===void 0&&(a=l),n=c("setInterval")(function(){o||(o=!0,(h||(h=c("JSScheduler"))).scheduleSpeculativeCallback(p))},a)}function r(){m.size===0&&(c("clearInterval")(n),n=null)}function s(a,b){b===void 0&&(b=l);m.add(a);n==null&&q(b);return function(){m["delete"](a),r()}}function t(){return new Date(d("ServerTime").getMillis())}function a(a){a===void 0&&(a=l);var b=k(function(){return t()}),c=b[0],d=b[1],e=function(){return d(t())};j(function(){return s(e,a)},[a]);return c}g["default"]=a}),98);
__d("MWPFeatureLimitedData",["I64","Int64Hooks","LSFeatureLimitsType","LSIntEnum","LSMessagingThreadTypeUtil","ReQL","ReQLSuspense","ServerTime","gkx","useReStore","useServerTime"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=[(i||(i=d("LSIntEnum"))).ofNumber(c("LSFeatureLimitsType").READ_ONLY),i.ofNumber(c("LSFeatureLimitsType").GENERIC_READ_ONLY_BLOCK),i.ofNumber(c("LSFeatureLimitsType").MESSAGE_SEND)];function l(a){for(var b=0;b<k.length;b++){var c=k[b];if((j||(j=d("I64"))).equal(c,a.type_))return!0}return!1}function m(a,b){return(j||(j=d("I64"))).equal((i||(i=d("LSIntEnum"))).ofNumber(c("LSFeatureLimitsType").MESSAGE_SEND_PUBLIC),a.type_)&&d("LSMessagingThreadTypeUtil").isPublicCMThread(b)&&c("gkx")("26351")}function n(a,b){return(j||(j=d("I64"))).equal((i||(i=d("LSIntEnum"))).ofNumber(c("LSFeatureLimitsType").MESSAGE_SEND_PRIVATE),a.type_)&&d("LSMessagingThreadTypeUtil").isPrivateThread(b)&&c("gkx")("26352")}var o=function(a){var b=(j||(j=d("I64"))).of_float(d("ServerTime").getMillis()/1e3);return d("ReQL").fromTableAscending(a.tables.feature_limits).filter(function(a){return l(a)&&(j||(j=d("I64"))).gt(a.expirationTimestampSeconds,b)})};function p(a,b){var e=(j||(j=d("I64"))).of_float(c("useServerTime")().valueOf()/1e3);return d("Int64Hooks").useMemoInt64(function(){return d("ReQL").fromTableAscending(a.tables.feature_limits).filter(function(a){return(b!=null?l(a)||m(a,b)||n(a,b):l(a))&&(j||(j=d("I64"))).gt(a.expirationTimestampSeconds,e)})},[e,a,b])}function a(){var a=(h||(h=c("useReStore")))();return d("ReQLSuspense").useFirst(function(){return o(a)},[a],f.id+":122")}function b(a){var b=(h||(h=c("useReStore")))(),e=p(b,a);return d("ReQLSuspense").useFirst(function(){return e},[e],f.id+":131")}g.readonlyFeatureLimitQuery=o;g.useReadOnlyFeatureLimitData=a;g.useReadOnlyFeatureLimitDataWithThreadType=b}),98);
__d("ThreadStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({DEFAULT:0,PAUSED:1,PAUSED_AND_UPGRADED_TO_COMMUNITY:2});f["default"]=a}),66);
__d("getInstamadilloLoggingExtraData",["I64","IGDInstamadilloUtils","IGDThreadTTLCUtils"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var b,c=d("IGDInstamadilloUtils").isInstamadilloCutover(a),e=d("IGDInstamadilloUtils").isInstamadilloTransportEnabled(a),f=d("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(a);b=(b=a==null?void 0:a.consistentThreadFbid)!=null?b:(h||(h=d("I64"))).zero;b=babelHelpers["extends"]({},d("IGDThreadTTLCUtils").getTTLCLoggingExtraData(a),{consistent_thread_fbid:(h||(h=d("I64"))).to_string(b),is_dm:String(f),is_instamadillo:String(e),is_instamadillo_tlc:String(c)});a!=null&&(b.thread_key=(h||(h=d("I64"))).to_string(a.threadKey),(a==null?void 0:a.consistentThreadFbid)!=null&&(b.consistent_thread_fbid=(h||(h=d("I64"))).to_string(a.consistentThreadFbid)));return b}g["default"]=a}),98);
__d("getLSMediaContactProfilePictureUrl",["LSMediaUrlUtils"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.profilePictureUrlExpirationTimestampMs;if(b!=null&&d("LSMediaUrlUtils").isTimestampExpired(b)||a.profilePictureUrl===""){return(b=a.profilePictureFallbackUrl)!=null?b:a.profilePictureUrl}else return a.profilePictureUrl}g["default"]=a}),98);
__d("translatedServerString",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a}f["default"]=a}),66);
__d("useIsReadOnlyFeatureLimited",["MWPFeatureLimitedData","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("MWPFeatureLimitedData").useReadOnlyFeatureLimitData();if(a!=null)return c("gkx")("24070");else return!1}g["default"]=a}),98);
__d("useIsThreadBlocked",["I64","LSContactBlockedByViewerStatus","LSIntEnum","LSMessagingThreadTypeUtil","MWPActor.react","MWThreadKey.react","ReQL","ReQLSuspense","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;function a(){var a=(j||(j=c("useReStore")))(),b=d("MWThreadKey.react").useMWThreadKeyMemoizedExn(),e=d("MWPActor.react").useActor(),g=d("ReQLSuspense").useFirst(function(){return d("ReQL").fromTableAscending(a.tables.threads,["threadKey","threadType"]).getKeyRange(b)},[a,b],f.id+":28"),k=d("ReQLSuspense").useFirst(function(){return(g==null?void 0:g.threadKey)!=null&&(g==null?void 0:g.threadType)!=null&&d("LSMessagingThreadTypeUtil").isOneToOne(g==null?void 0:g.threadType)?d("ReQL").leftJoin(d("ReQL").fromTableAscending(a.tables.participants,["contactId"]).getKeyRange(b).filter(function(a){return!(h||(h=d("I64"))).equal(a.contactId,e)}).take(1),d("ReQL").fromTableAscending(a.tables.contacts,["blockedByViewerStatus"])).map(function(a){a[0];a=a[1];return a}):d("ReQL").empty()},[e,a,g==null?void 0:g.threadKey,g==null?void 0:g.threadType,b],f.id+":37");if(k!=null)return!(h||(h=d("I64"))).equal(k.blockedByViewerStatus,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactBlockedByViewerStatus").UNBLOCKED));else return!1}g["default"]=a}),98);