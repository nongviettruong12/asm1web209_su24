import { Route, Routes } from "react-router-dom"
import Client from "./layout/client"
import List from "./layout/List"
import ProductDetail from "./components/productDetail"
import Dashboard from "./pages/admin/dashboard"
import AddProduct from "./pages/admin/add"
import UpdateProduct from "./pages/admin/update"
import SignIn from "./components/signIn"
import SignUp from "./components/signUp"

function App() {
  return (
    <>
     <Routes>
      <Route path='' Component={Client}/>
      <Route path='/products' Component={List}/>
      <Route path='/detail/:id' Component={ProductDetail}/>
      <Route path='/signin' Component={SignIn}/>
      <Route path='/signup'Component={SignUp}/>
    
      <Route path='/admin' Component={Dashboard}/>
      <Route path='admin/add' Component={AddProduct}/>
      <Route path='admin/update/:id' Component={UpdateProduct}/>
     </Routes>
    </>
  )
}

export default App
