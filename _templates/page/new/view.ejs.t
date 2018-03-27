---
to: source/js/views/<%= h.capitalize(name) %>.jsx
---

import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Heading } from "shepard-styleguide";

@connect(state => ({
}))
class <%= h.capitalize(name) %> extends Component {
  static propTypes = {
  }
  render() {
    const {  } = this.props;
    return (
      <div>
         <Heading><%= h.capitalize(name) %></Heading>
      </div>
    );
  }
}

export default withRouter(<%= h.capitalize(name) %>);