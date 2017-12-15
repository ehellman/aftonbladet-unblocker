(function() {
  // rewrite of https://github.com/crash007/aftonbladet-deblock which was broken
  // big credit to crash007 for the MutationObserver code
  
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver
  
  new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation) {
      if (document.querySelectorAll('img[alt="freewall"]').length > 0) {
        // select the modal parent
        var modal = document.querySelector('img[alt=freewall]').parentNode.parentNode.parentNode
        // move up one step in the DOM and remove the modal parent element
        modal.parentNode.removeChild(modal)
        // remove the blur
        if (document.querySelector('.abThemeGradientPage')) {
          document.querySelector('.abThemeGradientPage').children[0].classList.add('noblur')
        } else if (document.querySelector('.abThemeSolidPage')) {
          document.querySelector('.abThemeSolidPage').children[0].classList.add('noblur')
        } else if (document.querySelector('qVgIk')) {
          document.querySelector('.qVgIk').classList.add('noblur')
        }
      }
    })
  }).observe(document, { 
    subtree: true, 
    childList: true 
  })
})()