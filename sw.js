const cacheList = {
  shared: {
    version: '1.0.0',
    resources: [
      'https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css',
      'https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js',
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      'https://fonts.gstatic.com/s/materialicons/v99/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2'
    ]
  },
  'img-viewer': {
    version: '1.0.5',
    resources: [
      '../img-viewer/public/build/bundle.js',
      '../img-viewer/public/build/bundle.js.map',
      '../img-viewer/public/build/bundle.css',
      '../img-viewer/public/128.png',
      '../img-viewer/public/512.png',
      '../img-viewer/public/site.webmanifest',
      '../img-viewer/public/'
    ]
  },
  'audio-player': {
    version: '1.0.12',
    resources: [
      '../audio-player/public/build/bundle.js',
      '../audio-player/public/build/bundle.js.map',
      '../audio-player/public/build/bundle.css',
      '../audio-player/public/128.png',
      '../audio-player/public/512.png',
      '../audio-player/public/site.webmanifest',
      '../audio-player/public/'
    ]
  }
}

self.addEventListener('install', event => {
  event.waitUntil( // always cache shared resources first
    caches.open('shared v.' + cacheList.shared.version).then(cache =>
      cache.addAll(cacheList.shared.resources)
    )
  )
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key) { // dump all outdates caches on load
          const [name, version] = key.split(' v.')
          if (cacheList[name].version !== version) {
            return caches.delete(key)
          }
        }
        return null
      }))
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    let match = await caches.match(event.request)
    if (!match) { // not in cache
      const url = event.request.url
      if (url.indexOf(self.registration.scope) !== -1) { // in origin
        const path = url.slice(self.registration.scope.length)
        const app = path.slice(0, path.indexOf('/'))
        if (cacheList[app]) { // in cachelist
          const keys = await caches.keys()
          if (!keys.includes(app + ' v.' + cacheList[app].version)) { // cache doesnt exist
            const cache = await caches.open(app + ' v.' + cacheList[app].version)
            await cache.addAll(cacheList[app].resources)
            match = await caches.match(event.request)
          }
        }
      }
    }
    return match || fetch(event.request)
  })())
})
