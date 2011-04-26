var nothing = require('../lib');

function test(code, options){
  nothing.nothing(code, options || {}, function(err, result){
      if(err){
        console.log(err.stack);
      }
      console.log(result);
      console.log('================');
  });
}

test('', {level:0, pretty:true, defines: { DEBUG: true}});
test('httpRequest("path",function(err,data){console.log(data)})');

