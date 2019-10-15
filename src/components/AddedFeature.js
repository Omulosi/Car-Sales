import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actionCreators/removeFeature';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={e => props.removeFeature(props.feature)}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  removeFeature: feature => dispatch(removeFeature(feature))
})

export default connect(
  state => state,
  mapDispatchToProps
)(AddedFeature);
