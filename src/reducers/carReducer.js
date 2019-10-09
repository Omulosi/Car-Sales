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


const carReducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.BUY_FEATURE:
      return {
        car: {...state.car, features: state.car.features.concat(action.payload)},
        additionalPrice: state.additionalPrice + action.payload.price,
      }

    case actions.REMOVE_FEATURE:
      return {
        car: {...state.car, features: state.car.features.filter(ft => ft.id !== action.payload.id) },
        additionalPrice: state.additionalPrice  - action.payload.price,
      }

    default:
      return state;
  }
}

export default carReducer;
