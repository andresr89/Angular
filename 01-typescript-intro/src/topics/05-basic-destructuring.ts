interface AudioPlayer {
    audioVolume: number;
    songDuration:number;
    song:string
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: "Ed Sheran",
        year: 2015
    }
}
// const song = 'New Song';

// const {song:anotherSong,songDuration:duration,details:details,}= audioPlayer;

// const {author} = details;
// const{year}= details;

// console.log('song:',anotherSong);
// console.log('Duration:',duration);
// console.log('Author:', author);
// console.log('Release Year:',year);



const [, ,trunks = 'Not found']: string[]= ['Goku','vegeta',];



console.error('personaje 3 :',trunks);





export{}