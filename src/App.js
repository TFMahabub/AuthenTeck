import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from './Router/Routers'

function App() {
  return (
    <div >
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

export default App
