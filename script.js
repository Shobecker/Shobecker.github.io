const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const opacitySlider = document.getElementById('opacitySlider');

function updateBackground() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const opacityValue = opacitySlider.value;
    document.body.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue})`;
}

// Add event listeners for all sliders
redSlider.addEventListener('input', updateBackground);
greenSlider.addEventListener('input', updateBackground);
blueSlider.addEventListener('input', updateBackground);
opacitySlider.addEventListener('input', updateBackground);