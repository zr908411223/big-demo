import React, { PropTypes } from 'react';
import { Link } from 'react-router';


class LeftNav extends React.Component {
  render () {
    return(
      <div className="left-nav">
        <h3>Zora-{this.props.title}</h3>
        <Link activeStyle={{color:'#FFC107'}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home"></span>Home</Link>
        <Link activeStyle={{color:'#FFC107'}} to="/Blog"><span className="glyphicon glyphicon-book"></span>Blog</Link>
        <Link activeStyle={{color:'#FFC107'}} to="/Work"><span className="glyphicon glyphicon-dashboard"></span>Work</Link>
        <Link activeStyle={{color:'#FFC107'}} to="/About"><span className="glyphicon glyphicon-user"></span>About</Link>
      </div>
    )
  }
}

LeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LeftNav;
