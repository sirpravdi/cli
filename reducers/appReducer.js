const initialState = {
  isSettingsSet: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SETTINGS': 
      return { ...state, isSettingsSet: true };
    default:
      return {...state}
  }
}