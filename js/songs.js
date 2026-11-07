
"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const songSearch = document.getElementById("songSearch");
    const songItems = document.querySelectorAll(".song-item");
    const noSongsFound = document.getElementById("noSongsFound");

    if (!songSearch) return;

    songSearch.addEventListener("input", function () {

        const searchValue = songSearch.value
            .trim()
            .toLowerCase();

        let visibleSongs = 0;

        songItems.forEach(function (song) {

            const songNumber = song.querySelector(".song-number").textContent.toLowerCase();
            const songTitle = song.querySelector("h3").textContent.toLowerCase();

            const matches =
                songNumber.includes(searchValue) ||
                songTitle.includes(searchValue);

            song.style.display = matches ? "" : "none";

            if (matches) {
                visibleSongs++;
            }

        });

        noSongsFound.hidden = visibleSongs !== 0;

    });

});
