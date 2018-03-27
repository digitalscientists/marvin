import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCatalog } from "models/catalog/actions";
import { getInvoice } from "models/invoice/actions";

@connect(state => ({
  counter: state.catalog.get("counter"),
}))
export default class Dashboard extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  };

  componentDidMount() {}

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  };

  render() {
    const { counter } = this.props;

    return (
      <div>
        <h1>Shepard Organizer Dashboard</h1>
        {counter}
        <button onClick={this.handleTestButtonClick}>Increment</button>
      </div>
    );
  }
}
