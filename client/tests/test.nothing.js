jQuery(document).ready(function(){

    module("DOM");
    test("select", function() {
        equals('username', $('#username').value, '$(#username).value should be username');
        equals($$('.radio').length, 4, 'should be 4 .text');
    });

    test('createHTMLElement', function() {
        var el = createHTMLElement('<p id="create">')
        equals('create', el.id, 'createHTMLElement error');
    });

    test('getAbsoluteOffset', function() {
    });

    module("CSS");
    test('addClass', function() {
        var el = $('#username')
        addClass(el, 'cls1');
        addClass(el, 'cls2');
        addClass(el, 'cls3');
        equals(el.className.trim(), 'cls1 cls2 cls3' )
    });

    test('removeClass', function() {
        var el = $('#username');
        el.className = 'cls1 cls2 cls3'
        removeClass(el, 'cls2');
        equals(el.className.trim(), 'cls1 cls3');
        removeClass(el, 'cls1');
        equals(el.className.trim(), 'cls3');
        removeClass(el, 'cls3');
        equals(el.className.trim(), '');
    });

    test('hasClass', function() {
        var el = $('#username');
        el.className = 'cls1 cls2 cls3'
        ok(hasClass(el, 'cls1'));
        ok(hasClass(el, 'cls2'));
        ok(hasClass(el, 'cls3'));
        ok(!hasClass(el, 'cls4'));
    });

    test('toggleClass', function() {
        var el = $('#username');
        el.className = 'cls1 cls2 cls3'
        toggleClass(el, 'cls1');
        ok(!hasClass(el, 'cls1'))
        toggleClass(el, 'cls1');
        ok(hasClass(el, 'cls1'))

        toggleClass(el, 'cls2');
        ok(!hasClass(el, 'cls2'))
        toggleClass(el, 'cls2');
        ok(hasClass(el, 'cls2'))

        toggleClass(el, 'cls2');
        ok(!hasClass(el, 'cls2'))
        toggleClass(el, 'cls2');
        ok(hasClass(el, 'cls2'))
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
        var obj = formSerialize($('#testform'));
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
        formDeserialize($('#testform2'), obj);
        equals($('#username2').value, 'user');
        equals($('#password2').value, 'pass');
        ok($('#female2').checked);
        ok(!$('#male2').checked);
    });

    module('AJAX')
    test('httpRequest(url, fn)', function(){
        /*
        stop();
        httpRequest('data.json', function(err, data){
            equals(typeof data, 'object', 'typeof data should be json');
            equals(data.name, 'guest', 'data.name should be');
            start();
        });
        */
        stop();
        httpRequest('data.txt', function(err, data){
            ok(!err, 'Should no err')
            equals(typeof data, 'string', 'typeof data should be string');
            equals(data.replace(/\s+$/,''), 'Hello nothing', 'data should be');
            start();
        });
        stop();
        httpRequest('blabla', function(err, data) {
            equals(err, 404, 'err should be');
            start();
        });
    });

    test('httpRequest POST query', function(err, data){
        stop();
        httpRequest({
            url: 'data.json',
            query: {
              key1: 'value1',
              key2: 'value2'
            },
            data: {
              name1: 'data1',
              name2: 'data2'
            },
            type: 'json'
          },function(err, data){
            ok(data, 'has data');
            start();
        });
    });

    module('Debug')
    test('console.log', function(){
        console.log('log');
    });
    test('console.info', function(){
        console.info('info');
    });
    test('console.warn', function(){
        console.warn('warn');
    });
    test('console.error', function(){
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

