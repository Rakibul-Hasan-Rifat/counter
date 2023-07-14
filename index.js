let count = 0;
const btns = document.querySelectorAll('button');
const valueElement = document.querySelector('h1');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = e.target.innerText;
        const transformedText = btnText.toLowerCase();
        if (transformedText === 'increase') {
            valueElement.innerText = ++count;
        }
        else if (transformedText === 'decrease') {
            valueElement.innerText = --count;
        }
        else {
            count = 0;
            valueElement.innerText = count;
        }
        // changing color based on value
        if (count > 0) {
            valueElement.style.color = 'green';
        }
        else if (count < 0) {
            valueElement.style.color = 'red';
        } else {
            valueElement.style.color = 'black';
        }
    });
});