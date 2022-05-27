import React from 'react'
import { Layout } from 'antd'
import './style.css'
import PropTypes from 'prop-types'
import _get from 'lodash/get'
import { findSlot } from '../../utils/pages'
import Navbar from '../Navbar'
import 'antd/dist/antd.min.css';

const { Content } = Layout
const Mylayout = ({ children }) => {
  const main = findSlot(Mylayout.Main, children)
  return (
    <div className="otherlayout">
      <Layout>
        <Layout className="site-layout">
          <Navbar />
          <Content
            style={{
              margin: '45px 16px',
              padding: 24,
              minHeight: 280,
              backgroud: '#fff',
            }}
          >
            { _get(main, 'props.children') }
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
export default Mylayout
Mylayout.Main = () => null
Mylayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}
Mylayout.defaultProps = {
  children: [],
}