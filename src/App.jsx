import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import store from "./app/store";
import { Provider } from "react-redux";
import Loading from "./component/Loading";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Loading />
        <AppRouter />
      </Router>
    </Provider>
  );
};

export default App;
