let input = document.querySelector('input');

input.onkeyup = () => {
    let text = document.querySelector('input');
    let filter = /[^0-9.,]/gi;
    let filter2 = /[.].*?([.])/gi;
    text.value = text.value.replace(',', '.');
    text.value = text.value.replace(filter, '');
    text.value = text.value.replace(filter2, '');
};

let one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero,
    ac,
    invert,
    percent,
    division,
    multiply,
    minus,
    plus,
    equals,
    point;

one = document.getElementById('one');
two = document.getElementById('two');
three = document.getElementById('three');
four = document.getElementById('four');
five = document.getElementById('five');
six = document.getElementById('six');
seven = document.getElementById('seven');
eight = document.getElementById('eight');
nine = document.getElementById('nine');
zero = document.getElementById('zero');
ac = document.getElementById('ac');
invert = document.getElementById('invert');
percent = document.getElementById('percent');
division = document.getElementById('division');
multiply = document.getElementById('multiply');
minus = document.getElementById('minus');
plus = document.getElementById('plus');
equals = document.getElementById('equals');
point = document.getElementById('point');

function clickShade(id) {
    document.getElementById(id).style.color = 'rgb(185, 98, 156)';
    setTimeout(() => {
        document.getElementById(id).style.color = 'white';
    }, 500);
}
function number(num) {
    let text = document.querySelector('input').value;
    if (text == '0' || text == '') {
        document.querySelector('input').value = num;
    } else {
        document.querySelector('input').value += num;
    }
}

one.onclick = () => {
    number(1);
    clickShade('one');
};
two.onclick = () => {
    number(2);
    clickShade('two');
};
three.onclick = () => {
    number(3);
    clickShade('three');
};
four.onclick = () => {
    number(4);
    clickShade('four');
};
five.onclick = () => {
    number(5);
    clickShade('five');
};
six.onclick = () => {
    number(6);
    clickShade('six');
};
seven.onclick = () => {
    number(7);
    clickShade('seven');
};
eight.onclick = () => {
    number(8);
    clickShade('eight');
};
nine.onclick = () => {
    number(9);
    clickShade('ninve');
};
zero.onclick = () => {
    number(0);
    clickShade('zero');
};
point.onclick = () => {
    document.querySelector('input').value += '.';
    let text = document.querySelector('input');
    let filter = /[^0-9.,]/gi;
    let filter2 = /[.].*?([.])/gi;
    text.value = text.value.replace(',', '.');
    text.value = text.value.replace(filter, '');
    text.value = text.value.replace(filter2, '');
    clickShade('point');
};

ac.onclick = () => {
    num1 = 0;
    num2 = 0;
    op = '';
    document.querySelector('input').value = '0';
    clickShade('ac');
};

invert.onclick = () => {
    let text = document.querySelector('input');

    text.value = parseFloat(text.value) * -1;
    clickShade('invert');
};

percent.onclick = () => {
    let text = document.querySelector('input');

    text.value = (parseFloat(text.value) * 0.01).toPrecision(3);
    clickShade('percent');
};

let num1 = 0,
    num2 = 0,
    op = '';

equals.onclick = () => {
    let result;

    num2 = parseFloat(document.querySelector('input').value);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 0;
            break;
    }
    document.querySelector('input').value = result;
    clickShade('equals');
};

function operation(o) {
    num1 = parseFloat(document.querySelector('input').value);
    op = o;
    document.querySelector('input').value = 0;
}

plus.onclick = () => {
    operation('+');
};

minus.onclick = () => {
    operation('-');
};

multiply.onclick = () => {
    operation('*');
};

division.onclick = () => {
    operation('/');
};
