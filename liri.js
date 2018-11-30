var Spotify = require('node-spotify-api');
var axios = require("axios");

var searchQuerySpotify = process.argv[2];
var searchQueryOmdb = process.argv[4];
var searchQueryBands = process.argv[3];

var spotify = new Spotify({
  id: "b6fe5fa1bfd24f70b38d7e3d7ede7766",
  secret: "c1d24796e85f4ebca665e7f45fb13b16"
});

spotify
  .search({ type: 'track', query: searchQuerySpotify, limit: 1 })
  .then(function (response) {
    console.log("!!!!!!!!!!HERE'S THE SONG!!!!!!!!!!");
    console.log(response.tracks.items);
  })
  .catch(function (err) {
    console.log(err);
  });
axios.get("http://www.omdbapi.com/?t=" + searchQueryOmdb + "&apikey=fb523d67").then(
  function (response) {
    console.log("!!!!!!!!!!HERE'S THE MOVIE!!!!!!!!!!");
    console.log(response.data);
  });
axios.get("https://rest.bandsintown.com/artists/" + searchQueryBands + "?app_id=codingbootcamp").then(
  function (response) {
    console.log("!!!!!!!!!!HERE'S THE BAND!!!!!!!!!!");
    console.log(response.data);
  });