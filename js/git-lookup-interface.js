var Lookup = require('./../js/git-lookup-brains.js').lookupModule;
var apiKey = require('./../.env');

var displayRepos = function(username, repositories) {
  $("#display-repos").text(username + " repositories:");
}

$(document).ready(function(){

  var currentLookup = new Lookup();

  $('username-submit').click(function(){
    event.preventDefault();

    var username = $('#username').val();

    currentLookup.lookupRepos(username, displayRepos);
  });
});
