import React from 'react'
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Shop from '../Pages/Shop';
import ProductDetails from '../Pages/ProductDetails';
import Checkout from '../Pages/Checkout';
import CartContent from '../Pages/CartContent';

export default function AppRoutes({productsthatAddedToCart}) {
  return (
    <RouterRoutes>
        <Route path='/' element={<Shop />} />
        <Route path='details/:productId' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout productsthatAddedToCart={productsthatAddedToCart} />} />
        <Route path='/cart' element={<CartContent productsthatAddedToCart={productsthatAddedToCart} />} />
    </RouterRoutes>
  )
}
