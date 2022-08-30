const gameReducers = (state = [], action) => {
  switch (action.type) {
    case 'GENERATE_INPUT':
      return [
        ...state,
        {
          text: action.text,
        }
      ]
    default:
      return state
  }
}

export default gameReducers
