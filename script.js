const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  lightbox.classList.remove('active')
})

/*colors buttons*/
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu a');
  const current = location.pathname.replace(/\/$/, ''); // remove trailing slash

  links.forEach(link => {
    // resolve link href to a pathname (handles relative and absolute)
    const linkPath = new URL(link.href, location.origin).pathname.replace(/\/$/, '');
    if (linkPath === current) {
      link.classList.add('active');
    }
  });
});
