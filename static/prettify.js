(function(){var o=true,t=null,A=false;window.PR_SHOULD_USE_CONTINUATION=o;window.PR_TAB_WIDTH=8;window.PR=window.prettyPrintOne=window.prettyPrint=void 0;
(function(){function R(b){function h(e){if(e.charAt(0)!=="\\")return e.charCodeAt(0);switch(e.charAt(1)){case "b":return 8;case "t":return 9;case "n":return 10;case "v":return 11;case "f":return 12;case "r":return 13;case "u":case "x":return parseInt(e.substring(2),16)||e.charCodeAt(1);case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":return parseInt(e.substring(1),8);default:return e.charCodeAt(1)}}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);
if(e==="\\"||e==="-"||e==="["||e==="]")e="\\"+e;return e}function m(e){var i=e.substring(1,e.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));e=[];for(var a=[],n=i[0]==="^",c=n?1:0,f=i.length;c<f;++c){var d=i[c];switch(d){case "\\B":case "\\b":case "\\D":case "\\d":case "\\S":case "\\s":case "\\W":case "\\w":e.push(d);continue}d=h(d);var s;if(c+2<f&&"-"===i[c+1]){s=h(i[c+2]);c+=2}else s=d;a.push([d,s]);if(!(s<65||d>122)){s<
65||d>90||a.push([Math.max(65,d)|32,Math.min(s,90)|32]);s<97||d>122||a.push([Math.max(97,d)&-33,Math.min(s,122)&-33])}}a.sort(function(w,z){return w[0]-z[0]||z[1]-w[1]});i=[];d=[NaN,NaN];for(c=0;c<a.length;++c){f=a[c];if(f[0]<=d[1]+1)d[1]=Math.max(d[1],f[1]);else i.push(d=f)}a=["["];n&&a.push("^");a.push.apply(a,e);for(c=0;c<i.length;++c){f=i[c];a.push(g(f[0]));if(f[1]>f[0]){f[1]+1>f[0]&&a.push("-");a.push(g(f[1]))}}a.push("]");return a.join("")}function v(e){for(var i=e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)",
"g")),a=i.length,n=[],c=0,f=0;c<a;++c){var d=i[c];if(d==="(")++f;else if("\\"===d.charAt(0))if((d=+d.substring(1))&&d<=f)n[d]=-1}for(c=1;c<n.length;++c)if(-1===n[c])n[c]=++u;for(f=c=0;c<a;++c){d=i[c];if(d==="("){++f;if(n[f]===undefined)i[c]="(?:"}else if("\\"===d.charAt(0))if((d=+d.substring(1))&&d<=f)i[c]="\\"+n[f]}for(f=c=0;c<a;++c)if("^"===i[c]&&"^"!==i[c+1])i[c]="";if(e.ignoreCase&&q)for(c=0;c<a;++c){d=i[c];e=d.charAt(0);if(d.length>=2&&e==="[")i[c]=m(d);else if(e!=="\\")i[c]=d.replace(/[a-zA-Z]/g,
function(s){s=s.charCodeAt(0);return"["+String.fromCharCode(s&-33,s|32)+"]"})}return i.join("")}for(var u=0,q=A,l=A,r=0,j=b.length;r<j;++r){var k=b[r];if(k.ignoreCase)l=o;else if(/[a-z]/i.test(k.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){q=o;l=A;break}}var p=[];r=0;for(j=b.length;r<j;++r){k=b[r];if(k.global||k.multiline)throw Error(""+k);p.push("(?:"+v(k)+")")}return RegExp(p.join("|"),l?"gi":"g")}function S(b){function h(j){switch(j.nodeType){case 1:if(g.test(j.className))break;
for(var k=j.firstChild;k;k=k.nextSibling)h(k);k=j.nodeName;if("BR"===k||"LI"===k){m[q]="\n";u[q<<1]=v++;u[q++<<1|1]=j}break;case 3:case 4:k=j.nodeValue;if(k.length){k=r?k.replace(/\r\n?/g,"\n"):k.replace(/[ \t\r\n]+/g," ");m[q]=k;u[q<<1]=v;v+=k.length;u[q++<<1|1]=j}}}var g=/(?:^|\s)nocode(?:\s|$)/,m=[],v=0,u=[],q=0,l;if(b.currentStyle)l=b.currentStyle.whiteSpace;else if(window.getComputedStyle)l=document.defaultView.getComputedStyle(b,t).getPropertyValue("white-space");var r=l&&"pre"===l.substring(0,
3);h(b);return{source:m.join("").replace(/\n$/,""),a:u}}function J(b,h,g,m){if(h){b={source:h,b:b};g(b);m.push.apply(m,b.c)}}function F(b,h){function g(q){for(var l=q.b,r=[l,B],j=0,k=q.source.match(v)||[],p={},e=0,i=k.length;e<i;++e){var a=k[e],n=p[a],c=void 0,f;if(typeof n==="string")f=A;else{var d=m[a.charAt(0)];if(d){c=a.match(d[1]);n=d[0]}else{for(f=0;f<u;++f){d=h[f];if(c=a.match(d[1])){n=d[0];break}}c||(n=B)}if((f=n.length>=5&&"lang-"===n.substring(0,5))&&!(c&&typeof c[1]==="string")){f=A;n=
L}f||(p[a]=n)}d=j;j+=a.length;if(f){f=c[1];var s=a.indexOf(f),w=s+f.length;if(c[2]){w=a.length-c[2].length;s=w-f.length}n=n.substring(5);J(l+d,a.substring(0,s),g,r);J(l+d+s,f,M(n,f),r);J(l+d+w,a.substring(w),g,r)}else r.push(l+d,n)}q.c=r}var m={},v;(function(){for(var q=b.concat(h),l=[],r={},j=0,k=q.length;j<k;++j){var p=q[j],e=p[3];if(e)for(var i=e.length;--i>=0;)m[e.charAt(i)]=p;p=p[1];e=""+p;if(!r.hasOwnProperty(e)){l.push(p);r[e]=t}}l.push(/[\0-\uffff]/);v=R(l)})();var u=h.length;return g}function y(b){var h=
[],g=[];if(b.tripleQuotedStrings)h.push([C,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,t,"'\""]);else b.multiLineStrings?h.push([C,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,t,"'\"`"]):h.push([C,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,t,"\"'"]);b.verbatimStrings&&g.push([C,
/^@\"(?:[^\"]|\"\")*(?:\"|$)/,t]);var m=b.hashComments;if(m)if(b.cStyleComments){m>1?h.push([D,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,t,"#"]):h.push([D,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,t,"#"]);g.push([C,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,t])}else h.push([D,/^#[^\r\n]*/,t,"#"]);if(b.cStyleComments){g.push([D,/^\/\/[^\r\n]*/,t]);g.push([D,/^\/\*[\s\S]*?(?:\*\/|$)/,t])}b.regexLiterals&&g.push(["lang-regex",
RegExp("^"+T+"(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);b=b.keywords.replace(/^\s+|\s+$/g,"");b.length&&g.push([N,RegExp("^(?:"+b.replace(/\s+/g,"|")+")\\b"),t]);h.push([B,/^\s+/,t," \r\n\t "]);g.push([K,/^@[a-z_$][a-z_$@0-9]*/i,t],[O,/^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/,t],[B,/^[a-z_$][a-z_$@0-9]*/i,t],[K,/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,t,"0123456789"],[B,/^\\[\s\S]?/,t],[G,/^.[^\s\w\.$@\'\"\`\/\#\\]*/,
t]);return F(h,g)}function P(b,h){function g(a){switch(a.nodeType){case 1:if(v.test(a.className))break;if("BR"===a.nodeName){m(a);a.parentNode&&a.parentNode.removeChild(a)}else for(a=a.firstChild;a;a=a.nextSibling)g(a);break;case 3:case 4:if(r){var n=a.nodeValue,c=n.match(u);if(c){var f=n.substring(0,c.index);a.nodeValue=f;(n=n.substring(c.index+c[0].length))&&a.parentNode.insertBefore(q.createTextNode(n),a.nextSibling);m(a);f||a.parentNode.removeChild(a)}}}}function m(a){function n(f,d){var s=d?
f.cloneNode(A):f,w=f.parentNode;if(w){w=n(w,1);var z=f.nextSibling;w.appendChild(s);for(var E=z;E;E=z){z=E.nextSibling;w.appendChild(E)}}return s}for(;!a.nextSibling;){a=a.parentNode;if(!a)return}a=n(a.nextSibling,0);for(var c;(c=a.parentNode)&&c.nodeType===1;)a=c;j.push(a)}var v=/(?:^|\s)nocode(?:\s|$)/,u=/\r\n?|\n/,q=b.ownerDocument,l;if(b.currentStyle)l=b.currentStyle.whiteSpace;else if(window.getComputedStyle)l=q.defaultView.getComputedStyle(b,t).getPropertyValue("white-space");var r=l&&"pre"===
l.substring(0,3);for(l=q.createElement("LI");b.firstChild;)l.appendChild(b.firstChild);for(var j=[l],k=0;k<j.length;++k)g(j[k]);h===(h|0)&&j[0].setAttribute("value",h);var p=q.createElement("OL");p.className="linenums";var e=Math.max(0,h-1|0)||0;k=0;for(var i=j.length;k<i;++k){l=j[k];l.className="L"+(k+e)%10;l.firstChild||l.appendChild(q.createTextNode(" "));p.appendChild(l)}b.appendChild(p)}function x(b,h){for(var g=h.length;--g>=0;){var m=h[g];if(H.hasOwnProperty(m))"console"in window&&console.warn("cannot override language handler %s",
m);else H[m]=b}}function M(b,h){b&&H.hasOwnProperty(b)||(b=/^\s*</.test(h)?"default-markup":"default-code");return H[b]}function Q(b){var h=b.d;try{var g=S(b.e),m=g.source;b.source=m;b.a=g.a;b.b=0;M(h,m)(b);var v=/\bMSIE\b/.test(navigator.userAgent);h=/\n/g;var u=b.source,q=u.length;g=0;var l=b.a,r=l.length;m=0;for(var j=b.c,k=j.length,p=b=0,e=0;e<k;){for(var i=j[e],a=e;a+2<k&&j[a+2]===i;)a+=2;var n=j[a+1];for(a+=2;a+2<=k&&(j[a+1]===n||j[a]===j[a+2]);)a+=2;j[p++]=i;j[p++]=n;e=a}if(p&&j[p-2]===q)p-=
2;for(j.length=p;m<r;){var c=l[m+2]||q,f=j[b+2]||q;a=Math.min(c,f);var d=l[m+1];if(d.nodeType!==1){var s=u.substring(g,a);if(v)s=s.replace(h,"\r");d.nodeValue=s;var w=d.ownerDocument,z=w.createElement("SPAN");z.className=j[b+1];var E=d.parentNode;E.replaceChild(z,d);z.appendChild(d);if(g<c){l[m+1]=d=w.createTextNode(u.substring(a,c));E.insertBefore(d,z.nextSibling)}}g=a;if(g>=c)m+=2;if(g>=f)b+=2}}catch(I){if("console"in window)console.log(I&&I.stack?I.stack:I)}}var C="str",N="kwd",D="com",O="typ",
K="lit",G="pun",B="pln",L="src",T=function(){for(var b=["!","!=","!==","#","%","%=","&","&&","&&=","&=","(","*","*=","+=",",","-=","->","/","/=",":","::",";","<","<<","<<=","<=","=","==","===",">",">=",">>",">>=",">>>",">>>=","?","@","[","^","^=","^^","^^=","{","|","|=","||","||=","~","break","case","continue","delete","do","else","finally","instanceof","return","throw","try","typeof"],h="(?:^^|[+-]",g=0;g<b.length;++g)h+="|"+b[g].replace(/([^=<>:&a-z])/g,"\\$1");h+=")\\s*";return h}(),U=y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END break continue do else for if return while case done elif esac eval fi function in local set then until ",
hashComments:o,cStyleComments:o,multiLineStrings:o,regexLiterals:o}),H={};x(U,["default-code"]);x(F([],[[B,/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],[D,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[G,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup",
"htm","html","mxml","xhtml","xml","xsl"]);x(F([[B,/^[\s]+/,t," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,t,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[G,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",
/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);x(F([],[["atv",/^[\s\S]+/]]),["uq.val"]);x(y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where ",
hashComments:o,cStyleComments:o}),["c","cc","cpp","cxx","cyc","m"]);x(y({keywords:"null true false"}),["json"]);x(y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
hashComments:o,cStyleComments:o,verbatimStrings:o}),["cs"]);x(y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",
cStyleComments:o}),["java"]);x(y({keywords:"break continue do else for if return while case done elif esac eval fi function in local set then until ",hashComments:o,multiLineStrings:o}),["bsh","csh","sh"]);x(y({keywords:"break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",hashComments:o,multiLineStrings:o,tripleQuotedStrings:o}),["cv","py"]);x(y({keywords:"caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",
hashComments:o,multiLineStrings:o,regexLiterals:o}),["perl","pl","pm"]);x(y({keywords:"break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",hashComments:o,multiLineStrings:o,regexLiterals:o}),["rb"]);x(y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN ",
cStyleComments:o,regexLiterals:o}),["js"]);x(y({keywords:"all and by catch class else extends false finally for if in is isnt loop new no not null of off on or return super then true try unless until when while yes ",hashComments:3,cStyleComments:o,multilineStrings:o,tripleQuotedStrings:o,regexLiterals:o}),["coffee"]);x(F([],[[C,/^[\s\S]+/]]),["regex"]);window.prettyPrintOne=function(b,h,g){var m=document.createElement("PRE");m.innerHTML=b;g&&P(m,g);Q({d:h,f:g,e:m});return m.innerHTML};window.prettyPrint=
function(b){function h(){for(var k=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;r<m.length&&l.now()<k;r++){var p=m[r];if(p.className&&p.className.indexOf("prettyprint")>=0){var e=p.className.match(/\blang-(\w+)\b/);if(e)e=e[1];for(var i=A,a=p.parentNode;a;a=a.parentNode)if((a.tagName==="pre"||a.tagName==="code"||a.tagName==="xmp")&&a.className&&a.className.indexOf("prettyprint")>=0){i=o;break}if(!i){(i=(i=p.className.match(/\blinenums\b(?::(\d+))?/))?i[1]&&i[1].length?+i[1]:o:A)&&P(p,i);
j={d:e,e:p,f:i};Q(j)}}}if(r<m.length)setTimeout(h,250);else b&&b()}for(var g=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],m=[],v=0;v<g.length;++v)for(var u=0,q=g[v].length;u<q;++u)m.push(g[v][u]);g=t;var l=Date;l.now||(l={now:function(){return(new Date).getTime()}});var r=0,j;h()};window.PR={createSimpleLexer:F,registerLangHandler:x,sourceDecorator:y,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:D,PR_DECLARATION:"dec",PR_KEYWORD:N,
PR_LITERAL:K,PR_NOCODE:"nocode",PR_PLAIN:B,PR_PUNCTUATION:G,PR_SOURCE:L,PR_STRING:C,PR_TAG:"tag",PR_TYPE:O}})();})()
