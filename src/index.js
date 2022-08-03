import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

function Index() {
   return (
      <div className='wrapper'>
         <App />
      </div>
   )
}

const root = createRoot(document.querySelector("#root"))
root.render(<Index />)