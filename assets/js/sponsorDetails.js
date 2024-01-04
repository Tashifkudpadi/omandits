document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const heading = urlParams.get('heading');
    const logo = urlParams.get('logo');
    const paragraph = urlParams.get("text");
    const video = urlParams.get('video');

    const videoContainer = document.getElementById('video-container');

    // console.log(heading, logo, paragraph);
    console.log(video);
    if(video === "no video"){
        videoContainer.classList.add("hidden");
    }else{
        const video = document.getElementById('video');
        video.setAttribute('src', video)
    }

    document.getElementById('title').innerHTML = heading;
    const logoHolder = document.getElementById('logo');
    logoHolder.setAttribute('src', logo);
    document.getElementById('about').innerHTML = paragraph;
});