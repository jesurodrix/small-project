;/*FB_PKG_DELIM*/

__d("TimestampUtils",["fbt","formatDate"],(function(a,b,c,d,e,f,g,h){"use strict";var i=1e3*60*60*24,j=i*30;function k(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}function l(a,b){return h._("__JHASH__OsFN0XAyv2W__JHASH__",[h._param("date",a),h._param("time",b)])}function a(a,b){var d=c("formatDate")(b,"g:i A");if(k(b,a))return h._("__JHASH__I7gnNejSDJn__JHASH__",[h._param("time",d)]);var e=new Date(a.valueOf()-i);if(k(b,e))return h._("__JHASH__18g5xTeqQyg__JHASH__",[h._param("time",d)]);e=new Date(a.valueOf()+i);if(k(b,e))return h._("__JHASH__6hOHFFmfNGd__JHASH__",[h._param("time",d)]);e=c("formatDate")(b,"F j");a.getFullYear()!==b.getFullYear()&&(e=c("formatDate")(b,"F j, Y"));return Math.abs(a.valueOf()-b.valueOf())<j?l(e,d):e}function b(a){return l(c("formatDate")(a,"l, F j, Y"),c("formatDate")(a,"g:i A"))}g.getAbsoluteTimestampFbt=l;g.getTimestamp=a;g.getAbsoluteTimestamp=b}),226);
__d("BaseTimestamp.react",["TimestampUtils","react","react-strict-dom","useServerTime"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");function a(a){a=a.date;var b=c("useServerTime")();b=d("TimestampUtils").getTimestamp(b,a);return b}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisProfessionalAccountSettingsRoot.entrypoint",["JSResourceForInteraction","usePolarisSettingsIsElevationV1EnabledQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{polarisProfessionalAccountSettingsRootQuery:{options:{},parameters:c("usePolarisSettingsIsElevationV1EnabledQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("PolarisProfessionalAccountSettingsRoot.react").__setRef("PolarisProfessionalAccountSettingsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisSettingsProfessionalAccountToolsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisSettingsProfessionalAccountToolsRoot.react").__setRef("PolarisSettingsProfessionalAccountToolsRoot.entrypoint")};g["default"]=a}),98);