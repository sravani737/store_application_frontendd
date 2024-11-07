import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducerr'; // Ensure the file name is correct
import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
    reducer: rootReducer, // Root reducer (fix spelling if needed)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) // Correct middleware usage
});

// Run the Saga
sagaMiddleware.run(SagaData);

export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });


