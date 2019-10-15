import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carSale.car.price + props.carSale.additionalPrice}</h4>
    </div>
  );
};

export default connect(
  state => state,
)(Total);
