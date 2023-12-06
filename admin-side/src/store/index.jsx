import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";

  import thunk from "redux-thunk";
  import KytReducer from "../reducer/KytReducer"
  import CategoryReducer from "../reducer/CategoryReducer"

  const rootReducer = combineReducers({
    helmKyt: KytReducer, CategoryKyt: CategoryReducer
  })

  const logger = (store) => (next) => (action) => {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  };

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  export default store;