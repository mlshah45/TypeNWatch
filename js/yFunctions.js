/*
*	Author: Manthan Shah
*	Version: 1.0
*	Description: js file consisting of youtube's player function's
*	Date: 08/15/16
*/

var player;

// Once the api is ready, this function initializes 
// the player and sets the inputs for default video
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {

        videoId: 'c7CUByYsQIs', // default video
        playerVars: {
            'autoplay': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });
}

// On Ready Event
function onPlayerReady(event) {
    event.target.playVideo();
}

// State changing event such as pause, stop 
function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.ENDED) {
        player.playVideo(); // play the same video again
    }
}

// Error event
function onPlayerError(event) {
    onError();
}