import { Route, Routes } from "react-router-dom"
import Client from "./layout/client"
import List from "./layout/List"
import ProductDetail from "./components/productDetail"

function App() {
  return (
    <>
     <Routes>
      <Route path='' Component={Client}/>
      <Route path='/products' Component={List}/>
      <Route path='/detail/:id' Component={ProductDetail}/>
     </Routes>
    </>
  )
}

export default App
