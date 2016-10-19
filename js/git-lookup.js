var apiKey = require('./../.env').apiKey;

function Lookup(){
}

Lookup.prototype.lookupUser = function(username) {

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('#display-avatar').show();
    $('#display-repos').show();

    $('#display-name').text(response.login);
    $('#display-avatar').attr('src', response.avatar_url);

  }).fail(function(error){
    $('#display-avatar').hide();
    $('#display-repos').hide();
    $("#display-name").text(error.responseJSON.message);
    $("#repo-header").text("No users found with that name, try again.");

  });
}

Lookup.prototype.lookupRepos = function(username) {

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){

  $("#display-repos").text("");
  $("#username").val("");

  for( var index = 0; index<response.length; index++ ){

    $("#repo-header").text(" / / Repositories: ")

    $("#display-repos").append("<ul><li id='displayed-name'><strong>project name: </strong>" + response[index].name + "<li id='displayed-description'><strong>description: </strong>" + response[index].description +  "<li id='displayed-date'><strong>created on:  </strong>" + response[index].created_at + "</li></ul>" + "</li></br>");
  }

}).fail(function(error){
  // $("#repo-header").text("No repositories found.");
  console.log(error.responseJSON.message);

});
}

exports.lookupModule = Lookup;
