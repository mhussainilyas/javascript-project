let on_btn = document.getElementById('on-btn');
let off_btn = document.getElementById('off-btn');
let on_bulb = document.getElementById('on-bulb');
let off_bulb = document.getElementById('off-bulb');

on_btn.addEventListener('click', () => {
    on_bulb.style.display = "block";
    off_bulb.style.display = "none";
});

off_btn.addEventListener('click', () => {
    on_bulb.style.display = "none";
    off_bulb.style.display = "block";
});