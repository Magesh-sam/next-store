import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { rootReducer } from "./RootReducer";
import storage from "redux-persist/lib/storage";

/*

const persistConfig = {
  key: "root",
  storage,
};

const ignoreRegisterMiddleware =
  (store: any) => (next: any) => (action: any) => {
    if (action.type !== "REGISTER") {
      return next(action);
    }
  };

export const store = configureStore({
  reducer: persistReducer(persistConfig, contactReducer),
  middleware: [ignoreRegisterMiddleware],
});

export const persister = persistStore(store);
*/

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
