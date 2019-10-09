import * as actions from './actions';

const initialState =   {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  }
}


export const carReducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.BUY_ITEM:
      return state;

    case actions.REMOVE_ITEM:
      return state;

    default:
      return state;
  }
}
