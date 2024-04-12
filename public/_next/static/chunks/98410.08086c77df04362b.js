(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98410,63047,38827],{98410:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19892)).default;t.default=o},93205:function(e){"use strict";function markupTemplating(e){!function(e){function getPlaceholder(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,n,a,o){if(t.language===n){var r=t.tokenStack=[];t.code=t.code.replace(a,function(e){if("function"==typeof o&&!o(e))return e;for(var a,i=r.length;-1!==t.code.indexOf(a=getPlaceholder(n,i));)++i;return r[i]=e,a}),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,n){if(t.language===n&&t.tokenStack){t.grammar=e.languages[n];var a=0,o=Object.keys(t.tokenStack);walkTokens(t.tokens)}function walkTokens(r){for(var i=0;i<r.length&&!(a>=o.length);i++){var s=r[i];if("string"==typeof s||s.content&&"string"==typeof s.content){var l=o[a],u=t.tokenStack[l],p="string"==typeof s?s:s.content,g=getPlaceholder(n,l),c=p.indexOf(g);if(c>-1){++a;var d=p.substring(0,c),f=new e.Token(n,e.tokenize(u,t.grammar),"language-"+n,u),k=p.substring(c+g.length),m=[];d&&m.push.apply(m,walkTokens([d])),m.push(f),k&&m.push.apply(m,walkTokens([k])),"string"==typeof s?r.splice.apply(r,[i,1].concat(m)):s.content=m}}else s.content&&walkTokens(s.content)}return r}}}})}(e)}e.exports=markupTemplating,markupTemplating.displayName="markupTemplating",markupTemplating.aliases=[]},19892:function(e,t,n){"use strict";var a=n(93205);function twig(e){e.register(a),e.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},e.hooks.add("before-tokenize",function(t){"twig"===t.language&&e.languages["markup-templating"].buildPlaceholders(t,"twig",/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"twig")})}e.exports=twig,twig.displayName="twig",twig.aliases=[]},64836:function(e){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e.exports=_interopRequireDefault,e.exports.__esModule=!0,e.exports.default=e.exports}}]);