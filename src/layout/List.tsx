import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ProductList from '../components/productList'

type Props = {}

const List = (props: Props) => {
  return (
    <>
    <Header/>
    <ProductList/>
    <Footer/>
    </>
  )
}

export default List