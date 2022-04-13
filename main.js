//Complete the function daysTill(date) that returns the string of DD:HH:mm:ss format between today and the input date
function daysTill(date) {
    let now = new Date();
    let diff = date - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;
    let seconds = Math.floor(diff / 1000);
    return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

window.setInterval(function () {
    document.getElementById('output').innerHTML = daysTill(new Date('December 28, 2022 23:59:59'));
}, 1000);
