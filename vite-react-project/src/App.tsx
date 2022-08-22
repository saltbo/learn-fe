import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Button, message, Space } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Space>
        <Button
          onClick={() => {
            message.success("done");
          }}
        >
          TEST
        </Button>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Space>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About v="abc" />} />
      </Routes>
    </div>
  );
}

export default App;
