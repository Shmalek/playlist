/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Noticed",
    "Fu Shit",
    "Look Back At It",
    "From the D to The A",
    "Every Day We Lit",
    "Want You"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

var images_links =[
    "https://i.ytimg.com/vi/nceqQyqIa5o/maxresdefault.jpg",
    "https://images.genius.com/c138b9f279b14338c42321280728e350.999x999x1.png",
    "https://ssle.ulximg.com/image/750x750/cover/1544172196_2b946c1b1740419f2f52a05894015c48.jpg/8896cab0a1d18fa4236a30396bcf9022/1544172196_c0cbe332eb87548eecfcf3dbdb142e18.jpg",
    "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F82cf56f3623008d82b006dbec40941d2.480x480x1.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/YNFLucci.jpg/220px-YNFLucci.jpg",
    "https://i.ytimg.com/vi/ogRCYa6-WSA/maxresdefault.jpg"
];

var artists =[
    "Lil Mosey",
    "Lil Mosey",
    "A Boogie Wit da Hoodie",
    "Tea Grizzley and Lil Yachty",
    "YFN Lucci and PnB Rock",
    "Rynx and Miranda Glory"
    
];

var songLengths = [
    "2:52",
    "2:38",
    "3:00",
    "2:50",
    "3:30",
    "3:36"
        
]; 

var links = [
    "https://www.youtube.com/watch?v=nceqQyqIa5o", 
    "https://www.youtube.com/watch?v=AvncOx_lnGQ",
    "https://www.youtube.com/watch?v=DmNfT-B7nlA",
    "https://www.youtube.com/watch?v=-S0aea777jM",
    "https://www.youtube.com/watch?v=44Vk5KyQbiA",
    "https://www.youtube.com/watch?v=ogRCYa6-WSA"
    
];




function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
        
    });
    
    images_links.forEach(function(images) {
        var pic = `<img src=${images} >`;
        $("#images").append(pic);
    });
    
    artists.forEach(function(artists) {
        $("#artists").append("<p>" + artists + "</p>");         
    });
    
    songLengths.forEach(function(songLengths) {
        $("#lengths").append("<p>" + songLengths + "</p>");         
    });
    
    links.forEach(function(links) {
        var link = `<a href=${links}>Click Me</a>`
        $("#links").append(link);
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    $("#links").empty();


}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    
    var artistName = $("#artist").val();
    artists.push(artistName);
    
    var songLength = $("#length").val();
    lengths.push(songLength); 
    

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
