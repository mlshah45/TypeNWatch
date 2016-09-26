/*
*	Author: Manthan Shah
*	Version: 1.0
*	Description: js file to intialize the youtube api's, operate on input,
*				 make api calls, play video etc.
*	Date: 08/15/16
*/

/*
*	Future TODO list
*	Add Caching
*	Improve UI
*	same query with space/tab -> continue video
*	handle exception more gracefully
*/

/* 
*	All references
*	http://stackoverflow.com/questions/4220126/run-javascript-function-when-user-finishes-typing-instead-of-on-key-up
*	https://github.com/FriesFlorian/viralvideos
*	https://developers.google.com/youtube
*	http://shebang.brandonmintern.com/foolproof-html-escaping-in-javascript
*	http://www.w3schools.com/bootstrap/
*	http://stackoverflow.com/questions/33517524/how-to-add-the-footer-with-social-icons-in-bootstrap
*/

var typingTimer;
var doneTypingInterval = 500;

// sanitized input is used to make youtube api call and 
// get the response back. Response has the videoId which
// is used then to play the video.
function searching(query) {

    // make the youtube request
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: encodeURIComponent(query).replace(/%20/g, "+"),
        maxResults: 1,
        videoEmbeddable: "true",
        safeSearch: "moderate",
        order: "viewCount",
        fields: "items/id/videoId"
    });

    // get the response from the youtube api and load the video
    request.execute(function(response) {
        if (response.error) {
            onError();
        } else {
            var results = response.result;
            player.loadVideoById(results.items[0].id.videoId);
        }

    });

}

// Timer is there to check if the user is done with typing
// Once done, it calls the doneTyping method to sanitize the input
$("#query").keyup(function(event) {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
});


// sanitizes the input after the user is done with typing
function doneTyping() {
    var query = escapeHTML($("#query").val()).trim();

    if (query == null || query == "") {
        // Empty input. Do nothing
    } else {
        searching(query);
    }

}

// Used to escape the string and sanitize it
// Using browser builtin code to escape the string
function escapeHTML(unsafe_str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(unsafe_str));
    return div.innerHTML;
}

// On any error scenario, this function is called.
// Used to play default video
function onError() {
    player.loadVideoById("c7CUByYsQIs"); // default video on any error
    $('#textShow').text("Oops! There was a problem with the video. Please try again :)");
}


// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client
function init() {
    gapi.client.setApiKey("AIzaSyB8uIiYFCz_uFDXsBIuIbOsRT_WO3MQzK4"); // Public key
    gapi.client.load('youtube', 'v3', function() {
        // youtube data api ready to use
    });

    // This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}