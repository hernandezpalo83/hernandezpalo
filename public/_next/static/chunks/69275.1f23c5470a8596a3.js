(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69275,57769],{69275:function(e,t,a){"use strict";var s=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(28651)).default;t.default=n},28651:function(e){"use strict";function dart(e){var t,a,s;t=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],s={pattern:RegExp((a=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source)+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}},e.languages.dart=e.languages.extend("clike",{"class-name":[s,{pattern:RegExp(a+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:s.inside}],keyword:t,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),e.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.dart}}},string:/[\s\S]+/}},string:void 0}),e.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),e.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":s,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}e.exports=dart,dart.displayName="dart",dart.aliases=[]},64836:function(e){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e.exports=_interopRequireDefault,e.exports.__esModule=!0,e.exports.default=e.exports}}]);