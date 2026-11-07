
"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // Keyboard Notes Song Details
    const keyboardSongs = [
        {
            number: 1,
            title: "నా ప్రియమైన యేసు ప్రభు",
            image: "assets/images/keyboard-notes/song-01.png",
            video: "videos/song-01.mp4"
        },
        {
            number: 2,
            title: "దూత గణములెల్ల ఆరాధించిరిగా",
            image: "assets/images/keyboard-notes/song-02.png",
            video: "videos/song-02.mp4"
        },
        {
            number: 3,
            title: "నీ ప్రియ ప్రభుని సేవకై – అర్పించుకో నీవే",
            image: "assets/images/keyboard-notes/song-03.png",
            video: "videos/song-03.mp4"
        },
        {
            number: 4,
            title: "సీయోను పాటలు సంతోషముగ",
            image: "assets/images/keyboard-notes/song-04.png",
            video: "videos/song-04.mp4"
        },
        {
            number: 5,
            title: "పొందితిని నేను ప్రభువా నీ నుండి",
            image: "assets/images/keyboard-notes/song-05.png",
            video: "videos/song-05.mp4"
        },
        {
            number: 6,
            title: "మేము భయపడము – ఇక మేము భయపడము",
            image: "assets/images/keyboard-notes/song-06.png",
            video: "videos/song-06.mp4"
        },
        {
            number: 7,
            title: "స్వఛ్చంద సీయోను వాసి",
            image: "assets/images/keyboard-notes/song-07.png",
            video: "videos/song-07.mp4"
        },
        {
            number: 8,
            title: "నమ్మకమైన నా ప్రభు",
            image: "assets/images/keyboard-notes/song-08.png",
            video: "videos/song-08.mp4"
        }
    ];

    // Get song number from URL
    const urlParams = new URLSearchParams(window.location.search);
    const songNumber = Number(urlParams.get("song"));

    // Find selected song
    const selectedSong = keyboardSongs.find(function (song) {
        return song.number === songNumber;
    });

    // HTML Elements
    const noteSongNumber = document.getElementById("noteSongNumber");
    const noteSongTitle = document.getElementById("noteSongTitle");
    const keyboardNoteImage = document.getElementById("keyboardNoteImage");
    const keyboardVideo = document.getElementById("keyboardVideo");
    const keyboardVideoSource = document.getElementById("keyboardVideoSource");

    // Check selected song
    if (!selectedSong) {
        noteSongNumber.textContent = "SONG NOT FOUND";
        noteSongTitle.textContent = "Song Not Found";
        keyboardNoteImage.hidden = true;
        keyboardVideo.hidden = true;
        return;
    }

    // Display song number and title
    noteSongNumber.textContent =
        "SONG NO. " + String(selectedSong.number).padStart(3, "0");

    noteSongTitle.textContent = selectedSong.title;

    // Display keyboard notes image
    keyboardNoteImage.src = selectedSong.image;
    keyboardNoteImage.alt = selectedSong.title + " Keyboard Notes";

    // Load song video
    keyboardVideoSource.src = selectedSong.video;
    keyboardVideo.load();

});
