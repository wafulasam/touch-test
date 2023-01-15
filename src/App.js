import React from "react";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import MainRouter from "./routes/MainRouter";

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter/>
    </Provider>
  )
}
export default App;