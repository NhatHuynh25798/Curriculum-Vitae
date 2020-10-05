import useMedia from 'use-media-easy'

const useMobile = (id) =>
  useMedia({
    id: 'BasicLayout',
    query: '(max-width:992px)',
  })[0]
export default useMobile
