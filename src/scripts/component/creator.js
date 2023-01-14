/* eslint-disable camelcase */

import Icon from '../../public/images/heros/zearesto.jpeg';

const icon = document.getElementById('img');
icon.src = Icon;

const mobile_nav = document.createElement('nav');
mobile_nav.id = 'mobile-nav';
mobile_nav.className = 'mobile-nav';
mobile_nav.tabIndex = '0';
document.getElementById('body').appendChild(mobile_nav);

const mobile = document.getElementById('mobile-nav');
mobile.innerHTML += `<a href="#/home">Home</a>
                      <a href="#/favorite">Favorite</a>
                      <a href="https://github.com/Fauziahziah" target="_blank" rel="noopener">About Us</a>`;

const main = document.createElement('main');
main.id = 'main';
main.tabIndex = '0';
main.innerHTML += `<section class="hero" id="hero"></section>
                   <section class="menu" id="menu"></section>
                   <section id="services" class="services"></section>
                   <section class="contact" id="contact"></section>`;
document.getElementById('body').appendChild(main);

const footer = document.createElement('footer');
footer.id = 'footer';
footer.className = 'footer-dark';
document.getElementById('body').appendChild(footer);

const column_footer = document.createElement('div');
column_footer.id = 'container';
column_footer.className = 'container';
document.getElementById('footer').appendChild(column_footer);

const row_footer = document.createElement('div');
row_footer.id = 'row';
row_footer.className = 'col item social';
document.getElementById('container').appendChild(row_footer);

const column_footer_two = document.createElement('div');
column_footer_two.id = 'social';
column_footer_two.className = 'col item social';
document.getElementById('row').appendChild(column_footer_two);

const line_one = document.createElement('a');
line_one.id = 'one';
line_one.href = '#';
document.getElementById('social').appendChild(line_one);

const instagram = document.createElement('li');
instagram.setAttribute('aria-label', 'instagram');
instagram.className = 'fa fa-instagram fa-lg';
document.getElementById('one').appendChild(instagram);

const line_two = document.createElement('a');
line_two.id = 'two';
line_two.href = '#';
document.getElementById('social').appendChild(line_two);

const snapchat = document.createElement('li');
snapchat.setAttribute('aria-label', 'snapchat');
snapchat.className = 'fa fa-snapchat fa-lg';
document.getElementById('two').appendChild(snapchat);

const line_three = document.createElement('a');
line_three.id = 'three';
line_three.href = '#';
document.getElementById('social').appendChild(line_three);

const twitter = document.createElement('li');
twitter.setAttribute('aria-label', 'twitter');
twitter.className = 'fa fa-twitter fa-lg';
document.getElementById('three').appendChild(twitter);

const line_four = document.createElement('a');
line_four.id = 'four';
line_four.href = '#';
document.getElementById('social').appendChild(line_four);

const facebook = document.createElement('li');
facebook.setAttribute('aria-label', 'facebook');
facebook.className = 'fa fa-facebook fa-lg';
document.getElementById('four').appendChild(facebook);

const paragraf_footer = document.createElement('p');
paragraf_footer.id = 'copyright';
paragraf_footer.className = 'copyright';
paragraf_footer.tabIndex = '0';
paragraf_footer.innerText = 'Copyright @2022 | ZEARESTO APPS';
document.getElementById('footer').appendChild(paragraf_footer);
