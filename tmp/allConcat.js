var Lookup = require('./../js/git-lookup-brains.js').lookupModule;

$(document).ready(function(){

  var currentLookup = new Lookup();

  $('lookup-name-form').submit(function(event){
    event.preventDefault();

    var username = $('#username').val();

    currentLookup.lookupUser(username);
    currentLookup.lookupRepos(username);
  });
});
