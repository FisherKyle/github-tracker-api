!function e(o,n,t){function r(a,i){if(!n[a]){if(!o[a]){var s="function"==typeof require&&require;if(!i&&s)return s(a,!0);if(u)return u(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};o[a][0].call(c.exports,function(e){var n=o[a][1][e];return r(n?n:e)},c,c.exports,e,o,n,t)}return n[a].exports}for(var u="function"==typeof require&&require,a=0;a<t.length;a++)r(t[a]);return r}({1:[function(e,o,n){n.apiKey="3b9d17eb983f57c4fdceb1252289d2c0f44a2a53"},{}],2:[function(e,o,n){function t(){}var r=e("./../.env").apiKey;t.prototype.lookupUser=function(e){$.get("https://api.github.com/users/"+e+"?access_token="+r).then(function(e){console.log(e),console.log("anything"),$("#display-name").text(e.login),$("#display-avatar").attr("src",e.avatar_url)}).fail(function(e){console.log(response),console.log("anhything fail"),$("#display-name").text(e.responseJSON.message)})},n.lookupModule=t},{"./../.env":1}],3:[function(e,o,n){var t=e("./../js/git-lookup.js").lookupModule;$("#username").val();$(document).ready(function(){var e=new t;$("#username-submit").submit(function(o){o.preventDefault();var n=$("#username").val();e.lookupUser(n),e.lookupRepos(n)})})},{"./../js/git-lookup.js":2}]},{},[3]);