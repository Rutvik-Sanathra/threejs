import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example1 from "./pages/example1";
import Example2 from "./pages/example2";
import Home from "./pages/home";
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="example1" element={<Example1 />} />
          <Route path="example2" element={<Example2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
