const raiseInvoiceClicked = (url) => {
  window.open(url, '_blank')
}

const loadAnimations = (lottie, element, animation, loopBool = true) => {
  if (element) {
    lottie.loadAnimation({
      container: element.current,
      renderer: 'svg',
      loop: loopBool,
      autoplay: true,
      animationData: animation,
    })
  }
}

module.exports = { raiseInvoiceClicked, loadAnimations }
