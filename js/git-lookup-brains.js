var apiKey = require('./../.env').apiKey;

function Lookup(){
}

Lookup.prototype.lookupRepos = function(username, displayfunction) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayFunction(username, response.login);
  }).fail(function(error){
    $("#display-repos").text(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){

    console.log(response);

  $("#display-repos").text("");

  for( var index = 0; index<response.length; index++ ){

    $("#display-repos").append("<li id='displayed-name'> repository: " + response[index].name + "<ul><li id='displayed-date'> date created: " + response[index].created_at +  "<li id='displayed-description'>" + response[index].description + "</li></ul>" + "</li>")
  }
}).fail(function(error){
  console.log(error.responseJSON.message);
});
};
exports.lookupModule = Lookup;

// Lookup.prototype.lookupUser = function(username) {
//   $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
//
//     console.log(response);
//
//     $('#display-name').text(response.login);
//     $('#display-email').text(response.email);
//     $('#display-avatar').attr('src', response.avatar.url);
//     $('#display-repos').text(response.public_repos + " public repositories");
//     $('#display-no-return').hide();
//
//   }).fail(function(error){
//
//     console.log("passing through then method, unsuccessful");
//     $('#display-no-return').text(error.responseJSON.message);
//   });
// };
