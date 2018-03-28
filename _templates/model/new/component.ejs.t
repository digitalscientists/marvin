---
to: '<% if(components.includes("component")){ %>source/js/components/<%= name %>.js<% } else { null } %>'
---
import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class <%= h.capitalize(name) %> extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
