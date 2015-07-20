// crowdsource this, people can add bands, genre's and songs in an entry form
var favMusicGenre = prompt("What is your favorite genre of music?");

// This is the genre section
switch(favMusicGenre) {
  case 'rock':
    // This is the band section for rock
    var favRockBand = prompt("No way! ME TOO, whats your favorite band?");
    switch(favRockBand) {}
  case 'jazz':
    // This is the artist section for jazz
    var favJazzArtist = prompt("I love Jazz! Who's your favorite Jazz Musician?");
    switch(favJazzArtist) {}
    break;
  case 'pop':
    // This is the artist section for pop
    var favPopArtist = prompt("So you're into the popular stuff!  Who's your favorite singer?");
    switch(favPopArtist) {}
    break;
  case 'classical':
    // This is the composer section for classical music
    var favClassicalComposer = prompt("Wow, fancy.  Who, in your opinion, is the most accomplished composer?");
    switch(favClassicalComposer) {}
    break;
  case 'country':
    //this is the artist section for country music
    var favCountryArtist = prompt("Yee-Haw!! Who's your favorite country star?");
    switch(favCountryArtist) {}
    break;
  case ''
  default:
    var newGenre = prompt("hmm, I've never heard of that genre");
}
