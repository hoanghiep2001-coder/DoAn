import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import logo from "../src/assets/img/icon/logo.svg";
import AuthContextProvider from "./context/authContext";
import Loading from "./components/layout/components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowLoading(false);
    }, 3);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      <Helmet>
        <link rel="icon" href={logo}></link>
        <title>Digiticket</title>
      </Helmet>
      {showLoading ? <Loading /> : ""}
      <AuthContextProvider>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route path={route.path} key={index} element={<Page />} />
                );
              })}
            </Routes>
          </div>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
