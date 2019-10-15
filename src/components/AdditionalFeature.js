import React from 'react';
import { connect } from 'react-redux';
import { buyFeature } from '../actionCreators/buyFeature';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={e => props.buyFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapDispatchToProps = dispatch => ({
  buyFeature: feature => dispatch(buyFeature(feature)),
})

export default connect(
  state => state,
  mapDispatchToProps
)(AdditionalFeature);
