const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    const targetTop = target.getBoundingClientRect().top;

    window.scroll({
      top: targetTop,
      left: 0,
      behavior: 'smooth'
    });
  });
});