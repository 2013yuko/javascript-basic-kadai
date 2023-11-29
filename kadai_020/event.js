const btn = document.getElementById('btn');
const text = document.getElementById('text');
const text2 = document.getElementById('text2')

btn.addEventListener('click', () => {
    text.style.display = 'none';
    text2.style.display = 'block';
});