import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconBad from '../images/Error.svg';
import iconGood from '../images/Good.svg';

const form = document.querySelector('.form');

const commonToastSettings = {
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  timeout: 10000,
  resetOnHover: true,
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.delay.value);
  const state = event.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.success({
        ...commonToastSettings,
        title: 'OK',
        message: `Fulfilled promise in ${value}ms`,
        backgroundColor: '#59a10d',
        progressBarColor: '#326101',
        iconUrl: iconGood,
      });
    })
    .catch(value => {
      iziToast.error({
        ...commonToastSettings,
        title: 'Error',
        message: `Rejected promise in ${value}ms`,
        backgroundColor: '#ef4040',
        progressBarColor: '#b51b1b',
        iconUrl: iconBad,
      });
    });
});
