import React from 'react'

export const Hello: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <h1>Hello {name}</h1>
)
