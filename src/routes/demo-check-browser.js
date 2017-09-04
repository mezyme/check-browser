/**
 * Created by zhaoyue on 2017/9/4 下午7:27
 */

import React from 'react'

import { getUserAgent, isSafari, isChrome } from '../check-browser'

const DemoCheckBrowser = () => {
  return (
    <div>
      <h1>renderDemoCheckBrowser</h1>
      <p>{getUserAgent()}</p>
      <p>isSafari: {isSafari()}</p>
      <p>isChrome: {isChrome()}</p>
    </div>
  )
}

export default DemoCheckBrowser
