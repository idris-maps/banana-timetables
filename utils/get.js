import PromisePolyfill from 'promise-polyfill'

export default url =>
  new PromisePolyfill((resolve, reject) => {
    const  request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = () =>
      request.status == 200
        ? resolve(JSON.parse(request.responseText))
        : reject({
            status: request.status,
            data: JSON.parse(request.responseText),
          })
    request.onerror = err => reject(err)
    request.send()
  })


