import React, { PropTypes } from 'react'

class About extends React.Component {
  render () {
    return (
      <div className="about-content">
        <div>
          <a><img src="http://odu1gnwld.bkt.clouddn.com/1.png" /></a>
          <h2>Information</h2>
          <div>
            <p>姓名：</p>
            <p>联系方式：</p>
            <p>地址：</p>
            <p>网址：</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
