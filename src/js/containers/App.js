import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default connect()(Root)