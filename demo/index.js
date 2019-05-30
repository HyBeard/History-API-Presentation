const items = [...document.getElementsByClassName('menu__item')];
const menu = document.querySelector('.menu');

menu.addEventListener('click', e => {
  const name = e.target.dataset.name;

  history.pushState({ name }, null, `/${name}`);
  selectItem(name);
  e.preventDefault();
});

function selectItem(name) {
  items.forEach(item => {
    item.classList.toggle('menu__item_active', item.dataset.name === name);
  });
}

window.addEventListener('popstate', e => {
    selectItem(e.state.name);
});

history.replaceState({name:null}, null, './')
