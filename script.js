const backgrounds = [
    'images/IMG_20221030_130758.jpg',
    'images/IMG_20221102_194514.jpg',
    'images/IMG_20221225_194255.jpg',
    'images/IMG_20230122_142634.jpg',
    'images/IMG-20220125-WA0015.jpg'
];

let triggerButton = document.getElementById('trigger');
let clickCount = 0;  // To keep track of how many times the button has been clicked

function getRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
}

function makeAllChanges() {
    clickCount++;

    // Change the background image randomly
    document.body.style.backgroundImage = `url(${getRandomBackground()})`;

    if (clickCount === 1) {
        document.getElementById('box').innerHTML = "<h3>You know you are GANDI</h3>";
        document.getElementById('box').style.color = "blue";
        document.getElementById('bad').style.color = 'red';
        document.getElementById('bad').innerHTML = '<h1>I LOVE YOUUUUUUUUU</h1>';
        document.getElementById('cat').style.fontSize = '30px';
        document.getElementById('cat').innerHTML = 'Pralay';
    } 
    else if (clickCount === 2) {
        document.getElementById('box').innerHTML = "<h3>You know you are and also a BANDRI</h3>";
        document.getElementById('box').style.color = "green";
        document.getElementById('bad').style.color = 'brown';
        document.getElementById('bad').innerHTML = '<h1>I MISS YOUUUUUU</h1>';
        document.getElementById('cat').style.fontSize = '30px';
        document.getElementById('cat').innerHTML = 'Pralay';
    } 
    else if (clickCount === 3) {
        document.getElementById('box').innerHTML = "Hey Sneha";
        document.getElementById('bad').innerHTML = "<h3>But the most important thing is </h3>";
        document.getElementById('cat').innerHTML = "From";
        document.getElementById('cat').style.fontSize = "initial";

        clickCount = 0; // Reset click count for the loop
    }
}

triggerButton.addEventListener('click', makeAllChanges);
