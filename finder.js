require("dotenv").config();
var moment = require('moment');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require('axios')

var Finder = function () {
    
    this.movie = function (movie) {
        var URL = 'http://www.omdbapi.com/?apikey=trilogy&t=' + movie
        axios.get(URL).then(function (response) {
            const name = response.data.Title;
            const year = response.data.Year;
            const imdbRating = response.data.ImdbRating;
            const rottenRating = response.data.Ratings[0].Score;
            const country =response.data.Country;
            const plot = response.data.Plot;
            const actors = response.data.Actors;

            const output = "Name: " + name + "\nActors: " + actors + "\nYear: "+ year + "\nIMDB Rating: " + imdbRating + "\nRotten Tomatoes Rating: " + rottenRating + "\nCountry Produced In: " + country + "\n\nPlot: " + plot
            console.log(output);
            
            
        });
    }
    this.song = function (song) {
         var spotify = new Spotify(keys.spotify);
        
        
        
        
        
        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            const artists = data.tracks.items[0].artists[0].name
            const songName = data.tracks.items[0].name;
            const spotifyUrl = data.tracks.itmes[0].external_urls.spotify
            const albumName = data.tracks.items[0].album.name
            const output = "Artists: " + artists + "\nSong Name: " + songName + "\nSpoitfy Preview URL: " + spotifyUrl + "\Album Name: " + albumName 
            console.log(output);
        });
    }
    this.band = function (artist) {
        var URL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`
        axios.get(URL).then(function (response) {
            const venue = response.data[0].venue.name
            const location = response.data[0].venue.city
            const date = response.data[0].datetime
            const formatDate = moment(date).format('MM-DD-YYYY')
           const output = "Venue: " + venue + "\nLocation: " + location + "\nDate: " + formatDate
           console.log(output);            
            
        });

    }
}
module.exports = Finder;