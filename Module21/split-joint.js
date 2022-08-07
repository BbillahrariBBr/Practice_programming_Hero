const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni';

const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const char = lyrics.split('');

//slice
const partial = lyrics.slice(5, 8);
const partial2 = lyrics.substring(5, 8);

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomay bolte pari ni'
];
const newSong = lines.join("B");
console.log(newSong);