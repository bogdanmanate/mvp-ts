import { createElement } from 'react'
import { render } from 'react-dom'
import { Root } from 'src/components/Root'

render(createElement(Root), document.getElementById('root'))

setTimeout(async () => {
  const lazy = await import('src/util/lazy')
  setTimeout(lazy.test, 1000)
}, 1000)
