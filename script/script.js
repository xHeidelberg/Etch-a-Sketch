const container = document.querySelector('#paintContainer');
const setGridBtn = document.querySelector('#setGrid');
const setRainbowBtn = document.querySelector('#setRainbow');
const setBlackBtn = document.querySelector('#setBlack');
const clearBtn = document.querySelector('#clearCanvas');
let defaultGrid = 16;
actionCall(defaultGrid);



setGridBtn.addEventListener('click', () => {
    let inputGrid = prompt('Set Grid Default is 16x16');
    if (parseInt(inputGrid) < 4 || parseInt(inputGrid) > 100) {
        alert('Minimum of 4 \nMaximum of 100');
        return;
    }
    if (!inputGrid || inputGrid.trim() == "" || !parseInt(inputGrid)) return console.log('capture cancel/null/space/letters');

    //clean as Int then pass to function for grid creation
    const gridView = document.querySelector('#toolContainer span');
    gridView.textContent = `${inputGrid + 'x' + inputGrid}`;
    actionCall(parseInt(inputGrid));
})

function randomRGB() {
    const r = Math.floor(Math.random() * 226);
    const g = Math.floor(Math.random() * 226);
    const b = Math.floor(Math.random() * 226);

    const shuffle = `rgb(${r}, ${g}, ${b})`;
    return shuffle;
}

function actionCall(manyGrid) {
    container.innerHTML = "";
    let style = `background-color: white; border: 1px solid black; margin: 0; padding: 0; width: ${450 / manyGrid}; height: ${550 / manyGrid}; display: inline-block;`;
    const doubleGrid = manyGrid ** 2; // Exponent or times (2)
    for (let createLoop = 0; createLoop < doubleGrid; createLoop++) {
        // console.log(createLoop);
        const pixelCreate = document.createElement('div');
        pixelCreate.style.cssText = style;
        pixelCreate.addEventListener('mouseover', () => {
            pixelCreate.style.backgroundColor = 'black';
        });

        // rainbow
        setRainbowBtn.addEventListener('click', () => {
            pixelCreate.addEventListener('mouseover', () => {
                pixelCreate.style.backgroundColor = randomRGB();
            })
        });

        // black
        setBlackBtn.addEventListener('click', () => {
            pixelCreate.addEventListener('mouseover', () => {
                pixelCreate.style.backgroundColor = 'black';
            })
        });

        // clear
        clearBtn.addEventListener('click', () => {
            let cleaners = document.querySelectorAll('#paintContainer div');
            cleaners.forEach(cleaner => {
                cleaner.style.backgroundColor = 'white';
            })
        });

        container.appendChild(pixelCreate);
    }
};