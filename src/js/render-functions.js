import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery__image" />
        <ul class="info">
          <li class="info-item">
            <p>Likes</p> ${likes}
          </li>
          <li class="info-item">
            <p>Views</p> ${views}
          </li>
          <li class="info-item">
            <p>Comments</p> ${comments}
          </li>
          <li class="info-item">
            <p>Downloads</p> ${downloads}
          </li>
        </ul>
      </a>
    </li>
  `;
}

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const galleryMarkup = images.map(createMarkup).join('');

  gallery.innerHTML = galleryMarkup;
}

export function renderLoader(isLoading) {
  const loader = document.querySelector('.loader');
  loader.classList.toggle('is-hidden', !isLoading);
}

export function renderError(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
}
