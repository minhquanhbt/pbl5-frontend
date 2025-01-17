import React from 'react';
import Login from '../pages/login';
import Register from '../pages/register';
import ProductList from '../pages/product_list';
import SellingProductList from '../pages/seller/sellingProduct';
import SellingProductDetail from '../pages/seller/sellingProduct_detail';
import AddProduct from '../pages/seller/addProduct';
import MenuAdmin from '../pages/admin/menu';
import Profile from '../pages/profile';
import Cart from '../pages/cart';
import History from '../pages/history';
import Detail from '../pages/history/detail';
import ProductDetail from '../pages/product_detail';
import UserList from '../pages/admin/userList';
import AdminProductList from '../pages/admin/admin_productList';
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product_detail/:id" element={<ProductDetail />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/sellingProduct" element={<SellingProductList />} />
          <Route path="/sellingProductDetail/:id" element={<SellingProductDetail />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/admin" element={<MenuAdmin />} />
          <Route path="/history" element={<History />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/admin_productList" element={<AdminProductList />} />
        </Routes>
      </Router>
  )
}

export default App;