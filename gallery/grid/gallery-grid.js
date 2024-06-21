const PICSUM_API = "https://picsum.photos";

let numberOfGridItems = 12 * 2;

const gridImgSize = 1024;

const galleryGridContainerElement = document.querySelector(".gallery-grid-container");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


const createGridItems = () => {
    for(i=0; i<numberOfGridItems; i++){
        const randomIndex = getRandomNumber(1, gridImgSize);

        const gridItemElement = document.createElement("img");
        gridItemElement.classList.add("gallery-grid-img");
        gridItemElement.setAttribute("src", `${PICSUM_API}/${gridImgSize}/${gridImgSize}?random=${randomIndex}`);
        
        galleryGridContainerElement.appendChild(gridItemElement);
    }
}

createGridItems();