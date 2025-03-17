import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import iktara from './iktara.jpeg'
import ikkomikke from './ikkomikke.jpeg'
import Bawara from './Bawara.jpeg'
import Andaz from './Andaz.jpeg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import viral from './Viral.jpg'
import sajda from './sajda.jpeg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import Song1 from  './Song1.mp3'
import Song2 from  './Song2.mp3'
import Song3 from  './Song3.mp3'
import Song4 from './Song4.mp3'
import Song5 from './Song5.mp3'
import Song6 from './Song6.mp3'
import Song7 from './Song7.mp3'
import Song8 from './Song8.mp3'
import AasPas from './AasPas.jpeg'
import Aeresakhi from './Aeresakhi.jpeg'
import Raaton from './Raaton.jpeg' 


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: viral,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Iktara",
        image:iktara,
        file:Song1,
        desc:"Kavita Seth",
        duration:"4:13"
    },
    {
        id:1,
        name: "Bawra Mann",
        image: Bawara,
        file:Song2,
        desc:"Bawra",
        duration:"3:16"
    },
    {
        id:2,
        name: "Sajdaa",
        image: sajda,
        file:Song3,
        desc:"Gulam Jugni",
        duration:"4:46"
    },
    {
        id:3,
        name: "Raaton",
        image: Raaton,
        file:Song4,
        desc:"Aditya Rikhari",
        duration:"3:20"
    },
    {
        id:4,
        name: "Ae re Sakhi",
        image: Aeresakhi,
        file:Song5,
        desc:"Namita Choudhary",
        duration:"3:42"
    },
    {
        id:5,
        name: "Aas Pas",
        image: AasPas    ,
        file:Song6,
        desc:"Vishal Shekhar",
        duration:"5:21"
    },
    {
        id:6,
        name: "Andaaz",
        image: Andaz,
        file:Song7,
        desc:"Miel",
        duration:"3:16"
    },
    {
        id:7,
        name: "Ikko Mikke",
        image: ikkomikke,
        file:Song8,
        desc:"Satinder Sartaaj",
        duration:"6:38"
    }
]