(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98679,44052],{98679:function(e,n,t){"use strict";var i=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t(60221)).default;n.default=a},60221:function(e){"use strict";function nginx(e){var n;n=/\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i,e.languages.nginx={comment:{pattern:/(^|[\s{};])#.*/,lookbehind:!0,greedy:!0},directive:{pattern:/(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:{string:{pattern:/((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,lookbehind:!0,greedy:!0,inside:{escape:{pattern:/\\["'\\nrt]/,alias:"entity"},variable:n}},comment:{pattern:/(\s)#.*/,lookbehind:!0,greedy:!0},keyword:{pattern:/^\S+/,greedy:!0},boolean:{pattern:/(\s)(?:off|on)(?!\S)/,lookbehind:!0},number:{pattern:/(\s)\d+[a-z]*(?!\S)/i,lookbehind:!0},variable:n}},punctuation:/[{};]/}}e.exports=nginx,nginx.displayName="nginx",nginx.aliases=[]},64836:function(e){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e.exports=_interopRequireDefault,e.exports.__esModule=!0,e.exports.default=e.exports}}]);