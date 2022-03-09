import { combineReducers, createStore } from 'redux';

import { baiTapDatVeReducer } from './baiTapDatVeReducer';


const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng
  baiTapDatVeReducer,
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());