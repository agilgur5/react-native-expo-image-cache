var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.CacheEntry=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _=_interopRequireWildcard(require("lodash"));var _expo=require("expo");var _sha=_interopRequireDefault(require("crypto-js/sha1"));var BASE_DIR=_expo.FileSystem.cacheDirectory+"expo-image-cache/";var CacheEntry=function(){function CacheEntry(uri,options){(0,_classCallCheck2.default)(this,CacheEntry);this.uri=uri;this.options=options;}(0,_createClass2.default)(CacheEntry,[{key:"getPath",value:function getPath(){var uri,options,_ref,path,exists,tmpPath,result;return _regenerator.default.async(function getPath$(_context){while(1){switch(_context.prev=_context.next){case 0:uri=this.uri,options=this.options;_context.next=3;return _regenerator.default.awrap(getCacheEntry(uri));case 3:_ref=_context.sent;path=_ref.path;exists=_ref.exists;tmpPath=_ref.tmpPath;if(!exists){_context.next=9;break;}return _context.abrupt("return",path);case 9:_context.next=11;return _regenerator.default.awrap(_expo.FileSystem.createDownloadResumable(uri,tmpPath,options).downloadAsync());case 11:result=_context.sent;if(!(result&&result.status!==200)){_context.next=14;break;}return _context.abrupt("return",undefined);case 14:_context.next=16;return _regenerator.default.awrap(_expo.FileSystem.moveAsync({from:tmpPath,to:path}));case 16:return _context.abrupt("return",path);case 17:case"end":return _context.stop();}}},null,this);}}]);return CacheEntry;}();exports.CacheEntry=CacheEntry;var CacheManager=function(){function CacheManager(){(0,_classCallCheck2.default)(this,CacheManager);}(0,_createClass2.default)(CacheManager,null,[{key:"get",value:function get(uri,options){if(!CacheManager.entries[uri]){CacheManager.entries[uri]=new CacheEntry(uri,options);}return CacheManager.entries[uri];}},{key:"clearCache",value:function clearCache(){return _regenerator.default.async(function clearCache$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _regenerator.default.awrap(_expo.FileSystem.deleteAsync(BASE_DIR,{idempotent:true}));case 2:_context2.next=4;return _regenerator.default.awrap(_expo.FileSystem.makeDirectoryAsync(BASE_DIR));case 4:case"end":return _context2.stop();}}});}},{key:"getCacheSize",value:function getCacheSize(){var _ref2,size;return _regenerator.default.async(function getCacheSize$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _regenerator.default.awrap(_expo.FileSystem.getInfoAsync(BASE_DIR,{size:true}));case 2:_ref2=_context3.sent;size=_ref2.size;return _context3.abrupt("return",size);case 5:case"end":return _context3.stop();}}});}}]);return CacheManager;}();exports.default=CacheManager;CacheManager.entries={};var getCacheEntry=function getCacheEntry(uri){var filename,ext,path,tmpPath,info,exists;return _regenerator.default.async(function getCacheEntry$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:filename=uri.substring(uri.lastIndexOf("/"),uri.indexOf("?")===-1?uri.length:uri.indexOf("?"));ext=filename.indexOf(".")===-1?".jpg":filename.substring(filename.lastIndexOf("."));path=""+BASE_DIR+(0,_sha.default)(uri)+ext;tmpPath=""+BASE_DIR+(0,_sha.default)(uri)+"-"+_.uniqueId()+ext;_context4.prev=4;_context4.next=7;return _regenerator.default.awrap(_expo.FileSystem.makeDirectoryAsync(BASE_DIR));case 7:_context4.next=11;break;case 9:_context4.prev=9;_context4.t0=_context4["catch"](4);case 11:_context4.next=13;return _regenerator.default.awrap(_expo.FileSystem.getInfoAsync(path));case 13:info=_context4.sent;exists=info.exists;return _context4.abrupt("return",{exists:exists,path:path,tmpPath:tmpPath});case 16:case"end":return _context4.stop();}}},null,null,[[4,9]]);};
//# sourceMappingURL=CacheManager.js.map