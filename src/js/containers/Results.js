import React, { Component } from 'react'
import {connect} from 'react-redux';

class Results extends Component {
    render() {
        console.log("hehe")
        return (
            <div>
                 <span>hello</span>
            </div>
        )
    }
}

export default connect()(Results)