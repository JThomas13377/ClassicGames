/* Audio Hover */
let more = document.querySelector('.MP3');
let audioArr = document.getElementsByTagName('audio');
console.log(audioArr);

more.addEventListener('mouseenter', () => {
    audioArr[0].play()
});