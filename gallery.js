const galleryWrapper = document.querySelector('.gallery-wrapper');

const photoList = ['nav.jpg', 'nav.jpg', 'nav.jpg', 'nav.jpg', 'nav.jpg'];

const makeGallery = () => {
    for (let i = 0; i < photoList.length; i++) {
        newPhotoWrapper = document.createElement("div");
        newPhotoWrapper.classList.add('col-12');
        newPhotoWrapper.classList.add('col-md-5');
        newPhotoWrapper.classList.add('mx-md-auto');
        newPhotoWrapper.classList.add('mb-md-5');
        newPhotoWrapper.classList.add('gallery-photo');
        newPhotoWrapper.dataset.lightbox = "gallery";
        newPhotoWrapper.style.backgroundImage = `url(img/${photoList[i]})`;
        galleryWrapper.appendChild(newPhotoWrapper);
    }
}
makeGallery();