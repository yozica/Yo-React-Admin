import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from "./modules/tokenStore";

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

type GetstateFunType = typeof store.getState;
type IRootState = ReturnType<GetstateFunType>;

export { type IRootState };

export default store;
