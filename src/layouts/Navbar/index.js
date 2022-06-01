/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'tailwindcss/tailwind.css';
import { Menu, Dropdown, Avatar, Input, Space, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './style.scss';
import logo from '../../logo_app.png';

export default function Navbar() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  let user = localStorage.getItem('user-info');
  const handleLogout = async () => {
    try {
      localStorage.clear();
      window.location.href = '/login';
    } catch (error) {
      if (error.request.status === 400) {
        console.log(error)
      }
    }
  }
  const userInformation = (
    <Menu className="rounded-2xl py-2 top-3 absolute transform -translate-x-1/2 left-1/2 menuNavbar">  
      <Menu.Item key="0">
        <a href="/profile">
          <a>Profile</a>
        </a>
      </Menu.Item>
      <Menu.Item key="1">
          <a onClick={handleLogout}>Logout</a>
      </Menu.Item>
    </Menu>
  )
  let checkLogin
  if (user == null){
    checkLogin = (
      <div>
        <a href="/Register" style={{padding:10}}> Đăng ký</a>
        | 
        <a href="/login" style={{padding:10}}>Đăng nhập</a>
      </div>
    )
  }
  else{
    checkLogin = (
      <div className="flex items-center">
        <div className="px-4">
          <Dropdown overlay={userInformation} trigger={['click']}>
            <div className="avatarNavbar">
              <Avatar className="" style={{float:'right', width:'40px',height:'40px'}}/>
            </div>
          </Dropdown>
        </div>
      </div> 
    )
  }

  return (
    <div className=" flex justify-between items-center border-2 navbar select-none">
      <div className="flex"  style={{float:'left'}}>
        <div className="w-20 ml-16">
          <a href={JSON.parse(localStorage['user-info']).role!=2?"/productList":"/sellingProduct"} >
              <img src={logo} alt="logo" className="logo"/>
          </a>
        </div>
      </div>
      <div className="flex items-center searchNavbar" style={{float:'left' }}>
          <div className="px-8" >
          <Space direction="vertical">
            <Search style={{width: 500, height: 20}} placeholder="input search text" onSearch={onSearch} enterButton />
          </Space>
          </div>
      </div>     
      <div className="flex px-16 items-center cartNavbar" style={{float:'right'}}>
        <div className="px-4">
        <Button type="text" href={"/cart"} icon={<ShoppingCartOutlined className="cart" style={{ fontSize: '200%'}}/>} />
        </div>
      </div>
      {checkLogin}
    </div>
  )
}
