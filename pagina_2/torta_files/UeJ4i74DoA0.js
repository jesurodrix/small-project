;/*FB_PKG_DELIM*/

__d("IGDAWAdminWriteMsgTxn",["I64","LSAuthorityLevel","LSIntEnum","LSMessageSendStatus","LSMessageUnsendabilityStatus","WAGlobals","WAJids","asyncToGeneratorRuntime","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,b){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){var e,f=c("uuidv4")(),g="admin:"+(h||(h=d("I64"))).to_string(b.threadKey)+":"+f;e=(e=b.timestampMs)!=null?e:(h||(h=d("I64"))).of_float(Date.now());yield a.messages.put({adminMsgCtaType:b.ctaType,authorityLevel:(i||(i=d("LSIntEnum"))).ofNumber(c("LSAuthorityLevel").AUTHORITATIVE),cannotUnsendReason:i.ofNumber(c("LSMessageUnsendabilityStatus").DENY_LOG_MESSAGE),displayedContentTypes:i.ofNumber(32),isAdminMessage:!0,messageId:g,offlineThreadingId:f,primarySortKey:e,secondarySortKey:void 0,senderId:(a=b.senderId)!=null?a:(h||(h=d("I64"))).of_string(d("WAJids").extractUserId(d("WAGlobals").getMyUserJid())),sendStatus:i.ofNumber(c("LSMessageSendStatus").SERVER_RECEIVED),sendStatusV2:i.ofNumber(2),text:b.text,threadKey:b.threadKey,timestampMs:e,transportKey:"FBBroker"})});return j.apply(this,arguments)}g.writeAdminMessageTxn=a}),98);
__d("LSContactGenderToGenderConst",["GenderConst","I64","LSContactGender","LSIntEnum"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a){if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactGender").FEMALE)))return c("GenderConst").FEMALE_SINGULAR;else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactGender").MALE)))return c("GenderConst").MALE_SINGULAR;else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactGender").NEUTER)))return c("GenderConst").NEUTER_SINGULAR;else return c("GenderConst").NOT_A_PERSON}g["default"]=a}),98);