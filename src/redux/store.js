import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer
} from "redux-persist";

import teamReducer from "./teamSlice.js";


const storage = {
    getItem: (key) => {
        return Promise.resolve(window.localStorage.getItem(key));
    },

    setItem: (key, value) => {
        window.localStorage.setItem(key, value);
        return Promise.resolve();
    },

    removeItem: (key) => {
        window.localStorage.removeItem(key);
        return Promise.resolve();
    }
};


const persistConfig = {
    key: "team",
    storage: storage
};


const persistedTeamReducer = persistReducer(
    persistConfig,
    teamReducer
);


const store = configureStore({

    reducer: {
        team: persistedTeamReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/PAUSE",
                    "persist/PURGE",
                    "persist/REGISTER",
                    "persist/FLUSH"
                ]
            }
        })

});


export const persistor = persistStore(store);

export default store;