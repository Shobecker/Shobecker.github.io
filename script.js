const colorSlider = document.getElementById('colorSlider');
const opacitySlider = document.getElementById('opacitySlider');

colorSlider.addEventListener('input', () => {
    document.body.style.backgroundColor = colorSlider.value;
});

opacitySlider.addEventListener('input', () => {
    document.body.style.opacity = opacitySlider.value;
})