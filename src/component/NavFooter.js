import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link activeStyle={{color:'#FFC107'}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home"></span><br />Home</Link>
        <Link activeStyle={{color:'#FFC107'}} to="/Blog"><span className="glyphicon glyphicon-book"></span><br />Blog</Link>
        <Link activeStyle={{color:'#FFC107'}} to="/Work"><span className="glyphicon glyphicon-dashboard"></span><br />Work</Link>
        <Link activeStyle={{color:'#FFC107'}} to="/About"><span className="glyphicon glyphicon-user"></span><br />About</Link>
      </div>
    )
  }
}

export default NavFooter;
