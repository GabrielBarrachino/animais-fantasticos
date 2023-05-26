import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenus.forEach((menu) => {
    menu.addEventListener('touchstart', handleClick);
    menu.addEventListener('click', handleClick);
  });
}
