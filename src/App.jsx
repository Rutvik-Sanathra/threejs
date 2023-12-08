import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example1 from "./pages/example1";
import Example2 from "./pages/example2";
import Home from "./pages/home";
import Example3 from "./pages/example3";
import Example4 from "./pages/example4";
import Example5 from "./pages/orbitControls/example5";
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="example1" element={<Example1 />} />
          <Route path="example2" element={<Example2 />} />
          <Route path="example3" element={<Example3 />} />
          <Route path="example4" element={<Example4 />} />
          <Route path="example5" element={<Example5 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
