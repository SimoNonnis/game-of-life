const playInitialState = {
  timerId: null,
  isRunning: false
};

// 2. playState
const playStatusReducer = (state = playInitialState, action) => {
  switch(action.type){
    case 'PLAY':
      return {
        timerId: action.timerId,
        isRunning: true
      };
    case 'STOP':
      return {
        timerId: null,
        isRuninng: false
      };
    default:
      return state;
  }
};

export default playStatusReducer;
