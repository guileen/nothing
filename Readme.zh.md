简介
========
Nothing是一个JS库，也是一个生成工具，可以帮助你生成0依赖的代码。

安装
========
你需要先下载 [closure-compiler](http://code.google.com/p/closure-compiler/downloads/list)。

然后定义`CC_HOME`环境变量

    >export CC_HOME=/path/to/closure-compiler

或者将 compiler.jar 复制到 tools 目录.

使用
========

编写脚本，如tests/demo.js:

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

httpRequest, addClass, $, formDeserialize 都是 nothing.js 中定义的方法，你可以在 client/nothing.js
中看到这些方法的定义。

现在你可以输入以下命令来获得0依赖的代码

    nothing tests/demo.js

是不是很酷呢？想看清楚所获得的代码结构吗？你可以使用 --pretty 参数，也可以简略为 -p :

    nothing -p tests/demo.js

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
