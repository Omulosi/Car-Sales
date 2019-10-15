import * as actions from '../reducers/actions';

export const removeFeature = (feature) => {
  return {type: actions.REMOVE_FEATURE, payload: feature}
}
