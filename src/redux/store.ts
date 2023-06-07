import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import popularSlice from '../slices/popularSlice';
import recipesSlice from '../slices/recipesSlice';
import recipeDetailSlice from '../slices/recipeDetailSlice';



const store = configureStore({
  reducer: {
    popularRecipes: popularSlice.reducer,
    queriedReciepe: recipesSlice.reducer,
    recipeDetailed: recipeDetailSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
