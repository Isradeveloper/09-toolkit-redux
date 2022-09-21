import { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={() => setCount((count + 1))}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}
