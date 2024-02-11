const initUI = () => {
    const h1 = document.createElement('h1');
    h1.innerText = 'Kitten Pic';

    const div = document.createElement('div');
    div.setAttribute('class', 'cats-container');
    const img = document.createElement('img');
    img.setAttribute('id', 'cats-img');

    // img.src = ""
    div.appendChild(img);
    document.body.appendChild(h1);
    document.body.appendChild(div);
}
window.addEventListener('DOMContentLoaded', initUI);
