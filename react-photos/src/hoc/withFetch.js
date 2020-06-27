import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

const withFetch = BaseComponent => class extends Component {
  state = {}

  componentDidMount() {
    const {
      fetchData,
      toggleShowLoader,
      match: { params }
    } = this.props;

    if (!this.state.list) {
      fetchData(
        params,
        data => {
          this.setState({
            data
          });
          toggleShowLoader();
        }
      );
      toggleShowLoader();
    }
  }

  render() {
    return <BaseComponent {...this.props} data={this.state.data} />
  }
}

const mapStatetoProps = ({ shouldShowLoader }) => ({
  shouldShowLoader
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleShowLoader: () => dispatch({ type: 'SHOULD_SHOW_LOADER' })
});

export default compose(
  withRouter,
  connect(
    mapStatetoProps,
    mapDispatchToProps
  ),
  withFetch
);
