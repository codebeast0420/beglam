import { createStore, combineReducers} from 'redux';
import singReducer from './reducers/singReducer';
 
const rootReducer = combineReducers({
  userId: singReducer,
});
 
export const store = createStore(rootReducer);