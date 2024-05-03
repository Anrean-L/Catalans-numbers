'use strict'

function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

function calculate(e) {
    const number = parseInt(e.target.value, 10);
    if (!number && number !== 0) return;
    const result = document.querySelector('.caluclating__result');
    if (number > 27) {
        result.innerHTML = 'Число слишком большое!';
    } else if (number <= 0) {
        result.innerHTML = 'n должно быть натуральным';
    } else {
        const output = Math.round(factorial(number * 2) / factorial(number + 1) / factorial(number));
        result.innerHTML = `C<span class="index">${number}</span> = ${output}`;
    }
}
document.querySelector('.calculating__input').addEventListener('input', calculate);
document.querySelector('.examples__overlay').addEventListener('click', (e) => e.target.classList.add('examples__overlay--hidden'))