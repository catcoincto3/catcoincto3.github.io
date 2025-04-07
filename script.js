var newImage = new Image();
newImage.src = "./one.jpg";
var newImage1 = new Image();
newImage1.src = "./three.jpg";
var newImage2 = new Image();
newImage2.src = "./two.jpg";
const audio = new Audio('song.mp3');
function copyFunction() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("0x6F16DD6667DCF4e5DC8AB802f578Ca8a17C4de27");

    // Alert the copied text
    //alertTimeout("Copied Ca", 1000)
}


function alertTimeout(mymsg, mymsecs) {
    var myelement = document.createElement("div");
    myelement.setAttribute("style", "background-color: green;color:white; width: 200px;height: 80px;position: absolute;top:0;bottom:0;left:0;right:0;margin:auto;border: 4px solid black;font-family:arial;font-size:35px;font-weight:bold;display: flex; align-items: center; justify-content: center; text-align: center; border-radius: 20px; z-index:10000");
    myelement.innerHTML = mymsg;
    setTimeout(function () {
        myelement.parentNode.removeChild(myelement);
    }, mymsecs);
    document.body.appendChild(myelement);
}


function handleClick() {
    // console.log('Element with id "myButton" was clicked!');
    // audio.play();  // Play the sound
}

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the element by its id
    const element = document.getElementById('sound_button');

    // Check if the element exists
    if (element) {
        // Add a click event listener to the element
        element.addEventListener('click', handleClick);
    } else {
        console.error('Element with id "myButton" not found.');
    }


    var array = []
    array.push(document.getElementById('tribute-info-how'));
    array.push(document.getElementById('tribute-info-images'));
    array.push(document.getElementById('tribute-info-tokenomics'));

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right > 0
        );
    }
    function checkVisibility() {
        array.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
            else{
                element.classList.remove('visible');
            }
        });
    }
    // Check visibility on scroll and resize events
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();

    var imgElement = document.getElementById('images');
    var imgElement1 = document.getElementById('images1');
    var imgElement2 = document.getElementById('images2');

    imgElement.src = newImage.src;
    imgElement1.src = newImage1.src;
    imgElement2.src = newImage2.src;

});