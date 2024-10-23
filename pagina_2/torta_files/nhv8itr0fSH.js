;/*FB_PKG_DELIM*/

__d("PolarisNotesTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({MUTUAL_FOLLOWS:0,BESTIES:1,INTERNAL:2});c=b("$InternalEnum")({EMPTY:7});d=[a.MUTUAL_FOLLOWS,a.BESTIES,a.INTERNAL];e=[a.MUTUAL_FOLLOWS,a.BESTIES];b=b("$InternalEnum")({NEW_NOTE_CTA:"new_note_cta",REPLACE_EXISTING_SELF_NOTE_CTA:"replace_existing_self_note_cta"});f.NoteAudienceOptionValues=a;f.NoteStyle=c;f.NOTE_AUDIENCE_OPTIONS_INTERNAL=d;f.NOTE_AUDIENCE_OPTIONS=e;f.PolarisInboxTrayComposerEntrypoint=b}),66);
__d("hasNotesOnDirectDesktop",["PolarisConfig","PolarisUA"],(function(a,b,c,d,e,f,g){"use strict";function a(){return d("PolarisUA").isDesktop()&&d("PolarisConfig").isLoggedIn()}g["default"]=a}),98);
__d("IGDInboxTrayContextProvider",["PolarisNotesTypes","QPLUserFlow","emptyFunction","hasNotesOnDirectDesktop","qpl","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;f=e.createContext;e.useCallback;var j=e.useContext;e.useMemo;var k=e.useState,l=e.c;e={closeComposer:c("emptyFunction"),composerEntrypoint:d("PolarisNotesTypes").PolarisInboxTrayComposerEntrypoint.NEW_NOTE_CTA,isComposerActive:!1,openComposer:c("emptyFunction")};var m=f(e);function a(a){var b=l(8);a=a.children;var e=k(!1),f=e[0],g=e[1];e=k(d("PolarisNotesTypes").PolarisInboxTrayComposerEntrypoint.NEW_NOTE_CTA);var h=e[0],j=e[1];b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=function(a){j(a),g(c("hasNotesOnDirectDesktop")()),c("QPLUserFlow").start(c("qpl")._(379203828,"2170"))},b[0]=e):e=b[0];e=e;var n;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(n=function(){g(!1)},b[1]=n):n=b[1];n=n;b[2]!==h||b[3]!==f?(n={closeComposer:n,composerEntrypoint:h,isComposerActive:f,openComposer:e},b[2]=h,b[3]=f,b[4]=n):n=b[4];e=n;h=e;b[5]!==h||b[6]!==a?(f=i.jsx(m.Provider,{value:h,children:a}),b[5]=h,b[6]=a,b[7]=f):f=b[7];return f}function b(){return j(m)}g.IGDInboxTrayContextProvider=a;g.usePolarisInboxTrayContext=b}),98);
__d("IGDInboxTrayMobileContextProvider",["PolarisNotesTypes","QPLUserFlow","emptyFunction","qpl","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;f=e.createContext;e.useCallback;var j=e.useContext;e.useMemo;var k=e.useState,l=e.c;e={closeMobileComposer:c("emptyFunction"),isMobileComposerActive:!1,mobileComposerEntrypoint:d("PolarisNotesTypes").PolarisInboxTrayComposerEntrypoint.NEW_NOTE_CTA,openMobileComposer:c("emptyFunction")};var m=f(e);function a(a){var b=l(8);a=a.children;var e=k(!1),f=e[0],g=e[1];e=k(d("PolarisNotesTypes").PolarisInboxTrayComposerEntrypoint.NEW_NOTE_CTA);var h=e[0],j=e[1];b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=function(a){j(a),g(!0),c("QPLUserFlow").start(c("qpl")._(379203828,"2170"))},b[0]=e):e=b[0];e=e;var n;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(n=function(){return g(!1)},b[1]=n):n=b[1];n=n;b[2]!==f||b[3]!==h?(n={closeMobileComposer:n,isMobileComposerActive:f,mobileComposerEntrypoint:h,openMobileComposer:e},b[2]=f,b[3]=h,b[4]=n):n=b[4];e=n;f=e;b[5]!==f||b[6]!==a?(h=i.jsx(m.Provider,{value:f,children:a}),b[5]=f,b[6]=a,b[7]=h):h=b[7];return h}function b(){return j(m)}g.IGDInboxTrayMobileContextProvider=a;g.usePolarisInboxTrayMobileContext=b}),98);
__d("IGDSExplicitEFilledIcon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("path",{d:"M23.953 20.164c0 1.89-.988 2.836-2.96 2.836H3.007c-1.973 0-2.961-.945-2.961-2.836V2.852C.047.949 1.035 0 3.007 0h17.985c1.973 0 2.961.95 2.961 2.852ZM16.06 17.79v-1.637h-5.7v-4.226h5.399v-1.578H10.36V6.703h5.7V5.066H8.242V17.79Zm0 0"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("PolarisInboxTrayItemLayout.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useContext,l=e.c,m={base:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"x13a6bvl",position:"x1n2onr6",$$css:!0},large:{width:"x3smdqs",$$css:!0},medium:{width:"xrostsh",$$css:!0},mediumMobile:{width:"xrostsh",$$css:!0},small:{width:"x13oubkp",$$css:!0}},n=j.createContext();function a(){return k(n)}function b(a){var b=l(12),d=a.innerSlot,e=a.rootSlot;a=a.size;if(e==null)return d;var f=m[a||"small"],g;b[0]!==f?(g=(h||(h=c("stylex")))(m.base,f),b[0]=f,b[1]=g):g=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(f="x6s0dn4 x78zum5 xdt5ytf xh8yej3",b[2]=f):f=b[2];b[3]!==d?(f=j.jsx("div",{className:f,children:d}),b[3]=d,b[4]=f):f=b[4];b[5]!==g||b[6]!==e||b[7]!==f?(d=j.jsxs("div",{className:g,children:[e,f]}),b[5]=g,b[6]=e,b[7]=f,b[8]=d):d=b[8];b[9]!==a||b[10]!==d?(g=j.jsx(n.Provider,{value:a,children:d}),b[9]=a,b[10]=d,b[11]=g):g=b[11];return g}g.usePolarisInboxTrayItemLayoutSize=a;g.PolarisInboxTrayItemLayout=b}),98);
__d("PolarisInboxTrayItemGlimmer.react",["IGDSGlimmer.react","PolarisInboxTrayItemLayout.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={glimmer:{backgroundColor:"x1lynahi",$$css:!0}},l={large:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1ymw6g",width:"xq1dxzn",$$css:!0},small:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x14z7g9a",width:"x7mnju",$$css:!0}},m={large:{height:"xlrawln",marginTop:"x1gslohp",width:"xq1dxzn",$$css:!0},small:{height:"xlup9mm",marginTop:"x1gslohp",width:"x1exxlbk",$$css:!0}},n={large:{borderTopStartRadius:"x107yiy2",borderTopEndRadius:"xv8uw2v",borderBottomEndRadius:"x1tfwpuw",borderBottomStartRadius:"x2g32xy",height:"xnxb3zj",marginBottom:"xbvv5uc",width:"x1so1ns2",$$css:!0},small:{borderTopStartRadius:"xhw592a",borderTopEndRadius:"xwihvcr",borderBottomEndRadius:"x7wuybg",borderBottomStartRadius:"xb9tvrk",height:"x5kalc8",marginBottom:"xh3wvx0",width:"x13oubkp",$$css:!0}};function a(a){var b=i(12);a=a.size;a=a===void 0?"small":a;var e=l[a],f;b[0]!==e?(f=j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[k.glimmer,e]}),b[0]=e,b[1]=f):f=b[1];e=m[a];var g;b[2]!==e?(g=j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[k.glimmer,e]}),b[2]=e,b[3]=g):g=b[3];b[4]!==f||b[5]!==g?(e=j.jsxs(j.Fragment,{children:[f,g]}),b[4]=f,b[5]=g,b[6]=e):e=b[6];f=n[a];b[7]!==f?(g=j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[k.glimmer,f]}),b[7]=f,b[8]=g):g=b[8];b[9]!==e||b[10]!==g?(a=j.jsx(d("PolarisInboxTrayItemLayout.react").PolarisInboxTrayItemLayout,{innerSlot:e,rootSlot:g}),b[9]=e,b[10]=g,b[11]=a):a=b[11];return a}g["default"]=a}),98);
__d("PolarisMarquee.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useEffect,l=b.useLayoutEffect,m=b.useRef,n=b.useState,o=b.c,p={content:{paddingEnd:"x1sxyh0",whiteSpace:"xuxw1ft",$$css:!0},noAnimation:{paddingEnd:"x4uap5",$$css:!0}};function q(a){var b=o(4),c=n(null),d=c[0],e=c[1];b[0]!==a.current?(c=function(){if(a.current==null)return;e(a.current.clientWidth)},b[0]=a.current,b[1]=c):c=b[1];var f;b[2]!==a?(f=[a],b[2]=a,b[3]=f):f=b[3];l(c,f);return d}function r(a,b){var c=o(3);b=b===void 0?75:b;if(a==null)return 0;var d;c[0]!==a||c[1]!==b?(d=Math.round(a*b),c[0]=a,c[1]=b,c[2]=d):d=c[2];return Number(d)}function s(a,b){if(a==null||b==null)return!1;return matchMedia("(prefers-reduced-motion: reduce)").matches?!1:b>a}function t(a,b,c){var d=o(13),e=q(a),f=q(b),g=s(e,f),h=r(f);d[0]!==g||d[1]!==b.current||d[2]!==h||d[3]!==c.current?(e=function(){var a;if(!g)return;var d=[{transform:"translateX(0)"},{transform:"translateX(-100%)"}];(a=b.current)==null?void 0:a.animate(d,{duration:h,iterations:Infinity});(a=c.current)==null?void 0:a.animate(d,{duration:h,iterations:Infinity})},d[0]=g,d[1]=b.current,d[2]=h,d[3]=c.current,d[4]=e):e=d[4];d[5]!==g||d[6]!==a||d[7]!==b||d[8]!==c||d[9]!==h?(f=[g,a,b,c,h],d[5]=g,d[6]=a,d[7]=b,d[8]=c,d[9]=h,d[10]=f):f=d[10];k(e,f);d[11]!==g?(a={willAnimate:g},d[11]=g,d[12]=a):a=d[12];return a}function a(a){var b=a.children,d=a.onAnimate;a=m();var e=m(),f=m(),g=t(a,e,f),i=g.willAnimate;l(function(){i&&(d==null?void 0:d())},[d,i]);return j.jsxs("div",{className:"x6s0dn4 x78zum5 x1nhvcw1 x6ikm8r x10wlt62",ref:a,children:[j.jsx("div",{className:(h||(h=c("stylex")))([p.content,!i&&p.noAnimation]),ref:e,children:b}),i&&j.jsx("div",{className:"x1sxyh0 xuxw1ft",ref:f,children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);