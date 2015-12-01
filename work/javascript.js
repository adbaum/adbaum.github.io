 var greeting = "day";
 var currentTime = new Date().getHours();
 if (currentTime >= 5 && currentTime < 12) {
    greeting = "morning";
} else if (currentTime >= 12 && currentTime < 18) {
    greeting = "afternoon";
} else if (currentTime === 0 || currentTime <= 5 || currentTime >= 18) {
    greeting = "evening";
}

window.onload = function setTimesStyles() {
    document.getElementById('log').innerHTML = greeting;
}