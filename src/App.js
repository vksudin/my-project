import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About";
import Home from "./Component/Home";
function App() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You choose ${value} language`);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                value={value}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          ></Route>
          <Route path="/grid" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
