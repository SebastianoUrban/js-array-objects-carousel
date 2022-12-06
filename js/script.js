const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];


//DOM element
const carouselImage = document.getElementById('carousel-image');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

//add all Carouse Item at Carousel Image 
images.forEach(objImage => {addCarouselItem(objImage, carouselImage);});

//global index
indexImage = 0;

//active Image
activeImageByIndex(indexImage, carouselImage);


btnPrev.addEventListener('click',() => {
   indexImage--;
   activeImageByIndex(indexImage, carouselImage);
});


btnNext.addEventListener('click',() => {
   indexImage++;
   activeImageByIndex(indexImage, carouselImage);
});







  //========================================//
 //=============== FUNCTION ===============//
//========================================//

function addCarouselItem(object, parent){
   const carouselItem = document.createElement('div');
   carouselItem.classList.add('my-carousel-item');

   const imgElem = document.createElement('img');
   imgElem.src = './'+ object['image'];
   carouselItem.appendChild(imgElem);
   parent.appendChild(carouselItem);
}

function activeImageByIndex(index, parent) {
   const images = parent.getElementsByClassName('my-carousel-item');

   for (let i = 0; i < images.length; i++) {
      if (i == index) {
         images[i].classList.add('active');
      } else {
         images[i].classList.remove('active');
      }
   }
}