const colorSlider = document.getElementById('colorSlider');
const opacitySlider = document.getElementById('opacitySlider');

colorSlider.addEventListener('input', () => {
    const color = colorSlider.value;
    const opacity = opacitySlider.value;
    document.body.style.backgroundColor = `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
});

opacitySlider.addEventListener('input', () => {
    const color = colorSlider.value;
    const opacity = opacitySlider.value;
    document.body.style.backgroundColor = `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
});