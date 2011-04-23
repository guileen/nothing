$(document).ready(function(){

    module("DOM");
    test("select", function() {
        equals('username', select('#username').value, 'select(#username).value should be username');
        equals(select('.radio').length, 4, 'should be 4 .text');
    });

    test('createHTMLElement', function() {
        var el = createHTMLElement('<p id="create">')
        equals('create', el.id, 'createHTMLElement error');
    });

    test('getAbsoluteOffset', function() {
    });

    module("CSS");
    test('addClass', function() {
        var el = select('#username')
        addClass(el, 'cls1');
        addClass(el, 'cls2');
        addClass(el, 'cls3');
        equals(el.className.trim(), 'cls1 cls2 cls3' )
        removeClass(el, 'cls2');
        equals(el.className.trim(), 'cls1 cls3');
        removeClass(el, 'cls1');
        equals(el.className.trim(), 'cls3');
        removeClass(el, 'cls3');
        equals(el.className.trim(), '');
    });

    module('QueryString')
    test('parseQueryString', function(){
        var q = parseQueryString('a=b%20b&c=d%20d');
        equals('b b', q.a);
        equals('d d', q.c);
    });

    test('buildQueryString', function() {
        equals('a=b%20b&c=d%20d', buildQueryString({a:'b b', c:'d d'}));
    });

    module('FORM');
    test('formSerialize', function() {
        var obj = formSerialize(select('#testform'));
        equals('username', obj.username, 'error text value');
        equals('password', obj.password, 'error password value');
        equals('male', obj.gender, 'error radio value');
    });

    test('formDeserialize', function() {
        var obj = {
          username : 'user',
          password : 'pass',
          gender : 'female'
        }
        formDeserialize(select('#testform2'), obj);
        equals(select('#username2').value, 'user');
        equals(select('#password2').value, 'pass');
        ok(select('#female2').checked);
        ok(!select('#male2').checked);
    });

    module('AJAX')
    test('httpRequest', function(){
    });

    module('Debug')
    test('Debug', function(){
        console.log('log');
        console.info('info');
        console.warn('warn');
        console.error('error');
    });

    module('Validation')
    test('validateEmail', function() {
        ok(validateEmail('guileen@gmail.com'));
        ok(validateEmail('gl123@gl123.com.cn'));
        ok(!validateEmail('guil een@gmail.com'));
        ok(!validateEmail('guileen@gmail'));
    })

});

