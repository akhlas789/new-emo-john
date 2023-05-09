import { useState } from 'react'
import './App.css'
import Category from './components/Category/Category'
import Shop from './Shop/shop'
import Product from './components/Product/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Category></Category>
      <Shop></Shop>
      <Product></Product>
      
    </div>
  )
}

export default App
