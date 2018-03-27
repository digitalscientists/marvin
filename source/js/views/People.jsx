import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCatalog } from "models/catalog/actions";

@connect(state => ({
  error: state.catalog.get("error"),
  loading: state.catalog.get("loading"),
  catalog: state.catalog.get("catalog"),
}))
export default class People extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    catalog: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  };

  state = {};

  componentWillMount() {
    const { dispatch, catalog } = this.props;

    if (!catalog) {
      dispatch(getCatalog());
    }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    debugger;
    console.error("catalog.jsx", error, info);
  }

  rendercatalog() {
    const { catalog } = this.props;

    return catalog.results.map(person => {
      return (
        <div key={person.url} className="catalog-person">
          <h3>{person.name}</h3>
          <div>Height: {person.height}</div>
          <div>Mass: {person.mass}</div>
          <div>Eye color: {person.eye_color}</div>
          <div>Hair color: {person.hair_color}</div>
          <div>Birth year: {person.birth_year}</div>
        </div>
      );
    });
  }

  render() {
    const { loading, error, catalog } = this.props;

    if (this.state.hasError) {
      return <div>Error!</div>;
    }
    return (
      <div className="catalog">
        <h1>catalog</h1>
        {loading && <div>Loading catalog...</div>}
        {error && error.toString()}
        <div className="catalog-list">{catalog && this.rendercatalog()}</div>
      </div>
    );
  }
}
