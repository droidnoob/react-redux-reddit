import React, { PropTypes, Component } from 'react'
import { Panel } from 'react-bootstrap'

function getImageUrl(imgSrc){
    if(imgSrc === 'self' || imgSrc === 'default' ){
      imgSrc = 'http://www.faygoluvers.net/v5/wp-content/themes/original/images/no_image_available_s_large.jpg'
      return imgSrc
    }
    else {

      return imgSrc
    }
  }
export default class Posts extends Component {


  render() {
    return (
      <div>
        {this.props.posts.map((post) =>
          <Panel key={post.id} header={post.title} bsStyle="success">
            <img src={getImageUrl(post.thumbnail)} alt={post.title} width="120px"/><a href={post.url}>{post.title}</a>
          </Panel>
          // <li key={post.id}><img src={getImageUrl(post.thumbnail)} width="120px"/><a href={post.url}>{post.title}</a></li>
        )}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
