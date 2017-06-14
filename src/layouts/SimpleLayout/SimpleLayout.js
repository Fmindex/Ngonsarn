import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './SimpleLayout.scss'

export const SimpleLayout = ({ children }) => (
  <div className='container text-center'>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
SimpleLayout.propTypes = {
  children: PropTypes.node,
}

export default SimpleLayout
