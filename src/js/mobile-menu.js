(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    menuLinks: document.querySelectorAll('[data-menu] a'), // Додаємо посилання всередині меню
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Функція для відкриття/закриття меню
  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  // Додаємо обробник для кожного посилання в меню
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.remove('is-open'); // Закриваємо меню
    });
  });
})();