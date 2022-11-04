import Counter from "./components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Counter />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
