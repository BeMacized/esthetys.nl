import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from 'reactstrap'

import HeaderNav from './HeaderNav'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.css'
import '../style.global.css'

class App extends Component {
  render () {
    return (
      <div>
        <HeaderNav />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired
}

export default App
