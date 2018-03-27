import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

@connect(state => ({}))
class Invoice extends Component {
  static propTypes = {};
  render() {
    const {} = this.props;
    return (
      <div>
        <h1>Invoice</h1>
      </div>
    );
  }
}

export default withRouter(Invoice);
