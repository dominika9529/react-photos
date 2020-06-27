import React from 'react';
import listFactory from '../../utils/listFactory';

import ListElement from '../ListElement';

import './Sections.css';

/*
class Sections extends Component {
  state = {
  }
  componentDidMount() {
    if (!this.state.list) {
      this.props.toggleShowLoader()
      fetchSections(
        data => {
          this.setState({
            list: data
          });

          this.props.setSectionsList(data);
          this.props.toggleShowLoader()
        }
      );
    }
  }

  render() {
    return (
      <div className="sections">
        {listFactory(this.state.list, ListElement)}
      </div>
    );
  }
}
*/

const Sections = ({ data }) => (
    <div className="sections">
      {listFactory(data, ListElement)}
    </div>
  );
export default Sections;
