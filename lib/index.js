var fs = require('fs'),
    path = require('path'),
    spawn = require('child_process').spawn,
    nothing_code = fs.readFileSync(__dirname + '/../client/nothing.js');

var _uglify = require('uglify-js');

if (_uglify) {
  jsp = _uglify.parser,
  pro = _uglify.uglify;

  var uglify = exports.uglify = function(code, options) {
    options = options || {
      mangle: true
    };
    var ast = jsp.parse(code);
    if (options.mangle) {
      ast = pro.ast_mangle(ast, { mangle_toplevel: options.mangle_toplevel || false });
    }
    ast = pro.ast_squeeze(ast);
    //ast = pro.ast_squeeze_more();
    return pro.gen_code(ast, { beautify: options.beautify || false });
  };

  var uglify_compile = function(source, options, callback) {
    var uglifyOptions = {};
    switch (options.level0) {
    case 0:
      uglifyOptions.mangle = false;
      break;
    case 2:
      uglifyOptions.mangle_toplevel = true;
    case 1:
      uglifyOptions.mangle = true;
      break;
    }
    //defines is not supported by uglify

    uglifyOptions.beautify = !!(options.pretty || options.beautify);
    try {
      callback(null, uglify(source, uglifyOptions));
    } catch (e) {
      callback(e);
    }
  };
}

/**
 * options
 *      level 0|1|2
 *      pretty true|false
 *      defines  object
 * callback
 *      function (code, output)
 */
function cc(source, options, callback) {
  options = options || {};
  var clevel = (options.level == 0 && 'WHITESPACE_ONLY') ||
               (options.level == 1 && 'SIMPLE_OPTIMIZATIONS') ||
               (options.level == 2 && 'ADVANCED_OPTIMIZATIONS');
  var args = ['-jar', path.normalize(options.cc_home + '/compiler.jar')];
  if (clevel) {
    args.push('--compilation_level=' + clevel);
  }
  if (options.pretty || options.beautify) {
    args.push('--formatting=PRETTY_PRINT');
  }

  if (options.defines) {
    for (var name in options.defines) {
      args.push('--D=' + name + '=' + options.defines[name]);
    }
  }
  var child = spawn('java', args);
  var errResult = '', result = '';
  child.stdout.setEncoding('utf8');
  child.stdout.on('data', function(data) {
      result += data;
  });
  child.stderr.on('data', function(data) {
      errResult += data;
  });
  child.on('exit', function(code) {
      var err;
      if (code != 0) {
        err = new Error('Program exit with ' + code + '\n' +
          'command: java ' + args.join(' ') + '\n' + errResult);
      }
      callback(err, result);
  });
  process.on('uncaughtException', function(err){
      callback(err, result);
  });
  child.stdin.write(source);
  child.stdin.end();
}

/**
 * nothing is only for app level.
 * It will not export any variable and functions,
 * and will not check variable conflict.
 * DONT use it for library.
 *
 * @param code      the source code.
 * @param options
 *      level 0|1|2
 *      pretty true|false
 *      beautify true|false alias pretty
 *      defines  object
 * callback
 *      function (code, output).
 *
 */
exports.nothing = function(code, options, callback) {
  if (!callback) {
    callback = options;
    options = {};
  }
  options.cc_home = options.cc_home || process.env['CC_HOME'] || path.normalize(__dirname + "/../tools/");
  options.level = options.level || '2';
  code =  nothing_code + '\n;\n' + code ;
  cc(code, options, callback);
};

exports.middleware = require('./middleware');
