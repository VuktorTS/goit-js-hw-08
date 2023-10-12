// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const listGallery = document.querySelector('.gallery');
// listGallery.style.listStyle = 'none';

function renderMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `;
    })
    .join('');
}

listGallery.insertAdjacentHTML('beforeend', renderMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
