/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./index.css";
import ProductListForm from './products';
import 'antd/dist/antd.min.css';
import Layout from '../../layouts/Layout'

function ProductList() {
  if (localStorage['user-info'] == null) { window.location.href = '/login' }
  
  if(JSON.parse(localStorage['user-info']).role==2) {window.location.href = '/sellingProduct'}
  
    return (      
    <Layout>
      <Layout.Main>
        <div>
          <ProductListForm />
        </div>  
      </Layout.Main>
    </Layout>
      )
}
export default ProductList