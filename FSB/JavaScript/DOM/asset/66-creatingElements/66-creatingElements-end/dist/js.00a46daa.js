// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
// We pass an object to the createPost method with two propeties "title" and "content" and we'll dynamically set
// these like so...
const createPost = function ({
  title,
  content
}) {
  // outer div with the class name "social-card"
  const socialCard = document.createElement('div');
  // this now creates a HTML element in the memory but you want see anything on the page.
  // this is because you need to insert the "div" element into the page. For this we want to drop the element
  // in the body of the HTML document to do this we'll access the body using "document.body" and I will use a
  // method named "append" to literally append this newly created "div" to the existing content of the body.

  // If you see HTML document using dev tools you'll see empty "div" appended to the body element and you'll
  // see that our script tag shall sets above it this is because the append method saw the script tag as the
  // existing content of the body and just appended the div after that in this case we want our socialCard
  // to be above script tag. Therefore instead of using append we will use the "prepend" method. Now our div
  // appears before the script tag in the body element.

  // but so far we don't have the class attribute set. To do that we'll grab the handle to our socialCard div
  // and we will use the set attribute method which takes an attribute name and its value. see below line we'll
  // set the "class" "social-card". This does the job... 
  socialCard.setAttribute('class', 'social-card');

  // Now you'll see on the HTML document all programatically generated using JavaScript. Our next job is to
  // create other div's and render them inside the social card div.

  // Let's see how this is done...

  // We already turn our process of generating these social card to a reusable function named "createPost" like so.

  // We'll then execute the function and we get our div.

  // So, now let's first create a div's that go inside our socialCard. Here we will create the "icon" and set
  // it's class "post-icon"

  const icon = document.createElement('div');
  icon.setAttribute('class', 'post-icon');
  const postTitle = document.createElement('div');
  postTitle.setAttribute('class', 'post-title');
  const postUser = document.createElement('div');
  postUser.setAttribute('class', 'post-user');
  const postContent = document.createElement('div');
  postContent.setAttribute('class', 'post-content');
  // So, far all of these have been instantiated to get them inside the socialCard div and to render them on to
  // the page 

  // after creating element we use this append method to access the socialCard elements.
  socialCard.append(icon, postTitle, postUser, postContent);
  // We pass here all the nodes that need to be rendered and this create our social card even though there is
  // not any content you can see icon because this is hard coded in css.

  // So, now we can add some content...
  // Remember we have our HTML tags in place on the page. Since we have created all the elements here. We can
  // use their constants to access and manipulate them. In this case we will set a property on the postTitle
  // div named innerText and it get's rendered on the page.
  postTitle.innerText = title;

  // As the name implies innerText will set the text content of the div based on the string that you provide.
  // pretty cool and simple... right?

  // Likewise let's set the content of the postUser and postContent div's like so...
  postUser.innerText = 'Joe Mockery';
  postContent.innerText = content;
  document.body.prepend(socialCard);
};

// Now we can pass an object to the create post method with the title and content propeties sets like so...
// And here you go. This renders our social media post. The reason why we did that is because I can add
// another post and it get's render on top.

// Why?

createPost({
  title: 'Midnight Sun',
  content: `Oh man, last month I was in Sweden and I witnessed the midnight sun. It was a surreal experience to see sunlight at 2 in the morning! Couldn't sleep at all, but felt fresh!`
});

// Because we use "document.body.prepend" So the existing content of the div will remain and  the new post
// just get's prepended on the top.
// So the latest post go on the top, just like a social media site.
// Let's add one more and there you go... Is not this fun. If you have an array of post here you can also use the
// forEach method to look thorough the posts and dynamically generated social cards.
createPost({
  title: 'Working with JavaScript',
  content: `It's been almost 10 years since I started working with JavaScript and it's awesome to see it grow to a mature and loved language. Kudos JS!`
});
createPost({
  title: 'Selling my Honda Civic',
  content: `Guys, I'm selling my old Honda Civic automatic. Anyone interested, please call me/DM me`
});

// This is funcametally and conceptually how modern web application like Facebook works, though there is a whole
// lot going on there...

// So, congratulations. You've just used the DOM interface to create, manipulate and insert elements into the
// HTML document
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53110" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map