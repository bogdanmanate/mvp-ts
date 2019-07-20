/**
 * TypeScript currently does not support loading both "DOM" and "WebWorker"
 * type definitions (in the tsconfig "lib" field), so we are falling back to
 * incomplete types hacked out of the desired definitions file
 *
 * Issue:
 * https://github.com/Microsoft/TypeScript/issues/20595
 *
 * Hack:
 * node_modules/typescript/lib/lib.webworker.d.ts -> typings/custom.d.ts
 *
 * Actual:
 * https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope
 *
 */
const context = (self as any) as DedicatedWorkerGlobalScope

context.addEventListener('message', e => {
  const data: unknown = JSON.parse(e.data)
  console.log('Worker thread received message from host:', data)
  context.postMessage(JSON.stringify({ bar: 'foo' }))
})
