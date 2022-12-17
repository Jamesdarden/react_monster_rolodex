import React, { Component } from 'react'

import './searchbox.styles.css'

export default class SearchBox extends Component {
  render() {
    return (
        <input
            className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandeler}
        />
    )
  }
}
