var arr = [
    {
        songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/Jale.jpg"
    },
    {
        songName: "Pehle bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg"
    },
    {
        songName: "Arjan vailly ne", url: "./songs/Arjan Vailly ne.mp3", img: "./images/animal.jpg"
    },

];
var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")
var audio = new Audio()

var selectedSong = 0

audio.src = arr[selectedSong].url
function mainFnction() {
    var clutter = "";
    arr.forEach(function (song, index) {
        clutter += `
    <div class="song-card" id="${index}">
    <div class="part1">
        <img src="${song.img}"
            alt="${song.songName}">
        <h2>${song.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`
    })
    allSongs.innerHTML = clutter;

    poster.style.backgroundImage = `url(${arr[selectedSong].img})`


}
mainFnction()
var flag = 0
allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    audio.src = arr[selectedSong].url
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1;
    mainFnction()
    audio.play()


})

play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-large-line"></i>`;
        mainFnction()
        audio.play()
        flag = 1;
    } else {
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        mainFnction()
        audio.pause()
        flag = 0;
    }

})


forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        audio.src = arr[selectedSong].url
        mainFnction();
        audio.play();
        backward.style.opacity = 1
    } else {
        forward.style.opacity = 0.4
        backward.style.opacity = 1
    }

})
backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--;
        audio.src = arr[selectedSong].url
        mainFnction();
        audio.play();
        forward.style.opacity = 1;
    } else {
        backward.style.opacity = 0.4;
        forward.style.opacity = 1;
    }
})