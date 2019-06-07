import { createElement } from 'react'
import { render } from 'react-dom'
import { Root } from '~/components/Root'

render(createElement(Root), document.getElementById('root'))

setTimeout(async () => {
  const lazy = await import('~/util/lazy')
  setTimeout(lazy.test, 1000)
}, 1000)

const set = new Set([0, 1, 2, 2, 3])
console.log(set)
