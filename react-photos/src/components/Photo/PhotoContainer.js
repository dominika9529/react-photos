import { connect } from 'react-redux';
import withFetch from '../../hoc/withFetch';
import fetchPhoto from '../../api/fetchPhoto';
import Photo from './Photo';

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  fetchData: fetchPhoto
})

export default connect(
  null,
  null,
  mergeProps
)(
  withFetch(Photo)
);
