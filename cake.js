const cake = document.getElementById('cake');
let isMouseDown = false;
let startX;
let startY;
let startRotateX = 0;
let startRotateY = 0;

cake.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    startRotateX = getComputedStyle(cake).getPropertyValue('--rotateX') || 0;
    startRotateY = getComputedStyle(cake).getPropertyValue('--rotateY') || 0;
});

cake.addEventListener('mouseup', () => {
    isMouseDown = false;
});

cake.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;

    const rotateX = parseInt(startRotateX) - diffY;
    const rotateY = parseInt(startRotateY) + diffX;

    cake.style.setProperty('--rotateX', rotateX + 'deg');
    cake.style.setProperty('--rotateY', rotateY + 'deg');
});
