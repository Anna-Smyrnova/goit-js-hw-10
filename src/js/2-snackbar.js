import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(formEl.elements.delay.value);
  const status = formEl.elements.state.value;

  Message(delay, status);
});

function createPromise(delay, status) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        res(delay);
      } else {
        rej(delay);
      }
    }, delay);
  });
}

function Message(delay, status) {
  createPromise(delay, status)
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#0cb13dff',
        messageColor: '#fff',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#d02727',
        messageColor: '#fff',
      });
    });
}
