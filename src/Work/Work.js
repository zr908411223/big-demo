import React, { PropTypes } from 'react'

class Work extends React.Component {
  render () {
    return (
      <div className="work-content row">
        <div className="work-card col-xs-10 col-xs-offset-1 col-sm-5">
          <a><img src="http://odu1gnwld.bkt.clouddn.com/1.png"/></a>
          <div className="work-text">
            <h3>标题</h3>
            <p>内容</p>
          </div>
        </div>
        <div className="work-card col-xs-10 col-xs-offset-1 col-sm-5">
          <a><img src="http://odu1gnwld.bkt.clouddn.com/2.png"/></a>
          <div className="work-text">
            <h3>标题</h3>
            <p>内容</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
