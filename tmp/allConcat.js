var Lookup = require('./../js/git-lookup.js').lookupModule;

var username = $("#username").val();

$(document).ready(function(){

  var currentLookup = new Lookup();

  $('#username-submit').submit(function(event){
    event.preventDefault();

    var username = $('#username').val();

    currentLookup.lookupUser(username);
    currentLookup.lookupRepos(username);
  });
});
