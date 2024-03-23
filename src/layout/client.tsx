import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Slider from '../components/slider'
import ProductList from '../components/productList'
const Client = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Slider/>
    <ProductList/>
    <Footer/>
    </>
  )
}

export default Client