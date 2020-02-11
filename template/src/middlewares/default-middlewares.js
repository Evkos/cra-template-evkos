import {
  defaultAction
} from '../actions'

const defaultMiddleware = () => {
  return (dispatch, getState) => {
    dispatch(defaultAction())
  }
}

export {
  defaultMiddleware
}