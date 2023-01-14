/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/main.sass';
import './component/creator';
import swRegister from './utils/sw-register';

import App from './view/app.js';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#mobile-nav'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    document.querySelector('header').classList.add('is-scrolling');
  } else {
    document.querySelector('header').classList.remove('is-scrolling');
  }
});
