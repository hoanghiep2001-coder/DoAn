import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import logo from "../src/assets/img/icon/logo.svg";
function App() {

  return (
    <>
      <Helmet>
        <link rel="icon" href={logo}></link>
        <title>Digiticket</title>
      </Helmet>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route path={route.path} key={index} element={<Page />} />;
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
