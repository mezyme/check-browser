/**
 * Created by zhaoyue on 2017/9/4
 */

const getUserAgent = () => {
  let userAgent = navigator.userAgent
  return userAgent
}

const userAgent = navigator.userAgent

const withChrome = (userAgent = userAgent) => userAgent.indexOf('Chrome') > -1
const withSafari = (userAgent = userAgent) => userAgent.indexOf('Safari') > -1
const withEdge = (userAgent = userAgent) => userAgent.indexOf('Edge') > -1

const isSafari = (userAgent = getUserAgent()) => {
  let isSafari = withSafari(userAgent) && !withChrome(userAgent)
  return isSafari.toString()
}

const isChrome = (userAgent = getUserAgent()) => {
  let isChrome = !withEdge(userAgent) && withSafari(userAgent) && withChrome(userAgent)
  return isChrome.toString()
}

export { getUserAgent, isSafari, isChrome }
