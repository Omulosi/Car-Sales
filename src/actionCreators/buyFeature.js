import * as actions from '../reducers/actions';

export const buyFeature = (feature) => {
  return {type: actions.BUY_FEATURE, payload: feature}
}
