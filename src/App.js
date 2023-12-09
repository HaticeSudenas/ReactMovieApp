import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WatchList from "./components/WatchList";
import Watched from "./components/watched";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Router>

      </div>
    </GlobalProvider>

  );
}

export default App;
