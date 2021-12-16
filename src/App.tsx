import Router from './router/Router'

function App() {
  return (
    <>
      <Router />
    </>
  )
}

export default App

// rangeOfNumbers(1, 5) // [1, 2, 3, 4, 5].

// [1, 2, [1, 2, [3, 2, 5]], 4, [5]]; // [1, 2, 3, 4, 5]
