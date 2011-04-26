httpRequest('/account/profile', { query: {username: 'jason'} }, 
  function(err, data){
    if(err){
      addClass($('#message'),'error');
    }else{
      formDeserialize($('#userform'), data);
    }
  }
);
