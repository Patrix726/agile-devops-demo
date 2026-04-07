import React from 'react'
import { sum } from './utils/sum'

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>CI/CD Demo — Vite + React</h1>
      <p>1 + 2 = {sum(1, 2)}</p>
      <p>This demo runs tests on PRs and builds & deploys on main.</p>
    </div>
  )
}
