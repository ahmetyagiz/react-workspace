import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container';

const item = "Refrigerator";

function App() {

  return (
    <div>
      <Product productName="Shoe" price={3200} />
      <hr />
      <Product productName="Trousers" price={950} />
      <hr />
      <Product productName={item} price={15000} />
      <hr />
      <Container>
        <Product productName="Phone" price={20500} />
      </Container>
    </div>
  )
}

export default App
