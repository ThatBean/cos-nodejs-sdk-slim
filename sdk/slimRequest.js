const url = require('url')
const httpRequest = require('http').request
const httpsRequest = require('https').request

const urlToOption = ({ protocol, hostname, hash, search, pathname, href, port, username, password }) => {
  const option = { protocol, hostname, hash, search, pathname, href, path: `${pathname}${search}` }
  if (port !== '') option.port = Number(port)
  if (username || password) option.auth = `${username}:${password}`
  return option
}

module.exports = (urlString, searchObject, method, headers) => {
  const option = urlToOption(new url.URL(urlString))
  if (searchObject) option.search = new url.URLSearchParams(searchObject).toString()
  option.headers = headers
  option.method = method
  // console.warn('[slimRequest]', option)
  const request = (option.protocol === 'https:' ? httpsRequest : httpRequest)(option)
  request.on('error', (error) => {
    console.warn('[slimRequest] request error:', error)
  })
  // request.on('response', (response) => {
  //   console.warn('[slimRequest] response!')
  //
  //   const chunkList = []
  //   response.on('data', (chunk) => {
  //     console.warn('[slimRequest] data, chunk:', chunk.length) // chunk.toString()
  //     chunkList.push(chunk)
  //   })
  //   response.on('end', () => {
  //     console.warn('[slimRequest] end, data:', Buffer.concat(chunkList).toString())
  //   })
  //   response.on('error', (error) => {
  //     console.warn('[slimRequest] response error:', error)
  //   })
  // })
  return request
}
