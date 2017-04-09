TypeTube
===========

A website which plays the most related youtube video to the characters being typed. 
It can also play the video in a continuous loop.

Website: www.typenwatch.com

## Technologies used

* HTML, CSS, JavaScript

# Overview

JavaScript is used to capture the text as it is getting typed in the search bar. 
The captured text is then passed using youtube api to return a list of videos.
One of the most related video is then selected based on some logic on views, likes and reviews linked to every video.
The selected video is then played in a loop unless there is a new search activity in the search bar.

# Run locally

* clone the repository
* Generate a youtube api key on Google's api console using your google account.
* Set the generated api key in js/search.js file's init() function.
* You are all set. Click on index.html file to watch it run locally.

## References

1. http://www.w3schools.com/bootstrap/
2. https://developers.google.com/youtube
3. http://stackoverflow.com/questions/33517524
4. https://www.youtube.com/watch?v=-vH2eZAM30s
5. http://shebang.brandonmintern.com/foolproof-html-escaping-in-javascript
6. http://stackoverflow.com/questions/4220126	
