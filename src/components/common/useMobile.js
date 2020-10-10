import useMedia from 'use-media-easy'

const useMobile = (id) =>
  useMedia({
    id: 'BasicLayout',
    query: '(max-width:576px)',
  })[0]
export default useMobile
