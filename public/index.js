// Your code here
const init = async () => {
    const div = document.getElementById('cats-container');
    const catsImg = document.getElementById('cats-img');

    // catsImg.src = 
    // const url = 'http://localhost:5000/aiu.jpg'
    const url = ' https://api.thecatapi.com/v1/images/search'
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        catsImg.src = data[0].url;

        // catsImg.src = response.url;
    } catch (error) {
        console.error(error)
    }
}
window.onload = init;
