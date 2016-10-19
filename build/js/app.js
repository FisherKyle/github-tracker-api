(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "3b9d17eb983f57c4fdceb1252289d2c0f44a2a53";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/git-lookup.js":2}]},{},[3]);
