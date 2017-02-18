import Loader from 'lib/loader'

const loader = new Loader()

loader.router([
  { path: '/', view: 'index/home' },
])

loader.run(document.getElementById('app'))
