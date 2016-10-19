var apiKey = require('./../.env').apiKey;

function Lookup(){
}

Lookup.prototype.lookupUser = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log("anything");
    $('#display-name').text(response.login);
    $('#display-avatar').attr('src', response.avatar_url);
  }).fail(function(error){
    console.log(response);
    console.log("anhything fail");

    $("#display-name").text(error.responseJSON.message);

  });
}

  Lookup.prototype.lookupRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  $("#display-repos").text("");
  $("#username").val("");

  for( var index = 0; index<response.length; index++ ){

    $("#display-repos").append("<ul><li class='displayed-name'>" + response[index].name + "<li class='displayed-date'> date created: " + response[index].created_at +  "<li class='displayed-description'>" + response[index].description + "</li></ul>" + "</li>");
  }
}).fail(function(error){
  console.log(error.responseJSON.message);
});
}

exports.lookupModule = Lookup;
