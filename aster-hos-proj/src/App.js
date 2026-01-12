import Home from "./Components/Home";
import Login from "./Components/Login";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout"; // Import the new Layout

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<Login />} />   {/* Matches "/" */}
          <Route path="home" element={<Home />} /> {/* Matches "/home" */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
