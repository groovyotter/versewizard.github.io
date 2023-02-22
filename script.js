window.onload = displayBanner;

function displayBanner() {
    var banner = document.getElementById('banner');
    var num = Math.floor((Math.random() * 2) + 1);
    banner.src = "img/banner/banner-" + num + ".png";
}