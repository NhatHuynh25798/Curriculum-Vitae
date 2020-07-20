const raiseInvoiceClicked = (url) => {
  window.open(url, '_blank')
}

const loadAnimations = (animationData, loop = true, autoplay = true) => {
  return {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
  }
}

module.exports = { raiseInvoiceClicked, loadAnimations }
