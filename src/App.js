import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./layout/layout";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Layout>    </div>
  );
}

export default App;
