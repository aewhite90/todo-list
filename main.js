(()=>{"use strict";function e(e){this.name=e,this.tasks=[]}function t(e,t,n,r,a){this.name=e,this.desc=t,this.dueDate=n,this.project=r,this.complete=!1}function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(e){n(1,arguments);var t=r(e);return t.setHours(0,0,0,0),t}function i(e,t){n(2,arguments);var r=a(e),i=a(t);return r.getTime()===i.getTime()}function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function u(e,t){n(1,arguments);var a=t||{},i=a.locale,u=i&&i.options&&i.options.weekStartsOn,s=null==u?0:o(u),c=null==a.weekStartsOn?s:o(a.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=r(e),l=d.getDay(),m=(l<c?7:0)+l-c;return d.setDate(d.getDate()-m),d.setHours(0,0,0,0),d}function s(e,t,r){n(2,arguments);var a=u(e,r),i=u(t,r);return a.getTime()===i.getTime()}let c;const d=e=>{qe();let t=e.target.id;Te(t);const r=c.findIndex((e=>e.name===t));r>-1&&c[r].tasks.forEach((e=>Me(e))),"all"===t&&c.forEach((e=>{e.tasks.forEach((e=>Me(e)))})),"today"===t&&c.forEach((e=>{e.tasks.forEach((e=>{(function(e){return n(1,arguments),i(e,Date.now())})(new Date(e.dueDate))&&Me(e)}))})),"this-week"===t&&c.forEach((e=>{e.tasks.forEach((e=>{(function(e,t){return n(1,arguments),s(e,Date.now(),t)})(new Date(e.dueDate))&&Me(e)}))}))},l=()=>{localStorage.setItem("taskify",JSON.stringify(c))},m=e=>{console.log(e.target.id);let t=e.target.id;const n=c.findIndex((e=>e.name===t));c.splice(n,1),l(),Ne(),c.forEach((e=>ke(e)))},h=e=>{console.log(e.target.id),console.log(e.target.name);let t=e.target.id,n=e.target.name;const r=c.findIndex((e=>e.name===n)),a=c[r].tasks.findIndex((e=>e.name===t));console.log(c[r]),c[r].tasks.splice(a,1),l(),qe(),c[r].tasks.forEach((e=>Me(e)))};var f=36e5,g={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},w=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,p=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,v=/^([+-])(\d{2})(?::?(\d{2}))?$/;function y(e){var t,n={},r=e.split(g.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],g.timeZoneDelimiter.test(n.date)&&(n.date=e.split(g.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=g.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function b(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function C(e,t){if(null===t)return null;var n=e.match(w);if(!n)return null;var r=!!n[4],a=T(n[1]),i=T(n[2])-1,o=T(n[3]),u=T(n[4]),s=T(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,u,s):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(x[t]||(S(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(S(e)?366:365)}(t,a)?(c.setUTCFullYear(t,i,Math.max(a,o)),c):new Date(NaN)}function T(e){return e?parseInt(e):1}function k(e){var t=e.match(p);if(!t)return null;var n=D(t[1]),r=D(t[2]),a=D(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*f+6e4*r+1e3*a:NaN}function D(e){return e&&parseFloat(e.replace(",","."))||0}function M(e){if("Z"===e)return 0;var t=e.match(v);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*f+6e4*a):NaN}var x=[31,null,31,30,31,30,31,31,30,31,30,31];function S(e){return e%400==0||e%4==0&&e%100}function E(e){n(1,arguments);var t=r(e);return!isNaN(t)}var U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function P(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var N,q={date:P({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:P({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:P({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},L={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function W(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function Y(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(d),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}const j={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof U[e]?U[e]:1===t?U[e].one:U[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:q,formatRelative:function(e,t,n,r){return L[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:W({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:W({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:W({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:W({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:W({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(N={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(N.matchPattern);if(!a)return null;var i=a[0],o=n.match(N.parsePattern);if(!o)return null;var u=N.valueCallback?N.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:Y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function O(e,t){n(2,arguments);var a=r(e).getTime(),i=o(t);return new Date(a+i)}function A(e,t){n(2,arguments);var r=o(t);return O(e,-r)}function z(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const F=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return z("yy"===t?r%100:r,t.length)},H=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):z(n+1,2)},X=function(e,t){return z(e.getUTCDate(),t.length)},Q=function(e,t){return z(e.getUTCHours()%12||12,t.length)},G=function(e,t){return z(e.getUTCHours(),t.length)},B=function(e,t){return z(e.getUTCMinutes(),t.length)},I=function(e,t){return z(e.getUTCSeconds(),t.length)},R=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return z(Math.floor(r*Math.pow(10,n-3)),t.length)};var J=864e5;function Z(e){n(1,arguments);var t=1,a=r(e),i=a.getUTCDay(),o=(i<t?7:0)+i-t;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function $(e){n(1,arguments);var t=r(e),a=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=Z(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=Z(u);return t.getTime()>=o.getTime()?a+1:t.getTime()>=s.getTime()?a:a-1}function _(e){n(1,arguments);var t=$(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var a=Z(r);return a}var V=6048e5;function K(e,t){n(1,arguments);var a=t||{},i=a.locale,u=i&&i.options&&i.options.weekStartsOn,s=null==u?0:o(u),c=null==a.weekStartsOn?s:o(a.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=r(e),l=d.getUTCDay(),m=(l<c?7:0)+l-c;return d.setUTCDate(d.getUTCDate()-m),d.setUTCHours(0,0,0,0),d}function ee(e,t){n(1,arguments);var a=r(e,t),i=a.getUTCFullYear(),u=t||{},s=u.locale,c=s&&s.options&&s.options.firstWeekContainsDate,d=null==c?1:o(c),l=null==u.firstWeekContainsDate?d:o(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(i+1,0,l),m.setUTCHours(0,0,0,0);var h=K(m,t),f=new Date(0);f.setUTCFullYear(i,0,l),f.setUTCHours(0,0,0,0);var g=K(f,t);return a.getTime()>=h.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function te(e,t){n(1,arguments);var r=t||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,u=null==i?1:o(i),s=null==r.firstWeekContainsDate?u:o(r.firstWeekContainsDate),c=ee(e,t),d=new Date(0);d.setUTCFullYear(c,0,s),d.setUTCHours(0,0,0,0);var l=K(d,t);return l}var ne=6048e5;function re(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+z(i,2)}function ae(e,t){return e%60==0?(e>0?"-":"+")+z(Math.abs(e)/60,2):ie(e,t)}function ie(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+z(Math.floor(a/60),2)+n+z(a%60,2)}const oe={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return F(e,t)},Y:function(e,t,n,r){var a=ee(e,r),i=a>0?a:1-a;return"YY"===t?z(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):z(i,t.length)},R:function(e,t){return z($(e),t.length)},u:function(e,t){return z(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return z(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return z(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return H(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return z(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,a,i){var o=function(e,t){n(1,arguments);var a=r(e),i=K(a,t).getTime()-te(a,t).getTime();return Math.round(i/ne)+1}(e,i);return"wo"===t?a.ordinalNumber(o,{unit:"week"}):z(o,t.length)},I:function(e,t,a){var i=function(e){n(1,arguments);var t=r(e),a=Z(t).getTime()-_(t).getTime();return Math.round(a/V)+1}(e);return"Io"===t?a.ordinalNumber(i,{unit:"week"}):z(i,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):X(e,t)},D:function(e,t,a){var i=function(e){n(1,arguments);var t=r(e),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=a-i;return Math.floor(o/J)+1}(e);return"Do"===t?a.ordinalNumber(i,{unit:"dayOfYear"}):z(i,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return z(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return z(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return z(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Q(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):G(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):z(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):z(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):B(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):I(e,t)},S:function(e,t){return R(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return ae(a);case"XXXX":case"XX":return ie(a);case"XXXXX":case"XXX":default:return ie(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return ae(a);case"xxxx":case"xx":return ie(a);case"xxxxx":case"xxx":default:return ie(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+re(a,":");case"OOOO":default:return"GMT"+ie(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+re(a,":");case"zzzz":default:return"GMT"+ie(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return z(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return z((r._originalDate||e).getTime(),t.length)}};function ue(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function se(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const ce={p:se,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return ue(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",ue(a,t)).replace("{{time}}",se(i,t))}};function de(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var le=["D","DD"],me=["YY","YYYY"];function he(e){return-1!==le.indexOf(e)}function fe(e){return-1!==me.indexOf(e)}function ge(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var we=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,pe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ve=/^'([^]*?)'?$/,ye=/''/g,be=/[a-zA-Z]/;function Ce(e){return e.match(ve)[1].replace(ye,"'")}const Te=e=>{const t=document.querySelector(".project-title"),n=document.querySelector(".mobile-menu"),r=document.querySelector(".projects");for(0!==n.offsetWidth&&(r.style.display="none");t.firstChild;)t.removeChild(t.firstChild);const a=document.createElement("h2");a.textContent=e,t.appendChild(a)},ke=e=>{const t=document.createElement("li");t.textContent=e.name;const n=document.querySelector(".user-defined-projects");t.setAttribute("id",e.name),t.addEventListener("click",d);const r=document.createElement("div");r.classList.add("delete-project"),r.addEventListener("click",m),r.id=e.name,t.appendChild(r),n.appendChild(t)},De=t=>{const n=document.querySelector(".project-input").value;console.log(n);const r=new e(n);!1===(e=>{if(c.some((t=>t.name==e.name)))return!1;c.push(e),l()})(r)?alert("Please enter a unique project name"):(ke(r),Se(t))},Me=e=>{const t=document.querySelector(".task-list"),a=document.createElement("li");a.classList.add("task-list-item");const i=document.createElement("div");i.classList.add("task-title");const u=document.createElement("span");u.textContent=e.name;const s=document.createElement("p");s.textContent=e.desc,s.classList.add("task-desc");const c=document.createElement("span"),d=function(e,t){n(1,arguments);var r=t||{},a=null==r.additionalDigits?2:o(r.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,u=y(e);if(u.date){var s=b(u.date,a);i=C(s.restDateString,s.year)}if(isNaN(i)||!i)return new Date(NaN);var c,d=i.getTime(),l=0;if(u.time&&(l=k(u.time),isNaN(l)||null===l))return new Date(NaN);if(!u.timezone){var m=new Date(d+l),h=new Date(0);return h.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),h.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),h}return c=M(u.timezone),isNaN(c)?new Date(NaN):new Date(d+l+c)}(e.dueDate);c.textContent=function(e,t,a){n(2,arguments);var i=String(t),u=a||{},s=u.locale||j,c=s.options&&s.options.firstWeekContainsDate,d=null==c?1:o(c),l=null==u.firstWeekContainsDate?d:o(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=s.options&&s.options.weekStartsOn,h=null==m?0:o(m),f=null==u.weekStartsOn?h:o(u.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var g=r(e);if(!E(g))throw new RangeError("Invalid time value");var w=de(g),p=A(g,w),v={firstWeekContainsDate:l,weekStartsOn:f,locale:s,_originalDate:g};return i.match(pe).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,ce[t])(e,s.formatLong,v):e})).join("").match(we).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Ce(n);var a=oe[r];if(a)return!u.useAdditionalWeekYearTokens&&fe(n)&&ge(n,t,e),!u.useAdditionalDayOfYearTokens&&he(n)&&ge(n,t,e),a(p,n,s.localize,v);if(r.match(be))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(d,"MM/dd/yyyy");const l=document.createElement("div");l.classList.add("delete-task"),l.addEventListener("click",h),l.id=e.name,l.name=e.project,i.appendChild(u),i.appendChild(s),a.appendChild(i),a.appendChild(c),a.appendChild(l),t.appendChild(a)},xe=e=>{const n=document.querySelector(".task-input").value,r=document.querySelector(".task-details").value,a=document.querySelector(".task-project").value,i=new t(n,r,document.querySelector(".due-date").value,a);Me(i),((e,t)=>{const n=c.findIndex((e=>e.name===t));c[n].tasks,c[n].tasks.push(e),l()})(i,a),Se(e)},Se=e=>{"project-cancel"===e.target.id||"project-add"===e.target.id?document.querySelector(".user-defined-projects").removeChild(document.querySelector(".input-item")):document.querySelector(".task-list").removeChild(document.querySelector(".task-form"))},Ee=()=>{const e=document.querySelector(".user-defined-projects"),t=document.createElement("li");t.classList.add("input-item");const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","Project Name"),n.classList.add("project-input");const r=document.createElement("div");r.classList.add("btn-container");const a=document.createElement("button"),i=document.createElement("button");a.classList.add("add-btn"),a.setAttribute("id","project-add"),i.classList.add("cancel-btn"),i.setAttribute("id","project-cancel"),r.appendChild(a),r.appendChild(i),t.appendChild(n),t.appendChild(r),e.appendChild(t),a.addEventListener("click",De),i.addEventListener("click",Se)},Ue=()=>{const e=document.querySelector(".task-list"),t=document.createElement("li");t.classList.add("input-item"),t.classList.add("task-form");const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","Task"),n.classList.add("task-input");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","Task Details"),r.classList.add("task-details");const a=document.createElement("select");var i;a.setAttribute("type","select"),a.classList.add("task-project"),a.setAttribute("placeholder","Project"),i=a,c.forEach((e=>{let t=document.createElement("option");t.value=e.name,t.id=e.name,t.textContent=e.name,i.appendChild(t)}));const o=document.createElement("input");o.setAttribute("type","date"),o.classList.add("due-date");const u=document.createElement("div");u.classList.add("task-btn-container");const s=document.createElement("button"),d=document.createElement("button");s.classList.add("add-btn"),s.setAttribute("id","task-add"),d.classList.add("cancel-btn"),d.setAttribute("id","task-btn"),u.appendChild(s),u.appendChild(d),t.appendChild(n),t.appendChild(r),t.appendChild(a),t.appendChild(o),t.appendChild(u),e.appendChild(t),s.addEventListener("click",xe),d.addEventListener("click",Se)},Pe=()=>{const e=document.querySelector(".projects");"none"===e.style.display?e.style.display="flex":e.style.display="none"},Ne=()=>{const e=document.querySelector(".user-defined-projects");for(;e.firstChild;)e.removeChild(e.firstChild)},qe=()=>{const e=document.querySelector(".task-list");for(;e.firstChild;)e.removeChild(e.firstChild)};Array.from(document.querySelectorAll(".project-name")).forEach((e=>{e.addEventListener("click",d)})),document.querySelector(".add-project").addEventListener("click",Ee),document.querySelector(".new-task-btn").addEventListener("click",Ue),document.querySelector(".mobile-menu").addEventListener("click",Pe),c=JSON.parse(localStorage.getItem("taskify")),null===c&&(c=[{name:"none",tasks:[]}]),c.forEach((e=>ke(e)))})();