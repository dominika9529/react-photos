import { connect } from 'react-redux';
import { compose } from 'redux';
import Sections from './Sections';
import withFetch from '../../hoc/withFetch';
import fetchSections from '../../api/fetchSections';

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  fetchData: fetchSections
});

export default compose(
  connect(
    null,
    null,
    mergeProps
  ),
  withFetch
)(Sections)
