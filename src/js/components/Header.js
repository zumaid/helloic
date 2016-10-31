import React, { Component } from 'react';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/css.css';

export default class Header extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-default qegoo_c_1" style={{'marginBottom': '0'}}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                      data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false">
                <span className="sr-only"></span> <span className="icon-bar"></span> <span
                  className="icon-bar"></span> <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/"
                 style={{'color': 'white','fontSize': '20px'}}> 嗨芯网 </a>
            </div>

            <div className="collapse navbar-collapse qegoo_searchbox_top">
              <div className="pull-right  ">
                <a href="/help">Help </a>
              </div>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}
