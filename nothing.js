/*
 * Nothing with no license.
 * Author: http://guileen.github.com/nothing.js
 */

// selector. Do you really need a very complex selector
function select(selector) {
  selector = selector.replace(/(^\s+|\s+$)/g, '');//selector.trim();
  if (selector.charAt(0) == '.')
    return document.getElementsByClassName(selector.substring(1));
  if (selector.charAt(0) == '#')
    return document.getElementById(selector.substring(1));
  return document.getElementsByTagName(selector);
}
$ = $ || select;

// coordinate.
function getAbsolutOffset(el) {
  var left, top;
  left = top = 0;
  if (el.offsetParent) {
    do {
      left += el.offsetLeft;
      top += el.offsetTop;
    } while (el = el.offsetParent);
  }
  return {
    x: left,
    y: top
  };
}

// createHTMLElement
(function() {
    var dummy = document.createElement('div');
    window.createHTMLElement = function(html) {
      dummy.innerHTML = html;
      return dummy.firstChild;
    }
})();

// calss. Nothing needed except has, add, remove.
function hasClass(el, cls) {
  return new RegExp('(^|\\s)' + cls + '(\\s|$)').test(el.className);
}

function addClass(el, cls) {
  if (!hasClass(el, cls)) el.className += ' ' + cls;
}

function removeClass(el, cls) {
  el.className = el.className.replace(new RegExp('(^|\\s)' + cls + '(\\s|$)'), ' ');
}

function toggleClass(el, cls) {
  if (hasClass(el, cls)) {
    removeClass(el, cls);
  }else {
    addClass(el, cls);
  }
}

// Template. '{0} love {1}'.format('I', 'nothing')
String.prototype.format = function() {
  var formatted = this;
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp('\\{' + i + '\\}', 'gi');
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};

// QueryString
function parseQueryString(queryString) {
  var result = {};
  if (!queryString) queryString = location.search.replace(/^\?|#.*$/g, '');

  for (var i = 0, pairs = queryString.split('&'), pair; i < pairs.length; i++) {
    pair = pairs[i].split('=');
    result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return result;
}

function buildQueryString(obj) {
  var qs = [], name;
  for (name in obj) {
    qs.push(encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]));
  }
  return qs.join('&');
}

// Form serialize
function formSerialize(form) {
  var i = 0, els = form.elements, result={}, el, n, t;
  for (; i < els.length; i++) {
    el = els[i];
    n = el.name, t = el.type;

    if (!n || el.disabled || t == 'reset' || t == 'button' ||
      (t == 'checkbox' || t == 'radio') && !el.checked ||
      (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
      el.tagName.toLowerCase() == 'select' && el.selectedIndex == -1) {
      continue;
    }
    // select-one is supported, but select-multi maybe not supported
    result[n] = el.value;
  }
  return result;
}

function formDeserialize(form, obj) {
  form.reset();
  var i = 0, els = form.elements, el, n, t, result;
  for (; i < els.length; i++) {

    el = els[i];
    n = el.name;
    t = el.type;
    if (!n || !obj[n])
      continue;

    if (t == 'radio' || t == 'checkbox') {
      el.checked = !! obj[n];
    }else if (t == 'select-one') {
      //"select-multi": //won't supporte
      for (var index = 0, ops = el.options; index < ops.length; index++) {
        if (ops[index].value == obj[n]) {
          el.selectedIndex = index;
          break;
        }
      }
    }else {
      el.value = obj[n];
    }
  }
}

/*
 * AJAX
 * httpRequest
 *
 * @param url or options
 *       options
 *           method
 *           url
 *           query
 *           data data post to server
 *           type the type of data, can be 'json' or 'form', default is 'form'
 *           headers request headers
 * @param callback
 *           function(err, data, xhr)
 */
function httpRequest(options, callback) {
  var m, u, q, d, h, t, k;
  if (typeof options === 'string') {
    u = options;
  } else {
    m = options.method;
    u = options.url || '';
    q = options.query;
    d = options.data;
    h = options.haeder;
    t = options.type;
  }
  if (!m)
    m = d ? 'POST' : 'GET';

  if (q) {
    if (typeof q != 'string')
      q = buildQueryString(q);
    url += url.indexOf('?') >= 0 ? '&' : '?' + q;
  }

  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var t = xhr.getResponseHeader('content-type'), err, data;
      if (t === 'application/xml')
        data = xhr.responseXML;
      else if (t === 'application/json')
        data = JSON.parse(xhr.responseText);
      else
        data = xhr.responseText;

      if (xhr.status < 200) {
        // 1xx informational response;
        return;
      } else if (xhr.status >= 300) {
        // 3xx Redirection
        // 4xx Client error
        // 5xx Server error
        err = xhr.status;
      }
      // else 2xx successful response;
      callback(err, data, xhr);
    }
  };

  xhr.open(m, url, true);
  var hasContentType = false;
  for (var k in headers) {
    v = headers[k];
    xhr.setRequestHeader(k, v);
    if (k.toLowerCase() === 'content-type')
      hasContentType = true;
  }
  if (d) {
    if (t == 'json') {
      d = JSON.stringify(d);
      t = 'application/json';
    }else {
      d = buildQueryString(d);
      t = 'application/x-www-form-urlencoded';
    }
    if (!hasContentType)
      xhr.setRequestHeader('Content-Type', t);
    xhr.send(d);
  }
}

// OO. Nothing needed except this.
// Dont touch Object.prototype, it's a nightmair of for(var k in obj)
Object.extend = function(a, b) {
  if (a && b) {
    for (var key in b) {
      a[key] = b[key];
    }
  }
  return a;
};

// debug. I do nothing, just use firebug or chrome.
if (!window.console) console = {};
console.log = console.log || function() {};
console.warn = console.warn || function() {};
console.error = console.error || function() {};
console.info = console.info || function() {};

// Events
// on domready? You need nothing. Just put your script to the bottom of body.
// Note for document.activeElement can get current focus element

// Convert
// !!obj            is toBoolean
// Number(obj)      is toNumber
// Math.floor(obj)  is toInteger

// Validation
function validateEmail(email) 
{
  return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email);
}
