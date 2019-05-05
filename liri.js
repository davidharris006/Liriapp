require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require('axios')
var Finder = require("./finder")
var input = process.argv[2];
var value = process.argv.slice(3).join(" ")
var finder = new Finder()

function searchType () {
    if (input === "concert-this") {
        finder.band(value)
    }
    else if(input === "spotify-this-song"){
        finder.song(value)
    }
    else if(input === "movie-this"){
        finder.movie(value)
    }
  

}



// var Finder = function () {
    
//     this.movie = function (movie) {
//         var URL = 'http://www.omdbapi.com/?apikey=trilogy&t=' + movie
//         axios.get(URL).then(function (response) {
            
//             console.log(response.data);
            
            
//         });
//     }
//     this.song = function (song) {
//          var spotify = new Spotify(keys.spotify);
        
        
        
        
        
//         spotify.search({ type: 'track', query: song }, function (err, data) {
//             if (err) {
//                 return console.log('Error occurred: ' + err);
//             }
            
//             console.log(data.tracks.items[0].artists[0].name);
//         });
//     }
//     this.band = function (artist) {
//         var URL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`
//         axios.get(URL).then(function (response) {
            
//             console.log(response.data);
            
            
//         });

//     }
// }
searchType();