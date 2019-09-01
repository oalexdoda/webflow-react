require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpile", function() { return transpile; });
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _writers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import git from './legacy/git';



const defaultPublicSubFolders = ['css', 'fonts', 'images', 'js'];

const transpile = (() => {
    var _ref = _asyncToGenerator(function* (config) {
        let inputFiles;
        let outputFiles = [];
        try {
            yield Promise.all([_libs__WEBPACK_IMPORTED_MODULE_2__["fs"].readdir(config.input).then(function (files) {
                inputFiles = files;
            })]
            // git.removeWFRFiles(config).then(files => {
            //     outputFiles.push(...files);
            // }),
            );
        } catch (e) {
            console.log(e);
        }

        const folders = inputFiles.filter(function (file) {
            return !path__WEBPACK_IMPORTED_MODULE_1___default.a.extname(file).length && !defaultPublicSubFolders.includes(file);
        });
        try {
            yield Promise.all(folders.map(function (folder) {
                return _libs__WEBPACK_IMPORTED_MODULE_2__["fs"].readdir(`${config.input}/${folder}`).then(function (files) {
                    inputFiles = [...(inputFiles || []), ...(files || []).map(function (file) {
                        return `${folder}/${file}`;
                    })];
                });
            }));
        } catch (e) {
            console.log(e);
        }
        const htmlFiles = inputFiles.filter(function (file) {
            return path__WEBPACK_IMPORTED_MODULE_1___default.a.extname(file) == '.html';
        });

        const publicSubDirs = inputFiles.filter(function (file) {
            return !path__WEBPACK_IMPORTED_MODULE_1___default.a.extname(file) && defaultPublicSubFolders.includes(file);
        });

        const scriptWriter = new _writers__WEBPACK_IMPORTED_MODULE_3__["ScriptWriter"]({
            baseUrl: config.input,
            prefetch: config.prefetch
        });

        const styleWriter = new _writers__WEBPACK_IMPORTED_MODULE_3__["StyleWriter"]({
            baseUrl: config.input,
            prefetch: config.prefetch,
            source: config.srouce
        });

        const transpilingHTMLFiles = htmlFiles.map(function (htmlFile) {
            return transpileHTMLFile(config, htmlFile, scriptWriter, styleWriter);
        });
        const viewWriters = yield Promise.all(transpilingHTMLFiles);
        const writingFiles = Promise.all([_writers__WEBPACK_IMPORTED_MODULE_3__["ViewWriter"].writeAll(viewWriters, config.output.src.views, config.output.src.components, config.output.src.meta, config.output.src.layout, config.output.src.controllers).then(function (paths) {
            return outputFiles.push(...paths);
        }), scriptWriter.write(config.output.src.layout + '/App/scripts').then(function (paths) {
            return outputFiles.push(...paths);
        }), styleWriter.write(config.output.src.layout + '/App/styles').then(function (paths) {
            return outputFiles.push(...paths);
        })]);

        const makingPublicDir = makePublicDir(config, publicSubDirs).then(function (paths) {
            return outputFiles.push(...paths);
        });
        try {
            yield Promise.all([writingFiles, makingPublicDir]);
        } catch (e) {
            console.log(e);
        }

        // TODO: Enable Git?
        // return git.add(outputFiles, config).then(files => {
        //     return git.commit(files, 'Updated');
        // });
    });

    return function transpile(_x) {
        return _ref.apply(this, arguments);
    };
})();

const transpileHTMLFile = (() => {
    var _ref2 = _asyncToGenerator(function* (config, htmlFile, scriptWriter, styleWriter) {
        const html = (yield _libs__WEBPACK_IMPORTED_MODULE_2__["fs"].readFile(`${config.input}/${htmlFile}`)).toString();
        const $ = cheerio__WEBPACK_IMPORTED_MODULE_0___default.a.load(html);
        const $head = $('head');

        if (htmlFile == 'index.html') {
            htmlFile = 'home.html';
        }

        if (!!scriptWriter && !!styleWriter) {
            // pass
        }

        const $body = $('body');
        const splitter = htmlFile.split('/');
        const viewWriter = new _writers__WEBPACK_IMPORTED_MODULE_3__["ViewWriter"]({
            name: splitter[htmlFile.split('/').length - 1].split('.').slice(0, -1).join('.'),
            baseUrl: config.baseUrl,
            parent: htmlFile.split('/')[0] === htmlFile ? null : htmlFile.split('/')[0],
            isComponent: false,
            source: config.source
        });

        setScripts(scriptWriter, $head, $);
        setStyles(viewWriter, styleWriter, $head, $, config.output.src.views);
        setHTML(viewWriter, $body, $);

        return viewWriter;
    });

    return function transpileHTMLFile(_x2, _x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
    };
})();

const makePublicDir = (() => {
    var _ref3 = _asyncToGenerator(function* (config, publicSubDirs) {
        const publicDir = config.output.public;
        yield Promise.all(publicSubDirs.map(function (publicSubDir) {
            return Object(_libs__WEBPACK_IMPORTED_MODULE_2__["ncp"])(`${config.input}/${publicSubDir}`, `${publicDir}/${publicSubDir}`);
        }));

        // Resolving relative paths
        const filePaths = yield Object(_libs__WEBPACK_IMPORTED_MODULE_2__["reread"])(config.input);

        const relativePaths = filePaths.map(function (filePath) {
            const relativePath = path__WEBPACK_IMPORTED_MODULE_1___default.a.relative(config.input, filePath);

            return `${publicDir}/${relativePath}`;
        });

        return relativePaths;
    });

    return function makePublicDir(_x6, _x7) {
        return _ref3.apply(this, arguments);
    };
})();

const setScripts = (scriptWriter, $head) => {
    const $scripts = $head.find('script[type="text/javascript"]');

    $scripts.each((i, script) => {
        const $script = $head.find(script);

        scriptWriter.setScript($script.attr('src'), $script.html());
    });
};

const setStyles = (viewWriter, styleWriter, $head, _, viewsDir) => {
    let $styles;

    $styles = $head.find('link[rel="stylesheet"][type="text/css"]');

    $styles.each((i, style) => {
        const $style = $head.find(style);

        viewWriter.setStyle($style.attr('href'), $style.html(), viewsDir);
        styleWriter.setStyle($style.attr('href'), $style.html());
    });

    $styles = $head.find('style');

    $styles.each((i, style) => {
        const $style = $head.find(style);

        viewWriter.setStyle($style.attr('href'), $style.html(), viewsDir);
        styleWriter.setStyle($style.attr('href'), $style.html());
    });
};

const setHTML = (viewWriter, $body, $) => {
    // Create a wrap around $body so we can inherit its style without actually
    // using a <body> tag
    const $div = $('<div>');
    $div.html($body.html());
    $div.attr($body.attr());
    viewWriter.html = $.html($div);
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fs", function() { return _fs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _mkdirp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mkdirp", function() { return _mkdirp__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ncp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ncp", function() { return _ncp__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _reread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reread", function() { return _reread__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _rimraf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rimraf", function() { return _rimraf__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkdir", function() { return mkdir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readdir", function() { return readdir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFile", function() { return readFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stat", function() { return stat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlink", function() { return unlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFile", function() { return writeFile; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);



const mkdir = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdir);
const readdir = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdir);
const readFile = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFile);
const stat = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.stat);
const unlink = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.unlink);
const writeFile = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile);

/* harmony default export */ __webpack_exports__["default"] = ({
    mkdir,
    readdir,
    readFile,
    stat,
    unlink,
    writeFile
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirp));

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.copy));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recursive_readdir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var recursive_readdir__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recursive_readdir__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(recursive_readdir__WEBPACK_IMPORTED_MODULE_0___default.a));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("recursive-readdir");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.remove));

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Writer", function() { return _writer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _view_writer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewWriter", function() { return _view_writer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _script_writer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptWriter", function() { return _script_writer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _style_writer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleWriter", function() { return _style_writer__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let Writer = class Writer {
    write() {
        throw Error('Writer.write() must be implemented');
    }
};


/* harmony default export */ __webpack_exports__["default"] = (Writer);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var htmltojsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var htmltojsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(htmltojsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var statuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var statuses__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(statuses__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uglify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var uglify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uglify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
var _dec, _class;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










const writingFiles = [];

// Attempt at supporting windows by monkey patching path.relative to prevent backslashes.
// const orPathRel = path.relative;
// path.relative = (from, to) => orPathRel(from, to).replace(/\\/gi, '/');



const _ = Symbol('_ViewWriter');
const htmltojsx = new htmltojsx__WEBPACK_IMPORTED_MODULE_1___default.a({ createClass: false });

// const flattenChildren = (children = [], flatten = []) => {
//   children.forEach(child => {
//     flattenChildren(child[_].children, flatten);
//   });

//   flatten.push(...children);

//   return flatten;
// };

const adjustImagesToRoot = html => html.replace(/src="/gi, 'src="/');
// const removeHtmlFromLinks = (html) => adjustImagesToRoot(html.replace('index.html', '').replace(/\.html/ig, '').replace(/href="/ig, 'href="/'))
const removeHtmlFromLinks = html => adjustImagesToRoot(html.replace('index.html', '').replace(/\.html/gi, ''));

let ViewWriter = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["Internal"])(_), _dec(_class = class ViewWriter extends _writer__WEBPACK_IMPORTED_MODULE_7__["default"] {
    static writeAll(viewWriters, pagesDir, componentDir, metaDir, layoutDir, ctrlsDir) {
        return _asyncToGenerator(function* () {
            // Create the directories if they do not exist.
            yield Object(_libs__WEBPACK_IMPORTED_MODULE_5__["mkdirp"])(pagesDir);
            yield Object(_libs__WEBPACK_IMPORTED_MODULE_5__["mkdirp"])(componentDir);
            yield Object(_libs__WEBPACK_IMPORTED_MODULE_5__["mkdirp"])(layoutDir);
            yield Object(_libs__WEBPACK_IMPORTED_MODULE_5__["mkdirp"])(metaDir);

            // Declare file paths for index, helpers and routes.
            const indexFilePath = `${pagesDir}/index.js`;
            const helpersFilePath = `${pagesDir}/../helpers.js`;
            const routesFilePath = `${pagesDir}/../routes.js`;
            const childFilePaths = [indexFilePath, helpersFilePath, routesFilePath];

            // Get the relative controls dir.
            ctrlsDir = path__WEBPACK_IMPORTED_MODULE_2___default.a.relative(pagesDir, ctrlsDir);

            // Prepare the "routes.js" template.
            const routes = `	
            import React from 'react';	
            import { Route, BrowserRouter } from 'react-router-dom';	
            import * as Views from './views';

            ${viewWriters.map(function (viewWriter) {
                return `export const ${viewWriter.className.replace(/view/gi, '').toUpperCase()} = '${viewWriter.parent ? `/${viewWriter.parent}` : ''}/${viewWriter.className.replace(/home/gi, '').replace(/view/gi, '').split(/(?=[A-Z])/).join('-').toLowerCase()}';`;
            }).join('\n  ')}
        
            const Router = () => (
                <BrowserRouter>
                ${viewWriters.map(function (viewWriter) {
                return `<Route key="${viewWriter.className.replace(/view/gi, '')}" path={ ${viewWriter.className.replace(/view/gi, '').toUpperCase()} } component={Views.${viewWriter.className}.Controller} exact />`;
            }).join('\n')}
                </BrowserRouter>
            );
            
            export default Router;`;

            // Prepare the views "index.js" template.
            const index = viewWriters.map(function (viewWriter) {
                return `export { default as ${viewWriter.className} } from './${viewWriter.className}'`;
            }).join('\n');

            const leanViewWriters = [];
            // viewWriters = flattenChildren(viewWriters);

            for (const viewWriter of viewWriters) {
                if (!leanViewWriters.find(function (vw) {
                    return vw.className === viewWriter.className;
                })) {
                    leanViewWriters.push(viewWriter);
                }
            }
            leanViewWriters.forEach((() => {
                var _ref = _asyncToGenerator(function* (viewWriter) {
                    const filePaths = yield viewWriter.write(pagesDir, componentDir, metaDir, ctrlsDir, layoutDir);
                    childFilePaths.push(...filePaths);
                });

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            })());

            const writtingRoutes = _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].writeFile(routesFilePath, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["freeLint"])(routes));
            const writingIndex = _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].writeFile(indexFilePath, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["freeLint"])(index));
            const writingHelpers = _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].writeFile(helpersFilePath, _raw__WEBPACK_IMPORTED_MODULE_6__["default"].viewHelpers);

            yield Promise.all([writingIndex, writingHelpers, writtingRoutes]);
            return childFilePaths;
        })();
    }

    get baseUrl() {
        return this[_].baseUrl;
    }

    set baseUrl(baseUrl) {
        this[_].baseUrl = String(baseUrl);
    }

    set isComponent(comp) {
        this[_].isComponent = comp;
    }

    get isComponent() {
        return this[_].isComponent;
    }

    get children() {
        return this[_].children.slice();
    }

    set name(name) {
        if (!isNaN(Number(name))) {
            name = statuses__WEBPACK_IMPORTED_MODULE_3___default.a[name];
        }

        const words = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["splitWords"])(name);
        Object.assign(this[_], {
            ctrlClassName: words.map(_utils__WEBPACK_IMPORTED_MODULE_8__["upperFirst"]).join(''),
            metaClassName: words.concat('meta').map(_utils__WEBPACK_IMPORTED_MODULE_8__["upperFirst"]).join(''),
            className: words
            // .concat('view')
            .map(_utils__WEBPACK_IMPORTED_MODULE_8__["upperFirst"]).join(''),
            elName: words.map(word => word.toLowerCase()).join('-'),
            name: words.concat('view').map(word => word.toLowerCase()).join('-')
        });
    }

    get name() {
        return this[_].name;
    }

    get ctrlClassName() {
        return this[_].ctrlClassName;
    }

    get metaClassName() {
        return this[_].metaClassName;
    }

    get className() {
        return this[_].className;
    }

    get elName() {
        return this[_].elName;
    }

    set html(html) {
        if (!html) {
            this[_].html = '';
            this[_].children = [];
            return;
        }

        const children = this[_].children = [];
        const $ = cheerio__WEBPACK_IMPORTED_MODULE_0___default.a.load(html);

        // console.log(this[_].className, ($("[wfr-c]") || []).length)

        let el = $('[wfr-c]')[0];
        while (el) {
            const $el = $(el);
            const elName = $el.attr('wfr-c');
            const $afEl = $(`<af-${elName}></af-${elName}>`);
            // const sock = $el.attr("wfr-d");
            // $afEl.attr("wfr-d", $el.attr("wfr-d"));
            $el.attr('wfr-c', null);
            // $el.attr("wfr-d", null);
            $afEl.insertAfter($el);
            // if (sock !== null && sock !== undefined) {
            //   $el.prepend(`<span wfr-d="${sock}">`);
            //   $el.append('</span>');
            // }
            $el.remove();

            const child = new ViewWriter({
                name: elName,
                html: $.html($el),
                baseUrl: this.baseUrl,
                styles: this.styles,
                isComponent: true
            });

            children.push(child);
            el = $('[wfr-c]')[0];
        }

        // Apply ignore rules AFTER child elements were plucked
        $('[wfr-ignore]').remove();

        // Empty inner HTML
        $('[wfr-empty]').html('').attr('wfr-empty', null);

        // Default actions for forms.
        $('form').each(function () {
            if (!$(this).is('[action]')) {
                $(this).attr('action', '/');
            }
        });

        this[_].scripts = [];

        // Set inline scripts. Will be loaded once component has been mounted
        $('script').each((i, script) => {
            const $script = $(script);
            const src = $script.attr('src');
            const type = $script.attr('type');

            // We're only interested in JavaScript script tags
            if (type && !/javascript/i.test(type)) return;

            if (src) {
                this[_].scripts.push({
                    type: 'src',
                    body: src
                });
            } else {
                this[_].scripts.push({
                    type: 'code',
                    body: $script.html()
                });
            }

            $script.remove();
        });

        const $body = $('body');
        html = $body.html();

        this[_].html = html;

        const sockets = this[_].sockets = [];

        // Find root sockets
        $('[wfr-d]').each((i, el) => {
            const $el = $(el);
            const socketName = $el.attr('wfr-d');
            sockets.push(socketName);

            $el.attr('wfr-d', null);
            // Workaround would help identify the closing tag
            el.tagName += `-wfr-d-${socketName}`;
        });

        // Attach socket attributes.
        $('[wfr-a]').each((i, el) => {
            const $el = $(el);
            const socketAttrs = $el.attr('wfr-a').split(',');

            socketAttrs.forEach(socketAttr => {
                sockets.push('%string%' + socketAttr);

                // Workaround to identify socket attributes.
                $el.attr('wfr-a-' + socketAttr, "{ proxies['" + socketAttr + "'] }");
            });

            $el.attr('wfr-a', null);
        });

        // Refetch modified html
        html = $body.html();

        // Transforming HTML into JSX
        let jsx = htmltojsx.convert(removeHtmlFromLinks(html)).trim();

        // Bind controller to view
        this[_].jsx = bindJSX(this, jsx, children);
    }

    get scripts() {
        return this[_].scripts ? this[_].scripts.slice() : [];
    }

    get styles() {
        return this[_].styles.slice();
    }

    get html() {
        return this[_].html;
    }

    get jsx() {
        return this[_].jsx;
    }

    get sockets() {
        return this[_].sockets && [...this[_].sockets];
    }

    get source() {
        return this[_].source;
    }

    set source(source) {
        this[_].source = String(source);
    }

    constructor(options) {
        super();

        this[_].children = [];
        this[_].styles = options.styles || [];

        this.name = options.name;
        this.parent = options.parent;
        this.isComponent = options.isComponent;
        this.html = options.html;
        this.source = options.source;
    }

    write(pagesDir, componentDir, metaDir, ctrlsDir, layoutDir = null) {
        var _this = this;

        return _asyncToGenerator(function* () {
            // Check if the artefact is a "page" or "component".
            const isComponent = pagesDir === componentDir;
            const fileName = _this.className;

            // Set the file path.
            const filePath = `${pagesDir}/${fileName}/index.js`;

            // Set children file paths.
            const childFilePaths = [filePath];

            // Set children writer.
            const writingChildren = _this[_].children.map((() => {
                var _ref2 = _asyncToGenerator(function* (child) {
                    if (!writingFiles.includes(child.className)) {
                        writingFiles.push(child.className);
                        const filePaths = yield child.write(componentDir, componentDir, metaDir, ctrlsDir);
                        childFilePaths.push(...filePaths);
                    }
                });

                return function (_x2) {
                    return _ref2.apply(this, arguments);
                };
            })());

            // Write the files.
            let writingSelf;
            if (!writingFiles.includes(`${fileName}/index.js`)) {
                try {
                    yield Object(_libs__WEBPACK_IMPORTED_MODULE_5__["mkdirp"])(pagesDir + '/' + _this.className);
                    yield _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].readFile(`${pagesDir}/${fileName}/index.js`);
                } catch (e) {
                    writingSelf = _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].writeFile(`${pagesDir}/${fileName}/index.js`, _this[_].compose(path__WEBPACK_IMPORTED_MODULE_2___default.a.relative(pagesDir, componentDir), path__WEBPACK_IMPORTED_MODULE_2___default.a.relative(pagesDir, metaDir), ctrlsDir, !isComponent));
                }
            }

            try {
                yield Promise.all([...writingChildren, writingSelf]);
            } catch (e) {
                console.log(e);
            }

            // Create the <App /> component inside the layout folder.
            if (layoutDir) {
                try {
                    yield Object(_libs__WEBPACK_IMPORTED_MODULE_5__["mkdirp"])(layoutDir + '/App');
                    yield _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].readFile(`${layoutDir}/App/index.js`);
                } catch (e) {
                    writingSelf = _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].writeFile(`${layoutDir}/App/index.js`, _this[_].composeApp());
                }
            }

            // Create the <Page /> component inside the layout folder.
            if (layoutDir) {
                try {
                    yield Object(_libs__WEBPACK_IMPORTED_MODULE_5__["mkdirp"])(layoutDir + '/Page');
                    yield _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].readFile(`${layoutDir}/Page/index.js`);
                } catch (e) {
                    writingSelf = _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].writeFile(`${layoutDir}/Page/index.js`, _this[_].composePage());
                }
            }

            return childFilePaths;
        })();
    }

    setStyle(href, content, viewsDir) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            let type;
            let body;

            if (href) {
                type = 'href';
                body = /^\w+:\/\//.test(href) ? href : path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve('/', href);
            } else {
                type = 'sheet';
                body = content;
            }

            const exists = _this2[_].styles.some(function (style) {
                return style.body == body;
            });

            if (!exists) {
                _this2[_].styles.push({ type, body });
            }

            const sheets = _this2[_].styles.map(function ({ type, body }) {
                return type == 'sheet' && body;
            }).filter(Boolean);

            let css = '';

            // css += hrefs.map((href) => {
            //   return `@import url(${href});`
            // }).join('\n')

            css += '\n\n';

            css += sheets.map(function (sheet) {
                return sheet;
            }).join('\n\n');
            if (!viewsDir || !css.length) return true;
            try {
                yield Object(_libs__WEBPACK_IMPORTED_MODULE_5__["mkdirp"])(viewsDir + '/' + _this2.className + '/styles');
                yield _libs__WEBPACK_IMPORTED_MODULE_5__["fs"].writeFile(`${viewsDir}/${_this2.className}/styles/index.css`, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["escape"])(css.trim()));
            } catch (e) {
                console.log(e);
            }
        })();
    }

    _compose(compDir, metaDir, ctrlsDir, shouldHaveStyles = true) {
        // Adjust the controllers directory.
        ctrlsDir = '../' + ctrlsDir;
        if (this[_].isComponent) {
            ctrlsDir += '/components';
        } else {
            ctrlsDir += '/views';
        }

        // Return the composed template.
        return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["freeLint"])(`
            import React from 'react'

            ${
        // Add helpers if the component has data sockets.
        this[_].sockets.length ? `import { createScope, map, transformProxies } from '../../helpers'` : ''}

            ${
        // Add CSS imports if the page has styles.
        shouldHaveStyles ? `import "./styles/index.css"\n` : '\n'}

            ==>${this[_].composeChildImports(compDir)}<==

            let Controller

            class ${this.className} extends React.Component {
                static get Controller() {
                if (Controller) return Controller

                try {
                    Controller = require('${ctrlsDir}/${this.ctrlClassName}')
                    Controller = Controller.default || Controller

                    return Controller
                }
                catch (e) {
                    if (e.code === 'MODULE_NOT_FOUND') {
                    Controller = ${this.className}

                    return Controller
                    }

                    throw e
                }
            }

            render() {

                ${
        // Render the proxies if the component has data sockets.
        this[_].sockets.length ? `const proxies = Controller !== ${this.className} ? transformProxies(this.props) : {
                    ==>${this[_].composeProxiesDefault()}<==
                }` : ''}

                ${
        // Render metadata if this is a page.
        this[_].isComponent ? '' : `
                            let Metadata
                            try {
                                // eslint-disable-next-line
                                Metadata = require("${metaDir}/${this.metaClassName}")
                                Metadata = Metadata.default || Metadata
                            } catch (e) {
                                // pass
                                Metadata = null;
                            }
                            try {
                                // eslint-disable-next-line
                                Metadata = require("${metaDir}/defaultMeta")
                                Metadata = Metadata.default || Metadata
                            } catch (e) {
                                // pass
                                Metadata = null;
                            }
                        `}

                return (
                    
                        ${
        // Render metadata if this is a page.
        !this[_].isComponent ? `
                                <React.Fragment>
                                    {Metadata ? <Metadata {...this.props} /> : null}
                                    ==>${this.jsx}<==
                                </React.Fragment>` : `
                                ==>${this.jsx}<==
                            `}
                        
                    
                )
            }
        }

        export default ${this.className}
    `);
    }

    _composeApp() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["freeLint"])(`
            import React from 'react';
            import Router from '../../routes.js';

            import './styles';
            import './scripts';

            const App = () => <Router />;

            export default App;
        `);
    }

    _composePage() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["freeLint"])(`
            import React from 'react';

            const Page = () => {
               return (
                   <div></div>
               );
            };

            export default Page;
        `);
    }

    _composeStyleImports() {
        // const hrefs = this[_].styles.map(({ type, body }) => {
        //   return type == 'href' && body
        // }).filter(Boolean)

        const sheets = this[_].styles.map(({ type, body }) => {
            return type == 'sheet' && body;
        }).filter(Boolean);

        let css = '';

        css += '\n\n';

        css += sheets.map(sheet => {
            return sheet;
        }).join('\n\n');

        return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["escape"])(css.trim());
    }

    _composeProxiesDefault() {
        return this[_].sockets.map(socket => {
            let defaultType = '[]';

            if (socket.includes('%string%')) {
                socket = socket.replace('%string%', '');
                defaultType = "''";
            }

            return `'${socket}': ` + defaultType + `,`;
        }).join('\n');
    }

    _composeChildImports(compDir) {
        if (!compDir) {
            compDir = '..';
        } else {
            compDir = '../' + compDir;
        }
        const imported = [];

        const imports = this[_].children.map(child => {
            if (!imported.includes(child.className)) {
                imported.push(child.className);
                return `import ${child.className} from '${compDir}/${child.className}'`;
            }
        }).filter(imp => !!imp && imp.length);

        // Line skip
        imports.push('');

        return imports.length ? imports.join('\n') : '';
    }

    _composeScriptsDeclerations() {
        return this[_].scripts.map(script => {
            if (script.type == 'src') {
                return `fetch("${script.body}").then(body => body.text()),`;
            }

            const minified = uglify_js__WEBPACK_IMPORTED_MODULE_4___default.a.minify(script.body).code;
            // Unknown script format ??? fallback to maxified version
            const code = minified || script.body;

            return `Promise.resolve("${Object(_utils__WEBPACK_IMPORTED_MODULE_8__["escape"])(code)}"),`;
        }).join('\n');
    }

    _composeScriptsInvocations() {
        if (!this[_].scripts) return '';

        const invoke = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["freeScope"])('eval(arguments[0])', 'window', {
            script: null
        });

        return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["freeText"])(`
      scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
        return loaded.then((script) => {
          ==>${invoke}<==

          return loading
        })
      })
    `);
    }
}) || _class);


function camelize(text) {
    return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

function bindJSX(self, jsx, children = []) {
    // DETECT LIST
    children.forEach((child, index) => {
        const isList = new RegExp(`(<af-${child.elName} />\\s*){2,}`, '').exec(jsx);
        if (isList) {
            self[_].sockets.push(`${camelize(child.className)}List${index}`);
            jsx = jsx.replace(new RegExp(`(<af-${child.elName} />\\s*){2,}`, ''), `{map(proxies['${camelize(child.className)}List${index}'], props => <React.Fragment ${mergeProps('')}>{props.children ? props.children : null}</React.Fragment>)}`);
        } else {
            jsx = jsx.replace(new RegExp(`af-${child.elName}`, 'g'), `${child.className}.Controller {...this.props}`);

            jsx = jsx.replace(new RegExp(`(<af-${child.elName} />\\s*)+`, !self[_].isComponent ? 'g' : ''), !self[_].isComponent ? `<${child.className}.Controller {...this.props}/>` : `{map(proxies['${child.className}'], props => <${child.className}.Controller ${mergeProps('')}>{props.children ? props.children : null}</${child.className}.Controller>)}`);
        }
    });

    // ORDER MATTERS
    // Open close
    return jsx
    // Replace attributes
    .replace(/(wfr-a-)([\w_-]+)=(".*?")/g, (match, base) => match.replace(base, '').replace(/["]+/g, '').replace('onsubmit', 'onSubmit').replace('onclick', 'onClick').replace('autofocus', 'autoFocus'))
    // Open close
    .replace(/<([\w_-]+)-wfr-d-([\w_-]+)(.*?)>([^]*)<\/\1-wfr-d-\2>/g, (match, el, sock, attrs, children) => {
        // // attrs.forEach(attr => attr.replace('wfr-a-', ''));
        // console.log(el);

        return (/<[\w_-]+-wfr-d-[\w_-]+/.test(children) ? `{map(proxies['${sock}'], props => <${el} ${mergeProps(attrs)}>{createScope(props.children, proxies => <React.Fragment>
                {props.topelement ? props.topelement() : null}
                ${bindJSX(self, children)}</React.Fragment>)}</${el}>)}` : `{map(proxies['${sock}'], props => <${el} ${mergeProps(attrs)}>{props.children ? props.children : <React.Fragment>${children}</React.Fragment>}</${el}>)}`
        );
    })
    // Self closing
    .replace(/<([\w_-]+)-wfr-d-([\w_-]+)(.*?) \/>/g, (match, el, sock, attrs) => `{map(proxies['${sock}'], props => <${el} ${mergeProps(attrs)}>{props.children}</${el}>)}`);
}

// Merge props along with class name
function mergeProps(attrs) {
    attrs = attrs.trim();

    if (!attrs) {
        return '{...props}';
    }

    let className = attrs.match(/className="([^"]+)"/);

    if (!className) {
        return `${attrs} {...props}`;
    }

    className = className[1];
    attrs = attrs.replace(/ ?className="[^"]+"/, '');

    return `${attrs} {...{...props, className: \`${className} $\{props.className || ''}\`}}`.trim();
}

/* harmony default export */ __webpack_exports__["default"] = (ViewWriter);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("htmltojsx");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("statuses");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("uglify-js");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);



const resolve = filename => path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../src/raw', filename);

// Exporting an object since we're dealing with a getter
/* harmony default export */ __webpack_exports__["default"] = ({
    get viewHelpers() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["requireText"])(resolve('viewHelpers.js'));
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importantizeCSS", function() { return importantizeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeText", function() { return freeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeLint", function() { return freeLint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeContext", function() { return freeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeScope", function() { return freeScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperFirst", function() { return upperFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitWords", function() { return splitWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padLeft", function() { return padLeft; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Internal", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _requireText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requireText", function() { return _requireText__WEBPACK_IMPORTED_MODULE_1__["default"]; });




// Useful for nested strings that should be evaluated
const escape = (str, quote) => {
    str = str.replace(/\\/g, '\\\\');

    switch (quote) {
        case "'":
            return str.replace(/'/g, "\\'");
        case '"':
            return str.replace(/"/g, '\\"');
        case '`':
            return str.replace(/`/g, '\\`');
        default:
            return str.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/`/g, '\\`');
    }
};

const importantizeCSS = css => {
    return css.replace(/(!important)?;/gi, ' !important;');
};

// Will use the shortest indention as an axis
const freeText = text => {
    if (text instanceof Array) {
        text = text.join('');
    }

    // This will allow inline text generation with external functions, same as ctrl+shift+c
    // As long as we surround the inline text with ==>text<==
    text = text.replace(/( *)==>((?:.|\n)*?)<==/g, (match, baseIndent, content) => {
        return content.split('\n').map(line => `${baseIndent}${line}`).join('\n');
    });

    const lines = text.split('\n');

    const minIndent = lines.filter(line => line.trim()).reduce((minIndent, line) => {
        const currIndent = line.match(/^ */)[0].length;

        return currIndent < minIndent ? currIndent : minIndent;
    }, Infinity);

    return lines.map(line => line.slice(minIndent)).join('\n').trim().replace(/\n +\n/g, '\n\n');
};

// Calls freeText() and disables lint
const freeLint = script => {
    return freeText(`==>${freeText(script)}<==`);
};

// Calls freeLint() and ensures that 'this' is represented by window
const freeContext = script => {
    return freeLint(`
    (function() {

    ==>${freeText(script)}<==

    }).call(window)
  `);
};

// Creates a completely isolated scope with Function constructor.
// args is a varToInject-injectedVarName map.
const freeScope = (script, context = 'window', args = {}) => {
    const callArgs = [context].concat(Object.keys(args));

    return freeText(`
    new Function(\`
      with (this) {
        ${script}
      }
    \`).call(${callArgs.join(', ')})
  `);
};

// upper -> Upper
const upperFirst = str => {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
};

// foo_barBaz -> ['foo', 'bar', 'Baz']
const splitWords = str => {
    return str.replace(/[A-Z]/, ' $&').split(/[^a-zA-Z0-9]+/).filter(word => word.trim());
};

// abc 5 0 -> 00abc
const padLeft = (str, length, char = ' ') => {
    str = String(str);
    length = parseInt(length + 1 - str.length);

    return Array(length).join(char) + str;
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const Internal = _ => {
    if (typeof _ != 'symbol') {
        throw TypeError('Accessor must me a symbol');
    }

    return Klass => {
        if (typeof Klass != 'function') {
            throw TypeError('Provided target is not a class');
        }

        const internals = {};

        Object.defineProperty(Klass.prototype, _, {
            get() {
                const _this = _extends({}, internals);

                Object.keys(_this).forEach(key => {
                    const value = _this[key];

                    if (typeof value == 'function') {
                        _this[key] = value.bind(this);
                    }
                });

                Object.defineProperty(this, _, {
                    value: _this
                });

                return _this;
            }
        });

        Object.getOwnPropertyNames(Klass.prototype).forEach(key => {
            if (key[0] != '_') return;

            const { value } = Object.getOwnPropertyDescriptor(Klass.prototype, key);

            if (typeof value != 'function') return;

            const publicKey = key.slice(1);
            internals[publicKey] = value;
            delete Klass.prototype[key];
        });
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Internal);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resolve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var resolve__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(resolve__WEBPACK_IMPORTED_MODULE_1__);



const cache = {};

const requireText = path => {
    path = resolve__WEBPACK_IMPORTED_MODULE_1___default.a.sync(path);

    return cache[path] = cache[path] || Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(path).toString();
};

requireText.promise = path => new Promise((resolve, reject) => {
    resolve__WEBPACK_IMPORTED_MODULE_1___default()(path, (err, path) => {
        if (err) {
            return reject(err);
        }

        let content = cache[path];

        if (content) {
            return resolve(content);
        }

        Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFile"])(path, (err, content) => {
            if (err) {
                return reject(err);
            }

            cache[path] = content = content.toString();

            resolve(content);
        });
    });
});

/* harmony default export */ __webpack_exports__["default"] = (requireText);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("resolve");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uglify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var uglify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uglify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









const _ = Symbol('_ScriptWriter');

let ScriptWriter = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["Internal"])(_), _dec(_class = class ScriptWriter extends _writer__WEBPACK_IMPORTED_MODULE_4__["default"] {
    get scripts() {
        return this[_].scripts.slice();
    }

    get prefetch() {
        return this[_].prefetch;
    }

    set prefetch(prefetch) {
        return this[_].prefetch = !!prefetch;
    }

    get baseUrl() {
        return this[_].baseUrl;
    }

    set baseUrl(baseUrl) {
        this[_].baseUrl = String(baseUrl);
    }

    constructor(options = {}) {
        super();

        this[_].scripts = [];

        this.baseUrl = options.baseUrl;
        this.prefetch = options.prefetch;
    }

    write(dir, options) {
        var _this = this;

        return _asyncToGenerator(function* () {
            yield Object(_libs__WEBPACK_IMPORTED_MODULE_3__["mkdirp"])(dir);

            options = _extends({}, options, {
                prefetch: _this.prefetch
            });

            const indexFilePath = `${dir}/index.js`;
            const childFilePaths = [indexFilePath];

            if (!options.prefetch) {
                yield _libs__WEBPACK_IMPORTED_MODULE_3__["fs"].writeFile(indexFilePath, _this[_].composeScriptLoader());
                return childFilePaths;
            }

            const scriptFileNames = _this.scripts.map(function (script, index, { length }) {
                const fileName = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["padLeft"])(index, length / 10 + 1, 0) + '.js';
                const filePath = `${dir}/${fileName}`;
                childFilePaths.push(filePath);

                return fileName;
            });

            const fetchingScripts = _this.scripts.map((() => {
                var _ref = _asyncToGenerator(function* (script, index) {
                    const scriptFileName = scriptFileNames[index];

                    let code = script.type == 'code' ? script.body : /^http/.test(script.body) ? yield node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(script.body).then(function (res) {
                        return res.text();
                    }).then(function (text) {
                        return uglify_js__WEBPACK_IMPORTED_MODULE_2___default.a.minify(text).code;
                    }) : Object(_utils__WEBPACK_IMPORTED_MODULE_5__["requireText"])(`${_this.baseUrl}/${script.body}`);
                    code = code.replace(/\n\/\/# ?sourceMappingURL=.*\s*$/, '');
                    code = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["freeContext"])(code);

                    return _libs__WEBPACK_IMPORTED_MODULE_3__["fs"].writeFile(`${dir}/${scriptFileName}`, code);
                });

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            })());

            const scriptsIndexContent = scriptFileNames.map(function (scriptFileName) {
                return `import './${scriptFileName}'`;
            }).join('\n');

            const writingIndex = _libs__WEBPACK_IMPORTED_MODULE_3__["fs"].writeFile(indexFilePath, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["freeLint"])(scriptsIndexContent));

            yield Promise.all([...fetchingScripts, writingIndex]);

            return childFilePaths;
        })();
    }

    setScript(src, content) {
        let type;
        let body;

        if (src) {
            type = 'src';
            body = /^\w+:\/\//.test(src) ? src : path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('/', src);
        } else {
            type = 'code';
            body = uglify_js__WEBPACK_IMPORTED_MODULE_2___default.a.minify(content).code;
        }

        const exists = this[_].scripts.some(script => {
            return script.body == body;
        });

        if (!exists) {
            this[_].scripts.push({ type, body });
        }
    }

    _composeScriptLoader() {
        const scripts = this[_].scripts.map(script => {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["freeText"])(`
        {
          type: '${script.type}',
          body: '${Object(_utils__WEBPACK_IMPORTED_MODULE_5__["escape"])(script.body, "'")}',
        },
      `);
        }).join('\n');

        return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["freeLint"])(`
      const scripts = [
        ==>${scripts}<==
      ]

      const loadingScripts = scripts.reduce((loaded, script) => loaded.then(() => {
        const scriptEl = document.createElement('script')
        scriptEl.type = 'text/javascript'
        let loading

        if (script.type === 'src') {
          scriptEl.src = script.body

          loading = new Promise((resolve, reject) => {
            scriptEl.onload = resolve
            scriptEl.onerror = reject
          })
        }
        else {
          scriptEl.innerHTML = script.body

          loading = Promise.resolve()
        }

        document.head.appendChild(scriptEl)

        return loading
      }), Promise.resolve())

      export default loadingScripts
    `);
    }
}) || _class);


/* harmony default export */ __webpack_exports__["default"] = (ScriptWriter);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clean_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var clean_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clean_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









const _ = Symbol('_StyleWriter');
const cleanCSS = new clean_css__WEBPACK_IMPORTED_MODULE_0___default.a({
    rebaseTo: '..'
});

let StyleWriter = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["Internal"])(_), _dec(_class = class StyleWriter extends _writer__WEBPACK_IMPORTED_MODULE_4__["default"] {
    get styles() {
        return this[_].styles.slice();
    }

    get prefetch() {
        return this[_].prefetch;
    }

    set prefetch(prefetch) {
        return this[_].prefetch = !!prefetch;
    }

    get baseUrl() {
        return this[_].baseUrl;
    }

    set baseUrl(baseUrl) {
        this[_].baseUrl = String(baseUrl);
    }

    get source() {
        return this[_].source;
    }

    set source(source) {
        this[_].source = String(source);
    }

    constructor(options = {}) {
        super();

        this[_].styles = [];

        this.baseUrl = options.baseUrl;
        this.prefetch = options.prefetch;
        this.source = options.srouce;
    }

    write(dir, options) {
        var _this = this;

        return _asyncToGenerator(function* () {
            yield Object(_libs__WEBPACK_IMPORTED_MODULE_3__["mkdirp"])(dir);

            options = _extends({}, options, {
                prefetch: _this.prefetch
            });

            const indexFilePath = `${dir}/index.js`;
            const childFilePaths = [indexFilePath];

            if (!options.prefetch) {
                yield _libs__WEBPACK_IMPORTED_MODULE_3__["fs"].writeFile(indexFilePath, _this[_].composeStyleLoader());
                return childFilePaths;
            }

            const styleFileNames = _this.styles.map(function (style, index, { length }) {
                const fileName = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["padLeft"])(index, length / 10 + 1, 0) + '.css';
                const filePath = `${dir}/${fileName}`;
                childFilePaths.push(filePath);

                return fileName;
            });

            const fetchingStyles = _this.styles.map((() => {
                var _ref = _asyncToGenerator(function* (style, index) {
                    const styleFileName = styleFileNames[index];

                    const sheet = style.type == 'sheet' ? style.body : /^http/.test(style.body) ? yield node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(style.body).then(function (res) {
                        return res.text();
                    }) : yield _utils__WEBPACK_IMPORTED_MODULE_5__["requireText"].promise(`${_this.baseUrl}/${style.body}`);

                    return _libs__WEBPACK_IMPORTED_MODULE_3__["fs"].writeFile(`${dir}/${styleFileName}`, _this[_].transformSheet(sheet));
                });

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            })());

            const stylesIndexContent = styleFileNames.map(function (styleFileName) {
                return `import './${styleFileName}'`;
            }).join('\n');

            const writingIndex = _libs__WEBPACK_IMPORTED_MODULE_3__["fs"].writeFile(indexFilePath, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["freeLint"])(stylesIndexContent));

            yield Promise.all([...fetchingStyles, writingIndex]);

            return childFilePaths;
        })();
    }

    setStyle(href, content) {
        let type;
        let body;

        if (href) {
            type = 'href';
            body = /^\w+:\/\//.test(href) ? href : path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve('/', href);
        } else {
            type = 'sheet';
            body = content;
        }

        const exists = this[_].styles.some(style => {
            return style.body == body;
        });

        if (!exists) {
            this[_].styles.push({ type, body });
        }
    }

    _composeStyleLoader() {
        this[_].styles.forEach(style => {
            if (style.type == 'sheet') {
                style.body = this[_].transformSheet(style.body);
            }
        });

        const styles = this[_].styles.map(style => {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["freeText"])(`
                    {
                        type: '${style.type}',
                        body: '${Object(_utils__WEBPACK_IMPORTED_MODULE_5__["escape"])(style.body, "'")}',
                    },
                `);
        }).join('\n');

        return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["freeLint"])(`
            const styles = [
                ==>${styles}<==
            ]

            const loadingStyles = styles.map((style) => {
                let styleEl
                let loading

                if (style.type === 'href') {
                styleEl = document.createElement('link')

                loading = new Promise((resolve, reject) => {
                    styleEl.onload = resolve
                    styleEl.onerror = reject
                })

                styleEl.rel = 'stylesheet'
                styleEl.type = 'text/css'
                styleEl.href = style.body
                }
                else {
                styleEl = document.createElement('style')
                styleEl.type = 'text/css'
                styleEl.innerHTML = style.body

                loading = Promise.resolve()
                }

                document.head.appendChild(styleEl)

                return loading
            })
        `);
    }

    // Will minify and encapsulate classes
    _transformSheet(sheet) {
        sheet = cleanCSS.minify(sheet).styles;

        // Make URLs absolute so webpack won't throw any errors
        return sheet.replace(/url\(([^)]+)\)/g, (match, url) => {
            if (/^(.+):\/\//.test(url)) return match;

            url = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve('/', url);
            return `url(${url})`;
        });
    }
}) || _class);


/* harmony default export */ __webpack_exports__["default"] = (StyleWriter);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("clean-css");

/***/ })
/******/ ]);
//# sourceMappingURL=webflow-react.js.map