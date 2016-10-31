import React, { Component } from 'react';
import Search from './Search';

export default class Home extends Component{
  render(){
    return (
      <div>
        <div className="container-fluid searchbox " style={{'width': '90%'}}>
          <div className="row  smart-padding-top-50">
            <img src="http://oevygtjfg.bkt.clouddn.com/logo.png"
                 className="center" style={{'marginBottom': '20px','width': '380px'}}/>
            <div className="row  smart-padding-top-50">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                  <Search defaultKey='Hello'/>
              </div>

              <div className="col-lg-2"></div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}
