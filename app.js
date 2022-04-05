var text = document.querySelector('#text');
var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');

red.addEventListener('click', () => {
    text.style.color = 'red';
});

green.addEventListener('click', () => {
    text.style.color = 'green';
});

blue.addEventListener('click', () => {
    text.style.color = 'blue';
});
