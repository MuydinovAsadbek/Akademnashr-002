const elSiteHeaderToggler = document.querySelector('.js-site-header-toggler');
const elSitenav = document.querySelector('.sitenav');
const elsSitenavLink = document.querySelectorAll('.sitenav__link');

if(elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function() {
    elSitenav.classList.toggle('sitenav--open');
  });
}

if(elsSitenavLink) {
  elsSitenavLink.forEach(function(item, index) {
    item.addEventListener('click', function() {
      elsSitenavLink.forEach(function(item) {
        item.classList.remove('sitenav__link--active');
      });
      item.classList.add('sitenav__link--active');
    });
  });
}