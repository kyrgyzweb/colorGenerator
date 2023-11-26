// Birinchi knopka ulanat
const colorPicker = document.querySelector('.color-picker');

// Ekinchi knopka ulanat
const mysteryColor = document.querySelector('.mystery-color');

// 255 ke cheinki random sandy chygarat
const colorValue = () => {
    return Math.floor(Math.random() * 256);
}

// Funksia tustu ozgortot
const colorChange = (event) => {
    let randomColor = `rgb(${colorValue()},${colorValue()},${colorValue()})`;
    event.target.style.backgroundColor = randomColor;
}

// knopkalarga ulaibyz eventterdi
colorPicker.addEventListener('click', colorChange);
mysteryColor.addEventListener('wheel', colorChange);