import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render () {
    let styles={
      h3:{
        fontSize: '7vh',
        fontWeight: '500',
        marginBottom:'20px'
      }
    }
    return (
      <div className="home-content">
        <div className="content-div">
          <div className="main-div">
            <h3 style={styles.h3}>HE,I’M ZORA</h3>
            <p>WEB DEVELOPER</p>
            <Link to='/About'>Tell Me</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
