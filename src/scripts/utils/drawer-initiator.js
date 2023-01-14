/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, button, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer);
    });
  },

  _toggleDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.toggle('is-active');
    drawer.classList.toggle('is-active');
  },

  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.remove('is-active');
    drawer.classList.remove('is-active');
  },
};

export default DrawerInitiator;
