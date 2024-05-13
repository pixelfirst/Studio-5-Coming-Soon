
var screens = {
    screen_0: document.querySelector(".screen-0"),
    screen_1: document.querySelector(".screen-1"),
    screen_2: document.querySelector(".screen-2"),
    screen_3: document.querySelector(".screen-3"),
    screen_4: document.querySelector(".screen-4"),
}

window.addEventListener("mousemove", function (e) {

    if (window.innerWidth < 620) {
        document.documentElement.style.setProperty('--x', 0 + "px");
        document.documentElement.style.setProperty('--y', 0 + "px");
        return;
    }

    var cordinates = { x: e.clientX, y: e.clientY }
    var center_x = window.innerWidth / 2;
    var center_y = window.innerHeight / 2;

    cordinates = { x: cordinates.x - center_x, y: cordinates.y - center_y };


    var move_x_to = cordinates.x / 50;
    var move_y_to = cordinates.y / 50;



    document.documentElement.style.setProperty('--x', -move_x_to + "px");
    document.documentElement.style.setProperty('--y', -move_y_to + "px");


});

setTimeout(() => {
    document.body.classList.add("loaded");
}, 5000);
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
    document.querySelector("video").play();
});