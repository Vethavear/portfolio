const nav = document.querySelector('.nav');

let scroll_position = 0;
let scroll_direction;

window.addEventListener('scroll', function (e) {
    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
    scroll_position = (document.body.getBoundingClientRect()).top;
    console.log(scroll_direction);
    if (scroll_direction == 'down') {
        nav.classList.add('hideNav');
    } else {
        nav.classList.remove('hideNav');
    }
});
