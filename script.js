const display = document.getElementById('display');
const placeholderWidth = display.offsetWidth;

function append(input) {
    display.value += input;
    limitWidth();
}

function reset() {
    display.value = '';
}

function calc() {
    try {
        display.value = parseFloat(eval(display.value)).toFixed(2);
        limitWidth();
    } catch (error) {
        display.value = 'Error';
        setTimeout(function() {
            display.value = '';
            display.style.fontSize = '';
        }, 500);
    }
}

function erase() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
    limitWidth();
}

function limitWidth() {
    const displayWidth = display.scrollWidth;
    if (displayWidth > placeholderWidth) {
        display.value = display.value.slice(0, -1);
        display.value = 'Limit Exceed';
        display.style.fontSize='55px';
        setTimeout(function() {
            display.value = '';
            display.style.fontSize='';
        }, 500);
    }
}
