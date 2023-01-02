import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider } from "./utils/ThemeProvider";
import ScrollToTop from "./utils/ScrollToTop";
import { pages } from "./utils/pages";

import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <TransitionRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const TransitionRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <Navbar />
      <ScrollToTop />
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route path="*" element={pages["404"].component} />
          {[...pages.main].map((page) => {
            return (
              <Route
                path={page.path}
                key={page.path}
                element={
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      left: 0,
                      bottom: 0,
                      top: 0,
                    }}
                  >
                    <div style={{ minHeight: "100vh" }}>{page.component}</div>
                    {/* {page.includeFooter ? <Footer /> : <></>} */}
                  </div>
                }
              />
            );
          })}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
