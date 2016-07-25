import { combineReducers } from 'redux';

import boardReducer from './boardReducer';
import playStatusReducer from './playStatusReducer';
import generationCounterReducer from './generationCounterReducer';

//COMBINE REDUCERS
const reducers = combineReducers({
  board: boardReducer,
  playState: playStatusReducer,
  counter: generationCounterReducer
});

export default reducers;
