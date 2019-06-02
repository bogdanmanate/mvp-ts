import React from 'react'

export const Hello: React.SFC<{ name: string }> = ({ name }) => (
  <h1>Hello {name}</h1>
)
