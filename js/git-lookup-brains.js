var apiKey = require('./../.env').apiKey;

function Lookup(){
}
  Lookup.prototype.lookupUser = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){

      console.log(response);

      $('#display-name').text(response.login);
      $('#display-email').text(response.email);
      $('#display-avatar').attr('src', response.avatar.url);
      $('#display-repos').text(response.public_repos + " public repositories");
      $('#display-no-return').hide();

  }).fail(function(error){

      console.log("passing through then method, unsuccessful");
      $('#display-no-return').text(error.responseJSON.message);
  });
};

Lookup.prototype.lookupRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){

    $(".lookup-results").text("");
    $('#username').val("");
    for (var repodex = 0; repodex < response.length; repodex++){
      $(".lookup-results").append("<ul> <li id='display-name'>" + response[repodex].name + "</li> </br> <li id='display-email'>" + response[repodex].email + "</li> </br> <li id='display-description'>" + response[repodex].description + "</li> </br> <li id='display-repos'>" + response[repodex].public_repos + "</li> </ul>");
    }

    }).fail(function(error){

    console.log(error.responseJSON.message);

  });
};

exports.lookupModule = Lookup;
