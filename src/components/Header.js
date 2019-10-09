import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carSale.car.image} alt={props.carSale.car.name} />
      </figure>
      <h2>{props.carSale.car.name}</h2>
      <p>Amount: ${props.carSale.car.price}</p>
    </>
  );
};

export default connect(
  state => state,
)(Header)
