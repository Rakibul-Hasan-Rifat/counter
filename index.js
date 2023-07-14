const incrementBtn = document.getElementById('increase_btn')
const resetBtn = document.getElementById('reset_btn')
const decrementBtn = document.getElementById('decrease_btn')
let textElement = document.querySelector('h1');
let number = parseInt(textElement.innerText);

incrementBtn.addEventListener('click', () => {
    textElement.innerText = ++number;
    colorChange()
})

decrementBtn.addEventListener('click', () => {
    textElement.innerText = --number;
    colorChange();
})

resetBtn.addEventListener('click', () => {
    number = 0;
    textElement.innerText = number;
    colorChange();
})

const colorChange = () => {
    let { color } = textElement.style;
    if (number < 0) {
        textElement.style.color = 'red';
    } else if (number > 0) {
        textElement.style.color = 'green';
    } else {
        textElement.style.color = 'black'
    }
}