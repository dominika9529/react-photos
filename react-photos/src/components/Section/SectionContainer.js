import { connect } from 'react-redux';
import withFetch from '../../hoc/withFetch';
import fetchSection from '../../api/fetchSection';
import Section from './Section';

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  fetchData: fetchSection
})

export default connect(
  null,
  null,
  mergeProps
)(
  withFetch(Section)
);
