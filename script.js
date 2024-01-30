const wrapperOne = document.querySelector('.wrapper-1');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
const imageContainer = document.querySelector('.image-container');

const wrapperT = document.querySelector('.wrapper-2');
const leftButtonT = document.querySelector('.carousel-leftT');
const rightButtonT = document.querySelector('.carousel-rightT');
const imageContainerT = document.querySelector('.image-container2');


let track = 0;

let counter = 1;

const moveImagesLeft = function () {
    if (counter < imageContainer.childElementCount) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
        console.log(`${track} ${counter}`)

    }
}

const moveImagesRight = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
        console.log(`${track} ${counter}`)
    }
}

rightButton.addEventListener('click', () => {
    moveImagesLeft();
});


leftButton.addEventListener('click', () => {
    moveImagesRight();
});





let trackT = 0;

let counterT = 1;

const moveImagesLeftT = function () {
    if (counterT < imageContainerT.childElementCount) {
        counterT++;
        trackT = trackT - 100;
        wrapperT.style.marginLeft = `${trackT}%`;
        console.log(`${trackT} ${counterT}`)

    }
}

const moveImagesRightT = function () {
    if (counterT > 1) {
        counterT--;
        trackT = trackT + 100;
        wrapperT.style.marginLeft = `${trackT}%`;
        console.log(`${trackT} ${counterT}`)
    }
}

rightButtonT.addEventListener('click', () => {
    moveImagesLeftT();
});


leftButtonT.addEventListener('click', () => {
    moveImagesRightT();
});
