const PICSUM_API = "https://picsum.photos";

let numberOfFlexItems = 16;
let numberOfFlexColumns = 6;

const gridWidthImgSize = 512;

const galleryFlexContainerElement = document.querySelector(".gallery-mason-container");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


const createGridItems = () => {
    for(columnIndex=0; columnIndex<numberOfFlexColumns; columnIndex++){
        const masonColumnElement = document.createElement("div");    
        masonColumnElement.classList.add("gallery-mason-column");
        
        for(itemIndex=0; itemIndex < numberOfFlexItems; itemIndex++){
            const randomIndex = getRandomNumber(1, 1000);
            const gridHeigth = getRandomNumber(gridWidthImgSize/2, gridWidthImgSize);
            const flexItemElement = document.createElement("img");
            flexItemElement.classList.add("gallery-mason-img");
            flexItemElement.setAttribute("src", `${PICSUM_API}/${gridWidthImgSize}/${gridHeigth}?random=${randomIndex}`);
            masonColumnElement.appendChild(flexItemElement);
        }
        
        galleryFlexContainerElement.appendChild(masonColumnElement);
    }
}

createGridItems();

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const imageElements = document.querySelectorAll(".gallery-mason-img");
imageElements.forEach((imageElement) => {
    imageObserver.observe(imageElement);
})