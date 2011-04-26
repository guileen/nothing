Introduction
========
Nothing is a javascipt library and a generate tools help you to create 0-dependencies javascript code.

Install
========

    >npm install nothing

Before run nothing, you need download [closure-compiler](http://code.google.com/p/closure-compiler/downloads/list) first.

Now you should define environ variant.

    >export CC_HOME=/path/to/closure-compiler

Or you can put compiler.jar to tools folder.

Usage
========

Write script code. just like tests/demo.js :

    ```javascipt
    httpRequest('/account/profile', { query: {username: 'jason'} }, 
      function(err, data){
        if(err){
          addClass($('#message'),'error');
        }else{
          formDeserialize($('#userform'), data);
        }
      }
    );
    ```

All of httpRequest, addClass, $, formDeserialize are functions defined in client/nothing.js

Now you can use nothing generate you 0-dependencies code.

    >nothing tests/demo.js

Is it cool? Do you want to read clearly about the output code? you can pass `--pretty` or `-p` flag:

    >nothing -p tests/demo.js

* Dom
  * selector
  * coordinate
  * createHTMLElement
* CSS
  * hasClass
  * addClass
  * removeClass
  * toggleClass
* Template
  * String.prototype.format
* QueryString
  * parseQueryString
  * buildQueryString
* Form
  * formSerialize
  * formSerializeFrom
* AJAX
  * httpRequest
* OO
  * Object.extend
* Debug
  * console.log
  * console.warn
  * console.error
  * console.info
* Event
  * Nothing for onDomReady
* Convert
  * Nothing for toBoolean
  * Nothing for toNumber
  * Nothing for toInteger
* Validation
  * validateEmail
