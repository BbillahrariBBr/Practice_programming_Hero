const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni';

// const doseExits = lyrics.includes('Pakhi');
const doseExits = lyrics.toLowerCase().includes('Pakhi'.toLowerCase());
console.log(doseExits);

//index of
console.log(lyrics.indexOf('kala'));

//starts with
console.log(lyrics.startsWith('Tumi'));

//endsWIth
const file_name = "Mybiodata.pdf";
const otherFile = "mypic.png";
if (file_name.endsWith('.pdf') === otherFile.endsWith('.pdf')) {
    console.log('match');
}
else {
    console.log('invalid');
}