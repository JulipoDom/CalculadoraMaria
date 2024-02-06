let nextPage = document.getElementById('nextPage');

let kitty = document.getElementById('kitty');

let title = document.getElementById('title');

let onOff = false;

function buttonRotate(id) {
    let i = 0;
    const rotateAnimtation = setInterval(() => {
        if (onOff == false) {
            stopRotate();
        } else {
            let deg = [10, -10];
            document.getElementById(id).style.rotate =
                deg[i].toString() + 'deg';
            i++;
            if (i == 2) {
                i = 0;
            }
            console.log(i);
        }
    }, 800);

    function stopRotate() {
        clearInterval(rotateAnimtation);
        document.getElementById(id).style.rotate = '0deg';
    }
}

function rainbowText(id) {
    let conversor = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];
    let red = 15,
        green = 0,
        blue = 0;

    const rainbow = setInterval(() => {
        if (onOff == false) {
            stopRainbow();
        } else {
            document.getElementById(id).style.color =
                '#' + conversor[red] + conversor[green] + conversor[blue];
            if (red == 15 && blue == 0 && green != 15) {
                green++;
            }
            if (green == 15 && red != 0 && blue == 0) {
                red--;
            }
            if (green == 15 && red == 0 && blue != 15) {
                blue++;
            }
            if (blue == 15 && green != 0 && red == 0) {
                green--;
            }
            if (blue == 15 && green == 0 && red != 15) {
                red++;
            }
            if (red == 15 && blue != 0 && green == 0) {
                blue--;
            }
        }
    }, 50);

    function stopRainbow() {
        clearInterval(rainbow);
        document.getElementById(id).style.color = 'rgb(255, 115, 161)';
    }
}

nextPage.onmouseover = () => {
    onOff = true;
    buttonRotate('nextPage');
};

nextPage.onmouseout = () => {
    onOff = false;
    buttonRotate('nextpage');
};

kitty.onclick = () => {
    onOff = true;
    buttonRotate('kitty');
    setTimeout(() => {
        onOff = false;
    }, 6400);
};

title.onmouseover = () => {
    onOff = true;
    rainbowText('title');
};

title.onmouseout = () => {
    onOff = false;
    rainbowText('title');
};
