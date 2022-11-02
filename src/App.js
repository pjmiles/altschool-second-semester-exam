import Counter from "./components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
