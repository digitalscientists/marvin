
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Heading } from "shepard-styleguide";

@connect(state => ({
}))
class Invoice extends Component {
  static propTypes = {
  }
  render() {
    const {  } = this.props;
    return (
      <div>
         <Heading>Invoice</Heading>
      </div>
    );
  }
}

export default withRouter(Invoice);