const allSections = document.querySelectorAll('.section')

const showSectoin = function(entries, observer) {
  const [entry] = entries
  if(!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(showSectoin, {
  root: null,
  threshold: 0.07
})

allSections.forEach(function(section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

