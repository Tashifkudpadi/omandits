document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const heading = urlParams.get('heading');
    const logo = urlParams.get('logo');
    const paragraph = urlParams.get("text");

    console.log(heading, logo, paragraph);

    document.getElementById('title').innerHTML = heading;
    const logoHolder = document.getElementById('logo');
    logoHolder.setAttribute('src', logo);
    document.getElementById('about').innerHTML = paragraph
});