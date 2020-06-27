import { combineReducers } from 'redux';

const shouldShowLoader = (state = false, action) => {
  switch (action.type) {
    case 'SHOULD_SHOW_LOADER':
      return !state;
    default:
      return state;
  }
}

const shouldShowShell = (state = false, action) => {
  switch (action.type) {
    case 'SHOULD_SHOW_SHELL':
      return !state;
    default:
      return state;
  }
}

const sections = (state = [], action) => {
  switch (action.type) {
    case 'SET_LIST':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  shouldShowLoader,
  shouldShowShell,
  sections
});
