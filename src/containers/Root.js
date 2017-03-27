import React, { Component }   from 'react'
import NavBarExample          from './NavBarExample'


export default class Root extends Component {

  render() {
    return (
      <div>
        <NavBarExample/>
        <div className="container">
          {this.props.children} 
        </div>
      </div>
    )
  }
}
