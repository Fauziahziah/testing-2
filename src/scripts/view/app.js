/* eslint-disable no-tabs */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
// import '../component/creator';
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
	 DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
	 });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
