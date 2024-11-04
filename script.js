const colorSlider = document.getElementById('colorSlider');
const opacitySlider = document.getElementById('opacitySlider');

function updateBackground() {
    const colorValue = colorSlider.value; // Get value from the single slider
    const opacityValue = opacitySlider.value; // Get opacity value from the slider
    document.body.style.backgroundColor = `rgba(${colorValue}, ${colorValue}, ${colorValue}, ${opacityValue})`; // Set RGB equal
}

// Add event listeners for both sliders
colorSlider.addEventListener('input', updateBackground);
opacitySlider.addEventListener('input', updateBackground);

// Initialize the background color on load
updateBackground();
