import React, { PropTypes } from 'react';

import { Link } from 'react-router';

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width: '90%',
        borderRadius: '10px',
        margin: '0 auto',
        marginBottom: '20px',
      },
      index:{
        backgroundColor: '#388E3C',
        height: '80px',
        textAlign: 'center',
        borderRadius: '10px 10px 0 0',
        paddingTop: '10px'
      },
      num:{
        lineHeight: '60px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: '2px solid #fff',
        display: 'block',
        fontSize: '20px',
        margin: '0px auto',
        color: '#fff'
      },
      content:{
        padding: '16px',
        color: '#727272'
      },
      title:{
        fontSize: '22px',
        marginBottom: '20px'
      },
      desc:{
        fontSize: '16px',
        marginBottom: '20px'
      },
      btn:{
        border: '2px solid #388E3C',
        padding: '8px 35px',
        borderRadius: '5px',
        textDecoration: 'none'
      }
    }

    let address = `item/${this.props.url}`;

    return(
      <div style={styles.root}>
        <div style={styles.index}>
            <span style={styles.num}>{this.props.index}</span>
        </div>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <Link to={address} style={styles.btn} className="link-btn">阅读更多</Link>
        </div>
      </div>
    )
  }
}

BlogCard.defaultProps = {
  index: 1,
  title: '这里是标题',
  desc: '这里是介绍'
}
BlogCard.PropTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}


export default BlogCard;
